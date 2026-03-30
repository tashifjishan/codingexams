
import Editor from "@monaco-editor/react";
function CodeEditor({editorRef, language}) {

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
  };

  // const getValue = () => {
  //   if (editorRef.current) {
  //     alert(editorRef.current.getValue());
  //   }
  // };

  return (
    <div className="bg-[#1e1e1e] py-6 h-full">
      <Editor
        height="100%"
        defaultLanguage={language}
        defaultValue="// Start coding!"
        theme="vs-dark"
        onMount={handleEditorDidMount}
        
      />
      
    </div>
  );
}

export default CodeEditor;