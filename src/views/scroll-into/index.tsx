import React, { useState, useRef, useEffect } from "react";
export const RenderList = (props: any) => {
  const currentRef = useRef(null);
  useEffect(() => {
    console.log("currentRef", currentRef);
    currentRef.current?.scrollIntoView();
  }, [props.listData]); //[data1]
  const { listData } = props;
  return (
    <>
      {props.listData.map((item: any, index: number) => {
        let isCurrent = false;
        if (item === listData[listData.length - 1]) {
          isCurrent = true;
        }
        return (
          <li style={{ height: 50 }} ref={isCurrent ? currentRef : null}>
            {item}
          </li>
        );
      })}
    </>
  );
};
export const ScrollInto = () => {
  const [list, setList] = useState([]);
  const handleClick = () => {
    setList([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  };
  return (
    <div>
      <ul
        style={{
          width: 200,
          height: 200,
          border: "1px solid #ccc",
          overflowY: "auto",
        }}
      >
        <RenderList listData={list} />
      </ul>
      <button onClick={handleClick}>点击</button>
    </div>
  );
};
