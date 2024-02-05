'use client'

import React from 'react'
import Button from "../components/Button"

const Counter = () => {
    const [count, setCount] = React.useState(0)

    const headleClickPlus = () => {
        setCount(count + 1)
    }

    return(
        <div className="h-screan flex flex-col justify-center items-center">
            カウンター
            <Button onClick={headleClickPlus}>+1</Button>
            <Button onClick={() => setCount(count - 1)}>-1</Button>
            {count}
        </div>
    )
}

export default Counter