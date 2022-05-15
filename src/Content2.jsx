import React from 'react'

function Content2 () {
    console.log('re-render')
    return( 
        <h1>  Hello</h1>
    )
}

export default React.memo(Content2)