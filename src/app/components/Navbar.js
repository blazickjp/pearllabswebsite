// In components/Navbar.js

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between p-4">
            <div className="logo">
                <a href="#" className="text-xl font-bold">Pearl Labs LLC</a>
            </div>
            <div className="links">
                <a href="#services" className="mx-4 hover:text-blue-500">Services</a>
                <a href="#about" className="mx-4 hover:text-blue-500">About Us</a>
                <a href="#contact" className="mx-4 hover:text-blue-500">Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;
