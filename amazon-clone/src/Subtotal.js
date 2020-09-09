import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";

function Subtotal() {
  const [{ basket }] = useStateValue();

  const getBasketTotal = () => {
    return basket?.reduce((acc, currentValue) => acc + currentValue.price, 0);
  };

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* homework */}
              Subtotal ({basket.length} items):
              {/* {`${value}`} */}
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        // {getBasketTotal(basket)}
        value={getBasketTotal()} // homework
        displayType={"text"}
        thouandSeparator={true}
        prefix={"$"}
      />
      <button> Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
