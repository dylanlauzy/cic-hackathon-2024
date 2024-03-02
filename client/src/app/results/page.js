import NavBar from "@/components/NavBar";
import ResultsBody from "@/components/ResultsBody";

// This component is now explicitly a Client Component due to the .client.js extension
export default function Page() {
    return (
        <>
            <NavBar />
            <ResultsBody />
        </>
    );
}