import React from "react";
import HTMLComment from "react-html-comment";

function CashflowIndex() {
  return (
    <>
      {/* <title>Cashflow - version 12.0</title> */}
      <HTMLComment text="View Account" />
      <form method="POST" action="/cashflow/showAccount">
        <table>
          <tr>
            <td>
              <select name="account">
                <option value="REDPAYABLE">Accounts Payable</option>
                <option value="HOPEPAYABLE">Accounts Payable</option>
                <option value="KIWISAVERADELAIDE">Adelaide KiwiSaver</option>
                <option value="AMISUPERRORY">AMI Superannuation</option>
                <option value="ANZCHEQ">ANZ Cheque Account</option>
                <option value="ANZCHEQ1">ANZ Go Account</option>
                <option value="ANZTERM">ANZ Term Deposit</option>
                <option value="AROHAASB">Aroha Support Streamline</option>
                <option value="ASBVISA">ASB Visa</option>
                <option value="MORTHOPEBNZ">BNZ Loan</option>
                <option value="MORTBOWASB1">
                  Bowhill Road ASB Mortgage (1)
                </option>
                <option value="MORTBOWASB2">
                  Bowhill Road ASB Mortgage (2)
                </option>
                <option value="BUStrUSTASB">Business Trust ASB Account</option>
                <option value="RORYCAPRESERVE">Capital Reserve - Rory</option>
                <option value="JOINTCAPRESERVE">
                  Capital Reserve - Shared
                </option>
                <option value="MORTHOPEWHITE">
                  Current Account - Rory White
                </option>
                <option value="MORTBOWWHITE">
                  Current Account - Rory White - Bowhill
                </option>
                <option value="MORTLANGWHITE">
                  Current Account - Rory White - Langdons
                </option>
                <option value="MORTLEVENWHITE">
                  Current Account - Rory White - Leven
                </option>
                <option value="MORTLYTWHITE">
                  Current Account - Rory White - Lyttelton
                </option>
                <option value="MORTPROPONEWHITE">
                  Current Account - Rory White - Property One
                </option>
                <option value="KIWISAVEREMILY">Emily KiwiSaver</option>
                <option value="PROPONEBOWPROVISION">
                  EQ Repairs Provision- Bowhill Road
                </option>
                <option value="PROPONELANGPROVISION">
                  EQ Repairs Provision- Langdons Road
                </option>
                <option value="PROPONELYTPROVISION">
                  EQ Repairs Provision- Lyttelton Street
                </option>
                <option value="EUROASB">EURO ASB Account</option>
                <option value="GENEVAASB">Geneva ASB</option>
                <option value="KIWISAVERGENEVA">Geneva KiwiSaver</option>
                <option value="GOLDGST">Golden Projects GST account</option>
                <option value="GOLDASB">Golden Projects Saver</option>
                <option value="HATCHRORY">Hatch - Rory</option>
                <option value="HOHMEDASB">
                  Home of Hope Medical Support Streamline
                </option>
                <option value="HOPERECEIVABLE">Hope Accounts Receivable</option>
                <option value="HOPEBNZONCALL">
                  Hope Investment BNZ On Call account
                </option>
                <option value="HOPEGST">
                  Hope Investment Properties GST account
                </option>
                <option value="MORTHOPE">
                  Hope Investment Properties National Mort
                </option>
                <option value="HOPESAVER">
                  Hope Investment Properties Saver account
                </option>
                <option value="HOPEWESTPAC">
                  Hope Investment Properties Westpac account
                </option>
                <option value="MORTHUNTEXT">
                  Huntsbury Ave Extra Mortgage
                </option>
                <option value="MORTHUNT">Huntsbury Ave Mortgage</option>
                <option value="KIWISAVERJACQUI">Jacqui KiwiSaver</option>
                <option value="JOINTASB">Joint ASB Account</option>
                <option value="JOINTCHEQ">Joint Cheque Account</option>
                <option value="JOINTSAV">Joint Savings Account</option>
                <option value="JOINTTERM">Joint Term Deposit</option>
                <option value="VISA">Joint Visa Account</option>
                <option value="KIWICHEQ">Kiwibank Free up Account</option>
                <option value="KIWICALL">Kiwibank Online Call Account</option>
                <option value="KIWITERM">Kiwibank Term Deposit</option>
                <option value="MORTLANGNAT">
                  Langdons Road National Mortgage
                </option>
                <option value="MORTLANGSOV1">
                  Langdons Road Sovereign Mortgage (1)
                </option>
                <option value="MORTLANGSOV2">
                  Langdons Road Sovereign Mortgage (2)
                </option>
                <option value="MORTLEVEN">
                  Leven Street National Mortgage
                </option>
                <option value="MORtrORYJACQUI">
                  Loan from Rory and Jacqui
                </option>
                <option value="PROPONECURRENTACC">
                  Loan from Rory White for current account
                </option>
                <option value="PROPONESHARES">
                  Loan from Rory White for share purchase
                </option>
                <option value="MORTHOPESTERLING">
                  Loan from Sterling Trust
                </option>
                <option value="ELIMLOAN">Loan to City Elim for Building</option>
                <option value="LOANFAMtrUST">Loan to Family Trust</option>
                <option value="HIPLOAN">
                  Loan to Hope Investment Property Limited
                </option>
                <option value="MORTLYT1">
                  Lyttelton Street Nat Mortgage 1
                </option>
                <option value="MORTLYT2">
                  Lyttelton Street Nat Mortgage 2
                </option>
                <option value="MORTLYT3">
                  Lyttelton Street Nat Mortgage 3
                </option>
                <option value="MORTLYTSOV">
                  Lyttelton Street Sovereign Mortgage
                </option>
                <option value="MORTHOPEMARAC">Marac Loan</option>
                <option value="MORTMILTHOME">
                  Milton Street Mortgage (Home)
                </option>
                <option value="N26">N26 Account</option>
                <option value="NBHPROPMANAGE">NBH Property Management</option>
                <option value="PROPONEASB">
                  Property One ASB Cheque Account
                </option>
                <option value="PROPONEDIRECT">
                  Property One BankDirect Cheque Account
                </option>
                <option value="PROPONE">Property One Cheque Account</option>
                <option value="PROPONEWEST">
                  Property One Westpac Cheque Account
                </option>
                <option value="RABOTERM">Rabobank NoticeSaver</option>
                <option value="RABOSAVE">Rabobank Saver</option>
                <option value="REDGST">Red Three GST account</option>
                <option value="REDASB">Red Three Saver</option>
                <option value="KIWISAVERRORY">Rory KiwiSaver</option>
                <option value="trADEMERORY">Rory TradeMe account</option>
                <option value="RORYCASH">Rory's Cash</option>
                <option value="RORYCHEQ">Rory's Cheque Account</option>
                <option value="SABADELL">Sabadell Key Account Plus</option>
                <option value="SBSCALL">SBS Call Account</option>
                <option value="REDSHAREWHITE">
                  Share Capital - Rory White
                </option>
                <option value="HOPESHAREWHITE">
                  Share Capital - Rory White
                </option>
                <option value="PROPONESHAREWHITE">
                  Share Capital - Rory White
                </option>
                <option value="HOPESHARESTERLING">
                  Share Capital - Sterling Trust
                </option>
                <option value="RECEIVABLE">Shared Accounts Receivable</option>
                <option value="SHARESGENEVA">Sharesies - Geneva</option>
                <option value="SHARESRORY">Sharesies - Rory</option>
                <option value="STAFF">Staff Account at Cardinal</option>
                <option value="TOWER">Tower Retirement Fund</option>
              </select>
            </td>
            <td>
              <input name="startDate" value="29/06/2022" />
            </td>
            <td>
              <input name="endDate" value="15/01/2023" />
            </td>
            <td>
              <input TYPE="SUBMIT" NAME="btnView" VALUE="View" />
            </td>
          </tr>
        </table>
      </form>
      <hr />

      <form method="POST" action="/cashflow/postToLedgerQuick">
        <input type="HIDDEN" name="quickPost" value="1" />
        <table>
          <tr>
            <td>
              <input TYPE="SUBMIT" NAME="btnQuickPost" VALUE="Quick Post" />
            </td>
          </tr>
        </table>
      </form>

      <form method="POST" action="/cashflow/postToLedger">
        <input type="HIDDEN" name="quickPost" value="0" />
        <table>
          <tr>
            <td>Include Assets</td>
            <td>Start Date</td>
            <td>End Date</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>
              <input TYPE="checkbox" name="includeAssets" checked value="1" />
            </td>
            <td>
              <input name="startDate" value="29/06/2022" />
            </td>
            <td>
              <input name="endDate" value="15/01/2023" />
            </td>
            <td>
              <input TYPE="SUBMIT" NAME="btnPost" VALUE="Post to Ledger" />
            </td>
          </tr>
        </table>
      </form>
      <hr />

      <HTMLComment text="Cashflow Trends" />
      <form method="POST" action="/cashflow/showTrend">
        <HTMLComment text="company" />
        <input type="HIDDEN" name="company" value="24" />
        <table>
          <tr>
            <td>
              <input TYPE="SUBMIT" VALUE="Cashflow Trends" />
            </td>
          </tr>
          <tr>
            <td>
              <input TYPE="checkbox" name="includeBank" checked value="1" />
            </td>
            <td>Include Bank</td>
          </tr>
          <tr>
            <td>
              <input TYPE="checkbox" name="includeLoan" value="1" />
            </td>
            <td>Include Loan</td>
          </tr>
          <tr>
            <td>
              <input TYPE="checkbox" name="includeEquity" value="1" />
            </td>
            <td>Include Equity</td>
          </tr>
          <tr>
            <td>
              <input TYPE="checkbox" name="includeGST" checked value="1" />
            </td>
            <td>Include GST</td>
          </tr>
        </table>
      </form>
      <hr />

      <HTMLComment text="Account Trends Graph" />
      <form method="POST" action="/cashflow/graphAccountTrend">
        <table>
          <tr>
            <td>
              <input TYPE="checkbox" name="ignoreIncome" value="1" />
            </td>
            <td>Ignore Income</td>
            <td>
              <input
                TYPE="checkbox"
                name="displayOverdrawnOnly"
                checked
                value="1"
              />
            </td>
            <td>Display Overdrawn Only</td>
            <td>
              <input type="checkbox" name="textOnly" value="1" />
            </td>
            <td>Text Table Only</td>
            <td>
              <input type="SUBMIT" value="Graph Account Trends" />
            </td>
          </tr>
        </table>
      </form>
      <hr />

      <HTMLComment text="Transaction List" />
      <form method="POST" action="/cashflow/showTransactionList">
        <table>
          <tr>
            <td>Transaction Type</td>
            <td>Start Date</td>
            <td>End Date</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>
              <select name="transType">
                <option value="ADELAIDETAX">Adelaide Tax</option>
                <option value="ADELAIDETAXREFUND">Adelaide Tax Refund</option>
                <option value="COROINC">Apartment Income</option>
                <option value="MUSICPAY">Band Income</option>
                <option value="HOPEBANK">Bank Fees</option>
                <option value="BIKE">Bike</option>
                <option value="MORTHOPEBNZINT">BNZ Mortgage Interest</option>
                <option value="MORTBOWASBINT1">
                  Bowhill Road ASB Mortgage Interest (1)
                </option>
                <option value="MORTBOWASBINT2">
                  Bowhill Road ASB Mortgage Interest (2)
                </option>
                <option value="PROPONEBOWCAPBUY">
                  Bowhill Road Capital Purchases
                </option>
                <option value="PROPONEBOWCAPSELL">
                  Bowhill Road Capital Sales
                </option>
                <option value="PROPONEBOWEXP">Bowhill Road Expenses</option>
                <option value="PROPONEBOWINC">Bowhill Road Income</option>
                <option value="PROPONEBOWINS">Bowhill Road Insurance</option>
                <option value="MORTBOWNATINT">
                  Bowhill Road National Mortgage Interest
                </option>
                <option value="PROPONEBOWMANAGE">
                  Bowhill Road Property Management
                </option>
                <option value="PROPONEBOWRATES">Bowhill Road Rates</option>
                <option value="PROPONEBOWREPAIRS">Bowhill Road Repairs</option>
                <option value="HOPEBUILDINGWOF">
                  Building Warrant of Fitness
                </option>
                <option value="HOPECAPBUY">Capital Purchases</option>
                <option value="COROCAPBUY">Capital Purchases</option>
                <option value="HOPECAPSELL">Capital Sales</option>
                <option value="COROCAPSELL">Capital Sales</option>
                <option value="CAR">Car</option>
                <option value="INSCAR">Car Insurance</option>
                <option value="HOPECARPARKS">Car Parks</option>
                <option value="HOPEINCCARPARK">Carpark Income </option>
                <option value="HOPERATESNOGST">CCC Rates (Settlement)</option>
                <option value="PAYC">Child Allowance</option>
                <option value="CHILDCARE">Child Care</option>
                <option value="CHILD">Children Expenses</option>
                <option value="HOPERATES">City Council Rates</option>
                <option value="HOPECLEANLABOUR">Cleaning Labour</option>
                <option value="HOPECLEANLABOUR1">Cleaning Labour</option>
                <option value="HOPECLEANSUPPLIES">Cleaning Supplies</option>
                <option value="COMP">Computer</option>
                <option value="CONSULTEXP">Consultancy Expenses</option>
                <option value="CONSULTINC">Consultancy Income</option>
                <option value="INSCONTENTS">Contents Insurance</option>
                <option value="HOPEDONATION">Donation to Charity</option>
                <option value="DONATION">Donations</option>
                <option value="AROHAINC">Donations Income</option>
                <option value="HOHMEDINC">Donations Income</option>
                <option value="HOPEREPAIRSEQ">
                  Earthquake Repairs and Maintenance
                </option>
                <option value="POWER">Electricity</option>
                <option value="HOPEPOWER">Electricity</option>
                <option value="EMAIL">Email and Internet Charges</option>
                <option value="EMILYTAX">Emily Tax</option>
                <option value="EMILYTAXREFUND">Emily Tax Refund</option>
                <option value="MORTHUNTEXTINT">Extra Mortgage Interest</option>
                <option value="FAMtrUSTCAPBUY">
                  Family Trust Capital Purchases
                </option>
                <option value="FAMtrUSTEXP">Family Trust Expenses</option>
                <option value="FAMtrUSTTAX">Family Trust Tax</option>
                <option value="FAMtrUSTTAXREFUND">
                  Family Trust Tax Refund
                </option>
                <option value="HOPESECURITY">Fire and Alarm Expenses</option>
                <option value="FURN">Furnishing</option>
                <option value="AROHAEXP">General Expenses</option>
                <option value="HOHMEDEXP">General Expenses</option>
                <option value="COROEXP">General Expenses</option>
                <option value="GENEVATAX">Geneva Tax</option>
                <option value="GENEVATAXREFUND">Geneva Tax Refund</option>
                <option value="GOLDTAX">Golden Projects Tax</option>
                <option value="GOLDTAXREFUND">
                  Golden Projects Tax Refund
                </option>
                <option value="INSHEALTH">Health Insurance</option>
                <option value="HOL">Holiday</option>
                <option value="HOPEEXPNOGST">Hope Expense (No GST)</option>
                <option value="HOPEINCNOGST">Hope Income (No GST)</option>
                <option value="HOPETAX">Hope Investment Properties Tax</option>
                <option value="HOPETAXREFUND">
                  Hope Investment Properties Tax Refund
                </option>
                <option value="PROPONEHOPEINC">Hope Loan Income</option>
                <option value="INSHOUSE">House Insurance</option>
                <option value="HOUSE">House Repairs</option>
                <option value="HOUSEREPAIRS">House repairs</option>
                <option value="MORTHUNTINT">
                  Huntsbury Ave Mortgage Interest
                </option>
                <option value="HOPEINS">Insurances</option>
                <option value="INTOUT">Interest Paid</option>
                <option value="JACQUITAX">Jacqui Tax</option>
                <option value="JACQUITAXREFUND">Jacqui Tax Refund</option>
                <option value="JOINTASSETBUY">Joint Asset Purchases</option>
                <option value="BANKJ">Joint Bank Fees</option>
                <option value="FOODJ">Joint Food</option>
                <option value="INTINJ">Joint Interest Received</option>
                <option value="OTHERJ">Joint Other</option>
                <option value="PROPONELANGCAPBUY">
                  Langdons Road Capital Purchases
                </option>
                <option value="PROPONELANGCAPSELL">
                  Langdons Road Capital Sales
                </option>
                <option value="PROPONELANGEXP">Langdons Road Expenses</option>
                <option value="PROPONELANGINC">Langdons Road Income</option>
                <option value="PROPONELANGINS">Langdons Road Insurance</option>
                <option value="MORTLANGNATINT">
                  Langdons Road National Mortgage Interest
                </option>
                <option value="PROPONELANGMANAGE">
                  Langdons Road Property Management
                </option>
                <option value="PROPONELANGRATES">Langdons Road Rates</option>
                <option value="PROPONELANGREPAIRS">
                  Langdons Road Repairs
                </option>
                <option value="MORTLANGSOV1INT">
                  Langdons Road Sovereign Mortgage Interest (1)
                </option>
                <option value="MORTLANGSOV2INT">
                  Langdons Road Sovereign Mortgage Interest (2)
                </option>
                <option value="HOPELEGAL">Legal Expenses</option>
                <option value="PROPONELEVENCAPBUY">
                  Leven Street Capital Purchases
                </option>
                <option value="PROPONELEVENCAPSELL">
                  Leven Street Capital Sales
                </option>
                <option value="PROPONELEVENEXP">Leven Street Expenses</option>
                <option value="PROPONELEVENINC">Leven Street Income</option>
                <option value="PROPONELEVENINT">
                  Leven Street National Mortgage Interest
                </option>
                <option value="LUNCH">Lunches</option>
                <option value="PROPONELYTCAPBUY">
                  Lyttelton Street Capital Purchases
                </option>
                <option value="PROPONELYTCAPSELL">
                  Lyttelton Street Capital Sales
                </option>
                <option value="PROPONELYTEXP">Lyttelton Street Expenses</option>
                <option value="PROPONELYTINC">Lyttelton Street Income</option>
                <option value="PROPONELYTINS">
                  Lyttelton Street Insurance
                </option>
                <option value="MORTLYT1NATINT">
                  Lyttelton Street Nat Mortgage Interest (1)
                </option>
                <option value="MORTLYT2NATINT">
                  Lyttelton Street Nat Mortgage Interest (2)
                </option>
                <option value="MORTLYT3NATINT">
                  Lyttelton Street Nat Mortgage Interest (3)
                </option>
                <option value="PROPONELYTMANAGE">
                  Lyttelton Street Property Management
                </option>
                <option value="PROPONELYtrATES">Lyttelton Street Rates</option>
                <option value="PROPONELYtrEPAIRS">
                  Lyttelton Street Repairs
                </option>
                <option value="MORTHOPEMARACINT">
                  Marac Mortgage Interest
                </option>
                <option value="HOPEINC">Miscellaneous</option>
                <option value="HOPEEXP">Miscellaneous Expenses</option>
                <option value="REDINC">Miscellaneous Income</option>
                <option value="REDINCNOGST">
                  Miscellaneous Income (non GST)
                </option>
                <option value="KITTY">Money into Kitty</option>
                <option value="MORTLYTSOVINT">
                  Mortgage Interest - 263 Lyttelton St
                </option>
                <option value="MORTMILTHOMEINT">
                  Mortgage Interest - 74 Milton St
                </option>
                <option value="PROPONEHOPEINT">
                  Mortgage Interest - Hope Loan
                </option>
                <option value="MUSIC">Music</option>
                <option value="REDEXPOFFICE">Office expenses</option>
                <option value="HOPEINCOPEX">OPEX Refunded</option>
                <option value="PAYJ">Pay from Jacqui</option>
                <option value="PAYO">Pay from Other Source</option>
                <option value="PAYR">Pay from Rory</option>
                <option value="JACQUI">Pay to Jacqui</option>
                <option value="PEtr">Petrol</option>
                <option value="PHONE">Phone</option>
                <option value="PRESENT">Presents</option>
                <option value="REDEXPLANG">Project Expenses</option>
                <option value="REDEXPBOW">Project Expenses</option>
                <option value="HOPEMANAGE">Property Management</option>
                <option value="PROPONEEXP">Property One Expenses</option>
                <option value="PROPONEINC">Property One Income</option>
                <option value="PROPONEINTEXP">
                  Property One Interest Expense
                </option>
                <option value="PROPONETAX">Property One Tax</option>
                <option value="PROPONETAXREFUND">
                  Property One Tax Refund
                </option>
                <option value="RATES">Rates</option>
                <option value="REDTAX">Red Three Tax</option>
                <option value="REDTAXREFUND">Red Three Tax Refund</option>
                <option value="HOPEREPAIRS">Repairs and Maintenance</option>
                <option value="HOPEREPAIRSNONOPEX">
                  Repairs and Maintenance (non OPEX)
                </option>
                <option value="RORYASSETBUY">Rory Asset Purchases</option>
                <option value="RORYASSETSELL">Rory Asset Sales</option>
                <option value="RORYTAX">Rory Tax</option>
                <option value="RORYTAXREFUND">Rory Tax Refund</option>
                <option value="MORTHOPEWHITEINT">
                  Rory White Loan Interest
                </option>
                <option value="BANKR">Rory's Bank Fees</option>
                <option value="FOODR">Rory's Food</option>
                <option value="INTINR">Rory's Interest Received</option>
                <option value="OTHERR">Rory's Other</option>
                <option value="JOINTASSETSELL">Sale of Joint Assets</option>
                <option value="JOINTCAPSELL">Shared Joint Capital Sales</option>
                <option value="PROPONESHAREEARN">Shareholder Earnings</option>
                <option value="REDSHAREEARN">Shareholder Earnings</option>
                <option value="MORTHOPESTERLINGINT">
                  Sterling Trust Loan Interest
                </option>
                <option value="TITHE">Tithe</option>
                <option value="HOPEINCOMEUNIT1">Unit 01 Income</option>
                <option value="HOPEINCOMEUNIT2">Unit 02 Income</option>
                <option value="HOPEINCOMEUNIT2NOGST">
                  Unit 02 Income (Settlement)
                </option>
                <option value="HOPEINCOMEUNIT3">Unit 03 Income</option>
                <option value="HOPEINCOMEUNIT3NOGST">
                  Unit 03 Income (Settlement)
                </option>
                <option value="HOPEINCOMEUNIT5">Unit 05 Income</option>
                <option value="HOPEINCOMEUNIT5NOGST">
                  Unit 05 Income (Settlement)
                </option>
                <option value="HOPEINCOMEUNIT6">Unit 06 Income</option>
                <option value="HOPEINCOMEUNIT6NOGST">
                  Unit 06 Income (Settlement)
                </option>
                <option value="HOPEINCOMEUNIT7">Unit 07 Income</option>
                <option value="HOPEINCOMEUNIT7NOGST">
                  Unit 07 Income (Settlement)
                </option>
                <option value="HOPEINCOMEUNIT8">Unit 08 Income</option>
                <option value="HOPEINCOMEUNIT9">Unit 09 Income</option>
                <option value="HOPEINCOMEUNIT9NOGST">
                  Unit 09 Income (Settlement)
                </option>
                <option value="HOPEINCOMEUNIT10">Unit 10 Income</option>
                <option value="HOPEINCOMEUNIT10NOGST">
                  Unit 10 Income (Settlement)
                </option>
                <option value="HOPEINCOMEUNIT11">Unit 11 Income</option>
                <option value="HOPEINCOMEUNIT12">Unit 12 Income</option>
                <option value="HOPEINCOMEUNIT13">Unit 13 Income</option>
                <option value="HOPEINCOMEUNIT14">Unit 14 Income</option>
                <option value="HOPEINCOMEUNIT16">Unit 16 Income</option>
                <option value="HOPEINCOMEUNIT16NOGST">
                  Unit 16 Income (Settlement)
                </option>
                <option value="HOPEINCOMEUNIT20">Unit 20 Income</option>
                <option value="HOPEINCOMEUNIT30">Unit 30 Income</option>
                <option value="HOPEINCOMEUNIT30NOGST">
                  Unit 30 Income (Settlement)
                </option>
                <option value="HOPEINCOMEUNIT31">Unit 31 Income</option>
                <option value="HOPEINCOMEUNIT31NOGST">
                  Unit 31 Income (Settlement)
                </option>
                <option value="HOPEINCOMEUNIT32">Unit 32 Income</option>
                <option value="HOPEINCOMEUNIT32NOGST">
                  Unit 32 Income (Settlement)
                </option>
                <option value="HOPEVALUATION">Valuation</option>
                <option value="BUStrUSTTAX">White Business Trust Tax</option>
                <option value="BUStrUSTTAXREFUND">
                  White Business Trust Tax Refund
                </option>
                <option value="WV">World Vision</option>
              </select>
            </td>
            <td>
              <input name="startDate" value="1/1/2010" />
            </td>
            <td>
              <input name="endDate" value="31/12/2010" />
            </td>
            <td>
              <input type="SUBMIT" value="Transaction List" />
            </td>
          </tr>
        </table>
      </form>
      <hr />

      <HTMLComment text="Effects of Compounding" />
      <form method="POST" action="/cashflow/showCompounding">
        <table>
          <tr>
            <td>Regular Contribution ($)</td>
            <td>Interest Rate (%)</td>
            <td>Term (years)</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>
              <input name="contribution" value="100" />
            </td>
            <td>
              <input name="rate" value="10" />
            </td>
            <td>
              <input name="term" value="25" />
            </td>
            <td>
              <input type="SUBMIT" value="Compounding" />
            </td>
          </tr>
        </table>
      </form>
      <hr />
    </>
  );
}

export default CashflowIndex;
