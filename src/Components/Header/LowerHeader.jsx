import React from "react";
import Classes from "./Header.module.css"
import { RiMenuLine } from "react-icons/ri";

function LowerHeader() {
  return (
    <div className={Classes.lower_container}>
      <ul>
        <li>
          <RiMenuLine />
        </li>
        <li>All</li>
        <li>Today's Deels</li>
        <li>Customer Service</li>
        <li>Registry</li>
        <li> Gift Cards</li>
        <li>Sell </li>
      </ul>
    </div>
  );
}

export default LowerHeader;
