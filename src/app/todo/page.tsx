'use client'

import React, { useState } from "react"
import Button from "../components/Button"
import {List,ListItem,ListIcon,OrderedList,UnorderedList,} from '@chakra-ui/react'


const TODO = () => {
    const [value, setValue] = useState("")
    const [todos, setTodos] = useState<string[]>([])
    

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    const handleClick = () => {
        setTodos([...todos,value])
    }

    return(
        <div className="h-screan flex flex-col justify-center items-center gap-4">
            TODO
            <div>
                <input value={value} onChange={handleChange}/>
                <Button onClick={handleClick}>
                追加
                </Button>
            </div>
            <div>
                <UnorderedList>
                    {todos.map((todo) => (
                        <ListItem key={todo}>{todo}</ListItem>
                    ))}
                </UnorderedList>
            </div>
        </div>
    )
}
export default TODO