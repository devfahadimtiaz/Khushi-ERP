import React from "react";
import classes from "./SalesTransections.module.css";

const SalesTransections = () => {
  return (
    <div className={classes.box}>
      <div className={classes.group}>
        <div className={classes["sale-transaction"]}>
          <div className={classes["overlap-group"]}>
            <div className={classes["text-wrapper"]}>Sales Transactions</div>

            <div className={classes.overlap}>
              <div className={classes.div}>Receipt From</div>

              <select className={classes["overlap-2"]}>
                <option className={classes["text-wrapper-2"]}>
                  Select Receipt Date
                </option>
                <option className={classes["text-wrapper-2"]}>
                  Option 1
                </option>
                <option className={classes["text-wrapper-2"]}>
                Option 1
                </option>

                
              </select>

              <div className={classes["text-wrapper-3"]}>Receipt To</div>

              <select className={classes["overlap-3"]}>
                <option className={classes["text-wrapper-4"]}>
                  Select Receipt Date
                </option>
                <option className={classes["text-wrapper-4"]}>Option 1</option>
                <option className={classes["text-wrapper-4"]}>Option 1</option>
              </select>

              <button className={classes["div-wrapper"]}>
                <div className={classes["text-wrapper-5"]}>Search</div>
              </button>
            </div>

            <div className={classes["overlap-4"]}>
              <div className={classes["overlap-5"]}>
                <div className={classes.rectangle} />

                <div className={classes["text-wrapper-6"]}>Sr</div>

                <div className={classes["text-wrapper-7"]}>Voucher Name</div>

                <div className={classes["text-wrapper-8"]}>Date</div>

                <div className={classes["text-wrapper-9"]}>Receipt</div>

                <div className={classes["text-wrapper-10"]}>Invoice</div>

                <div className={classes["text-wrapper-11"]}>Customer</div>

                <div className={classes["text-wrapper-12"]}>Receipt Type</div>

                <div className={classes["text-wrapper-13"]}>Receiveable</div>

                <div className={classes["text-wrapper-14"]}>Received</div>

                <div className={classes["text-wrapper-15"]}>Status</div>

                <div className={classes["text-wrapper-16"]}>Actions</div>

                <div className={classes.rectangle - 2} />

                <div className={classes["text-wrapper-17"]}>1</div>

                <div className={classes["text-wrapper-18"]}>VOC-001</div>

                <div className={classes["text-wrapper-19"]}>2024-01-15</div>

                <div className={classes["text-wrapper-20"]}>RCP-001</div>

                <div className={classes["text-wrapper-21"]}>INV-2024-001</div>

                <div className={classes["text-wrapper-22"]}>John Smith</div>

                <div className={classes["text-wrapper-23"]}>Cash</div>

                <div className={classes["text-wrapper-24"]}>5000</div>

                <div className={classes["text-wrapper-25"]}>5000</div>

                <div className={classes["text-wrapper-26"]}>Completed</div>

                <div className={classes["text-wrapper-27"]}>View</div>

                <div className={classes["text-wrapper-28"]}>Edit</div>

                <div className={classes["text-wrapper-29"]}>Delete</div>
              </div>

              <div className={classes["overlap-6"]}>
                <div className={classes["text-wrapper-30"]}>2</div>

                <div className={classes["text-wrapper-31"]}>VOC-002</div>

                <div className={classes["text-wrapper-32"]}>2024-01-16</div>

                <div className={classes["text-wrapper-33"]}>RCP-002</div>

                <div className={classes["text-wrapper-34"]}>INV-2024-002</div>

                <div className={classes["text-wrapper-35"]}>Jane Doe</div>

                <div className={classes["text-wrapper-36"]}>Bank</div>

                <div className={classes["text-wrapper-37"]}>7500</div>

                <div className={classes["text-wrapper-38"]}>5000</div>

                <div className={classes["text-wrapper-39"]}>Partial</div>

                <div className={classes["text-wrapper-40"]}>View</div>

                <div className={classes["text-wrapper-41"]}>Edit</div>

                <div className={classes["text-wrapper-42"]}>Delete</div>
              </div>

              <div className={classes["overlap-7"]}>
                <div className={classes["text-wrapper-30"]}>3</div>

                <div className={classes["text-wrapper-31"]}>VOC-003</div>

                <div className={classes["text-wrapper-32"]}>2024-01-17</div>

                <div className={classes["text-wrapper-33"]}>RCP-003</div>

                <div className={classes["text-wrapper-34"]}>INV-2024-003</div>

                <div className={classes["text-wrapper-43"]}>Bob Wilson</div>

                <div className={classes["text-wrapper-36"]}>Cash</div>

                <div className={classes["text-wrapper-37"]}>3000</div>

                <div className={classes["text-wrapper-38"]}>0</div>

                <div className={classes["text-wrapper-44"]}>Pending</div>

                <div className={classes["text-wrapper-40"]}>View</div>

                <div className={classes["text-wrapper-41"]}>Edit</div>

                <div className={classes["text-wrapper-42"]}>Delete</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SalesTransections;