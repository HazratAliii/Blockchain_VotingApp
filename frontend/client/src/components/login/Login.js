// this is registration page

import React from 'react';
import './Login.css'
import img from '../../images/asdf.jpg'
// import {arr, map} from '../../data'

const Login = () => {

    var arr = [1234];
    var map = new Map();

    function handleClick() {
        const idNo = document.getElementById("id")
        const gmail = document.getElementById("gmail")
        var flag = true;
        var flag2 = false;
        for(let i=0; i<arr.length; i++) {
            if(arr[i] == document.getElementById("id")) {
                console.log("I am here ");
                map.set(idNo, gmail)
                flag = false;
                flag2 = true;
                break;
            }
        }
        if(!flag && flag2) {
            alert("Registration complete")
        } else {
            alert("Invalid Id")
        }
        console.log(map);
    }
    return (

        <div className='box'>
            <div className="comp1">
                <h1>E-Voting Registration</h1>
                 <img src={img} alt="" />
            </div>
            <div className="comp2">
                <h1>Register for Voting</h1>
                <div className="form">
                    <label>Enter gmail</label><br />
                    <input type="email" placeholder='name@gmail.com'/> <br />
                    <label htmlFor="text">Enter voter id No</label> <br />
                    <input id="id" type="text" placeholder='74205832' /> <br />
                </div>
                <button type='submit' onClick={handleClick}>Submit</button>
                <p>Already registered? <a href="/mainlogin">SignIn</a></p>
            </div>
        </div>
    )
}
       

export default Login;
