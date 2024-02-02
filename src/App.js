//Счётчик useCallback

import React, {memo, useCallback, useEffect, useMemo, useState} from "react";
import './App.css'
import ParentUser from "./memo";

export default function Timer() {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState('Black')
    const [run, setRun] = useState(false)
    const [visible, setVisible] = useState(false)

    const handleVisible = () =>{
        setVisible((prevVisible => !prevVisible))
    }

    useEffect(() => {
        let intervalId
        if (run) {
            intervalId = setInterval(()=>{
                setCount(handleCount => handleCount +1)
            },1000)
        }
        return () => clearInterval(intervalId)
    }, [run])
 const handlePlus = useCallback(() =>{
     setCount(count +1)
     updateColor(count +1)
 },[count])
const handleMinus = useCallback(() =>{
    setCount(count -1)
    updateColor (count -1)
},[count])
    const updateColor = (newColor) =>{
        if (newColor < 0) {
            setColor('red')
        }else {
            setColor('green')
        }
    }

    const reset = () =>{
        setRun(false)
        setCount(0)
    }

  return (
      <div style={{
          display: "flex",
          height: '100vh',
          justifyContent: "center",
          alignItems: "center",
          gap: 20
      }}>
        <span style={{color: color,
            fontSize: 25,
            fontFamily: 'Roboto',
        }}>Count: {count}</span>
        <button onClick={handlePlus}>&#10010;</button>
        <button onClick={handleMinus}>	&ndash;</button>
        <button onClick={() => setRun(!run)}>{run ? "⏸": "▶"}</button>
        <button onClick={reset}>&#8634;</button>
        <button onClick={handleVisible}>info</button>
        {visible && <ParentUser/>}
      </div>
  )
}

