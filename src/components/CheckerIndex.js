import React from "react";
import HTMLComment from "react-html-comment";

function CheckerIndex() {
  return (
    <>
      {/* <title>Checker - version 12.0</title> */}
      <HTMLComment text="Budget Checker" />
      <form method="POST" action="/checker/budgetChecker">
        <table>
          <tr>
            <td>
              <input type="SUBMIT" value="Budget Checker" />
            </td>
          </tr>
        </table>
      </form>
      <br />

      <HTMLComment text="Integrity Checker" />
      <form method="POST" action="/checker/integrityChecker">
        <table>
          <tr>
            <td>
              <input type="SUBMIT" value="Integrity Checker" />
            </td>
          </tr>
        </table>
      </form>
      <br />

      <HTMLComment text="Replication" />
      <form method="POST" action="/checker/synchronise">
        <table>
          <tr>
            <td>
              <input type="SUBMIT" value="Synchronise" />
            </td>
          </tr>
        </table>
      </form>
      <br />
    </>
  );
}

export default CheckerIndex;
