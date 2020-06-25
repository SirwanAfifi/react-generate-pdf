import React from "react";
import ReactDOMServer from "react-dom/server";
import "./App.css";
import Print from "./Print";
import html2pdf from "html2pdf.js";

function App() {
  const downloadPDF = () => {
    const element = ReactDOMServer.renderToString(<Print />);
    html2pdf().from(element).save();
  };

  return (
    <>
      <button onClick={downloadPDF}>Download</button>
      <div className="App">
        <Print />
      </div>
    </>
  );
}

export default App;
