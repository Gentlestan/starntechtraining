
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8 mt-8">
            <div className="flex justify-between items-center w-full">
                <div className="ml-8">
                    <h2 className="text-2xl font-bold">Connect with Us</h2>
                    <div className="flex space-x-4 mt-4">
                        <Link href="https://web.facebook.com/realstarntech" legacyBehavior>
                            <a target="_blank" rel="noopener noreferrer" ><FaFacebook size={24} /></a>
                        </Link>
                        <Link href="https://twitter.com" legacyBehavior>
                            <a target="_blank" rel="noopener noreferrer"><FaTwitter size={24} /></a>
                        </Link>
                        <Link href="https://instagram.com" legacyBehavior>
                            <a target="_blank" rel="noopener noreferrer"><FaInstagram size={24} /></a>
                        </Link>
                    </div>
                </div>
                <div className="mr-8">
                    <p>&copy; {new Date().getFullYear()} Stantechs. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
