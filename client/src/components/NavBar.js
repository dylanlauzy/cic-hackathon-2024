import Link from 'next/link';
import Image from 'next/image';

const NavBar = () => {
    return (
        <nav className="relative border-b border-pink-300">
            <div className="container mx-auto flex justify-between items-center py-4">
                {/* Logo and Flower Icon */}
                <div className="flex items-center">
                    {/* Replace with your logo and icon */}
                    <Image src="/../images/infj-advocate.png" width={32} height={32} />
                    <span className="font-bold text-xl ml-2">MBTI</span>
                </div>

                {/* Navigation Links */}
                <div className="flex items-center space-x-4">
                    <Link href="/">
                        <span className="text-pink-600 hover:text-pink-800 cursor-pointer">Home</span>
                    </Link>
                    <Link href="/results">
                        <span className="text-pink-600 hover:text-pink-800 cursor-pointer">History</span>
                    </Link>
                    <Link href="/about">
                        <span className="text-pink-600 hover:text-pink-800 cursor-pointer">About us</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;