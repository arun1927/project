import React from "react";
import "./Bill.css";
import { useEffect, useState } from "react";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
function Bill(props) {
const [total,setTotal] =useState(0);
  const pdfExportComponent = React.useRef(null);
  const exportPDFWithComponent = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
  };
useEffect(()=>{
  let final = 0
  props.cart.forEach((i)=>{
    final = final+Number(i.price)
  })
  setTotal(final)
},[props])
  return (
    <>
          <PDFExport
        ref={pdfExportComponent}
        paperSize="auto"
        margin={40}
        fileName={`Bill for ${new Date().getFullYear()}`}
        author="KendoReact Team"
      >
      <div className="bill">
        {
          props?.cart?.map((item, index) => {
            return (
              <>
                <div className="bill_right">
                  <h2>DINE IN </h2>
                  <div className="bill_items">
                    <h5> {item?.title} </h5> <small> x 1</small>
                  </div>

                  {/* <div className="bill_items">
          <strong>
            {" "}
            <h2> Total </h2>{" "}
          </strong>{" "}
        </div> */}
                </div>
                <div className="bill_left">
                  <div className="bill_icon">
                    <h2>
                      {" "}
                      <ArrowDropDownIcon />{" "}
                    </h2>
                  </div>
                  <div className="bill_amount">
                    <h5> {item?.price} </h5>
                  </div>


                </div>
              </>
            )
          })
        }
        <div className="bill_amount">
          <strong>
            {" "}
            <h2> {total} </h2>{" "}
          </strong>
        </div>
      </div>
      
    </PDFExport>
  <button  
    onClick={()=>{
      exportPDFWithComponent()
    }}
  >
      print
  </button>
  </>
  );
}

export default Bill;
