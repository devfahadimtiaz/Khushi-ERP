import React from "react";
import styles from "./CreditSaleAgreement.module.css";
import logo from "../../../assets/uploads/KM-LOGO.png";
import "./print.css"
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
function CreditSaleAgreement() {
  function printDocument() {
    window.print();
  }
  const navigate = useNavigate();
    const location = useLocation();
    const data = location.state;
  return (
    <div className={styles.container}>
      <div className={styles.wrapContainer}>
         <button onClick={() => navigate("/CreditSaleList")} className="print">
          Back
        </button>
         <button onClick={printDocument} className="print">
          Print
        </button>
        <div className={styles.logo}>
          <img src={logo} alt="logo" width="400" />
        </div>
        <div className={styles.heading}>
          <span>CREDIT SALE AGREEMENT OF MOTOR VEHICLE</span>
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
                <td className={styles.tableData}>{data.stockNumberVehicle}</td>
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
                <td className={styles.tableData}>{data.state}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>STATE: </th>
                <td className={styles.tableData}>{data.streetNumber}</td>
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
                <th className={styles.tableHeading}>Business Address: </th>
                <td className={styles.tableData}>{data.businessAddress}</td>
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
                <th className={styles.tableHeading}> Signature </th>
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
                <th className={styles.tableHeading}>RELATIONSHIP: </th>
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
                <td className={styles.tableData}>
                  {data.totalPriceAfterExpense} {data.garageCurrency}
                </td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>INSURANCE AMOUNT: </th>
                <td className={styles.tableData}>
                  {data.vehicleInsurance} {data.garageCurrency}
                </td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>TRACKER: </th>
                <td className={styles.tableData}>
                  20,000 {data.garageCurrency}
                </td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>Commission: </th>
                <td className={styles.tableData}>{data.brokerCommission|| data.broker_commission} {data.garageCurrency}</td>
              </tr>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>TOTAL PRICE: </th>
                <td className={styles.tableData}>{data.totalInstallmentPrice} {data.garageCurrency}</td>
              </tr>
            </table>
          </div>

          <div className={styles.leftColumnBelow}>
            <table className={styles.table}>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeading}>NAME OF BUYER:</th>
                <td className={styles.tableData}>
                  {data.firstName} {data.lastName}
                </td>
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
                <td className={styles.tableData}>
                  {data.guarantorFirstName} {data.guarantorLastName}
                </td>
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
      <div className={styles.wrapContainerBelow}>
        <div className={styles.logoSecond}>
          <img src={logo} alt="logo" width="400" />
        </div>
        <div className={styles.heading}>
          <span>BANK PAYMENT DETAILS</span>
        </div>
        <div className={styles.rowBelow}>
          <div className={styles.leftColumnBelow}>
            {data.bankDetails
              .slice(0, Math.ceil(data.bankDetails.length / 2))
              .map((bank, index) => (
                <table className={styles.tableBelow} key={index}>
                  <tr className={styles.tableRow}>
                    <th className={styles.tableHeadingBelow}>Bank Name</th>
                    <td className={styles.tableData}>
                      {bank.bank_name || "N/A"}
                    </td>
                  </tr>
                  <tr className={styles.tableRow}>
                    <th className={styles.tableHeadingBelow}>Account Title</th>
                    <td className={styles.tableData}>
                      {bank.account_title || "N/A"}
                    </td>
                  </tr>
                  <tr className={styles.tableRow}>
                    <th className={styles.tableHeadingBelow}>SWIFT CODE</th>
                    <td className={styles.tableData}>
                      {bank.swift_code || "N/A"}
                    </td>
                  </tr>
                  <tr className={styles.tableRow}>
                    <th className={styles.tableHeadingBelow}>Account Number</th>
                    <td className={styles.tableData}>
                      {bank.account_number || "N/A"}
                    </td>
                  </tr>
                  <tr className={styles.tableRow}>
                    <th className={styles.tableHeadingBelow}>Address</th>
                    <td className={styles.tableData}>
                      {bank.address || "N/A"}
                    </td>
                  </tr>
                </table>
              ))}
          </div>

          <div className={styles.rightColumnBelow}>
            {data.bankDetails
              .slice(Math.ceil(data.bankDetails.length / 2))
              .map((bank, index) => (
                <table className={styles.tableBelow} key={index + 1000}>
                  <tr className={styles.tableRow}>
                    <th className={styles.tableHeadingBelow}>Bank Name</th>
                    <td className={styles.tableData}>
                      {bank.bank_name || "N/A"}
                    </td>
                  </tr>
                  <tr className={styles.tableRow}>
                    <th className={styles.tableHeadingBelow}>Account Title</th>
                    <td className={styles.tableData}>
                      {bank.account_title || "N/A"}
                    </td>
                  </tr>
                  <tr className={styles.tableRow}>
                    <th className={styles.tableHeadingBelow}>SWIFT CODE</th>
                    <td className={styles.tableData}>
                      {bank.swift_code || "N/A"}
                    </td>
                  </tr>
                  <tr className={styles.tableRow}>
                    <th className={styles.tableHeadingBelow}>Account Number</th>
                    <td className={styles.tableData}>
                      {bank.account_number || "N/A"}
                    </td>
                  </tr>
                  <tr className={styles.tableRow}>
                    <th className={styles.tableHeadingBelow}>Address</th>
                    <td className={styles.tableData}>
                      {bank.address || "N/A"}
                    </td>
                  </tr>
                </table>
              ))}
          </div>
        </div>

        <div className={styles.installmentHeading}>
          <span>Instalment Payment Plan</span>
        </div>
        <div className={styles.pricingRow}>
          <div className={styles.totapPrice}>Total Price</div>
          <div className={styles.totapPrice}>{data.totalInstallmentPrice|| data.totalInstallmentPrice} {data.garageCurrency}</div>
        </div>
        <table className={styles.installmentTable}>
          <thead className={styles.installmentTableHead}>
            <tr>
              <th className={styles.installmentTableHeading}>SR.#</th>
              <th className={styles.installmentTableHeading}>Particulars</th>
              <th className={styles.installmentTableHeading}>Amount</th>
              <th className={styles.installmentTableHeading}>Due Date</th>
            </tr>
          </thead>
          <tbody className={styles.installmentTablebody}>
            {data.installments.map((installment, index) => (
              <tr className={styles.installmentTableRow} key={index}>
                <td className={styles.installmentTableData}>{index}</td>
                <td className={styles.installmentTableData}>
                  {installment.installmentNo || installment.installment_no}
                </td>
                <td className={styles.installmentTableData}>
                  {installment.total} {data.garageCurrency}
                </td>
                <td className={styles.installmentTableData}>
                  {installment.dueDate || installment.due_date }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
              <b>1.</b> The Motor Vehicle shall be sold on an “AS IS - BASIS”.
              The Seller issues no warranties on any apparent,latent and patent
              defects
            </tr>
            <tr className={styles.termsRow}> of the used Motor Vehicle.</tr>
            <tr className={styles.termsRow}>
              <b>2.</b> Upon execution of the Sale Agreement, the Buyer shall
              pay an agreed upon ‘ Non-Refundable’ down payment against the
            </tr>
            <tr className={styles.termsRow}>
              contracted Purchase Price. The Seller shall be entitled to take
              possession of the Vehicle only after making the down payment and
            </tr>
            <tr className={styles.termsRow}>
              subscribing to this contract in true of its spirit and fair
              intent.
            </tr>
            <tr className={styles.termsRow}>
              <b>3.</b> The down payment made against the Purchase Price above
              is absolutely NON-REFUNDABLE and NON-ADJUSTABLE-
            </tr>
            <tr className={styles.termsRow}>
               irrespective of status of subsequent payments articulated in result of
              execution of this Contract
            </tr>
            <tr className={styles.termsRow}>
              <b>4.</b> “Transfer of Ownership” in the name of Buyer shall only
              take place when complete payment/liability against this contract
              has
            </tr>
            <tr className={styles.termsRow}>
             been made/settled, whatsoever the case maybe.
            </tr>
            <tr className={styles.termsRow}>
              <b>5.</b> The Seller reserves the right to Re-Sale the above
              Vehicle if the Buyer fails to take possession of the vehicle on
              the scheduled
            </tr>
            <tr className={styles.termsRow}>pick-up date.</tr>
            <tr className={styles.termsRow}>
              <b>6.</b> It is the Buyer’s obligation to pay for all incidental
              costs incurred and accrued during the sustenance of this Agreement
            </tr>
            <tr className={styles.termsRow}>
              <b>7.</b> All fees/charges involved with the money transfer are
              the Buyer's liability and responsibility.
            </tr>
            <tr className={styles.termsRow}>
              <b>7.1</b> Transfer of “LogBook” shall be upon complete payment of
              the Purchase price by the buyer
            </tr>
            <tr className={styles.termsRow}>
              <b>7.2</b> The Buyer shall be responsible for payment of all
              transfer costs during the Transfer of Logbook.
            </tr>
            <tr className={styles.termsRow}>
              <b>7.3</b> Once the complete payment of Purchase Price is made and
              further there exists no monetary Liability on part of Buyer, it is
              the
            </tr>
            <tr className={styles.termsRow}>
              Buyer’s responsibility to ensure that the Logbookis rightfully
              Transferred within a stipulated period of 10 (ten) days.
            </tr>
            <tr className={styles.termsRow}>
              <b>7.4</b> Logbook Should be Transferred under Buyer's Name within
              10 Days Upon Clearing Agreement Balance.If you Fail To Transfer
            </tr>
            <tr className={styles.termsRow}>
              Logbook an amount of 200,000 UGX will be Charged Per Month as a
              Late Fee
            </tr>
            <tr className={styles.termsRow}>
              <b>8.</b> The Seller undertakes to make on time payments on all
              licenses, duties, UNBS Inspection,Charges,Taxes Registration Costs
              
            </tr>
            <tr className={styles.termsRow}>
              and other statutory payments for the vehicle and or its user if any of
              these Payments are made by the Seller on behalf of the Buyer, the
            </tr>
            <tr className={styles.termsRow}>
              Buyer must reimburse to Seller the amounts paid by the Seller the
              amounts paid by the Seller on the along with incidental Costs.
            </tr>
            <tr className={styles.termsRow}>
              <b>9.</b> The Seller warrants that at the date and time of signing
              of this Agreement, there are no outstanding Custom duty and
             
            </tr>
            <tr className={styles.termsRow}>
              Importation Government Taxes or any other legal binding that may have resulted
              in restriction of Sale of this Vehicle
            </tr>
            <tr className={styles.termsRow}>
              <b>10.</b> Once the down payment is deposited, the Buyer shall be
              provided with an ‘Acknowledgement Receipt’ against the amount
            </tr>
            <tr className={styles.termsRow}>
              deposited. Bank deposits should only be routed into the verified
              and specified bank accounts as mentioned in this contract.
            </tr>
            <tr className={styles.termsRow}>
              <b>11.</b> Upon signing this Agreement, the Buyer confirms and
              undertakes that he has checked the whole Vehicle thoroughly and
              that 
            </tr>
            <tr className={styles.termsRow}>
             the Vehicle is up to his satisfaction in terms of performance
              specifications & each and every details and condition of the
              Vehicle is the
            </tr>
            <tr className={styles.termsRow}>
              same as agreed and up to the mark.
            </tr>
            <tr className={styles.termsRow}>
              Once the Agreement is signed and in effect, the Buyer shall not be
              entitled to any claim regarding the said Vehicle in any Capacity
            </tr>
            <tr className={styles.termsRow}>
              <b>12.</b>The Buyer must legibly indicate the ‘Registration
              Number’ of the Vehicle - when making Payments of Installments
            </tr>
            <tr className={styles.termsRow}>
              <b>13.</b> The Buyer confirms that the information and data
              provided in the Agreement are correct and If any of the statements
              
            </tr>
            <tr className={styles.termsRow}>
              contained above are untrue (whether to our knowledge or not) the seller
              shall be entitled to
            </tr>
            <tr className={styles.termsRow}>Following Options:</tr>
            <tr className={styles.termsRow}>
              <b>13.1</b> The seller reserves the right to stop/cease the Sale
              of the Vehicle to the Buyer.
            </tr>
            <tr className={styles.termsRow}>
              <b>13.2</b> To be indemnified by the Buyer against all loss
              sustained by falsity of such Statements
            </tr>

            <tr className={styles.termsRow}>
              <b>14.</b> By executing this Agreement, the Buyer confirms that
              he/she has read, understood and agreed to the Terms G Conditions
              and 
            </tr>
            <tr className={styles.termsRow}>
              is legally bound to abide by them. The Buyer has also received a copy
              of the Terms and Conditions and agrees to follow,
            </tr>
            <tr className={styles.termsRow}>
            observe, and abide by them.The Buyer Confirms to abide by them. The Buyer
              confirms to abide by any incidental legal/statutory 
            </tr>
            <tr className={styles.termsRow}>changes to
              this agreement.</tr>
            <tr className={styles.termsRow}>
              <b>15.</b> In addition to the above, the Buyer acknowledges having
              received and comprehended all information about the facility and
           
            </tr>
            <tr className={styles.termsRow}>
                 this Agreement before accepting the facility, the Agreement,and any
              other Motor Vehicle Related Documentation.
            </tr>
            <tr className={styles.termsRow}>
              <b>16.</b> The Buyer confirms to have obtained all the necessary
              advice and clarification prior to signing the agreement from the
              Seller 
            </tr>
            <tr className={styles.termsRow}>
               and willfully binds themselves with this Agreement and the
              aforementioned Terms and Conditions forming Part of this Agreement
            </tr>
            <tr className={styles.termsRow}>
              <b>17.</b> The Buyer has confirmed by signing this agreement that
              he/she has taken possession of the Motor Vehicle on “AS IS -
              BASIS” 
            </tr>
            <tr className={styles.termsRow}>
              upon being satisfied that the used motor vehicle is in proper Condition
            </tr>
            <tr className={styles.termsRow}>
              <b>18.</b> The Seller reserves the right to ‘Repossess’ and
              ‘Resell’ the Vehicle in the event that the Buyer Fails to make any
              payment 
            </tr>
            <tr className={styles.termsRow}>
             under this Agreement after such payment becomes due.
            </tr>
          </table>
        </div>
      </div>
      <div className={styles.wrapContainerBottoms}>
        <div className={styles.logoSecond}>
          <img src={logo} alt="logo" width="400" />
        </div>
        <div className={styles.termsContainer}>
          <table className={styles.termsTable}>
            <tr className={styles.termsRow}>
              <b>19.</b> In the event that the Buyer fails to pay at least
              seventy percent (70%) of the remaining Balance of the Purchase
              Price after 
            </tr>
            <tr className={styles.termsRow}>
              down payment, the Seller reserves the right to repossess and resell the
              Motor Vehicle at its own discretion.
            </tr>
            <tr className={styles.termsRow}>
              <b>20.</b> In addition to repossessing the Motor Vehicle, should
              the Buyer be desirous to make good the breached agreement, the
              
            </tr>
            <tr className={styles.termsRow}>
              Buyer shall be responsible for any and all costs incurred by the Seller
              in the repossession Process including but not limited to
            </tr>
            <tr className={styles.termsRow}> towin and storage fees.</tr>
            <tr className={styles.termsRow}>
              <b>21.</b> A receipt is provided to the Buyer by the Bank after
              total payment has been processed for that Buyer.The Buyer is
              required to
            </tr>
            <tr className={styles.termsRow}>
              provide the Seller with their Bank Receipt. The Buyer shall send
              an email containing.
            </tr>
            <tr className={styles.termsRow}>
              <b>1.</b> specifications of the vehicle
            </tr>
            <tr className={styles.termsRow}>
              <b>2.</b> Name
            </tr>
            <tr className={styles.termsRow}>
              <b>3.</b> Phone Number
            </tr>
            <tr className={styles.termsRow}>
              <b>4.</b> Bank Receipt
            </tr>
            <tr className={styles.termsRow}>at {data.garageBranchEmail}</tr>
            <tr className={styles.termsRow}>
              <b>22.</b> Any Payment made to "Any Bank Account(s) other than
              those explicitly specified in Agreement, or to any employee
            </tr>
            <tr className={styles.termsRow}>
              Personally" would be ‘Inadmissible Payment’ and not regarded.
            </tr>
            <tr className={styles.termsRow}>
              To transfer the LogBook - Contact us at:
              {data.garageBranchEmail} or call us at{" "}
              {data.garageBranchPhoneNumber}
            </tr>
            <tr className={styles.termsRow}>
              <b>Note:</b> A receipt is provided to the Buyer by the bank after
              a whole payment has been processed for that Buyer. The buyer is
              required to
            </tr>
            <tr className={styles.termsRow}>
              provide the seller with their bank receipt. The Buyer sends us an
              email with the specifics of the vehicle, along withthe to any one
              of our
            </tr>
            <tr className={styles.termsRow}>branches.</tr>
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
                Credit Card Payments Will be charged 2 Percent.
              </div>
            </tr>

            <tr className={styles.termsRowHeadingBelow}>
              SELLER ({data.garageName})
            </tr>
          </table>

          <div className={styles.companyDetails}>
            <div className={styles.companyHeading}>COMPANY NAME:</div>
            <div className={styles.companyData}>KHUSHI MOTORS LIMITED</div>
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

export default CreditSaleAgreement;
