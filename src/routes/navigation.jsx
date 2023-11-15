import { Link } from "react-router-dom";
import HeaderComponent from "../components/headerComponent";
import Button from "../components/buttonComponent";
import PurpleFlare from '../assets/images/Purple-Lens-Flare-PNG.png';
import BigIdeaComponent from "../components/bigIdeaComponent";

const Navigation = () => {
    return(
        <header>
            <nav className="flex justify-between items-center p-4 border-b order-solid border-white border-opacity-10 relative">
                <p className="font-clash text-5xl font-bold">get<span className="text-pink">linked</span></p>
                <div>
                    <ul className="flex gap-16">
                        <Link to="/" className="font-mono text-base font-normal">Timeline</Link>
                        <Link to="/" className="font-mono text-base font-normal">Overview</Link>
                        <Link to="/" className="font-mono text-base font-normal">FAQs</Link>
                        <Link to="/" className="font-mono text-base font-normal">Contacts</Link>
                    </ul>
                </div>
               {/* <button className="bg-gradient-primary rounded px-12 py-4">Register</button> */}
               <Button text="Register"/>
               <img src={PurpleFlare} alt="PurpleFlare" className="absolute top-8 left-0" />
            </nav>
        <HeaderComponent />
        <BigIdeaComponent/>
        </header>
    )
}


export default Navigation;