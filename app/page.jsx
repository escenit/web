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
import Index from "@/components/WhatsAppButton";

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