import React, { useState, useEffect } from "react";
// import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
  console.log("レンダリング");

  const [num, setNum] = useState(0);
  const [faceFlag, setFaceFlag] = useState(false);

  const onClickButton = () => {
    // setNum(num + 1);
    setNum((prev) => prev + 1);
  };
  const onClickFaceButton = () => {
    setFaceFlag((prev) => !prev);
  };

  const numonly = () => {
    console.log("useEffect!");
    if (num > 0) {
      if (num % 3 === 0) {
        faceFlag || setFaceFlag(true);
      } else {
        faceFlag && setFaceFlag(false);
      }
    }
  };

  useEffect(numonly, [num]);

  return (
    <>
      <button onClick={onClickButton}>カウントアップ</button>
      <br />

      <button onClick={onClickFaceButton}>顔文字on/off</button>

      <p>{num}</p>
      {faceFlag && <p>(^^)</p>}
      {/* <p>{faceFlag ? "(^^)" : ""}</p> */}

      {/* props.childを使う場合 */}
      {/* <ColorfulMessage color="red" backgroundColor="blue">
        赤文字青背景
      </ColorfulMessage>
      <ColorfulMessage color="yellow" backgroundColor="green">
        黄色文字緑背景
        <div>aa</div>
        <button
          onClick={() => {
            alert("click!");
          }}
        >
          ボタン
        </button>
      </ColorfulMessage> */}
      {/* 普通にmessageという引数を使う場合 */}
      {/* <ColorfulMessage
        color="red"
        backgroundColor="blue"
        message="赤文字青背景"
      />
      <ColorfulMessage
        color="yellow"
        backgroundColor="green"
        message="黄色文字緑背景"
      /> */}
      {/* <button
        onClick={() => {
          onClickButton();
          onClickButton2();
        }}
      >
        ボタン
      </button> */}
    </>
  );
};
