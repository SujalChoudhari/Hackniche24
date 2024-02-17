import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CardContent, Card } from '@/components/ui/card';
import { TerminalIcon } from 'lucide-react';
import ChipTabs from './chips';

export function TestCases({ dataSourcesRef }: { dataSourcesRef: any }) {
  const [activeTab, setActiveTab] = useState('Test Cases');

  const handleTabClick = (tabName: any) => {
    setActiveTab(tabName);
  };

  return (
    <div className="bg-white p-8 h-full ">
      
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
                <div className="flex flex-row space-x-2 items-center mt-6">
                  <label className="text-sm font-medium" htmlFor="test1">
                    Test 1 =
                  </label>
                  <div className="text-gray-700 dark:text-gray-300">Static Test Data 1</div>
                </div>
              </CardContent>
            </Card>
            <Card className="rounded-lg">
              <CardContent>
                <div className="flex flex-row space-x-2 items-center mt-6">
                  <label className="text-sm font-medium" htmlFor="test2">
                    Test 2 =
                  </label>
                  <div className="text-gray-700 dark:text-gray-300">Static Test Data 2</div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
        {activeTab === "Data Sources" && (

          <CardContent>
            <div className="flex flex-col space-x-2 items-center">
              <label className="text-sm font-medium mb-2" htmlFor="dataSource">
                Data Sources:
              </label>
              <textarea
                ref={dataSourcesRef}
                id="dataSource"
                className="border-gray-300 border p-2 flex-grow"
                rows={4}
                placeholder="Enter data sources here..."
              ></textarea>
            </div>
          </CardContent>

        )}
        {activeTab === "Code Explanation" && (

          <CardContent>
            <div className="flex flex-col space-x-2 items-center ">
              <label className="text-sm font-medium mb-2" htmlFor="codeExplanation">
                Code Explanation:
              </label>
              <textarea
                id="codeExplanation"
                className="border-gray-300 border p-2 flex-grow"
                rows={4}
                placeholder="Enter code explanation here..."
              ></textarea>
            </div>
          </CardContent>

        )}
        <div className="flex justify-between items-center">
          <div className="text-sm">Performance: 123ms</div>
          <button className="group h-10 rounded-xl bg-gradient-to-b from-zinc-800 via-zinc-700 to-zinc-600 px-5 text-sm leading-8 text-zinc-50 shadow-[0_-1px_0_1px_rgba(0,0,0,0.8)_inset,0_0_0_1px_rgb(9_9_11)_inset,0_0.5px_0_1.5px_#71717a_inset] hover:bg-gradient-to-b hover:from-zinc-900 hover:via-zinc-900 hover:to-zinc-700 active:shadow-[0_3px_0_0_rgba(0,0,0)_inset]">
            <span className="block group-active:[transform:translate3d(0,1px,0)]">Run</span>
          </button>
        </div>
      </div>
    </div>
  );
}
