'use client'
import React, {useEffect} from 'react';
import 'wowjs/css/libs/animate.css';

import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Technologies from "@/components/Technology";
import Contact from "@/components/Contact";
import Project from "@/components/Project";
import InfoKit from "@/components/InfoKit";
import About from "@/components/About";
import Script from 'next/script'

export default function Home() {
    useEffect(() => {
        const WOW = require("wowjs/dist/wow.js");
        const wow = new WOW.WOW({live: false});
        wow.init({
            duration: 1000
        });

    }, []);

    return (
        <>
            {/* Global Site Tag (gtag.js) - Google Analytics */}
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=G-K73FPK3W5L`}
            />
            <Script
                id="gtagInit"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-K73FPK3W5L');
          `,
                }}
            />
            <Hero/>
            <Features/>
            <About/>
            <Technologies/>
            <InfoKit/>
            <Project/>
            <Contact/>
        </>
    );
}
