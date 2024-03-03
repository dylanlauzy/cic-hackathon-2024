import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav className="fixed top-0 w-full border-b border-b-blue-200 bg-white/75">
      <div className="container mx-auto flex justify-between items-center py-4">
        {/* Logo and Flower Icon */}
        <Link href="/">
          <div className="flex items-center">
            {/* Replace with your logo and icon */}
            <Image src="/images/infj-advocate.png" width={32} height={32} />
            <span className="font-bold text-xl ml-2">TypeTalk</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-4">
          <Link href="/results">
            <span className="font-bold text-blue-400 hover:text-blue-600 cursor-pointer">
              Results
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
