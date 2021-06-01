import React, { PureComponent } from "react";
import Jspdf, { jsPDF } from "jspdf";
import "./Checkout.css";
import Bill from "./Bill";
export default class pdfGenerator extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  jspdfGenerator = () => {
    var doc = new jsPDF("p", "pt");
    doc.text(20, 20, "this is default text");
    doc.save("generated.pdf");
  };
  render() {
    return (
      <div className="checkout">
        <div className="button">
          <button className="button_save" onClick={this.jspdfGenerator}>
            {" "}
            SAVE
          </button>
          <button className="button_charge">CHARGE</button>
        </div>
      </div>
    );
  }
}
