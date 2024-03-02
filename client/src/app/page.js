import Image from "next/image";
import NavBar from '../components/NavBar';
import HomeBody from "@/components/HomeBody"; // Adjust the path according to your file structure


export default function Home() {
    return (
        <>
            <NavBar />
            <HomeBody />
            <main>
                nothing...
            </main>
        </>
    );
}
