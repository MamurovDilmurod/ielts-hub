import React, { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Drawer, Button } from "antd";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => setOpen(true);
    const onClose = () => setOpen(false);

    const linkStyle = ({ isActive }) =>
        isActive
            ? "cursor-pointer text-blue-600 font-semibold border-b-2 border-blue-600"
            : "cursor-pointer text-gray-700 hover:text-blue-600";

    return (
        <nav className="flex items-center justify-between w-full px-6 py-3 bg-white shadow-md">
            {/* Logo */}
            <div className="text-2xl font-bold text-blue-600">IELTS Hub</div>

            {/* Desktop Links */}
            <ul className="hidden gap-6 font-medium md:flex">
                <li>
                    <NavLink to="/reading" className={linkStyle}>
                        Reading
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/listening" className={linkStyle}>
                        Listening
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/writing" className={linkStyle}>
                        Writing
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/vocabulary" className={linkStyle}>
                        Vocabulary
                    </NavLink>
                </li>
            </ul>

            {/* Hamburger Button (Mobile) */}
            <Button
                type="text"
                icon={<MenuOutlined />}
                onClick={showDrawer}
                className="text-xl md:hidden"
            />

            {/* Drawer for Mobile */}
            <Drawer title="IELTS Hub" placement="right" onClose={onClose} open={open}>
                <ul className="flex flex-col gap-4 font-medium text-gray-700">
                    <li>
                        <NavLink to="/reading" className={linkStyle} onClick={onClose}>
                            Reading
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/listening" className={linkStyle} onClick={onClose}>
                            Listening
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/writing" className={linkStyle} onClick={onClose}>
                            Writing
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/vocabulary" className={linkStyle} onClick={onClose}>
                            Vocabulary
                        </NavLink>
                    </li>
                </ul>
            </Drawer>
        </nav>
    );
};
