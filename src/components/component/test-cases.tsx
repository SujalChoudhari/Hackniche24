"use client"
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CardContent, Card } from '@/components/ui/card';
import { TerminalIcon } from 'lucide-react';


export function TestCases() {
  const [activeTab, setActiveTab] = useState('case1');

  const handleTabClick = (tabName:any) => {
    setActiveTab(tabName);
  };

  return (
    <div className="bg-white p-8">
      <div className="flex items-center space-x-4 mb-6">
        <TerminalIcon className="text-black" />
        <Tabs>
          <div className="flex space-x-2">
            <Button className="text-purple-500" variant="ghost">
              Test Result
            </Button>
            <Button className="text-purple-500 border-b-2 border-black" variant="ghost">
              Testcase
            </Button>
          </div>
        </Tabs>
      </div>
      <div className="flex flex-col space-y-4">
        <Tabs>
          <div className="flex space-x-2">
            <Button
              variant={activeTab === 'case1' ? 'destructive' : 'outline'}
              onClick={() => handleTabClick('case1')}
            >
              Case 1
            </Button>
            <Button
              variant={activeTab === 'case2' ? 'destructive' : 'outline'}
              onClick={() => handleTabClick('case2')}
            >
              Case 2
            </Button>
            <Button
              variant={activeTab === 'case3' ? 'destructive' : 'outline'}
              onClick={() => handleTabClick('case3')}
            >
              Case 3
            </Button>
            <Button variant="outline">+</Button>
          </div>
        </Tabs>
        <Card className="">
          <CardContent>
            <div className="flex flex-row space-x-2 items-center mt-6">
              <label className="text-sm font-medium" htmlFor="test2">
                Test 1 =
              </label>
              <div className="text-gray-700 dark:text-gray-300">Static Test Data 1</div>
            </div>
          </CardContent>
        </Card>
        <Card className="">
          <CardContent>
            <div className="flex flex-row space-x-2 items-center mt-6">
              <label className="text-sm font-medium" htmlFor="test2">
                Test 2 =
              </label>
              <div className="text-gray-700 dark:text-gray-300">Static Test Data 2</div>
            </div>
          </CardContent>
        </Card>
        <div className="flex justify-between items-center">
          <div className="text-sm">Performance: 123ms</div>
          <Button>Run</Button>
        </div>
      </div>
      <div className="mt-6">
        <Button className="text-purple-500" variant="ghost">
          Source
        </Button>
      </div>
    </div>
  );
}

function Tabs({ children }: { children: React.ReactNode }) {
  return <div className="Tabs">{children}</div>;
}



export default TestCases;
