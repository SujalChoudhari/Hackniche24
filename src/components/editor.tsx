"use client"
import Editor from '@monaco-editor/react';
import { useState } from 'react';


export function CodeEditor() {
    const [lang, setlang] = useState("python");
    const [code, setCode] = useState("");

    function handleEditorChange(value: any, event: any) {
        setCode(value);
    }

    return <>
        <Editor
            height={(90) + 'vh'}
            defaultLanguage={lang}
            theme="light"
            defaultValue={code}
            onChange={handleEditorChange}
        />
    </>
}