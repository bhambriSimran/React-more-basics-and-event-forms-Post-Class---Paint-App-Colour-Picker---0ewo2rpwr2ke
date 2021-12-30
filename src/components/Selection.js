import React, { useState } from 'react'

export default function Selection({applyColor}) {

    const[background,setBackground] = useState({background:''})
    return (
        <div
      style={background}
      onClick={() => applyColor(setBackground)}
      className="fix-box">
      <h2 className="subheading">Selection</h2>
    </div>
    )
}

