
import React,{useState} from 'react'

function ChangeColor() {
    const [color, setColor] = useState("red")
    let colors=["yellow","black","green","orange","purple","gray"]
    const Change=()=>{
        var randomColorIndex=Math.floor(Math.random()*colors.length)
        setColor(colors[randomColorIndex])
    }
  return <>
   
        <button onClick={Change}>Change Color</button>
        <div style={{width:200,height:200,background:color}}></div>
        
  </>
}

export default ChangeColor