import React from "react";
import "./Bill.css";
import { useEffect, useState } from "react";

import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
function Bill(props) {
  const [title, setTitle] = useState(props.title);
  const [price, setPrice] = useState(props.price);
  return (
    <div className="bill">
      <div className="bill_right">
        <h2>DINE IN </h2>
        <div className="bill_items">
          <h5> {props.post.title} </h5> <small> x 1</small>
        </div>

        <div className="bill_items">
          <strong>
            {" "}
            <h2> Total </h2>{" "}
          </strong>{" "}
        </div>
      </div>
      <div className="bill_left">
        <div className="bill_icon">
          <h2>
            {" "}
            <ArrowDropDownIcon />{" "}
          </h2>
        </div>
        <div className="bill_amount">
          <h5> {props.post.price} </h5>
        </div>

        <div className="bill_amount">
          <strong>
            {" "}
            <h2> 51.02 </h2>{" "}
          </strong>
        </div>
      </div>
    </div>
  );
}

export default Bill;
