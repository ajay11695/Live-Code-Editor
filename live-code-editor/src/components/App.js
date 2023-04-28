
import Header from "./Header";
import '../App.css'
import React, { useState ,createRef} from "react";
import Editor from "@monaco-editor/react";

function App() {
  const [htmlCode, setHtmlCode] = useState('')
  const [cssCode, setCssCode] = useState('')
  const [jsCode, setJsCode] = useState('')
  const code=createRef()
  
  // lets code to compile code
  const handleOutput = () => {
    // const iframe = document.getElementById('output')
    const iframe = code.current
    // add html and css code
    iframe.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>"
    // add js code
    iframe.contentWindow.eval(jsCode)
  }

  return (
    <>
      <Header />
      <div className="playground">
        {/* for input */}
        <div className="left">
          {/* for html */}
          <label>HTML</label>
          {/* <textarea name='html' onChange={(e)=>setHtmlCode(e.target.value)}></textarea> */}
          <Editor
            height="28%"
            width={`100%`}
            language={"html"}
            value={htmlCode}
            onChange={(e) => setHtmlCode(e)}

            options={{
              minimap: {
                enabled: false,
              },
              fontSize: 25,
              cursorStyle: "block",
              wordWrap: "on",
            }}
            defineTheme={{
              themeName: "my-theme",
              themeData: {
                colors: {
                  "editor.background": "#000",
                },
              },
            }}
          />
          {/* for css */}
          <label>CSS</label>
          <Editor
            height="28%"
            width={`100%`}
            language={"css"}
            value={cssCode}
            onChange={(e) => setCssCode(e)}
            options={{
              minimap: {
                enabled: false,
              },
              fontSize: 25,
              cursorStyle: "block",
              wordWrap: "on",
            }}

            defineTheme={{
              themeName: "my-theme",
              themeData: {
                colors: {
                  "editor.background": "#000",
                },
              },
            }}
          />
          {/* for javascript */}
          <label>JAVASCRIPT</label>
          <Editor
            height="28%"
            width={`100%`}
            language={"javaScript"}
            value={jsCode}
            onChange={(e) => setJsCode(e)}
            options={{
              minimap: {
                enabled: false,
              },
              fontSize: 25,
              cursorStyle: "block",
              wordWrap: "on",
            }}

            defineTheme={{
              themeName: "my-theme",
              themeData: {
                colors: {
                  "editor.background": "#000",
                },
              },
            }}
          />
        </div>
        {/* for output */}
        <div className="right">
          <button onClick={handleOutput}>Run</button>
          {/* we use iframe to render  html in our web page */}
          <iframe id='output' title="code-editor" ref={code}></iframe>
        </div>
      </div>
    </>
  )
}

export default App;
