import React from 'react'
import Rainbow from '../hoc/Rainbow'
const Contact=(props)=>{
    setTimeout(()=>{
        props.history.push('/about')
    },200000)
    return(
        <div className="container">
            <h1 className="center">Contact</h1>
            <p>Next you just have to make sure you link the files properly in your webpage. Generally it is wise to import javascript files at the end of the body to reduce page load time. Follow the example below on how to import Materialize into your webpage.</p>
        </div>
    )
}
export default Rainbow(Contact)