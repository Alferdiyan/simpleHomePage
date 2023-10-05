import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import { hiddenMenu } from "./logic/mobile-menu";
import { darkTheme, lightTheme } from "./logic/changeTheme";
import "typeface-poppins";

export default function App() {
    // useEffect(() => {
    //     const sun = document.getElementById("sun");
    //     const sun2 = document.getElementById("sun2");
    //     sun.className = "bx bx-sun theme-selected";
    //     sun2.className = "bx bx-sun theme-selected";
    // }, []);

    return (
        <div className="container px-[72px] pt-6  font-poppins ">
            <Header />
            <main className="flex grid-rows-2 mt-9">
                <section className="homepage flex flex-col gap-6">
                    <p id="text" className="text-sm font-semibold">
                        😎 SIMPLE WAY TO COMMUNICATE
                    </p>
                    <h1 id="h1" className="font-bold text-5xl font-poppins">
                        Actions for Accessibility in Design
                    </h1>
                    <h2 className="text-gray-600 text-base font-medium">
                        The fasted way to build and deploy website with reusable
                        components.
                    </h2>
                    <div className="flex gap-4">
                        <button className="border rounded-xl px-4 py-2 text-white font-medium bg-blue-600">
                            GET STARTED
                        </button>
                        <button className="text-blue-700 underline font-medium">
                            Get live demo
                        </button>
                    </div>
                    <div className="checks flex gap-4">
                        <div className="flex">
                            <span>
                                <i className="bx bxs-check-circle"></i>
                                <img
                                    src="/Done_ring_round_fill.svg"
                                    alt="hero image simple homepage"
                                    className="hero-image text-green-500"
                                />
                            </span>
                            <p>No credit card required</p>
                        </div>
                        <div className="flex">
                            <span className="text-green-500">
                                <img
                                    src="/Done_ring_round_fill.svg"
                                    alt="hero image simple homepage"
                                    className="hero-image text-green-500"
                                />
                                <i className="bx bxs-check-circle"></i>
                            </span>
                            <p>No software install</p>
                        </div>
                    </div>
                </section>
                <img
                    src="/hero-image-simple-homepage.png"
                    alt="hero image simple homepage"
                    className="hero-image w-1/2"
                />
            </main>
            {/* <div id="menu">
                <div className="close-menu">
                    <button onClick={() => hiddenMenu()}>
                        <i id="close" className="bx bx-x"></i>
                    </button>
                </div>
                <nav className="mobile-navbar">
                    <ul>
                        <li>
                            <a href="#" id="selected2">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="#" id="no-selected">
                                Products
                            </a>
                        </li>
                        <li>
                            <a href="#" id="no-selected">
                                Resource
                            </a>
                        </li>
                        <li>
                            <a href="#" id="no-selected">
                                Contact
                            </a>
                        </li>
                        <li id="mobile-theme">
                            <button onClick={() => darkTheme()}>
                                <i id="moon" className="bx bxs-moon"></i>
                            </button>
                            <button onClick={() => lightTheme()}>
                                <i id="sun" className="bx bx-sun"></i>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div> */}
        </div>
    );
}
