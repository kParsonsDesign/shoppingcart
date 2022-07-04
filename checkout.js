const CheckOut = ({ cartItems, totalBill, setTotalBill, recalculateTotal }) => {
  // update cart checkout total
  React.useEffect(() => {
    recalculateTotal();
  }, [cartItems]);

  const checkout = () => {};

  return (

        <div className="px-2 pt-2 pb-3 text-end border-bottom border-2 mb-2 checkout-container">
          <span className="px-3 align-middle">Total: <span className="fw-semibold">${totalBill}</span></span>
          <button className="btn btn-outline-success text-end">Checkout</button>
        </div>

  );
}
