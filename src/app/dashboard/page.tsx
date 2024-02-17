"use client";
import { InputChips } from "@/components/component/inputs"
import { VersionControl } from "@/components/component/version-control"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { useEffect, useRef, useState } from "react"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import PocketBase from 'pocketbase';
import { useAuth } from "@/context/AuthContext";
import { Editor } from "@monaco-editor/react";
import Modal from "@/components/component/modal";


import { OutputChips } from "@/components/component/outputs";

export default function Dashboard() {

  const [lang, setLang] = useState();
  const [code, setCode] = useState();
  const auth = useAuth();
  const refinePromptRef = useRef<HTMLInputElement | null>(null);
  const inputSchemaRef = useRef<HTMLInputElement | null>(null);
  const outputSchemaRef = useRef<HTMLInputElement | null>(null);
  const dataSourcesRef = useRef<HTMLInputElement | null>(null);


  const onGeneratePressed = async (prompt: string, inputSchema: string, outputSchema: string, dataSources: string) => {
    const pb = new PocketBase('https://itbt.pockethost.io');
    // @ts-ignore
    refinePromptRef.current.value = prompt;
    // @ts-ignore
    inputSchemaRef.current.value = inputSchema;
    // @ts-ignore
    outputSchemaRef.current.value = outputSchema;
    // @ts-ignore
    dataSourcesRef.current.value = dataSources;

    const URL = `http://localhost:3000/api/code?changes=${prompt}&inputSchema=${inputSchema}&outputSchema=${outputSchema}&dataSources=${dataSources}`
    const respose = await axios.get(URL);
    console.log(respose.data)
    setLang(respose.data.language);
    setCode(code => respose.data.code)

    const records = await pb.collection('history').getFullList({
      sort: '-created',
    });


    const data = {
      "userId": auth?.user?.uid,
      "code": respose.data.code,
      "prompt": prompt,
      "pfp": auth?.user?.photoURL,
      "revNo": records.length,
      "schema": { input: inputSchema, output: outputSchema },
      "language": lang,
      "dataSources": dataSources
    };

    const record = await pb.collection('history').create(data);
    console.log(data, record)
  }

  const onRefinePressed = async () => {
    const pb = new PocketBase('https://itbt.pockethost.io');

    const URL = `http://localhost:3000/api/refine?code=${code}&changes=${refinePromptRef.current?.value}&inputSchema=${inputSchemaRef.current?.value}&outputSchema=${outputSchemaRef.current?.value}&dataSources=${dataSourcesRef.current?.value}`
    const respose = await axios.get(URL);
    console.log(respose.data)
    setLang(respose.data.language);
    setCode(code => respose.data.code)

    const records = await pb.collection('history').getFullList({
      sort: '-created',
    });


    const data = {
      "userId": auth?.user?.uid,
      "code": respose.data.code,
      "prompt": refinePromptRef.current?.value,
      "pfp": auth?.user?.photoURL,
      "revNo": records.length,
      "schema": { input: inputSchemaRef.current?.value, output: outputSchemaRef.current?.value },
      "language": lang,
      "dataSources": dataSourcesRef.current?.value
    };

    const record = await pb.collection('history').create(data);
  }

  function handleEditorChange(value: any, event: any) {
    setCode(value);
  }
  const exportToVSCode = () => {
    const content = code;
    if (content) {
      const blob = new Blob([content], { type: "application/octet-stream" });
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.setAttribute("style", "display: none");
      const url = window.URL.createObjectURL(blob);
      a.href = url;
      a.download = "exported_code";
      a.click();
      document.body.removeChild(a);
      window.open("vscode://file/exported_code");
    }
  };

  return (
    <>
    
      <Modal onGeneratePressed={onGeneratePressed} />
      <ResizablePanelGroup
        direction="horizontal"
        className="w-full rounded-lg border"
      >
        <ResizablePanel defaultSize={15} maxSize={25} minSize={15}>
          <div className=" h-full border-2 ">
            <VersionControl
              setCode={setCode}
              setLang={setLang}
              inputRef={inputSchemaRef}
              outputRef={outputSchemaRef}
              dataSources={dataSourcesRef}
              prompt={refinePromptRef}
            />
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={80}>
          <div className="">
          <button onClick={exportToVSCode} className="top-14 z-30  left-10 group relative text-sm inline-flex h-8 w-12 items-center justify-center overflow-hidden rounded-full bg-neutral-950 font-medium  text-neutral-200 transition-all duration-300 hover:w-48"><div className="inline-flex whitespace-nowrap text-sm opacity-0 transition-all duration-200 group-hover:-translate-x-3 group-hover:opacity-100">Export to VS CODE</div><div className="absolute right-3.5"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></div></button>
            <div className="py-10 pt-20 bg-white border-4">
            
            
              <Editor
                height={(70) + 'vh'}
                defaultLanguage={lang}
                language={lang}
                theme="light"
                defaultValue={code}
                value={code}
                onChange={handleEditorChange}
              />
            </div>
            

            <div className="flex flex-row justify-center items-center space-x-3 mt-5">
              <span className="w-3/4 border-2">
                <Input ref={refinePromptRef} className="  rounded-lg bg-white text-lg caret-purple-500  " /> </span>
              <Button onClick={onRefinePressed} className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-xl bg-neutral-950 px-6 font-medium text-neutral-200 transition hover:scale-110"><span>Refine</span>
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]"><div className="relative h-full w-8 bg-white/20">
                </div>
                </div>
              </Button>
            </div>
          </div>


        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={35} minSize={25} maxSize={45} className="">

          <ResizablePanelGroup direction="vertical" className="border ">
            <ResizablePanel defaultSize={20} minSize={20} className="">
              <OutputChips code={code || ""} inputSchema={inputSchemaRef.current?.value || ""} outputSchema={outputSchemaRef.current?.value || ""} lang={lang || "python"} />
            </ResizablePanel>
            <ResizableHandle withHandle className="border  " />
            <ResizablePanel defaultSize={20} minSize={10} className="">
              <InputChips inputRef={inputSchemaRef} outputRef={outputSchemaRef} dataSourcesRef={dataSourcesRef} />
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  )
}