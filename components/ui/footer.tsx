import Link from "next/link";
import { InstagramIcon, WhatsappIcon,Facebook02Icon,PinterestIcon,Mail02Icon } from "hugeicons-react";

// Definito=ion of the navigation links all in one place
const NAV_LINKS = [
    { name: "Home", href: "/" },
    { name: "Gallery", href: "/gallery"},
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
];
const SOCIAL_LINKS = [
  { Icon: Facebook02Icon, href: "https://www.facebook.com/alibakescake" },
  { Icon: PinterestIcon, href: "https://pin.it/6n7BSuaqO" },
  { Icon: Mail02Icon, href: "mailto:alibakescakes1@gmail.com" },
  { Icon: InstagramIcon, href: "https://www.instagram.com/ali_bakescakes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
];

export default function Footer(){
    return(
        <footer className="bg-foreground text-secondary-foreground px-5 py-5">
            <div className="max-w-6xl mx-auto flex flex-col items-center gap-5">
                {/* Brand Name */}
                <h2 className="text-3xl font-bold text-secondary">
                    Ali Bakes Cakes
                </h2>
                {/* Navigation Links */}
                <nav className="w-full">
                    <ul className="flex flex-wrap justify-center gap-5 md:gap-10 text-lg md:text-xl transition-all duration-300 ease-in-out">
                        {NAV_LINKS.map((link) => (
                            <li key={link.name}>
                                <Link href={link.href}
                                    className="hover:text-primary transition-all duration-300"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                {/* Social Icons */}
                <div className="flex gap-5">
                    {SOCIAL_LINKS.map((link, i) => (
                      <a 
                        key={i} 
                        href={link.href} 
                        target={link.href.startsWith('http') ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="h-10 w-10 border-3 border-primary rounded-full flex items-center justify-center hover:text-primary hover:border-secondary-foreground transition-all duration-300"
                      >
                        <link.Icon size={18} />
                      </a>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className=" w-full border-t border-border pt-5">
                    <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-3">
                        <p className="">
                            &copy; 2026 Ali Bakes Cakes
                        </p>
                        <p className="">
                            Niagara, Ontario, Canada
                        </p>
                        <p className="">
                            905-923-6618
                        </p>
                        <p className="">
                            <a href="mailto:alibakescakes1@gmail.com" className="hover:text-primary transition-all duration-300">
                                alibakescakes1@gmail.com
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}