

const Navbar = () => {

    const navLink = <>
        <li>Home</li>
        <li>About</li>
        <li>Course</li>
        <li>Blog</li>
        <li>Contact</li>
    </>


    return (
        <div className="py-8">
            <div className="navbar text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Edujar</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-8">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end space-x-4">
                    <button className="py-2 px-8 text-xs hover:bg-[#7c56da] rounded-full border border-white bg-transparent text-white">Login</button>
                    <a className=" py-2 px-4 text-xs rounded-full bg-[#7c56da] text-white">Get Started</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;