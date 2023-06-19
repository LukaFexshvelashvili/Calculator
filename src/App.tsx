import { useState } from "react";
import "./App.css";

function App() {
  const [answer, setAnswer] = useState<null | string>();
  const [calcText, setCalcText] = useState<null | string>("");
  const pattern = /^[\d\s\/*+\-.()]+$/;
  const pattern2 = /^[+\-/*=]|^[+\-/*=]|[+\-/*=]$/;
  const pattern3 = /^[^.\/+=]/;
  const setCalculation = (text: string) => {
    try {
      if (pattern3.test(text)) {
        setCalcText(text);
      }
      if (text.length == 0) {
        setCalcText("");
        setAnswer("");
      }
      if (pattern.test(text) && !pattern2.test(text)) {
        setAnswer(eval(`${text}`) !== undefined ? eval(`${text}`) : null);
      }
    } catch (err) {
      setAnswer("ERROR");
    }
  };

  return (
    <div className="Calculator">
      <input
        type="text"
        value={calcText ? calcText : ""}
        onChange={(e) => setCalculation(e.target.value)}
      />
      <div className="AnswerBlock">{answer}</div>
      <div className="ButtonsRow">
        <div className="ControlButtons">
          <div onClick={() => setCalculation("")} className="Bt">
            C
          </div>
          <div onClick={() => setCalculation(calcText + "+")} className="Bt">
            +
          </div>
          <div onClick={() => setCalculation(calcText + "-")} className="Bt">
            -
          </div>
          <div onClick={() => setCalculation(calcText + "*")} className="Bt">
            *
          </div>
          <div onClick={() => setCalculation(calcText + "/")} className="Bt">
            /
          </div>
        </div>
        <div className="ButtonsRowwer">
          <div onClick={() => setCalculation(calcText + "1")} className="Bt">
            1
          </div>
          <div onClick={() => setCalculation(calcText + "2")} className="Bt">
            2
          </div>
          <div onClick={() => setCalculation(calcText + "3")} className="Bt">
            3
          </div>
          <div onClick={() => setCalculation(calcText + "(")} className="Bt">
            (
          </div>{" "}
          <div onClick={() => setCalculation(calcText + ")")} className="Bt">
            )
          </div>
        </div>
        <div className="ButtonsRowwer">
          <div onClick={() => setCalculation(calcText + "4")} className="Bt">
            4
          </div>
          <div onClick={() => setCalculation(calcText + "5")} className="Bt">
            5
          </div>
          <div onClick={() => setCalculation(calcText + "6")} className="Bt">
            6
          </div>
          <div className="Bt"></div> <div className="Bt"></div>
        </div>
        <div className="ButtonsRowwer">
          <div onClick={() => setCalculation(calcText + "7")} className="Bt">
            7
          </div>
          <div onClick={() => setCalculation(calcText + "8")} className="Bt">
            8
          </div>
          <div onClick={() => setCalculation(calcText + "9")} className="Bt">
            9
          </div>
          <div className="Bt"></div> <div className="Bt"></div>
        </div>
        <div className="ButtonsRowwer">
          <div onClick={() => setCalculation(calcText + "0")} className="Bt">
            0
          </div>
          <div onClick={() => setCalculation(calcText + ".")} className="Bt">
            .
          </div>
          <div onClick={() => setCalculation(calcText + "=")} className="Bt">
            =
          </div>
          <div className="Bt"></div>
          <div className="Bt"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
