import React from 'react'

function AddSupplier() {
    const [companyName, setCompanyName] = useState("")
    const [contactName, setContactName] = useState("")
    const [contactTitle, setContactTitle] = useState("")
    const add = () => {
        axios.post("https://northwind.vercel.api/api/suppliers",{
            companyName:companyName,
            contactName:contactName,
            contactTitle:contactTitle
        })
        .then(res=>{
            alert("rün ekelem işlemi başarılı.")
        })
    }
    return (
        <>
            <div>
                <div>
                    <label>Company Name</label>
                    <input type='text' onChange={(e) => setCompanyName(e.target.value)} />
                </div>
                <div>
                    <label>Contact Name</label>
                    <input type='text' onChange={(e) => setContactName(e.target.value)} />
                </div>
                <div>
                    <label>Contact Title</label>
                    <input type='text' onChange={(e) => setContactTitle(e.target.value)} />
                </div>
                <div>
                    <button onClick={add}>Add</button>
                </div>
            </div>
        </>
    )
}

export default AddSupplier