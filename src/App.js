import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./App.css";

export default function App() {
  const [markdown, setMarkdown] = useState("# Heading level 1");

  function handleChange(e) {
    setMarkdown(e.target.value);
  }

  return (
    <div className="centered">
      <h1 className="heading">Markdown Editor</h1>
      <div className="app">
        <div className="editor">
          <h2 className="editorLabel">Type Markdown here</h2>
          <textarea onChange={handleChange} value={markdown} />
        </div>
        <div className="previewer">
          <h2 className="previewLabel">See the preview</h2>
          <ReactMarkdown className="preview" children={markdown} />
        </div>
      </div>
    </div>
  );
}
