import React from "react";
import withContext from "../hoc/withContext";

function Basket(props) {
  // console.log(props); // gettin baskets and setBaskets from withContext

  return (
    <div className="container">
      This is Basket Page,context value is {JSON.stringify(props.baskets)}
    </div>
  );
}

export default withContext(Basket);
