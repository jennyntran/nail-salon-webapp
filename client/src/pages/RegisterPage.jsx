import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from 'react';

export default function RegisterPage() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function registerUser(ev) {
        axios.get('http://localhost:4000/test')
            .then(response => {
                const origin = window.location.origin;
                console.log('Current origin:', origin);
                console.log(response.data); // Log response for debugging
                // Handle response data as needed
            })
            .catch(error => {
                const origin = window.location.origin;
                console.log('Current origin:', origin);
                console.error('Error fetching data:', error);
                // Handle errors
            });

        ev.preventDefault();
    }

    //   useEffect(() => {
    //     const origin = window.location.origin;
    //     console.log('Current origin:', origin);
    //     // You can use `origin` variable wherever needed in your application
    //   }, []);
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center mb-4">Create an Account</h1>
                <form className="max-w-md mx-auto" onSubmit={registerUser}>
                    <input type="text"
                        placeholder={"Jane Doe"}
                        value={name}
                        onChange={ev => setName(ev.target.value)} />
                    <input type="text"
                        placeholder={"Phone Number"}
                        value={phone}
                        onChange={ev => setPhone(ev.target.value)} />
                    <input type="email"
                        placeholder={"your@email.com"}
                        value={email}
                        onChange={ev => setEmail(ev.target.value)} />
                    <input type="password"
                        placeholder={"password"}
                        value={password}
                        onChange={ev => setPassword(ev.target.value)} />
                    <button className="primary">Register</button>
                    <div className="text-center py-2 text-gray-500">
                        Already a member?
                        <Link className="underline text-black" to={'/login'}>Login</Link>
                    </div>
                </form>



            </div>
        </div >
    )
}
