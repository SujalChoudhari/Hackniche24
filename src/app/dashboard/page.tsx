import JSON from "@/components/component/input-output"
import { TestCases } from "@/components/component/test-cases"
import { VersionControl } from "@/components/component/version-control"
import { CodeEditor } from "@/components/editor"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export default function ResizableDemo() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[200px] w-full rounded-lg border"
    >
      <ResizablePanel defaultSize={25} className=" min-w-[200px]">
        <div className="flex h-full items-center justify-center p-6 border-2 border-purple-500 border-dashed">
          
          <VersionControl/>
          
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={80}>
        <div className="flex h-full items-center justify-center p-6">
          
          <CodeEditor/>
          
        </div>
      </ResizablePanel>
      
      
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={55}>
      
      <ResizablePanelGroup direction="vertical" className="border ">
      <ResizablePanel defaultSize={20} className="bg-">
        <TestCases/>
      </ResizablePanel>
      <ResizableHandle withHandle className="border " />
      <ResizablePanel defaultSize={20}>
      <JSON/>
      </ResizablePanel>
    </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
