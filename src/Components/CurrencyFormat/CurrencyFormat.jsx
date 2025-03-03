import React from "react";
import numeral from "numeral";


// currency format imported frrom numeral

 const CurrencyFormat =({amount})=>{
const formattedamount = numeral(amount).format("$0,0.00")
return <div>{formattedamount}</div>
}
export default CurrencyFormat