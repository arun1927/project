
import React from "react";
import "./Checkout.css";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";

import { useState } from "react";
function Checkout(props) {
  const pdfExportComponent = React.useRef(null);
  const exportPDFWithComponent = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
  };
  return (
    <div className="checkout">
      

      <button onClick={() => { exportPDFWithComponent()}}>
        Export with component
        </button>
    </div>
  );
}

export default Checkout;
