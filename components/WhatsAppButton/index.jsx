import Image from "next/image";
import React, {useEffect, useState} from "react";
import Link from "next/link";

export default function WhatsAppButton() {

    const [isVisible, setIsVisible] = useState(false);

    // Top: 0 takes us all the way back to the top of the page
    // Behavior: smooth keeps it smooth!
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        // Button is displayed after scrolling for 500 pixels
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);


    return (
        <div className="fixed bottom-8 right-8 z-[99]">
            {isVisible && (
                <div className="fixed bottom-8 right-20 z-[99]">
                    <Link target='_blank' aria-label="Chat on WhatsApp" href="https://wa.me/+34639456494">
                        <img alt="Chat on WhatsApp" src="/images/logo/whatsapp.png" className='rounded-md' height={40} width={40}/>
                    </Link>
                </div>
            )}
        </div>
    );
}
