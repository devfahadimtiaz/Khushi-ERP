import React from "react";
import styles from "./TermsAndCondition.module.css";

const TermsAndCondition = ({ onBack }) => {
  return (
    <div className={styles.container}>
      <div className={styles.discription}>
        <div className={styles.Headings}>Terms & Conditions</div>
        <div className={styles.text}>
            <div>
              <b>Order Placement:</b> 10% of the total amount will be received
              pre bidding to start purchase process. This is to ensure both the
              buyer (you) and our company to avoid the mistakes; <br/>there will be
              no last-minute cancellation or spam bid. Also the security deposit
              is refundable. If you are unable to secure a successful bid, your
              deposit will be refunded in full. However, with your consent, this
              amount can be used for future bidding on another unit.
            </div>
            <div>
              <b>Exchange Rate:</b> Exchange rate may vary on day to day basis which can change FOB, Taxes,
Duties, Shipping, Trucking, and Clearance (Including but not limited to), the cumulative affect on
the final price due to exchange rate fluctuations will be settled by the buyer.
            </div>
            <div>
              <b>Payment Terms:</b> 100% of FOB amount will be received within 3 business working days
              upfront upon confirmation of Order.
              </div>
              <div>
              <b>Payment Method:</b> All payments will be made through telegraphic transfers.
              </div>
            <div>
              <b>Freight:</b> Frieght charges may not be fixed and can vary time to time, the buyer shall bear
              all fright charges upon delivery.
            </div>
            <div>
              <b>Delivery Time:</b> Delivery will take 8 to 12 weeks after receipt of the down payment and
              confirmation of order.
            </div>
            <div>
              <b>Additional Costs:</b> Any additional customization charges are to be paid separately by the buyer.
            </div>
            <div>
              <b>Taxes & Duties:</b> All taxes and duties listed are as per current regulations. Any change in tax or
              duty rates will reflect on the final invoice and the customer will bear any changes in final price.
            </div>
            <div>
              <b>Cancellation Policy:</b> In case of cancellation, a 20% deduction will be applied from the down
              payment for administrative charges.
            </div>
            <div>
              <b>Validity:</b> This quotation is valid up to 08/05/2025
            </div>
          <div className={styles.texts}>Would you have any further queries, please contact the Sales Department.
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerRow}>
          <div className={styles.Footercolumn}>
            <h1 className={styles.titleFrom}>Contact</h1>
            <h1 className={styles.titleSales}>+254 705 000001</h1>
          </div>
          <div className={styles.Footercolumn}>
            <h1 className={styles.titleFrom}>Email</h1>
            <h1 className={styles.titleSales}>sales.Kenya@khushimotors.com</h1>
          </div>
          <div className={styles.Footercolumn}>
            <h1 className={styles.titleFrom}>Website</h1>
            <h1 className={styles.titleSales}>khushimotors.com/express</h1>
          </div>
        </div>
        <div className={styles.footerRows}>
          <button className={styles.prevButton} onClick={onBack}>
            Prev
          </button>
          <button className={styles.nextButton} disabled>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
export default TermsAndCondition;
