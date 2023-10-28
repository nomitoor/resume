import { Link } from "react-router-dom";

const navigation = [
    {
        name: 'Home',
        to: '#',
    },
    {
        name: 'About',
        to: '/about',
    }
]

const Navigation = () => {

    const navigationItems = navigation.map((item) => (
        <li key={item.name}>
            <Link 
                to={item.to}
                className="border-b border-b-indigo-300 hover:border-indigo-500 text-1xl cursor-pointer"
            >
                {item.name}
            </Link>
        </li>
    ));

    return (
        <nav id="navbar" className="navbar mt-2 mb-4">
            <ul className='flex flex-column items-center gap-x-4'>
                {navigationItems}
            </ul>

            {/* <ul className='flex flex-column items-center gap-x-4'>
                
                <li>
                    <Link to='/' 
                        >
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/about' 
                        className="border-b border-b-indigo-300 hover:border-indigo-500 text-1xl cursor-pointer">
                        About
                    </Link>
                </li>
                <li>
                    <Link to='#' 
                        className="border-b border-b-indigo-300 hover:border-indigo-500 text-1xl cursor-pointer">
                        Resume
                    </Link>
                </li>
                <li>
                    <Link to='#' 
                        className="border-b border-b-indigo-300 hover:border-indigo-500 text-1xl cursor-pointer">
                        Services
                    </Link>
                </li>
                <li>
                    <Link to='#' 
                        className="border-b border-b-indigo-300 hover:border-indigo-500 text-1xl cursor-pointer">
                        Portfolio
                    </Link>
                </li>
                <li>
                    <Link to='#' 
                        className="border-b border-b-indigo-300 hover:border-indigo-500 text-1xl cursor-pointer">
                        Contact
                    </Link>
                </li>
            </ul> */}
        </nav>
    );
}

export default Navigation;