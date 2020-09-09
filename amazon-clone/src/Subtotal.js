import React from 'react'
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";

function Subtotal() {
    return (
        <div className="subtotal">
            <CurrencyFormat 
            renderText={(value) => (
                <>
                    <p>
                        {/* homework */}
                        {/* {basket.length} */}
                        Subtotal (0 items):
                        {/* {`${value}`} */}
                        <strong>0</strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox" /> This order contains a gift

                    </small>
                </>
            )}
            decimalScale={2}
            // {getBasketTotal(basket)}
            value={0} // homework
            displayType={"text"}
            thouandSeparator={true}
            prefix={"$"}
            />
            <button> Proceed to checkout</button>

        </div>
    )
}

export default Subtotal
