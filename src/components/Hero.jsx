import Features from "./Features";
import Join from "./Join";
import Landing from "./Landing";
import Navbar from "./navbar/Navbar";

function Hero () {
    
    return (
        <>
            <section className="w-screen">
                <Landing/>  
                <Join/>
                <Features/>
            </section>
        </>
    )
}

export default Hero;