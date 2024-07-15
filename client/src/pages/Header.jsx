import logo from '../images/logo.png';
import './Header.css';
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <div>
            <header className='p-4 flex justify-between'>
                <a href="" className="logo-container">
                    <img src={logo} alt="Logo" className='logo-img' />
                </a>

                <div className='flex gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-500'>
                    <div>Choose your location</div>
                    <button className='bg-primary text-white p-1 rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                    </button>
                </div>
                <div className='flex gap-2 items-center border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-500' >
                    Sign in / Sign up
                    <Link to={'/login'} className='bg-primary text-white rounded-full p-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>

                    </Link>


                </div>
            </header>
        </div>
    );

}