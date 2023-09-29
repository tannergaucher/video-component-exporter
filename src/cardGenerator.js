import React, { useRef } from "react";
import { toPng } from "html-to-image";

export default function CardGenerator({ title, description }) {
  const svgRef = useRef(null);

  const options = {
    width: "3840",
    height: "2160",
  };

  function handleDownload() {
    toPng(svgRef.current, options)
      .then((dataUrl) => {
        var link = document.createElement("a");
        link.download = `${title}.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((e) => console.log("e", e));
  }

  return (
    <>
      <section>
        <svg
          width={options.width}
          height={options.height}
          xmlns="http://www.w3.org/2000/svg"
          ref={svgRef}
          style={{
            border: `1px solid black`,
          }}
        >
          <rect
            width={options.width}
            height={options.height}
            fill="#f0f0f0"
            x={10}
            y={10}
            rx="10"
            ry="10"
            opacity=".5"
          />

          <text x="50%" y="50%" fontSize="55" fill="#333">
            Card Heading WOW!
          </text>
        </svg>
      </section>

      <section>
        <button onClick={handleDownload}>Download</button>
      </section>
    </>
  );
}
