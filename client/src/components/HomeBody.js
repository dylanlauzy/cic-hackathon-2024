// components/HomeBody.js

import NavBar from "@/components/NavBar";

const HomeBody = () => {
    return (
        <div className="bg-green-100 min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-green-600 text-6xl font-bold mb-4">
                JOIN THE COMMUNITY
            </h1>
            <div className="flex flex-col items-center">
                <input
                    type="email"
                    placeholder="Your email address"
                    className="p-3 rounded-md text-lg mb-4"
                />
                <button className="bg-green-300 hover:bg-green-400 text-white font-bold py-2 px-4 rounded">
                    Get Started
                </button>
            </div>
        </div>
    );
}

export default HomeBody;