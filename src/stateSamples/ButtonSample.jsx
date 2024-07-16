import React, { useState } from 'react'

function ButtonSample() {

    const [backgroundColor, setColor] = useState("black");

    const ChangeColor = () => {
        setColor("red");
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <button onClick={ChangeColor}>Change Color</button>
            <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
                <div id="div1" style={{ backgroundColor: backgroundColor, width: "200px", height: "200px",margin:"20px", padding:"10px" }}></div>
                <div id="div2" style={{ backgroundColor: backgroundColor, width: "200px", height: "200px",margin:"20px", padding:"10px" }}></div>
            </div>
        </div>
    );
}

export default ButtonSample;
