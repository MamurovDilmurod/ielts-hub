import React from "react";
import { Spin } from "antd";

const Loading = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-50">
            <div className="flex flex-col items-center">
                {/* Spinner */}
                <Spin size="large" tip="Yuklanmoqda..." />

                {/* Custom text pastida chiqishi */}
                <p className="mt-4 text-gray-600 text-lg font-medium">
                    Iltimos, kuting...
                </p>
            </div>
        </div>
    );
};

export default Loading;
