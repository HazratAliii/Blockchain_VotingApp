import React from 'react';
import '../login/Login.css'
import img from '../../images/asdf.jpg'

const mainlogin = () => {
    
    var voterID = [
        26719035,
        69215643,
        19287364,
        21894367,
        41963287,
        31297865,
        61425398,
        65918432,
        73649821,
        30517489,
        53218967,
        87654321,
        41239876,
        68925143,
        36451298
    ]
    
    var registrationArr = []

    const varify = (e) => {
        
        const btnclick = document.getElementById("VoterId").value
        alert(btnclick);

        for(let i=0; i < voterID.length; i++) {

            if(btnclick == voterID[i]) {
                alert("Registration done")
                registrationArr.push(btnclick)
                alert(registrationArr.length)
                return;
            }
        }
        alert("Registration failed")
    }

    return (
        <div className='box'>
            <div className="comp1">
                <h1>E-Voting Sign In </h1>
                 <img src={img} alt="" />
            </div>
            <div className="comp2">
                <h1>SingIn for Voting</h1>
                <div className="form">
                    <label htmlFor="text">Enter gmail</label><br />
                    <input type="email" placeholder='name@gmail.com'/> <br />
                    <label htmlFor="text">Enter voter id No</label> <br />
                    <input type="text" id='VoterId' placeholder='74205832' /> <br />
                </div>
                <button type='submit' id='submitBtn' onClick={varify}>Submit</button>
                <p>New here? <a href="/login">Sign Up?</a></p>
            </div>
        </div>
    )
}
       

export default mainlogin;
