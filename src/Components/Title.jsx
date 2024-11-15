import React from "react";

const Title = ({ text1, text2 }) => {
  return (
    <div>
      <div className="text_title">
        <p className="title_heading castoro-titling-regular">
          {text1}{" "}
          <span className="title_heading castoro-titling-regular">{text2}</span>
        </p>
        <p className="title_box"></p>
      </div>
    </div>
  );
};

export default Title;
