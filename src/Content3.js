import React from 'react'
    const Content3 = ( {addTodos, todos}) => {
        console.log('re-render')

        return (
            <>
                <h2>My Content</h2>
                {
                    todos.map((todo,index)=>{
                        return (
                            <li key={index}>{todo}</li>
                        )
                    })
                }
                <button onClick={addTodos}>Add</button>
            </>
        )
    }


export default React.memo(Content3)