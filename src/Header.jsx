import { useState } from "react";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header>
            <h1 className="logo">MK <span>Tech</span></h1>
            
            {/* Hamburger icon for mobile */}
            <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                ☰
            </div>

            <nav className={isOpen ? "nav-open" : ""}>
                <ul>
                    <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
                    <li><a href="#about" onClick={() => setIsOpen(false)}>About Us</a></li>
                    <li><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
                    <li><a href="#blogs" onClick={() => setIsOpen(false)}>Blogs</a></li>
                    <li><a href="#casestudies" onClick={() => setIsOpen(false)}>Case Studies</a></li>
                    <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact Us</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
