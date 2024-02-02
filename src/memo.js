import React, { memo, useMemo } from "react"
import './App.css'

const RenderUser = memo(({ name, age, group }) => {
    console.log('Render:')
    return (
        <div className='text' style={{
            position: "absolute",
            bottom: 120,
            right: 250,
        }}>
            <h2>Name: {name}</h2>
            <b>Age: {age}</b>
            <h3>Group: {group}</h3>
        </div>
    )
})

const ParentUser = () => {
    const renderMemo = useMemo(() => <RenderUser name="Nur-mukhammed" age="17" group="32-03" />, [])

    return renderMemo
}

export default ParentUser
