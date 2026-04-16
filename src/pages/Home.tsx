import React from "react"

import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Events from "../components/Events"
import WebApply from "../components/WebApply"
import Join from "../components/Join"
import FAQ from "../components/FAQ"
import Contact from "../components/Contact"
import Footer from "../components/Footer"


export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Events />
            <WebApply />
            <Join />
            <FAQ />
            <Contact />
            <Footer />
        </div>
    )
}