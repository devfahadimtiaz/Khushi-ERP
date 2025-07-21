import React from "react";
import styles from "./CashSaleAggrement.module.css";
import logo from "../../../assets/uploads/KM-LOGO.png";
import "./print.css";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function CashSaleAggrement() {
  function printDocument() {
    window.print();
  }
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;
  
  return (
    <div className={styles.container}>
      <div className={styles.wrapContainer}>
        <button onClick={() => navigate("/CashSaleList")} className="print">
          Back
        </button>
        <button onClick={printDocument} className="print">
          Print
        </button>
        <div className={styles.logo}>
          <img src={logo} alt="logo" width="400" />
        </div>
        <div className={styles.heading}>
          <span>CASH SALE AGREEMENT OF MOTOR VEHICLE</span>
        </div>
        <div className={styles.row}>
          <div className={styles.leftColumn}>
            <div className={styles.subheading}>
              <span>MOTOR VEHICLE DETAILS</span>
            </div>
            <table className={styles.table}>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>MAKE: </th>
                <td className={styles.tableData}>{data.make}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>MODEL: </th>
                <td className={styles.tableData}>{data.model}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>YOM: </th>
                <td className={styles.tableData}>{data.yearOfManufacture}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>CHASSIS NO: </th>
                <td className={styles.tableData}>{data.chassisNumber}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>STOCK NUMBER: </th>
                <td className={styles.tableData}>{data.fetchStockNo}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>REGISTRATION NO: </th>
                <td className={styles.tableData}>{data.registrationNumber}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>ENGINE NO: </th>
                <td className={styles.tableData}>{data.engineNo}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>ENGINE CC: </th>
                <td className={styles.tableData}>{data.engineCC}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>COLOUR: </th>
                <td className={styles.tableData}>{data.exterior_color}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>BODY TYPE: </th>
                <td className={styles.tableData}>{data.bodyType}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>SIGNATURE: </th>
                <td className={styles.tableData}></td>
              </tr>
            </table>

            <div className={styles.subheading}>
              <span>BUYER PARTICULARS</span>
            </div>
            <table className={styles.tableBuyer}>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>FIRST NAME:: </th>
                <td className={styles.tableData}>{data.firstName}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>MIDDLE NAME: </th>
                <td className={styles.tableData}>{data.middleName}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>LAST NAME: </th>
                <td className={styles.tableData}>{data.lastName}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>NATIONAL ID: </th>
                <td className={styles.tableData}>{data.nationalId}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>URA TIN NUMBER: </th>
                <td className={styles.tableData}>{data.kraPinNumber}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>Occupation: </th>
                <td className={styles.tableData}>{data.occupation}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>STREET ADDRESS: </th>
                <td className={styles.tableData}>{data.streetNumber}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>STATE: </th>
                <td className={styles.tableData}>{data.state}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>CITY: </th>
                <td className={styles.tableData}>{data.city}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>ZIP CODE: </th>
                <td className={styles.tableData}>{data.zipCode}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>P.O BOX: </th>
                <td className={styles.tableData}>{data.poBox}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>GENDER: </th>
                <td className={styles.tableData}>{data.gender}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>EMAIL ADDRESS: </th>
                <td className={styles.tableData}>{data.emailBuyer}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>SOCIAL MEDIA ACCOUNTS: </th>
                <td className={styles.tableData}>{data.socialMedia}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>CONTACT NUMBER: </th>
                <td className={styles.tableData}>{data.contactNumberBuyer}</td>
              </tr>

              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>RESIDENCE CONTACT NO: </th>
                <td className={styles.tableData}>
                  {data.residenceContactNumber}
                </td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>Signature: </th>
                <td className={styles.tableData}></td>
              </tr>
            </table>
          </div>
          <div className={styles.rightColumn}>
            <div className={styles.dateRow}>
              <div className={styles.dateHeading}>Date</div>
              <div className={styles.date}>{data.saleDate}</div>
            </div>
            <div className={styles.subheading}>
              <span>NOMINEE</span>
            </div>
            <table className={styles.table}>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>FIRST NAME:: </th>
                <td className={styles.tableData}>{data.nomineeFirstName}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>MIDDLE NAME: </th>
                <td className={styles.tableData}>{data.nomineeMiddleName}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>LAST NAME: </th>
                <td className={styles.tableData}>{data.nomineeLastName}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>Relationship: </th>
                <td className={styles.tableData}>{data.nomineeRelationship}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>NATIONAL ID: </th>
                <td className={styles.tableData}>{data.nomineeNationalId}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>URA TIN NUMBER: </th>
                <td className={styles.tableData}>{data.nomineeKraPinNumber}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>STREET ADDRESS: </th>
                <td className={styles.tableData}>
                  {data.nomineeStreetAddress}
                </td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>STATE: </th>
                <td className={styles.tableData}>{data.nomineeState}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>CITY: </th>
                <td className={styles.tableData}>{data.nomineeCity}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>ZIP CODE: </th>
                <td className={styles.tableData}>{data.nomineeZipCode}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>P.O BOX: </th>
                <td className={styles.tableData}>{data.nomineePOBox}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>GENDER: </th>
                <td className={styles.tableData}>{data.nomineeGender}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>EMAIL ADDRESS: </th>
                <td className={styles.tableData}>{data.nomineeEmailAddress}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>SOCIAL MEDIA ACCOUNTS: </th>
                <td className={styles.tableData}>
                  {data.nomineeSocialMediaAccounts}
                </td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>CONTACT NUMBER: </th>
                <td className={styles.tableData}>
                  {data.nomineeContactNumber}
                </td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>2 ND CONTACT NUMBER: </th>
                <td className={styles.tableData}>
                  {data.nomineeSecondContactNumber}
                </td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>RESIDENCE CONTACT NO: </th>
                <td className={styles.tableData}>
                  {data.nomineeResidenceContactNo}
                </td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>Signature: </th>
                <td className={styles.tableData}></td>
              </tr>
            </table>
            <div className={styles.subheading}>
              <span>GUARANTOR</span>
            </div>
            <table className={styles.tableBuyer}>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>FIRST NAME:: </th>
                <td className={styles.tableData}>{data.guarantorFirstName}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>MIDDLE NAME: </th>
                <td className={styles.tableData}>{data.guarantorMiddleName}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>LAST NAME: </th>
                <td className={styles.tableData}>{data.guarantorLastName}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>NATIONAL ID: </th>
                <td className={styles.tableData}>{data.guarantorNationalId}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>STREET ADDRESS: </th>
                <td className={styles.tableData}>
                  {data.guarantorStreetAddress}
                </td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>STATE: </th>
                <td className={styles.tableData}>{data.guarantorState}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>CITY: </th>
                <td className={styles.tableData}>{data.guarantorCity}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>ZIP CODE: </th>
                <td className={styles.tableData}>{data.guarantorZipCode}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>P.O BOX: </th>
                <td className={styles.tableData}>{data.guarantorPOBox}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>GENDER: </th>
                <td className={styles.tableData}>{data.guarantorGender}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>EMAIL ADDRESS: </th>
                <td className={styles.tableData}>
                  {data.guarantorEmailAddress}
                </td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>SOCIAL MEDIA ACCOUNTS: </th>
                <td className={styles.tableData}>
                  {data.guarantorSocialMediaAccounts}
                </td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>SIGNATURE: </th>
                <td className={styles.tableData}></td>
              </tr>
            </table>
          </div>
        </div>
        <div className={styles.heading}>
          <span>MOTOR VEHICLE PAYMENT DETEILS</span>
        </div>
        <div className={styles.rowBelow}>
          <div className={styles.rightColumnBelow}>
            <table className={styles.table}>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>MOTOR VEHICLE PRICE:</th>
                <td className={styles.tableData}>{data.price}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>INSURANCE AMOUNT(UGX): </th>
                <td className={styles.tableData}>{data.insurance}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>TRACKER(UGX): </th>
                <td className={styles.tableData}>{data.tracker}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>Commission(UGX): </th>
                <td className={styles.tableData}>{data.commission}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>TOTAL PRICE(UGX): </th>
                <td className={styles.tableData}>{data.totalPrice}</td>
              </tr>
            </table>
          </div>

          <div className={styles.leftColumnBelow}>
            <table className={styles.table}>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>NAME OF BUYER:</th>
                <td className={styles.tableData}>{data.firstName}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>ID NO: </th>
                <td className={styles.tableData}>{data.nationalId}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>SIGN: </th>
                <td className={styles.tableData}></td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>GUARANTOR:</th>
                <td className={styles.tableData}>{data.guarantorFirstName}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>ID NO:</th>
                <td className={styles.tableData}>{data.guarantorNationalId}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>SIGN:</th>
                <td className={styles.tableData}></td>
              </tr>

              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>SELLER:</th>
                <td className={styles.tableData}>{data.garageName}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>STAMP:</th>
                <td className={styles.tableData}></td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div className={styles.wrapContainerBottom}>
        <div className={styles.logoSecond}>
          <img src={logo} alt="logo" width="400" />
        </div>
        <div className={styles.termsContainer}>
          <table className={styles.termsTable}>
            <tr className={styles.termsRowRed}>TERMS & CONDITIONS</tr>
            <tr className={styles.termsRowHeading}>
              IT IS FURTHER AGREED BETWEEN THE TWO PARTIES AS FOLLOWS
            </tr>
            <tr className={styles.termsRow}>
              <b>1.</b>The motor vehicle is sold on the basis AS IT IS & seller
              does not give any Guarantee whatsoever to the buyer because
            </tr>
            <tr className={styles.termsRow}>this is used Motor vehicle</tr>
            <tr className={styles.termsRow}>
              <b>2.</b> The down Payment will be Paid by the Buyer to the Seller
              when Agreement is signed .The buyer may be able to take
            </tr>
            <tr className={styles.termsRow}>
              Posession of the Motor vehicle after Paying
            </tr>
            <tr className={styles.termsRow}>
              <b>3.</b> The Parties agree to sign all Necessary documents to
              transfer ownership of the motor Vehicle from the seller in his
            </tr>
            <tr className={styles.termsRow}>
              name to Purchase after Payment of the Total Price & Execution of
              this Agreement
            </tr>
            <tr className={styles.termsRow}>
              <b>4.</b> There is no refund for the Deposit Paid by the Buyer and
              the seller has the right to re-sale the mentioned vehicle if
            </tr>
            <tr className={styles.termsRow}>
              the Buyer fails to Show up for the Schedule Pick Up Date
            </tr>
            <tr className={styles.termsRow}>
              <b>5.</b> All fees Involved with the Money Transfer are the
              buyer's Responsibility.
            </tr>
            <tr className={styles.termsRow}>
              <b>5.1</b> The Transfer cost of the logbook is Paid by the Buyer
              When Full Payment is Cleared By the Buyer
            </tr>
            <tr className={styles.termsRow}>
              <b>5.2</b> Logbook Should be Transferred under Buyer's Name within
              10 Days Upon Clearing Agreement Balance.If you Fail To
            </tr>
            <tr className={styles.termsRow}>
              Transfer Logbook an amount of 200,000 UGX will be Charged Per
              Month as a Late Fee
            </tr>
            <tr className={styles.termsRow}>
              <b>6.</b> Pay on Time All License Duties,UNBS Inspection
              Charges,Taxes,Fees,Registration Charges,and other Payments that re
            </tr>
            <tr className={styles.termsRow}>
              required by the law for the vehicle or its user.if any of these
              these Payments made by the seller without Buyer's
            </tr>
            <tr className={styles.termsRow}>
              Obligation to do so the Buyer Must Pay Back Money to the seller.
            </tr>
            <tr className={styles.termsRow}>
              <b>7.</b> The seller Warrants that at the date of signing this
              Agreement ,there are no Outstanding Custom Duty & Importation
            </tr>
            <tr className={styles.termsRow}>Government taxes.</tr>
            <tr className={styles.termsRow}>
              <b>8.</b> The Buyer should get a Receipt From either the Main
              Office or one of our Branches if they are Paying Cash or Deposit
            </tr>
            <tr className={styles.termsRow}>
              should be sent to Seller's Verified Bank Account.
            </tr>
            <tr className={styles.termsRow}>
              <b>9.</b> The Buyer has Check Out the Whole Car Performance &
              Specs,which are in Good Condition So there are no problem
            </tr>
            <tr className={styles.termsRow}>
              with any Component of the Vehicle
            </tr>
            <tr className={styles.termsRow}>
              <b>10.</b>The Purchaser must indicate the registration Number of
              the Motor Vehicle When Making Payment.
            </tr>
            <tr className={styles.termsRow}>
              <b>11.</b> If any of the Statements Contained above are Untrue
              (whether to our Knowledge or Not) we shall be entitled at
            </tr>
            <tr className={styles.termsRow}>
              your Option. The seller has rights to stop the sale of Motor
              Vehicle to you.
            </tr>
            <tr className={styles.termsRow}>
              <b>11.1</b> To be Indemnified by you Against All loss Sustained by
              Your reason for the falsity of Such Documents.
            </tr>

            <tr className={styles.termsRow}>
              <b>12.</b> The Buyer Knows that when he signs this Agreement the
              Buyer is assumed to have read ,Understood and agreed to
            </tr>
            <tr className={styles.termsRow}>
              the Terms & Conditions .The Buyer has also received a copy of the
              Terms & Conditions & Agrees to Follow Observe and
            </tr>
            <tr className={styles.termsRow}>
              be Bound by them (as theymay be changed from time to time at the
              seller's according to the laws)
            </tr>
            <tr className={styles.termsRow}>
              <b>13.</b> The Buyer says that they have asked for Advice and the
              Clarification about the Agreement and the Terms &
            </tr>
            <tr className={styles.termsRow}>
              Conditions From People Other than Seller's Officials.The Buyer
              Says that they have enough time to think about Terms &
            </tr>
            <tr className={styles.termsRow}>
              Conditions of the agreement before they agreed to them.
            </tr>
            <tr className={styles.termsRow}>
              <b>14.</b> The Buyer has Confirmed by signing this Agreement that
              he has taken Possession of the Motor Vehicle on the Basis
            </tr>
            <tr className={styles.termsRow}>
              AS IT IS Upon Being Satisfied that motor vehicle is in Proper
              Condition.
            </tr>
            <tr className={styles.termsRow}>
              <b>15.</b> Signing this Agreement with Witness from Buyer must
              agree All Terms & Conditions.
            </tr>
            <tr className={styles.termsRows}>
              <div className={styles.termsData}>NOTE:</div>
              <div className={styles.termsDatas}>
                CONTACT US TO TRANSFER THE LOGBOOK {data.garageBranchEmail}
              </div>
            </tr>
            <tr className={styles.termsRows}>
              <div className={styles.termsData}></div>
              <div className={styles.termsDatas}>
                OR CALL US AT {data.garageBranchPhoneNumber}
              </div>
            </tr>
            <tr className={styles.termsRows}>
              <div className={styles.termsData}>NOTE:</div>
              <div className={styles.termsDatas}>
                ANY OTHER TRANSACTION ON A BANK ACCOUNT THAT IS NOT OFFICIAL IS
                NOT ALLOWED
              </div>
            </tr>
            <tr className={styles.termsRowss}>
              <div className={styles.termsData}>NOTE:</div>
              <div className={styles.termsDatas}>
                0% LATE PAYMENT PENALTY WILL BE CHARGED IN CASE OF LATE PAYMENT
              </div>
            </tr>

            <tr className={styles.termsRowHeadingBelow}>
              SELLER ({data.garageName})
            </tr>
          </table>
          <div className={styles.companyDetails}>
            <div className={styles.companyHeading}>COMPANY NAME:</div>
            <div className={styles.companyData}>{data.garageName}</div>
          </div>
          <div className={styles.companyDetails}>
            <div className={styles.companyHeading}>ADDRESS:</div>
            <div className={styles.companyData}>{data.garageaddress}</div>
          </div>
        </div>
        <div className={styles.companyDetails}>
          <div className={styles.companyHeading}>CONTACT NUMBER:</div>
          <div className={styles.companyData}>
            {data.garageBranchPhoneNumber}
          </div>
        </div>
        <div className={styles.companyDetails}>
          <div className={styles.companyHeading}>HELPLINE NUMBER:</div>
          <div className={styles.companyData}>
            {data.garageBranchHelpLineNumber}
          </div>
        </div>
        <div className={styles.stemp}>SELLER STAMP:</div>

        <div className={styles.customerDetails}>
          <div className={styles.BuyerDetails}>
            <div className={styles.details}>
              <div className={styles.leftDetails}>NAME OF BUYER:</div>
              <div className={styles.rightDetails}>
                <hr />
              </div>
            </div>
            <div className={styles.details}>
              <div className={styles.leftDetails}>ID NO:</div>
              <div className={styles.rightDetails}>
                <hr />
              </div>
            </div>
            <div className={styles.details}>
              <div className={styles.leftDetails}>SIGN:</div>
              <div className={styles.rightDetails}>
                <hr />
              </div>
            </div>
          </div>
          <div className={styles.GuarantorDetails}>
            <div className={styles.details}>
              <div className={styles.leftDetails}>GUARANTOR:</div>
              <div className={styles.rightDetails}>
                <hr />
              </div>
            </div>
            <div className={styles.details}>
              <div className={styles.leftDetails}>ID NO:</div>
              <div className={styles.rightDetails}>
                <hr />
              </div>
            </div>
            <div className={styles.details}>
              <div className={styles.leftDetails}>SIGN:</div>
              <div className={styles.rightDetails}>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CashSaleAggrement;
