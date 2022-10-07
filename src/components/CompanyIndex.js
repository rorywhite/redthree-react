import React from "react";
import HTMLComment from "react-html-comment";

function CompanyIndex() {
  return (
    <>
      {/* <title>Company - version 12.0</title> */}
      <b>GST Processing</b>
      <br />

      <HTMLComment text="Transaction List" />
      <form method="POST" action="/company/transactionList">
        <table>
          <tr>
            <td>Company</td>
            <td>Start Date</td>
            <td>End Date</td>
            <td>Show Lines</td>
            <td>Extra Columns</td>
            <td>Notes</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>
              <select name="company">
                <option value="1">Household - Rory</option>
                <option value="2">Household - Jacqui</option>
                <option value="3">Household - Shared</option>
                <option value="7">Companies - Property One</option>
                <option value="9">Household - All</option>
                <option value="11">Companies - All</option>
                <option value="13">All</option>
                <option value="16">White Family Trust</option>
                <option value="17">263 Lyttelton Street</option>
                <option value="18">All Except Hope and Family Trust</option>
                <option value="20">Leven Street Commercial</option>
                <option value="21">118 Bowhill Road</option>
                <option value="22">81 Langdons Road</option>
                <option value="23">Hope Investment Properties</option>
                <option value="24">
                  All Except Hope Investment Properties
                </option>
                <option value="26">Household - Adelaide</option>
                <option value="27">Household - Geneva</option>
                <option value="28">Household - Emily</option>
                <option value="29">White Business Trust</option>
                <option value="30">Golden Projects Limited</option>
                <option value="31">Red Three Limited</option>
                <option value="33">Aroha Support</option>
                <option value="34">Home of Hope Medical Support</option>
                <option value="35">Coronado Apartment</option>
              </select>
            </td>
            <td>
              <input name="startDate" value="1/4/2009" />
            </td>
            <td>
              <input name="endDate" value="31/3/2010" />
            </td>
            <td>
              <input type="checkbox" name="lines" checked value="1" />
            </td>
            <td>
              <input type="checkbox" name="extraColumns" checked value="1" />
            </td>
            <td>
              <input type="checkbox" name="messages" checked value="1" />
            </td>
            <td>
              <input type="SUBMIT" value="Transaction List" />
            </td>
          </tr>
        </table>
      </form>
      <br />

      <HTMLComment text="View Account" />
      <form method="POST" action="/cashflow/showAccount">
        <table>
          <tr>
            <td>
              <select name="account">
                <option value="GOLDGST">Golden Projects GST account</option>
                <option value="HOPEGST">
                  Hope Investment Properties GST account
                </option>
                <option value="REDGST">Red Three GST account</option>
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
      <b>Reports</b>
      <br />

      <HTMLComment text="Financial Performance" />
      <form method="POST" action="/company/financialPerformance">
        <table>
          <tr>
            <td>
              <select name="company">
                <option value="1">Household - Rory</option>
                <option value="2">Household - Jacqui</option>
                <option value="3">Household - Shared</option>
                <option value="7">Companies - Property One</option>
                <option value="9">Household - All</option>
                <option value="11">Companies - All</option>
                <option value="13">All</option>
                <option value="16">White Family Trust</option>
                <option value="17">263 Lyttelton Street</option>
                <option value="18">All Except Hope and Family Trust</option>
                <option value="20">Leven Street Commercial</option>
                <option value="21">118 Bowhill Road</option>
                <option value="22">81 Langdons Road</option>
                <option value="23">Hope Investment Properties</option>
                <option value="24">
                  All Except Hope Investment Properties
                </option>
                <option value="26">Household - Adelaide</option>
                <option value="27">Household - Geneva</option>
                <option value="28">Household - Emily</option>
                <option value="29">White Business Trust</option>
                <option value="30">Golden Projects Limited</option>
                <option value="31">Red Three Limited</option>
                <option value="33">Aroha Support</option>
                <option value="34">Home of Hope Medical Support</option>
                <option value="35">Coronado Apartment</option>
              </select>
            </td>
            <td>
              <input name="startDate" value="1/4/2009" />
            </td>
            <td>
              <input name="endDate" value="31/3/2010" />
            </td>
            <td>
              <input type="SUBMIT" value="Financial Performance" />
            </td>
          </tr>
        </table>
      </form>
      <br />

      <HTMLComment text="Financial Position" />
      <form method="POST" action="/company/financialPosition">
        <table>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>Market Value</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>
              <select name="company">
                <option value="1">Household - Rory</option>
                <option value="2">Household - Jacqui</option>
                <option value="3">Household - Shared</option>
                <option value="7">Companies - Property One</option>
                <option value="9">Household - All</option>
                <option value="11">Companies - All</option>
                <option value="13">All</option>
                <option value="16">White Family Trust</option>
                <option value="17">263 Lyttelton Street</option>
                <option value="18">All Except Hope and Family Trust</option>
                <option value="20">Leven Street Commercial</option>
                <option value="21">118 Bowhill Road</option>
                <option value="22">81 Langdons Road</option>
                <option value="23">Hope Investment Properties</option>
                <option value="24">
                  All Except Hope Investment Properties
                </option>
                <option value="26">Household - Adelaide</option>
                <option value="27">Household - Geneva</option>
                <option value="28">Household - Emily</option>
                <option value="29">White Business Trust</option>
                <option value="30">Golden Projects Limited</option>
                <option value="31">Red Three Limited</option>
                <option value="33">Aroha Support</option>
                <option value="34">Home of Hope Medical Support</option>
                <option value="35">Coronado Apartment</option>
              </select>
            </td>
            <td>
              <input name="balanceDate" value="07/10/2022" />
            </td>
            <td>
              <input type="checkbox" name="marketValue" checked value="1" />
            </td>
            <td>
              <input type="SUBMIT" value="Financial Position" />
            </td>
          </tr>
        </table>
      </form>
      <br />

      <HTMLComment text="Asset Schedule" />
      <form method="POST" action="/company/depreciationSchedule">
        <table>
          <tr>
            <td>
              <select name="asset">
                <option value="93">Household furnishings</option>
                <option value="147">263 Lyttelton Street</option>
                <option value="148">23 Huntsbury Ave</option>
                <option value="171">Leven Street Commercial</option>
                <option value="179">Toyota Caldina</option>
                <option value="185">118 Bowhill Road</option>
                <option value="188">81 Langdons Road</option>
                <option value="199">BMW 325i</option>
                <option value="201">456 Colombo Street</option>
                <option value="202">Toyota RAV4</option>
                <option value="203">Coronado Apartment</option>
              </select>
            </td>
            <td>
              <input name="finYear" value="2017" />
            </td>
            <td>
              <input TYPE="SUBMIT" VALUE="Depreciation Schedule" />
            </td>
          </tr>
        </table>
      </form>

      <hr />
      <b>Extras</b>
      <br />

      <HTMLComment text="Net Worth Graph" />
      <form method="POST" action="/company/graphNetWorth">
        <table>
          <tr>
            <td>Company</td>
            <td>Start Year</td>
            <td>End Year</td>
            <td>Text Table Only</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>
              <select name="company">
                <option value="1">Household - Rory</option>
                <option value="2">Household - Jacqui</option>
                <option value="3">Household - Shared</option>
                <option value="7">Companies - Property One</option>
                <option value="9">Household - All</option>
                <option value="11">Companies - All</option>
                <option value="13">All</option>
                <option value="16">White Family Trust</option>
                <option value="17">263 Lyttelton Street</option>
                <option value="18">All Except Hope and Family Trust</option>
                <option value="20">Leven Street Commercial</option>
                <option value="21">118 Bowhill Road</option>
                <option value="22">81 Langdons Road</option>
                <option value="23">Hope Investment Properties</option>
                <option value="24">
                  All Except Hope Investment Properties
                </option>
                <option value="26">Household - Adelaide</option>
                <option value="27">Household - Geneva</option>
                <option value="28">Household - Emily</option>
                <option value="29">White Business Trust</option>
                <option value="30">Golden Projects Limited</option>
                <option value="31">Red Three Limited</option>
                <option value="33">Aroha Support</option>
                <option value="34">Home of Hope Medical Support</option>
                <option value="35">Coronado Apartment</option>
              </select>
            </td>
            <HTMLComment text="start year" />
            <td>
              <select name="startYear">
                <option value="1993">1993</option>
                <option value="1994">1994</option>
                <option value="1995">1995</option>
                <option value="1996">1996</option>
                <option value="1997">1997</option>
                <option value="1998">1998</option>
                <option value="1999">1999</option>
                <option value="2000">2000</option>
                <option value="2001">2001</option>
                <option value="2002">2002</option>
                <option value="2003">2003</option>
                <option value="2004">2004</option>
                <option value="2005">2005</option>
                <option value="2006">2006</option>
                <option value="2007">2007</option>
                <option value="2008">2008</option>
                <option value="2009">2009</option>
                <option value="2010">2010</option>
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
              </select>
            </td>
            <HTMLComment text="end year" />
            <td>
              <select name="endYear">
                <option value="1993">1993</option>
                <option value="1994">1994</option>
                <option value="1995">1995</option>
                <option value="1996">1996</option>
                <option value="1997">1997</option>
                <option value="1998">1998</option>
                <option value="1999">1999</option>
                <option value="2000">2000</option>
                <option value="2001">2001</option>
                <option value="2002">2002</option>
                <option value="2003">2003</option>
                <option value="2004">2004</option>
                <option value="2005">2005</option>
                <option value="2006">2006</option>
                <option value="2007">2007</option>
                <option value="2008">2008</option>
                <option value="2009">2009</option>
                <option value="2010">2010</option>
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
              </select>
            </td>
            <td>
              <input type="checkbox" name="textOnly" value="1" />
            </td>
            <td>
              <input type="SUBMIT" value="Graph Net Worth" />
            </td>
          </tr>
        </table>
      </form>

      <HTMLComment text="EBDT Graph" />
      <form method="POST" action="/company/graphEbdt">
        <table>
          <tr>
            <td>Company</td>
            <td>Start Year</td>
            <td>End Year</td>
            <td>Text Table Only</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <HTMLComment text="company" />
            <td>
              <select name="company">
                <option value="1">Household - Rory</option>
                <option value="2">Household - Jacqui</option>
                <option value="3">Household - Shared</option>
                <option value="7">Companies - Property One</option>
                <option value="9">Household - All</option>
                <option value="11">Companies - All</option>
                <option value="13">All</option>
                <option value="16">White Family Trust</option>
                <option value="17">263 Lyttelton Street</option>
                <option value="18">All Except Hope and Family Trust</option>
                <option value="20">Leven Street Commercial</option>
                <option value="21">118 Bowhill Road</option>
                <option value="22">81 Langdons Road</option>
                <option value="23">Hope Investment Properties</option>
                <option value="24">
                  All Except Hope Investment Properties
                </option>
                <option value="26">Household - Adelaide</option>
                <option value="27">Household - Geneva</option>
                <option value="28">Household - Emily</option>
                <option value="29">White Business Trust</option>
                <option value="30">Golden Projects Limited</option>
                <option value="31">Red Three Limited</option>
                <option value="33">Aroha Support</option>
                <option value="34">Home of Hope Medical Support</option>
                <option value="35">Coronado Apartment</option>
              </select>
            </td>
            <HTMLComment text="start year" />
            <td>
              <select name="startYear">
                <option value="1993">1993</option>
                <option value="1994">1994</option>
                <option value="1995">1995</option>
                <option value="1996">1996</option>
                <option value="1997">1997</option>
                <option value="1998">1998</option>
                <option value="1999">1999</option>
                <option value="2000">2000</option>
                <option value="2001">2001</option>
                <option value="2002">2002</option>
                <option value="2003">2003</option>
                <option value="2004">2004</option>
                <option value="2005">2005</option>
                <option value="2006">2006</option>
                <option value="2007">2007</option>
                <option value="2008">2008</option>
                <option value="2009">2009</option>
                <option value="2010">2010</option>
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
              </select>
            </td>
            <HTMLComment text="end year" />
            <td>
              <select name="endYear">
                <option value="1993">1993</option>
                <option value="1994">1994</option>
                <option value="1995">1995</option>
                <option value="1996">1996</option>
                <option value="1997">1997</option>
                <option value="1998">1998</option>
                <option value="1999">1999</option>
                <option value="2000">2000</option>
                <option value="2001">2001</option>
                <option value="2002">2002</option>
                <option value="2003">2003</option>
                <option value="2004">2004</option>
                <option value="2005">2005</option>
                <option value="2006">2006</option>
                <option value="2007">2007</option>
                <option value="2008">2008</option>
                <option value="2009">2009</option>
                <option value="2010">2010</option>
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
              </select>
            </td>
            <td>
              <input type="checkbox" name="textOnly" value="1" />
            </td>
            <td>
              <input type="SUBMIT" value="Graph EBDT" />
            </td>
          </tr>
        </table>
      </form>

      <HTMLComment text="EBIDT Graph" />
      <form method="POST" action="/company/graphEbidt">
        <table>
          <tr>
            <td>Company</td>
            <td>Start Year</td>
            <td>End Year</td>
            <td>Text Table Only</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <HTMLComment text="company" />
            <td>
              <select name="company">
                <option value="1">Household - Rory</option>
                <option value="2">Household - Jacqui</option>
                <option value="3">Household - Shared</option>
                <option value="7">Companies - Property One</option>
                <option value="9">Household - All</option>
                <option value="11">Companies - All</option>
                <option value="13">All</option>
                <option value="16">White Family Trust</option>
                <option value="17">263 Lyttelton Street</option>
                <option value="18">All Except Hope and Family Trust</option>
                <option value="20">Leven Street Commercial</option>
                <option value="21">118 Bowhill Road</option>
                <option value="22">81 Langdons Road</option>
                <option value="23">Hope Investment Properties</option>
                <option value="24">
                  All Except Hope Investment Properties
                </option>
                <option value="26">Household - Adelaide</option>
                <option value="27">Household - Geneva</option>
                <option value="28">Household - Emily</option>
                <option value="29">White Business Trust</option>
                <option value="30">Golden Projects Limited</option>
                <option value="31">Red Three Limited</option>
                <option value="33">Aroha Support</option>
                <option value="34">Home of Hope Medical Support</option>
                <option value="35">Coronado Apartment</option>
              </select>
            </td>
            <HTMLComment text="start year" />
            <td>
              <select name="startYear">
                <option value="1993">1993</option>
                <option value="1994">1994</option>
                <option value="1995">1995</option>
                <option value="1996">1996</option>
                <option value="1997">1997</option>
                <option value="1998">1998</option>
                <option value="1999">1999</option>
                <option value="2000">2000</option>
                <option value="2001">2001</option>
                <option value="2002">2002</option>
                <option value="2003">2003</option>
                <option value="2004">2004</option>
                <option value="2005">2005</option>
                <option value="2006">2006</option>
                <option value="2007">2007</option>
                <option value="2008">2008</option>
                <option value="2009">2009</option>
                <option value="2010">2010</option>
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
              </select>
            </td>
            <HTMLComment text="end year" />
            <td>
              <select name="endYear">
                <option value="1993">1993</option>
                <option value="1994">1994</option>
                <option value="1995">1995</option>
                <option value="1996">1996</option>
                <option value="1997">1997</option>
                <option value="1998">1998</option>
                <option value="1999">1999</option>
                <option value="2000">2000</option>
                <option value="2001">2001</option>
                <option value="2002">2002</option>
                <option value="2003">2003</option>
                <option value="2004">2004</option>
                <option value="2005">2005</option>
                <option value="2006">2006</option>
                <option value="2007">2007</option>
                <option value="2008">2008</option>
                <option value="2009">2009</option>
                <option value="2010">2010</option>
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
              </select>
            </td>
            <td>
              <input type="checkbox" name="textOnly" value="1" />
            </td>
            <td>
              <input type="SUBMIT" value="Graph EBIDT" />
            </td>
          </tr>
        </table>
      </form>
    </>
  );
}

export default CompanyIndex;
