import React from "react";
import HTMLComment from "react-html-comment";

function BankingIndex() {
  return (
    <>
      {/* <title>Banking - version 12.0</title> */}
      <form method="POST" action="/banking/reconcileSummary">
        <table>
          <tr>
            <td>
              <B>Online Reconciliation Summary</B>
              <input TYPE="SUBMIT" NAME="btnQuickPost" VALUE="Quick Post" />
              <input TYPE="HIDDEN" NAME="quickPost" VALUE="1" />
            </td>
          </tr>
        </table>
      </form>
      <table BORDER="1">
        <tr>
          <td ALIGN="center">
            <b>Account</b>
          </td>
          <td align="center">
            <b>Bank</b>
          </td>
          <td align="center">
            <b>Journal</b>
          </td>
          <td align="center">
            <b>Discrepancy</b>
          </td>
          <td align="center">
            <b>Last Balance</b>
          </td>
        </tr>
        <tr>
          <td align="center">
            <b>&nbsp;</b>
          </td>
          <td align="center">
            <b>Balance</b>
          </td>
          <td align="center">
            <b>Balance</b>
          </td>
          <td align="center">
            <b>&nbsp;</b>
          </td>
          <td align="center">
            <b>Date</b>
          </td>
        </tr>
        <HTMLComment text="format the output" />
        <tr>
          <td align="center">
            {" "}
            <a href="/banking/reconcileAccount?account_id=153">PROPONEASB</a>
          </td>
          <td></td>
          <td align="right">23914.63</td>
          <td></td>
          <td align="center">
            <font color="black">01/10/2022</font>
          </td>
        </tr>
        <tr>
          <td align="center">
            {" "}
            <a href="/banking/reconcileAccount?account_id=216">JOINTASB</a>
          </td>
          <td></td>
          <td align="right">129630.88</td>
          <td></td>
          <td align="center">
            <font color="black">01/10/2022</font>
          </td>
        </tr>
        <tr>
          <td align="center">
            {" "}
            <a href="/banking/reconcileAccount?account_id=218">BUStrUSTASB</a>
          </td>
          <td></td>
          <td align="right">6177.23</td>
          <td></td>
          <td align="center">
            <font color="black">01/10/2022</font>
          </td>
        </tr>
        <tr>
          <td align="center">
            {" "}
            <a href="/banking/reconcileAccount?account_id=239">GENEVAASB</a>
          </td>
          <td></td>
          <td align="right">3559.19</td>
          <td></td>
          <td align="center">
            <font color="black">01/10/2022</font>
          </td>
        </tr>
        <tr>
          <td align="center">
            {" "}
            <a href="/banking/reconcileAccount?account_id=240">ASBVISA</a>
          </td>
          <td></td>
          <td align="right">161.12</td>
          <td></td>
          <td align="center">
            <font color="black">01/10/2022</font>
          </td>
        </tr>
        <tr>
          <td align="center">
            {" "}
            <a href="/banking/reconcileAccount?account_id=245">REDASB</a>
          </td>
          <td></td>
          <td align="right">13173.21</td>
          <td></td>
          <td align="center">
            <font color="black">01/10/2022</font>
          </td>
        </tr>
        <tr>
          <td align="center">
            {" "}
            <a href="/banking/reconcileAccount?account_id=247">EUROASB</a>
          </td>
          <td></td>
          <td align="right">0.21</td>
          <td></td>
          <td align="center">
            <font color="black">01/10/2022</font>
          </td>
        </tr>
        <tr>
          <td align="center">
            {" "}
            <a href="/banking/reconcileAccount?account_id=259">KIWICHEQ</a>
          </td>
          <td></td>
          <td align="right">7782.17</td>
          <td></td>
          <td align="center">
            <font color="black">01/10/2022</font>
          </td>
        </tr>
        <tr>
          <td align="center">
            {" "}
            <a href="/banking/reconcileAccount?account_id=261">RABOSAVE</a>
          </td>
          <td></td>
          <td align="right">0.00</td>
          <td></td>
          <td align="center">
            <font color="black">01/10/2022</font>
          </td>
        </tr>
        <tr>
          <td align="center">
            {" "}
            <a href="/banking/reconcileAccount?account_id=263">ANZCHEQ1</a>
          </td>
          <td></td>
          <td align="right">1843.77</td>
          <td></td>
          <td align="center">
            <font color="black">01/10/2022</font>
          </td>
        </tr>
        <tr>
          <td align="center">
            {" "}
            <a href="/banking/reconcileAccount?account_id=264">AROHAASB</a>
          </td>
          <td></td>
          <td align="right">3340.50</td>
          <td></td>
          <td align="center">
            <font color="black">01/10/2022</font>
          </td>
        </tr>
        <tr>
          <td align="center">
            {" "}
            <a href="/banking/reconcileAccount?account_id=268">SABADELL</a>
          </td>
          <td></td>
          <td align="right">2344.72</td>
          <td></td>
          <td align="center">
            <font color="black">01/10/2022</font>
          </td>
        </tr>
        <tr>
          <td align="center">
            {" "}
            <a href="/banking/reconcileAccount?account_id=269">HOHMEDASB</a>
          </td>
          <td></td>
          <td align="right">0.00</td>
          <td></td>
          <td align="center">
            <font color="black">01/10/2022</font>
          </td>
        </tr>
        <tr>
          <td align="center">
            {" "}
            <a href="/banking/reconcileAccount?account_id=273">SHARESRORY</a>
          </td>
          <td></td>
          <td align="right">15500.00</td>
          <td></td>
          <td align="center">
            <font color="black">01/10/2022</font>
          </td>
        </tr>
        <tr>
          <td align="center">
            {" "}
            <a href="/banking/reconcileAccount?account_id=274">SHARESGENEVA</a>
          </td>
          <td></td>
          <td align="right">12000.00</td>
          <td></td>
          <td align="center">
            <font color="black">01/10/2022</font>
          </td>
        </tr>
        <tr>
          <td align="center">
            {" "}
            <a href="/banking/reconcileAccount?account_id=275">HATCHRORY</a>
          </td>
          <td></td>
          <td align="right">3350.36</td>
          <td></td>
          <td align="center">
            <font color="black">01/10/2022</font>
          </td>
        </tr>
        <tr>
          <td align="center">
            {" "}
            <a href="/banking/reconcileAccount?account_id=279">NBHPROPMANAGE</a>
          </td>
          <td></td>
          <td align="right">1589.56</td>
          <td></td>
          <td align="center">
            <font color="black">03/10/2022</font>
          </td>
        </tr>
        <tr>
          <td align="center">
            {" "}
            <a href="/banking/reconcileAccount?account_id=280">N26</a>
          </td>
          <td></td>
          <td align="right">100.00</td>
          <td></td>
          <td align="center">
            <font color="black">01/10/2022</font>
          </td>
        </tr>
      </table>
    </>
  );
}

export default BankingIndex;
