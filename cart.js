const CustomerCart = ({ cartItems, setCartItems, storeStock, setStoreStock, totalBill, setTotalBill, recalculateTotal }) => {

  const qtyChange = (e) => {
    // e.preventDefault();
    const cart = [...cartItems];
    const pid = e.target.attributes.pid.nodeValue;
    const storeindex = e.target.attributes.storeindex.value;
    console.log(storeindex);
    console.log(e);
    console.log(`e.target.value: ${e.target.value}`);
    console.log(`e.target.value type: ${typeof e.target.value}`);
    
    // check for product with matching id
    let cartIndex;
    function filterById(item, index) {
      if (item.pid === pid) {
        cartIndex = index;
        return true;
      };
      return false;
    }
    cart.filter(filterById);
    
    // check if store availability is > requested qty
    // update item cart qty
    console.log(`cartIndex: ${cartIndex}`);
    console.log(cart);
    cart[cartIndex].incart = e.target.value;
    setCartItems(cart);
    // update store availability
    storeStock[storeindex].currentstock = storeStock[storeindex].originalstock - storeStock[storeindex].incart;
  }

  const handleDelete = () => {
    // delete amount from cartItems product qty
    // delete product from cartItems (don't need above?)
    // update store stock to originalstock
  }

  return (
    <div className='container my-2 px-0 rounded border cart-container'>
      <h3 className='bg-secondary p-2 rounded-top' style={{"--bs-bg-opacity": 0.1}}>Your Cart</h3>

      <div className='cart-contents-container'>
      <CheckOut cartItems={cartItems} totalBill={totalBill} setTotalBill={setTotalBill} recalculateTotal={recalculateTotal} />

      <div className='cart-items-container'>
      {cartItems.length === 0 ? 
        <p className='m-3'>Time to do some shopping!</p>
      : <div className='container p-1 sticky-top bg-white'>
          <div className='row ps-2' style={{paddingRight: 30}}>
            <div className='col-6 h6 fw-bold'>Item</div>
            <div className='col-2 h6 fw-bold'>Qty</div>
            <div className='col-4 h6 fw-bold text-end pe-4'>Total</div>
          </div>
        </div>
      }

      {cartItems.map((product, index) => {
        {/* const storeMatch = storeStock.filter */}
        return (
          <div className='accordion accordion-flush border-bottom' id={'cartAccordion-' + product.pid} key={index}>
            {/* Product Template */}
            <div className='accordion-item' key={index}>
              <h6 className='accordion-header' id={'cartProduct' + index}>
              {/* Cart Item Header */}
                <button className='accordion-button collapsed p-2' type='button' data-bs-toggle="collapse" data-bs-target={'#collapse' + index} aria-expanded="false" aria-controls={'collapse' + index}>
                  <span className='col-6'>{product.name}</span>
                  <span className='col-2'>({product.incart})</span>
                  <span className='col-3 text-end pe-3'>${product.price * product.incart}</span>
                </button>
              </h6>
              {/* Cart Item Body - Dropdown */}
              <div id={'collapse' + index} className='accordion-collapse collapse' aria-labelledby={'cartProduct' + index} data-bs-parent={"#cartAccordion" + product.pid}>
                <div className='accordion-body p-3'>
                  <p>{product.brand} {product.name + ' - ' + product.type}</p>
                  <div className='cart-product-qty-row'>
                    <div className='cart-product-qty'>
                      <span className='input-group input-group-sm'>
                        <span className='input-group-text'>{product.price + ' each'}</span>
                        <input id={'qty-' + product.pid} className='form-control-sm' 
                          type="number" size="4" min="0" max={storeStock[product.storeindex].originalstock} value={product.incart} onChange={qtyChange} pid={product.pid} storeindex={product.storeindex} />
                        {/* <button className='btn btn-outline-secondary'>Update</button> */}
                      </span>
                    </div> 
                    <button className='btn btn-outline-danger btn-sm cart-product-delete'>Delete</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      </div></div>
    </div>
  );
};

const cartProducts = [
  {
    name: "Raspberries",
    type: "Red",
    brand: "Driscoll's",
    size: "6 oz",
    origin: { country: "USA", state: "CA", city: "Oxnard" },
    price: 4.99,
    instock: 2,
    image:
      "https://www.freshdirect.com/media/images/product/fruit_2/br_raspbrry_z.jpg?lastModify=2016-11-29",
  },
  {
    name: "Grapes",
    type: "Red Seedless",
    brand: "Fresh Link",
    size: "32 oz",
    origin: { country: "USA", state: "CA", city: "Visalia" },
    price: 4.99,
    instock: 1,
    image: 'http://specialtyproduce.com/sppics/1223.png'
  }
];
