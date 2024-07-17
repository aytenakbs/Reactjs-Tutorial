
import React,{useState,useEffect} from 'react'

function Suppliers() {
    const [suppliers, setSuppliers] = useState([])

    
    useEffect(() => {
        fetch("https://northwind.vercel.app/api/suppliers")
        .then(res=>res.json())
        .then(data=>setSuppliers(data))
    }, [])
    
  return <>
            <ul>
                {
                    suppliers.map(item=><li>{item.companyName}</li>)
                }
            </ul>
  </>
}

export default Suppliers