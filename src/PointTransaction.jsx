import React from "react";
import "./styles.css";
import RedeemPoints from "./components/redeemPoints";
import AddTransaction from "./components/addTransaction";
import GetBalance from "./components/getBalance";

export default class PointTransaction extends React.Component {
  render() {
    return (
      <div>
          <ul className="grid">
              <li className="item">
                  <GetBalance/>
              </li>
              <li className="item">
                  <RedeemPoints/>
              </li>
              <li className="item">
                  <AddTransaction/>
              </li>
          </ul>

      </div>
    );
  }
}
