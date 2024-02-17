"use client"
import { useState } from 'react';
import { CardContent, Card } from '@/components/ui/card';
import { TerminalIcon } from 'lucide-react';
import ChipTabs from './chips';
import ReactMarkdown from "react-markdown";
import axios from 'axios';
import { Editor } from '@monaco-editor/react';
export function OutputChips({ code, inputSchema, outputSchema, lang }: { code: string, inputSchema: {}, outputSchema: {}, lang: string }) {
  const [activeTab, setActiveTab] = useState('Test Cases');
  const [codeExplanation, setCodeExplanation] = useState('');
  const [generatedTestCases, setGeneratedTestCases] = useState('');
  const [runOutput, setRunOutput] = useState({})
  const [loading, setLoading] = useState(false);
  const [running, setRunning] = useState(false);
  const [generating, setGenerating] = useState(false);

  const handleGenerateTestCase = async () => {
    try {
      setGenerating(true);

      const response = await axios.get(`/api/test?code=${code}`);
      const data = await response.data;

      setGeneratedTestCases(data.code);
    } finally {
      setGenerating(false);
    }
  };

  const handleRunTestCase = async () => {
    try {
      setRunning(true);

      const response = await axios.get(`/api/run?code=${encodeURIComponent(generatedTestCases)}&language=${lang || "python"}`);

      const result = await response.data;
      // show rhe result json in a text box below the buttons div
      setRunOutput(result)
    } finally {
      setRunning(false);
    }
  };

  const generateCodeExplanation = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/explain?code=${code}&inputSchema=${inputSchema}&outputSchema=${outputSchema}`);
      const data = await response.data;
      setCodeExplanation(data.explaination);
    }
    finally {
      setLoading(false);

    }
  };

  return (
    <div className="bg-white p-2 h-full overflow-y-auto ">

      <div className="flex items-center space-x-4 mb-6 min-w-[300px]">
        <TerminalIcon className="text-black" />
      </div>
      <div className="flex flex-col space-y-4">
        <div className="flex space-x-2">
          <ChipTabs setSelectedTab={setActiveTab} />
        </div>

        {activeTab === "Test Cases" && (


          <div>
            <Card className="rounded-lg">
              <CardContent>
                <div className="flex flex-col space-x-2  items-center">
                  <label className="text-sm font-medium mb-2" htmlFor="codeExplanation">
                    Generate Test Case:
                  </label>
                  <Editor className='min-h-[25vh]' value={generatedTestCases} />

                  <div className='flex gap-4'>
                    <button
                      onClick={handleGenerateTestCase}
                      className="bg-blue-500 text-white px-4 py-2 cursor-pointer rounded mt-4"
                      disabled={generating}
                    >
                      {generating ? 'Generating...' : 'Generate'}
                    </button>
                    <button
                      onClick={handleRunTestCase}
                      className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer mt-4"
                      disabled={generatedTestCases.length < 1 || running}
                    >
                      {running ? 'Running...' : 'Run'}
                    </button>
                  </div>
                  <Editor value={JSON.stringify(runOutput, null, 2)} defaultLanguage='json' className='w-full min-h-[25vh]' />
                </div>
              </CardContent>
            </Card>
          </div>

        )}
        {activeTab === "Code Explanation" && (
          <div className=''>
            <Card className="rounded-lg">
              <CardContent>
                <div className="flex flex-col space-x-2  items-center">
                  <label className="text-sm font-medium mb-2" htmlFor="codeExplanation">
                    Code Explanation:
                  </label>
                  <ReactMarkdown
                    className="border-gray-300 border  p-2 flex-grow w-full min-h-[20vh]"
                  >
                    {codeExplanation}
                  </ReactMarkdown>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
                    onClick={generateCodeExplanation}
                    disabled={loading}
                  >
                    {loading ? 'Generating...' : 'Generate'}
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

      </div>
    </div >
  );
}
