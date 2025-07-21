import React, { useEffect, useState } from "react";
import styles from "./ViewRepairingVoucher.module.css";
import logo from "../../../../assets/KM-LOGO.png";
import axios from "axios";
import { toWords } from "number-to-words";
import Paid from "../../../../assets/uploads/pay.png"
const API_URL = process.env.REACT_APP_API_URL
const ViewRepairingVoucher = ({ voucherId, onBack  }) => {
  const [data, setData] = useState(null);
  const [words, setWords] = useState();
 useEffect(() => {
    if (!data || !data.total_amount) {
      setWords("");
      return;
    }

    const amountStr = data.total_amount.toString();
    const num = parseFloat(amountStr);

    if (!isNaN(num)) {
      const [intPart, decimalPart] = amountStr.split(".");
      let word = toWords(parseInt(intPart));
      if (decimalPart) {
        word += " and " + toWords(parseInt(decimalPart)) + " cents";
      }
      setWords(word);
    } else {
      setWords("");
    }
  }, [data]);

  useEffect(() => {
    if (!voucherId) return;
    axios
      .get(`${API_URL}/GetRepairVoucher/${voucherId}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [voucherId]);

  function printDocument() {
    window.print();
  }
  if (!data) return <div>Loading...</div>;
  return (
    <div className={styles.container}>
        <button onClick={onBack} className="print">
        Back
      </button>
      <button onClick={printDocument} className="print">
        Print
      </button>
      <div className={styles.logoContainer}>
        <img src={logo} alt={logo} className={styles.logo} />
      </div>

      <div className={styles.header}>
        <div className={styles.headerTitle}>REPAIRING VOUCHER</div>
      </div>
      <div className={styles.details}>
        <div className={styles.text}>Date: </div>
        <div className={styles.dateText}>
          <div> {data.repair_date}</div>
          <hr className={styles.line} />
        </div>
        <div className={styles.text}>Acc No: </div>
        <div className={styles.accText}>
          <div>{data.account_no} </div>
          <hr className={styles.accLine} />
        </div>
      </div>
      <div className={styles.details}>
        <div className={styles.text}>Voucher No: </div>
        <div className={styles.voucherText}>
          <div> {data.voucher_no || data.repair_voucher_no}</div>
          <hr className={styles.line} />
        </div>
        <div className={styles.text}>Reference: </div>
        <div className={styles.refrenceText}>
          <div>{data.reference}</div>
          <hr className={styles.accLine} />
        </div>
      </div>
      <div className={styles.tableHeader}>
        <div className={styles.headText}>Item</div>
        <div className={styles.headText}>Details</div>
        <div className={styles.headText}>Amount</div>
      </div>
      <table className={styles.table}>
        <tbody className={styles.tableBody}>
     {data.issues.map((item, index) => (
            <tr key={index} className={styles.tableRow}>
              <td className={styles.tabledata}>{item.item}</td>
              <td className={styles.tabledata}>{item.details}</td>
              <td className={styles.tabledata}>{item.amount}</td>
            </tr>
          ))}
          
    
        </tbody>
      </table>
      <div className={styles.totalContainer}>
        <div className={styles.amountWord}>
          <div className={styles.amount}>AMOUNT IN WORDS</div>
          <div className={styles.word}>{words}</div>
        </div>
        <div className={styles.totalAmount}>
          <div className={styles.total}>TOTAL</div>
          <div className={styles.totalAmount}>{data.total_paid || data.total_amount}</div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerText}>Prepaid By</div>
        <div className={styles.footerText}>Checked By</div>
        <div className={styles.footerText}>Approved By</div>
      </div>

    </div>
  );
};

export default ViewRepairingVoucher;
