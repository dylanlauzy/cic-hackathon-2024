// components/HomeBody.js

import NavBar from "@/components/NavBar";

const HomeBody = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/background.png')" }}>
            <h1 className="text-blue-200 text-6xl font-bold mb-6">
                ASK YOUR ISSUE...
            </h1>
            <div className="relative">
                <input
                    type="email"
                    placeholder="type in your message"
                    className="pl-4 pr-20 py-3 rounded-md text-lg w-full"
                />
                <button className="absolute right-0 top-0 bottom-0 bg-blue-300 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-md">
                    Send
                </button>
            </div>
        </div>
    );
}

export default HomeBody;