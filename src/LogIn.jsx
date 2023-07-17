import React, { useState } from 'react';
import axios from 'axios';

const LogIn = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform form validation logic
        // Example: Check if all required fields are filled
        if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
            // Display error or show validation message
            console.log('Please fill in all required fields.');
            return;
        }

        // Convert form data to JSON
        const formData = {
            firstName,
            lastName,
            email,
            password,
            confirmPassword
        };

        // Send JSON data to server
        axios.post('http://localhost:3000/users', formData)
            .then(response => {
                // Handle successful response
                console.log('Form submitted!');
                console.log(response.data); // Response data from the server
            })
            .catch(error => {
                // Handle error
                console.error('Error submitting form:', error);
            });

        // Continue with form submission or other logic
        console.log('Form submitted!');
    };

    return (
        <div className='logInPage'>
            <div className='logIn-container'>
                <div className='logIn'>
                    <h1>Register</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-floating">
                            <input
                                type="text"
                                className="form-control"
                                id="floatingFirstName"
                                placeholder="First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                            <label htmlFor="floatingFirstName">First name</label>
                        </div>
                        <div className="form-floating">
                            <input
                                type="text"
                                className="form-control"
                                id="floatingLastName"
                                placeholder="First Name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                            />
                            <label htmlFor="floatingLastName">Last name</label>
                        </div>
                        <div className="form-floating">
                            <input
                                type="email"
                                className="form-control"
                                id="floatingEmail"
                                placeholder="name@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <label htmlFor="floatingEmail">Email address</label>
                        </div>
                        <div className="form-floating">
                            <input
                                type="password"
                                className="form-control"
                                id="floatingPassword"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <div className="form-floating">
                            <input
                                type="password"
                                className="form-control"
                                id="floatingConfirmPassword"
                                placeholder="ConfirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                            <label htmlFor="floatingConfirmPassword">Confirm Password</label>
                        </div>
                        <div>
                            <button className="btn" style={{ backgroundColor:'#df1b3f', width: '100%', padding: '10px', color:'white' }} type="submit">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            
            
            
        </div>
    );
};

export default LogIn;
