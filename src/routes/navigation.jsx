import { Link } from "react-router-dom";

const Navigation = () => {
    return(
        <header>
            <nav className="flex justify-between p-12 border-b order-solid border-white border-opacity-10">
                <p className="font-clash text-xl font-bold">get<span className="text-pink">linked</span></p>
                <div>
                    <ul className="flex gap-8">
                        <Link to="/" className="font-mono text-base">Timeline</Link>
                        <Link to="/" className="font-mono text-base">Overview</Link>
                        <Link to="/" className="font-mono text-base">FAQs</Link>
                        <Link to="/" className="font-mono text-base">Contacts</Link>
                    </ul>
                </div>
               <button className="bg-gradient-primary rounded height-[10.75rem] width-[3rem]">Register</button>
            </nav>
       
        </header>
    )
}


export default Navigation;