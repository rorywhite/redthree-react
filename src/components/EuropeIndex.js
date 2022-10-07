import React from "react";

function EuropeIndex() {
  return (
    <>
      {/* <title>Europe - version 12.0</title> */}
      <form method="POST" action="/europe/showSearchResults">
        <table>
          <tr>
            <td>
              <select name="search_id">
                <option value="243aa74e-f4e6-11e8-ac93-642aa6c3e018">
                  Alicante by lowest price
                </option>
                <option value="2434f74e-f4e6-11e8-ac93-642aa6c3e018">
                  Barcelona by lowest price
                </option>
                <option value="24aaf74e-f4e6-11e8-ac93-642aa6c3e018">
                  Latest within 10kms of Barcelona
                </option>
                <option value="60094e58-f3ae-11e8-ac93-642aa6c3e018">
                  Latest within 12kms of Malaga
                </option>
                <option value="dd0e0f3a-cce5-11e9-bb8a-52accc131e5e">
                  Nerja - 2 beds, 2 baths by Price
                </option>
                <option value="dd0e0f3a-cce5-11e9-bb8a-52ac6b131e5e">
                  Nerja - All by price
                </option>
                <option value="dd0e0f3a-bae5-11e9-bb8a-52accc131e5e">
                  Nerja - by Most Recent
                </option>
                <option value="dd0e0f3a-bff5-11e9-bb8a-52accc131e5e">
                  Nerja - by Ranking / Price
                </option>
                <option value="dd0e0f3a-bff5-11e9-ac8a-52accc131e5e">
                  Nerja - Garages For Sale
                </option>
                <option value="dd0e0f3a-bff5-11e9-bb8a-52adec131e5e">
                  Nerja - No Ranking by Price Asc
                </option>
                <option value="dd0e0f3a-ba75-11e9-bb8a-52a76c131e5e">
                  Nerja - Ranking of 8 by Price
                </option>
                <option value="dd0e0f3a-bff5-11e9-bb8a-52a76c131e5e">
                  Nerja - with Errors
                </option>
                <option value="ac8a92c2-b2f8-11e9-9e7e-045ab6836c94">
                  Nerja by Price
                </option>
                <option value="accc92c2-b2f8-11e9-9e7e-045ab6836c94">
                  Nerja by Proximity to Balcon de Europa
                </option>
                <option value="60084e58-f3ae-11e8-ac93-642aa6c3e018">
                  Spain by Lowest Price
                </option>
                <option value="6cc84e58-f3ae-11e8-ac93-642aa6c3e018">
                  Spanish Villas by Lowest Price
                </option>
              </select>
            </td>
            <td>
              <input type="SUBMIT" name="btnView" value="View" />
            </td>
          </tr>
        </table>
      </form>
    </>
  );
}

export default EuropeIndex;
