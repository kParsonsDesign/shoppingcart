const Store = () => {
  const [storeStock, setStoreStock] = React.useState(products);
  const [cartItems, setCartItems] = React.useState([]);
  const [totalBill, setTotalBill] = React.useState(0.00);
  const [storeIncome, setStoreIncome] = React.useState(0.00);

  function recalculateTotal() {
    let total = 0.00;
    cartItems.forEach((item) => {
      total += item.incart * item.price;
      total = Number(total.toFixed(2));
    });
    setTotalBill(total);
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <h1 className='pt-2 lead'>React & Strapi Store</h1>
        </div>
        <div className='col'>
          <p className='pt-2 text-end text-secondary'>Store Income: ${storeIncome.toFixed(2)}</p>
        </div>
      </div>
      <div className='row py-4 store-layout'>
        <AvailableItems 
          storeStock={storeStock} setStoreStock={setStoreStock} 
          cartItems={cartItems} setCartItems={setCartItems} 
          recalculateTotal={recalculateTotal} 
        />
        <CustomerCart 
          cartItems={cartItems} setCartItems={setCartItems} 
          storeStock={storeStock} setStoreStock={setStoreStock} 
          totalBill={totalBill} setTotalBill={setTotalBill} 
          storeIncome={storeIncome} setStoreIncome={setStoreIncome}
          recalculateTotal={recalculateTotal} 
        />
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Store />);
