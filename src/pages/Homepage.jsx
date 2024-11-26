import { useState, useCallback, useEffect, useRef } from "react";
import { Copy, AlertTriangle } from "lucide-react";
import Typed from "typed.js";
import { styleMaps } from "../utils/styleMaps";
export default function Homepage() {
  const [text, setText] = useState("happier than ever before");
  const [copied, setCopied] = useState(false);
  const labelRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Normal text goes here...", "Type something amazing!"],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    };

    const typed = new Typed(labelRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  const convertText = useCallback((text, styleMap) => {
    const normalAlphabet = "abcdefghijklmnopqrstuvwxyz";
    return text
      .toLowerCase()
      .split("")
      .map((char) => {
        const index = normalAlphabet.indexOf(char);
        return index !== -1 ? styleMap[index] : char;
      })
      .join("");
  }, []);

  const handleCopy = useCallback((text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden mt-0 sm:mt-5">
      <div className="absolute inset-0 " />
      <div className="relative max-w-[1320px] mx-auto px-4 pt-20 pb-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-block bg-white p-8 relative">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Swift{" "}
              <span className="inline-block bg-[#ff4550] text-white px-4 py-2 rounded-lg transform -skew-y-1">
                font styling
              </span>{" "}
              for
            </h1>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mt-2">
              creative expression
            </h1>
          </div>
        </div>

        <div className="max-w-3xl mx-auto w-full mt-4">
          <div className="max-w-md mx-auto w-full">
            <div className="flex items-center bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded-md shadow-sm">
              <AlertTriangle className="h-4 w-4 mr-2" aria-hidden="true" />
              <p className="text-xs">
                Note: Please enter normal text in the input field to get the
                expected results.
              </p>
            </div>
          </div>
          {/* Input field */}
          <div className="group max-w-xs mx-auto w-full mt-6">
            <input
              onChange={(e) => setText(e.target.value)}
              type="text"
              required
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label ref={labelRef} className="typing-label"></label>
          </div>
        </div>

        <div className="max-w-2xl mx-auto w-full mt-3 grid grid-cols-1 gap-2 ">
          {Object.entries(styleMaps).map(([styleName, styleMap]) => (
            <div
              key={styleName}
              className="text-black p-6 border-b-4 border-b-indigo-300"
            >
              <div className="flex items-center justify-between ">
                <div className="text-sm sm:text-base md:text-lg break-all overflow-y-hidden">
                  {convertText(text, styleMap)}
                </div>
                <button
                  onClick={() => handleCopy(convertText(text, styleMap))}
                  className="flex-shrink-0 p-3 border rounded-full bg-[#ff4550] text-white hover:bg-[#ff4550]/80 transition-colors"
                  aria-label={`Copy text in ${styleName} style`}
                >
                  <Copy className="h-3 w-3" aria-hidden="true" />
                  <span className="sr-only">Copy to clipboard</span>
                </button>
              </div>
              <div className=" text-sm text-gray-500">{styleName}</div>
            </div>
          ))}
        </div>
      </div>

      {copied && (
        <div className="fixed bottom-4 right-4 bg-[#ff4550] text-white p-3 rounded-lg shadow-lg">
          Text copied to clipboard!
        </div>
      )}
    </div>
  );
}
