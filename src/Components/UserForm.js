import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFirstNameError("First Name is required!");
        } else if(e.target.value.length < 3) {
            setFirstNameError("First Name must be 2 characters or longer!");
        }
        else{
            setFirstNameError("");
        }
    }
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLastNameError("Last Name is required!");
        } else if(e.target.value.length < 3) {
            setLastNameError("Last Name must be 2 characters or longer!");
        }
        else{
            setLastNameError("");
        }
    }
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Email is required!");
        } else if(e.target.value.length < 5) {
            setEmailError("Email must be 5 characters or longer!");
        }
        else{
            setEmailError("");
        }
    }
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("Password is required!");
        } 
        else if(e.target.value.length < 8) {
            setPasswordError("Password must be 8 characters or longer!");
        }
        else{
            setPasswordError("");
        }
    }
    const [confPassword, setConfPassword] = useState("");
    const [confPasswordError, setConfPasswordError] = useState("");
    const handleConfPassword = (e) => {
        setConfPassword(e.target.value);
        if(e.target.value.length < 1) {
            setConfPasswordError("Confirm Password is required!");
        } else if(e.target.value.length < 4) {
            setConfPasswordError("Confirm Password must be 5 characters or longer!");
        }
        else if(e.target.value !== password){
            setConfPasswordError("Passwords must match!");
        }
        else{
            setConfPasswordError("");
        }
    }


    
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    
    
    
    const [newUser, setnewUser] = useState({});
    const [newUserError, setNewUserError] = useState("");
    const createUser = (e) => {
        e.preventDefault();
        if(firstNameError || lastNameError || emailError || passwordError || confPasswordError){
            setNewUserError("Please fix validations!");
            return
        }
        else if(!firstName || !lastName || ! email|| !password || !confPassword){
            setNewUserError("User is Incomplete!");
            return
        }
        setNewUserError("");
        setnewUser({ firstName, lastName, email, password, confPassword});
        console.log("Welcome", firstName, lastName);
        setHasBeenSubmitted( true );
    };

    // CONDITIONAL RENDERING USING A FUNCTION
    const formMessage = (newUser) => {
        if( hasBeenSubmitted ) {
            return `Thank you for submitting the form, ${newUser.firstName}`;
        } 
        else {
            return "Welcome, please submit the form";
        }
    };
    
    return(
        <form onSubmit={ createUser }>
            <h1>{formMessage(newUser)}</h1>
            {/* CONDITIONAL RENDERING USING TERNARY!!!!!!!!!!!!! BETTER */}
            {
                hasBeenSubmitted ? 
                <h1>Thank you for submitting the form, {newUser.firstName}</h1>:
                <h1>Welcome, please submit the form</h1>
            }
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ handleFirstName } value={firstName} />
                {
                    firstNameError ?
                    <p style={{color:'red'}}>{ firstNameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ handleLastName } value={lastName} />
                {
                    lastNameError ?
                    <p style={{color:'red'}}>{ lastNameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Email: </label> 
                <input type="text" onChange={ handleEmail } value={email} />
                {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Password: </label> 
                <input type="password" onChange={ handlePassword } value={password} />
                {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Confirm Password: </label> 
                <input type="password" onChange={ handleConfPassword } value={confPassword} />
                {
                    confPasswordError ?
                    <p style={{color:'red'}}>{ confPasswordError }</p> :
                    ''
                }
            </div>
            <h1>First Name: {firstName}</h1>
            <h1>Last Name: {lastName}</h1>
            <h1>Email: {email}</h1>
            <h1>Password: {password}</h1>
            <h1>Confirm Password: {confPassword}</h1>
            <input type="submit" value="Create User" />
            {
                    newUserError ?
                    <p style={{color:'red'}}>{ newUserError }</p> :
                    ''
            }
        </form>
    );
};
    
export default UserForm;