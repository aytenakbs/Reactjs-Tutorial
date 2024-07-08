import React from 'react';

function ProductPages() {
    let products = [
        {
            id: 1,
            name: "Product1",
            price: 100
        },
        {
            id: 2,
            name: "Product2",
            price: 200
        },
        {
            id: 3,
            name: "Product3",
            price: 300
        }
    ];

    let bodyStyle = {
        fontFamily: 'Arial, sans-serif',
        margin: '0',
        padding: '20px'
    };

    let h1Style = {
        color: '#333',
        textAlign: 'center',
        marginBottom: '20px'
    };

    let tableStyle = {
        width: '100%',
        borderCollapse: 'collapse',
        margin: '20px 0'
    };

    let theadStyle = {
        backgroundColor: '#f2f2f2'
    };

    let thStyle = {
        border: '1px solid #ddd',
        padding: '8px',
        textAlign: 'left',
        backgroundColor: '#4CAF50',
        color: 'white'
    };

    let tdStyle = {
        border: '1px solid #ddd',
        padding: '8px',
        textAlign: 'left'
    };

    let tbodyEvenStyle = {
        backgroundColor: '#f9f9f9'
    };

    let tbodyHoverStyle = {
        backgroundColor: '#f1f1f1'
    };

    let title = "Product List";

    return (
        <>
            <h1 style={h1Style}>{title}</h1>
            <table style={tableStyle}>
                <thead style={theadStyle}>
                    <tr>
                        <th style={thStyle}>Id</th>
                        <th style={thStyle}>Name</th>
                        <th style={thStyle}>Price</th>
                    </tr>
                </thead>
                <tbody style={bodyStyle}>
                    {products.map(item => (
                        <tr key={item.id} style={item.id % 2 === 0 ? tbodyEvenStyle : tbodyHoverStyle}>
                            <td style={tdStyle}>{item.id}</td>
                            <td style={tdStyle}>{item.name}</td>
                            <td style={tdStyle}>{item.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default ProductPages;
