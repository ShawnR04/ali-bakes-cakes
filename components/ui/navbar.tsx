'use client'

import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { Button } from "./button";
import { Menu } from "lucide-react";
import { InstagramIcon,Facebook02Icon,PinterestIcon,Mail02Icon } from "hugeicons-react";
import { useState, useEffect } from "react";

// Definito=ion of the navigation links all in one place
const NAV_LINKS = [
    { name: "Home", href: "/" },
    { name: "Gallery", href: "/gallery"},
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar(){
    const [isVisible,setIsVisible] = useState(true);
    const [lastScrollY,setLastScrollY] = useState(0);

    useEffect(() => {
        const controlNavbar = () => {
            const currentScrollY = window.scrollY;
            if(currentScrollY < lastScrollY || currentScrollY < 50){
                setIsVisible(true);
            }else{
                setIsVisible(false);
            }
            setLastScrollY(currentScrollY);
    
        };

        window.addEventListener("scroll",controlNavbar);
        return () => window.removeEventListener("scroll",controlNavbar);
    }, [lastScrollY]);

    return(
        <nav className={`w-full fixed top-0 z-50 transition-transform duration-300 ease-in-out ${
            isVisible ? "translate-y-0" : "-translate-y-full"
        }`}>
            {/* Mobile View */}
            <div className="block md:hidden px-4 py-3 bg-foreground">
                <Sheet>
                    <SheetTrigger
                        className=""
                        render={
                            <Button size="icon-lg">
                                <Menu/>
                            </Button>
                        }
                    />
                    <SheetContent
                        side="left"
                        className="flex flex-col border-border bg-secondary-foreground"
                    >
                        <SheetTitle
                            className="h-25 flex items-center justify-center"
                        >
                            <a href="/"
                                className="text-secondary text-4xl"
                            >
                                Ali Bakes Cakes
                            </a>
                        </SheetTitle>

                        <ul className="flex flex-col text-2xl gap-2">
                            {NAV_LINKS.map((link) => (
                                <li key={link.name}>
                                    <SheetClose>
                                        <Link href={link.href}
                                            className="h-15 flex items-center justify-center hover:text-primary transition-all"
                                        >
                                            {link.name}
                                        </Link>
                                    </SheetClose>
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-col items-center justify-center gap-5">
                            <div className=" flex gap-5">
                                <SocialIcon Icon={Facebook02Icon} href="https://www.facebook.com/alibakescake" />
                                <SocialIcon Icon={PinterestIcon} href="https://pin.it/6n7BSuaqO" />
                                <SocialIcon Icon={Mail02Icon} href="mailto:alibakescakes1@gmail.com" />
                                <SocialIcon Icon={InstagramIcon} href="https://www.instagram.com/ali_bakescakes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" />
                            </div>
                            <p className="text-base font-medium">Version 2.0</p>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>

            {/* Desktop View */}
            <div className="hidden md:flex h-15 w-full px-15 items-center justify-between shadow-md bg-secondary-foreground">
                <Link href="/"
                    className="font-bold text-3xl text-secondary"
                >
                    Ali Bakes Cakes
                </Link>

                <ul className="flex gap-5 text-lg md:text-xl">
                    {NAV_LINKS.map((link) => (
                        <li key={link.name}>
                            <Link href={link.href}
                                className="hover:text-primary duration-300 transition-all"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

// Small helper method for the social icons
function SocialIcon({ Icon,href }: {Icon: any, href: string}){
    return(
        <a href={href} className="h-10 w-10 text-foreground hover:text-primary rounded-full border-ring border-2 hover:border-foreground flex items-center justify-center transition-all">
            <Icon size={24}/>
        </a>
    );
}