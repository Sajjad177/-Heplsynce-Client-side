import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";


const Footer = () => {
    return (
        <div className="">
            <footer className="footer p-10 bg-gray-400">
                <aside>
                    <h1 className="lg:text-5xl text-2xl font-bold font-shadows">HelpSync</h1>
                    <h3 className="text-lg font-semibold">Contract : </h3>
                    
                    <p className="flex items-center gap-3">
                    <IoCallOutline className="text-lg"></IoCallOutline> Call 5464390</p>
                    <p className="flex items-center gap-3"> 
                    <CiMail className="text-lg"></CiMail> sajjadsajjad098765@gmail.com</p>
                </aside> 
                <nav>
                    <h6 className="footer-title">Follow us on Media</h6> 
                    <div className="grid grid-flow-col gap-4">
                    <FaTwitter className="text-3xl"></FaTwitter>
                    <RiInstagramFill className="text-3xl"></RiInstagramFill>
                    <FaFacebookSquare className="text-3xl"></FaFacebookSquare>
                    </div>
                    <p className="mt-3">&copy; 2024 HelpSync. All rights reserved. </p>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;