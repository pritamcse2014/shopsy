import './Navbar.css'
import Logo from '../../assets/logo.png'
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from '../DarkMode/DarkMode';
import { FaCaretDown } from 'react-icons/fa';

const Menu = [
    {
        id: 1,
        name: "Home",
        link: "/#",
    },
    {
        id: 2,
        name: "Top Rated",
        link: "/#services",
    },
    {
        id: 3,
        name: "Kids Wear",
        link: "/#",
    },
    {
        id: 3,
        name: "Mens Wear",
        link: "/#",
    },
    {
        id: 3,
        name: "Electronics",
        link: "/#",
    },
];

const DropdownLinks = [
    {
        id: 1,
        name: "Trending Products",
        link: "/#",
    },
    {
        id: 2,
        name: "Best Selling",
        link: "/#",
    },
    {
        id: 3,
        name: "Top Rated",
        link: "/#",
    },
];

const Navbar = ({handleOrderPopup}) => {
    return (
        <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
            <div className="bg-primary/40 py-2">
                <div className="container flex justify-between items-center">
                    <div>
                        <a className="font-bold text-2xl sm:text-3xl flex gap-2" href="#"><img className="w-10" src={Logo} alt="Logo" />Shopsy</a>
                    </div>
                    <div className="flex justify-between items-center gap-4">
                        <div className="relative group hidden sm:block">
                            <input className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800" type="text" name="search" id="search" placeholder="Search" />
                            <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
                        </div>
                        <button onClick={() => handleOrderPopup()} className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group">
                        <span className="group-hover:block hidden transition-all duration-200">Order</span>
                        <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
                        </button>
                        <div>
                            <DarkMode />
                        </div>
                    </div>
                </div>
            </div>
            
            <div data-aos="zoom-in" className="flex justify-center">
                <ul className="sm:flex hidden items-center gap-4">
                    {
                        Menu.map((data) => (
                            <li key={data.id}>
                                <a className="inline-block px-4 hover:text-primary duration-200" href={data.link}>{data.name}</a>
                            </li>
                        ))
                    }
                    <li className="group relative cursor-pointer">
                        <a className="flex items-center hover:text-primary gap-[2px] py-2" href="#">
                            Trending Products
                            <span>
                                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                            </span>
                        </a>
                        <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md">
                            <ul>
                                {
                                    DropdownLinks.map((data) => (
                                        <li key={data.id}>
                                            <a className="inline-block w-full rounded-md p-2 hover:bg-primary/20" href={data.link}>{data.name}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;