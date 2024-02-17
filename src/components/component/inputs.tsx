import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CardContent, Card } from '@/components/ui/card';
import { TerminalIcon } from 'lucide-react';
import ChipTabs1 from './chips1';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';

export function OutputCases({ inputRef, outputRef, dataSourcesRef }: { inputRef: any, outputRef: any, dataSourcesRef: any }) {
  const [activeTab, setActiveTab] = useState('Data Sources');

  const handleTabClick = (tabName: any) => {
    setActiveTab(tabName);
  };

  return (
    <Card>
      <CardContent>
        <div className="bg-white p-8 h-full ">
          <div className="flex items-center space-x-4 mb-6 min-w-[300px]">
            <TerminalIcon className="text-black" />
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex space-x-2">
              <ChipTabs1 setSelectedTab={setActiveTab} />
            </div>
            {activeTab === "Data Sources" && (
              <div>
                <Label className="text-sm font-medium" htmlFor="dataSource">
                  Data Sources:
                </Label>
                <Textarea
                  ref={dataSourcesRef}
                  id="dataSource"
                  className="border-gray-300 border p-2 flex-grow"
                  rows={4}
                  placeholder="Enter data sources here..."
                />
              </div>
            )}
            {activeTab === "Input JSON" && (
              <div>
                <Label className="text-sm font-medium" htmlFor="input">
                  Input JSON
                </Label>
                <Textarea className="min-h-32" id="input" ref={inputRef} placeholder="Enter input JSON here" />
              </div>
            )}
            {activeTab === "Output JSON" && (
              <div>
                <Label className="text-sm font-medium" htmlFor="output">
                  Output JSON
                </Label>
                <Textarea className="min-h-32" ref={outputRef} id="output" placeholder="Output JSON will be displayed here" />
              </div>
            )}
            <div className="flex justify-between items-center">
              <div className="text-sm">Performance: 123ms</div>
              <Button className="group h-10 rounded-xl bg-gradient-to-b from-zinc-800 via-zinc-700 to-zinc-600 px-5 text-sm leading-8 text-zinc-50 shadow-[0_-1px_0_1px_rgba(0,0,0,0.8)_inset,0_0_0_1px_rgb(9_9_11)_inset,0_0.5px_0_1.5px_#71717a_inset] hover:bg-gradient-to-b hover:from-zinc-900 hover:via-zinc-900 hover:to-zinc-700 active:shadow-[0_3px_0_0_rgba(0,0,0)_inset]">
                <span className="block group-active:[transform:translate3d(0,1px,0)]">Run</span>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
