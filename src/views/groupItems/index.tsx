import React, { useState } from "react";

export const GroupItems = () => {
  const [vis, isVis] = useState(false);
  const [number, setItemNum] = useState(0);
  const handleClick = (e: any) => {
    console.log(1111, e);
    if (e === number) {
      isVis(!vis);
    } else {
      isVis(true);
    }
    setItemNum(e);
  };
  const onClose = () => {
    isVis(false);
  };
  return (
    <div className="aa">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
        return (
          <>
            <div
              className="bb"
              style={{ width: 100, height: 100, border: "1px solid #ccc" }}
            >
              {item}
              <button onClick={() => handleClick(item)}>{item}</button>
            </div>
            {vis && number === item && (
              <GroupItemsSwiper item={item} onClose={onClose} />
            )}
          </>
        );
      })}
      {/* {vis && <GroupItemsSwiper />} */}
    </div>
  );
};

interface IProps {
  item?: number;
  onClose?: () => void;
}
export const GroupItemsSwiper = (props: IProps) => {
  const handleClick = () => {
    props.onClose();
  };
  return (
    <div
      className="dd"
      style={{ width: 50, height: 50, border: "1px solid red" }}
    >
      {props?.item}
      <button onClick={handleClick}>关闭</button>
    </div>
  );
};
