// components/HomeBody.js

import NavBar from "@/components/NavBar";

const HomeBody = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/blue.png')" }}>
            <h1 className="text-6xl font-bold mb-6">
                ASK YOUR <span className="text-blue-500">ISSUE</span>...
            </h1>

            <div className="relative top-10">
                <input
                    type="email"
                    placeholder="type in your message"
                    className="pl-4 pr-24 py-3 rounded-md text-lg w-full"
                />
                <button className="absolute right-0 top-0 bottom-0 bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded-md">
                    Send
                </button>
            </div>
        </div>
    );
}

export default HomeBody;
