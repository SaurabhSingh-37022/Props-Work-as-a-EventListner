import './LoginPage.css'
import React from 'react'

function LoginPage(){
   
    function changeHandler(){        
        console.log("button Clicked")

    }
    return(
        <div className="login">
            <div className="input">
             <label>Input</label>
             <input name="text" placeholder="Enter the Text"></input>
            </div>

            <div className="btn">
                <button onClick={changeHandler}>Submit</button>
            </div>
           
        </div>
    )


}
export default LoginPage;