import React from "react";
import HTMLComment from "react-html-comment";

function SharesIndex() {
  return (
    <>
      {/* <title>Shares - version 12.0</title> */}
      <HTMLComment text="Portfolio" />
      <form method="POST" action="/shares/showPortfolio">
        <table>
          <tr>
            <td>
              <select name="portfolio">
                <option value="60c9be47-3235-11ec-9a32-3e97e8e29a06">
                  Rory Sharesies Main
                </option>
                <option value="a12d45d5-5d27-11ec-8936-3e97e8e29a06">
                  Rory Hatch Main
                </option>
                <option value="60c9c71f-3235-11ec-9a32-3e97e8e29a06">
                  Geneva Sharesies Main
                </option>
              </select>
            </td>
            <td>
              <input type="SUBMIT" value="Show Portfolio" />
            </td>
          </tr>
        </table>
      </form>
      <br />

      <HTMLComment text="Purchase Returns" />
      <form method="POST" action="/shares/showPurchaseReturns">
        <table>
          <tr>
            <td>
              <select name="portfolio">
                <option value="60c9be47-3235-11ec-9a32-3e97e8e29a06">
                  Rory Sharesies Main
                </option>
                <option value="a12d45d5-5d27-11ec-8936-3e97e8e29a06">
                  Rory Hatch Main
                </option>
                <option value="60c9c71f-3235-11ec-9a32-3e97e8e29a06">
                  Geneva Sharesies Main
                </option>
              </select>
            </td>
            <td>
              <input TYPE="SUBMIT" VALUE="Show Purchase Returns" />
            </td>
          </tr>
        </table>
      </form>
      <br />

      <HTMLComment text="Scenario" />
      <form method="POST" action="/shares/showScenario">
        <table>
          <tr>
            <td>
              <select name="market">
                <option value="ASX">ASX</option>
                <option value="CBOE">CBOE</option>
                <option value="NASDAQ">NASDAQ</option>
                <option value="NYSE">NYSE</option>
                <option value="NYSEARCA">NYSEARCA</option>
                <option value="NZX">NZX</option>
              </select>
            </td>
            <td>
              <input name="days" value="100" />
            </td>
            <td>
              <input
                TYPE="SUBMIT"
                NAME="btnShowScenario"
                VALUE="Show Scenario"
              />
            </td>
          </tr>
        </table>
      </form>
      <br />

      <HTMLComment text="Share History" />
      <form method="POST" action="/shares/shareHistory">
        <table>
          <tr>
            <td>
              <select name="market">
                <option value="ASX">ASX</option>
                <option value="CBOE">CBOE</option>
                <option value="NASDAQ">NASDAQ</option>
                <option value="NYSE">NYSE</option>
                <option value="NYSEARCA">NYSEARCA</option>
                <option value="NZX">NZX</option>
              </select>
            </td>
            <td>
              <input name="share_code" value="" />
            </td>
            <td>
              <input
                TYPE="SUBMIT"
                NAME="btnShareHistory"
                VALUE="Share History"
              />
            </td>
          </tr>
        </table>
      </form>
      <br />

      <HTMLComment text="Show Fundamentals" />
      <form method="POST" action="/shares/showFundamentals">
        <table>
          <tr>
            <td>
              <select name="market">
                <option value="ASX">ASX</option>
                <option value="CBOE">CBOE</option>
                <option value="NASDAQ">NASDAQ</option>
                <option value="NYSE">NYSE</option>
                <option value="NYSEARCA">NYSEARCA</option>
                <option value="NZX">NZX</option>
              </select>
            </td>
            <td>
              <select name="sort_column">
                <option value="capitalisation">capitalisation</option>
                <option value="pe_ratio">pe_ratio</option>
                <option value="dividend_yield">dividend_yield</option>
                <option value="shares_issued">shares_issued</option>
                <option value="beta">beta</option>
                <option value="earnings_per_share">earnings_per_share</option>
              </select>
            </td>
            <td>
              <select name="sort_direction">
                <option value="asc">asc</option>
                <option value="desc">desc</option>
              </select>
            </td>
            <td>
              <input
                TYPE="SUBMIT"
                NAME="btnShowFundamentals"
                VALUE="Show Fundamentals"
              />
            </td>
          </tr>
        </table>
      </form>
    </>
  );
}

export default SharesIndex;
