import React from "react";

const Footer = () => {
    return (
        <footer className="py-6 text-gray-300 bg-gray-900">
            <div className="container flex flex-col items-center justify-between px-4 mx-auto md:flex-row">
                {/* Left section */}
                <div className="mb-4 md:mb-0">
                    <h1 className="text-xl font-bold text-white">IELTS Hub</h1>
                    <p className="text-sm">© {new Date().getFullYear()} Barcha huquqlar himoyalangan</p>
                </div>

                {/* Right section */}
                <div className="flex space-x-6">
                    <a href="#" className="transition hover:text-white">Privacy</a>
                    <a href="#" className="transition hover:text-white">Terms</a>
                    <a href="#" className="transition hover:text-white">Contact</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
