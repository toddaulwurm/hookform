import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [newUser, setnewUser] = useState({});
    
    const createUser = (e) => {
        e.preventDefault();
        setnewUser({ firstName, lastName, email, password, confPassword});
        console.log("Welcome", firstName, lastName);
    };
    
    return(
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => setFirstName(e.target.value) } value={firstName} />
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setLastName(e.target.value) } value={lastName} />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } value={email} />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ (e) => setPassword(e.target.value) } value={password} />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ (e) => setConfPassword(e.target.value) } value={confPassword} />
            </div>
            <h1>First Name: {firstName}</h1>
            <h1>Last Name: {lastName}</h1>
            <h1>Email: {email}</h1>
            <h1>Password: {password}</h1>
            <h1>Confirm Password: {confPassword}</h1>
            <input type="submit" value="Create User" />
            <h1>GOOOOOOO {newUser.firstName}!</h1>
        </form>
    );
};
    
export default UserForm;