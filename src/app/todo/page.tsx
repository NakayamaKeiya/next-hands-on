'use client'

import React, { useState } from "react"
import Button from "../components/Button"
import {List,ListItem,ListIcon,OrderedList,UnorderedList,Checkbox, CheckboxGroup, Stack} from '@chakra-ui/react'


const TODO = () => {
    const [value, setValue] = useState("")
    const [todos, setTodos] = useState<string[]>([])
    

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    const handleClick = () => {
        setTodos([...todos,value])
    }

    const handleLiset = () => {
        setTodos([])
    }

    return(
        <div className="h-screan flex flex-col justify-center items-center gap-4">

            TODO
            <div className="flex flex-row justify-center items-center gap-4">  
                <input value={value} onChange={handleChange}/>
                
                <div className="flex flex-col">

                <Button onClick={handleClick}>
                    追加
                </Button>
                <Button onClick={handleLiset}>
                    リセット
                </Button>
                </div>
                
                
            </div>
            <div>
                <UnorderedList>
                    {todos.map((todo) => (
                        <ListItem key={todo}>
                            <div className="flex flex-col">
                            <Stack spacing={5} direction='column'>
                                <Checkbox isInvalid>{todo}</Checkbox>
                            </Stack>
                            </div>
                        </ListItem>
                    ))}
                </UnorderedList>
            </div>
        </div>
    )
}
export default TODO