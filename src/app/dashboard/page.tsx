"use client";
import JSON from "@/components/component/input-output"
import { TestCases } from "@/components/component/test-cases"
import { VersionControl } from "@/components/component/version-control"
import { CodeEditor } from "@/components/editor"
import { LiveSync } from "@/components/livesync";
import { OtherMouse } from "@/components/othermouse";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { useRef, useState } from "react"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Dashboard() {

  const [lang, setLang] = useState("javascript");
  const [code, setCode] = useState("");

  const refinePrompt = useRef<string>("");

  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="w-full rounded-lg border"
    >
      <ResizablePanel defaultSize={25} maxSize={25} minSize={20}>
        <div className=" h-full border-2 ">

          <VersionControl />


        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={80}>
        <div className="">
          <div className="py-10 pt-20 bg-white border-4">
            <CodeEditor
              lang={lang}
              setLang={setLang}
              code={code}
              setCode={setCode}
            />
          </div>

          <div className="flex flex-row justify-center items-center space-x-3 mt-5">
            <span className="w-3/4 border-2">
              <Input className="  rounded-lg bg-white text-lg caret-purple-500  " /> </span>
            <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-xl bg-neutral-950 px-6 font-medium text-neutral-200 transition hover:scale-110"><span>Refine</span>
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]"><div className="relative h-full w-8 bg-white/20"></div></div></button>
          </div>
        </div>


      </ResizablePanel>



      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={35} minSize={25} maxSize={45} className="">

        <ResizablePanelGroup direction="vertical" className="border ">
          <ResizablePanel defaultSize={20} minSize={20} className="">
            <JSON />
          </ResizablePanel>
          <ResizableHandle withHandle className="border  " />
          <ResizablePanel defaultSize={20} minSize={40} className="">
            <TestCases />
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
