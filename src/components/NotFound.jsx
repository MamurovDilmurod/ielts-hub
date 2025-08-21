import React from "react";
import { Result, Button } from "antd";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <Result
                status="404"
                title="404"
                subTitle="Kechirasiz, bu sahifa mavjud emas."
                extra={
                    <Link to="/">
                        <Button type="primary" className="rounded-lg shadow-md">
                            Bosh sahifaga qaytish
                        </Button>
                    </Link>
                }
            />
        </div>
    );
};

export default NotFound;
