import React from "react";
import "./Template_item.css";
const Template_item = (props) => {
    const {list=''}=props;
  return (
  <div className="expense-item">
    <div className="expense-item__description">
    <h2>{list}</h2>
    </div>
   
  </div>
  );
};
export default Template_item;
