import React, { useState } from 'react';

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [unitsInStock, setUnitsInStock] = useState(0);
  const add=()=>{
    axios.post("https://northwind.vercel.api/api/products",
        {
            name:name,
            unitPrice:price,
            unitsInStock:unitsInStock
        }
    )
    .then(res=>{
        alert("Ürün ekleme işlemi başarılı")
    })

  }

  return (
    <>
      <div>
        <label>Name</label>
        <input type='text' onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Price</label>
        <input type='number' onChange={(e) => setPrice(parseFloat(e.target.value))} />
      </div>
      <div>
        <label>Units In Stock</label>
        <input type='number' onChange={(e) => setUnitsInStock(parseInt(e.target.value))} />
      </div>
      <div><button onClick={add}>Add</button></div>
    </>
  );
}

export default AddProduct;
