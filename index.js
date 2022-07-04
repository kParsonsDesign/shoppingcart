const Store = () => {
  const [storeStock, setStoreStock] = React.useState(products);
  const [cartItems, setCartItems] = React.useState([]);
  const [totalBill, setTotalBill] = React.useState(0.00);

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
      <h1 className='pt-2 lead'>React & Strapi Store</h1>
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
          recalculateTotal={recalculateTotal} 
        />
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Store />);
