import JSON from "@/components/component/input-output"
import { TestCases } from "@/components/component/test-cases"
import { VersionControl } from "@/components/component/version-control"
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
      <ResizablePanel defaultSize={20}>
        <div className="flex h-full items-center justify-center p-6">
          
          <VersionControl/>
          
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={80}>
        <div className="flex h-full items-center justify-center p-6">
          
          AI GENERATED CODE
          
        </div>
      </ResizablePanel>
      
      
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={55}>
      
      <ResizablePanelGroup direction="vertical" className="border">
      <ResizablePanel defaultSize={20}>
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
