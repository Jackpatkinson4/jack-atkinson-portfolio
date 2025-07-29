import hammurabiLogo from "../../assets/img/Hammurabi-Logo.png"
import dive from "../../assets/img/dive.gif"
import cowboyQuokka from "../../assets/img/Cowboy-Quokka-Title-Screen.png"
import cPlusPong from "../../assets/img/CPlusPong.png"
import thrall from "../../assets/img/Thrall-Screenshot.png"
import gunWithLegs from "../../assets/img/GunWithLegs.png"
import colmar from "../../assets/img/Colmar-Banner.jpg"
import madman from "../../assets/img/Madman-97-Title-Screen.png"
import quotes from "../../assets/img/Uninspirational-Quotes-Screenshot.png"
import raycaster from "../../assets/img/raycaster.gif"

import { RevealOnScroll } from "./RevealOnScroll"

export const Projects = () => {

    return (
        <section 
            id="Projects" 
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-500 to-pink-400 bg-clip-text text-transparent text-center"
                    >
                        Featured Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div className="p-5 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 
                                        hover:shadow-[0_2px_8px_rgba(246,59,130,0.1)] transition-all"
                        >
                            <img src={raycaster} alt="Gameplay Footage of Raycasting Engine" className="mb-2"/>
                            <h3 className="test-xl font-bold mb-2">Raycasting Engine (WIP)</h3>
                            <p className="test-xl mb-2">July 2025 - Present</p>
                            <p className="text-gray-400 mb-4">
                            This is a prototype Wolfenstein 3D style Raycasting Engine developed in C++ and the Raylib programming library.
                            It uses the Digital Differential Analysis (DDA) algorithm to cast rays in a certain direction from a certain point in a 2D grid and uses the distance of the rays to calculate the 3D perspective 
                            (as further discused in <a href="https://lodev.org/cgtutor/raycasting.html" className="text-red-400 hover:text-red-300 transition-colors my-4">Lode Vandevenne's amazing tutorial</a>).
                            So far this is a work in progress, and I currently have plans to add support for textures, custom maps, and enemies.
                            </p>
                            <p className="text-gray-400 mb-4">
                                <span className="font-semibold">ROLE:</span> Sole Developer
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Game Development", "C++", "Raylib", "Visual Studio", "Object-Oriented Programming", "Software Development", "Computer Graphics", "Algorithms"].map((skill, key) => (
                                    <span key={key}
                                                className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm warp hover:bg-red-500/20
                                                            hover:shadow-[0_2px_8px_rgba(246,59,130,0.2)] transition"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://github.com/Jackpatkinson4/Raycasting-Engine" className="text-red-400 hover:text-red-300 transition-colors my-4">
                                    View Project → 
                                </a>
                            </div>
                        </div>


                        <div className="p-5 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 
                                        hover:shadow-[0_2px_8px_rgba(246,59,130,0.1)] transition-all"
                        >
                            <img src={hammurabiLogo} alt="Hammurabi Logo" className="mb-2"/>
                            <h3 className="test-xl font-bold mb-2">Hammurabi</h3>
                            <p className="test-xl mb-2">January 2024 - May 2024</p>
                            <p className="text-gray-400 mb-4">
                                Hammurabi is a metroidvania action platformer developed by Georgia Tech's video game development club VGDev. 
                                In it, you play as a tech worker who is fed up with being denied job interviews and decides to take matters into their own hands by
                                climbing to the top of Hammurabi Tower to confront the Boss.
                            </p>
                            <p className="text-gray-400 mb-4">
                                <span className="font-semibold">ROLE:</span> Programmer, Tech Artist
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Game Development", "C#", "Unity", "Tech Art"].map((skill, key) => (
                                    <span key={key}
                                                className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/20
                                                            hover:shadow-[0_2px_8px_rgba(246,59,130,0.2)] transition"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://www.gtvgdev.com/games-archive/hammurabi" className="text-red-400 hover:text-red-300 transition-colors my-4">
                                    View Project → 
                                </a>
                            </div>
                        </div>

                        <div className="p-5 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 
                                        hover:shadow-[0_2px_8px_rgba(246,59,130,0.1)] transition-all"
                        >
                            <img src={dive} alt="Gameplay Footage of Dive" className="mb-2"/>
                            <h3 className="test-xl font-bold mb-2">Dive</h3>
                            <p className="test-xl mb-2">January 2023 - May 2023</p>
                            <p className="text-gray-400 mb-4">
                                Dive is a mechanics-based 2D platformer developed by Georgia Tech's video game development club VGDev.
                                In it, you play as a cave diver drill diving their way down a cave in order to collect collectable fireflies. Lots of details and challenges
                                give the game enormous replay value.
                            </p>
                            <p className="text-gray-400 mb-4">
                                <span className="font-semibold">ROLE:</span> Level Designer
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Game Development", "C#", "Unity", "Level Design"].map((skill, key) => (
                                    <span key={key}
                                                className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm warp hover:bg-red-500/20
                                                            hover:shadow-[0_2px_8px_rgba(246,59,130,0.2)] transition"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://yameater.itch.io/project-dive" className="text-red-400 hover:text-red-300 transition-colors my-4">
                                    View Project → 
                                </a>
                            </div>
                        </div>

                        <div className="p-5 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 
                                        hover:shadow-[0_2px_8px_rgba(246,59,130,0.1)] transition-all"
                        >
                            <img src={cowboyQuokka} alt="Cowboy Quokka Title Screen" className="mb-2"/>
                            <h3 className="test-xl font-bold mb-2">The Cowboy Quokka</h3>
                            <p className="test-xl mb-2">August 2023 - December 2023</p>
                            <p className="text-gray-400 mb-4">
                            The Cowboy Quokka is a prototype 3D physics-based platformer designed using the Unity Engine, with scripting in C# and 3D modeling in Blender. 
                            In it, you play as the titular Cowboy Quokka, putting out fires throughout the town. It was developed as a group project for the CS 4455: Video Game Development 
                            course at Georgia Tech. 
                            </p>
                            <p className="text-gray-400 mb-4">
                                <span className="font-semibold">ROLE:</span> Programmer, UI Designer
                            </p>
                            <p className="text-gray-400 mb-4">
                                Attached is a zip file containing the project and a trailer. To run it, simply unzip the file, go to the Windows folder, and run "Cowboy Quokkas.exe".
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Game Development", "C#", "Unity", "UI Design", "Blender", "Aseprite"].map((skill, key) => (
                                    <span key={key}
                                                className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm warp hover:bg-red-500/20
                                                            hover:shadow-[0_2px_8px_rgba(246,59,130,0.2)] transition"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://drive.google.com/file/d/10tLD3zTYk8V1RTc6eCmStYYEm1rIPrBu/view?usp=sharing" className="text-red-400 hover:text-red-300 transition-colors my-4">
                                    Download Project → 
                                </a>
                            </div>
                        </div>

                        <div className="p-5 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 
                                        hover:shadow-[0_2px_8px_rgba(246,59,130,0.1)] transition-all"
                        >
                            <img src={madman} alt="Madman 97 Title Screen" className="mb-2"/>
                            <h3 className="test-xl font-bold mb-2">Madman 97</h3>
                            <p className="test-xl mb-2">March 2023 - April 2023</p>
                            <p className="text-gray-400 mb-4">
                            This is a basic Space Invaders style shoot-em-up developed for the GBA inspired by the real life story of John Lennon's immigration struggles in the 70s and the infamous
                            kusoge "Hong Kong 97". It was developed as a project for Georgia Tech's CS 2110: Computer Organization and Programming, and it uses DMA rendering for the sprites and C for
                            the game logic.
                            </p>
                            <p className="text-gray-400 mb-4">
                                <span className="font-semibold">ROLE:</span> Sole Developer
                            </p>
                            <p className="text-gray-400 mb-4">
                                Attached is the .gba file containing the full game. You must use a GBA emulator such as mGBA to run it on modern computers.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Game Development", "C", "Low Level Programming", "Bare Metal Programming", "GBA Development"].map((skill, key) => (
                                    <span key={key}
                                                className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm warp hover:bg-red-500/20
                                                            hover:shadow-[0_2px_8px_rgba(246,59,130,0.2)] transition"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://drive.google.com/file/d/1857DC36V5Mza-g_EjFH85QtXIycNYEu3/view?usp=sharing" className="text-red-400 hover:text-red-300 transition-colors my-4">
                                    Download Project → 
                                </a>
                            </div>
                        </div>

                        <div className="p-5 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 
                                        hover:shadow-[0_2px_8px_rgba(246,59,130,0.1)] transition-all"
                        >
                            <img src={quotes} alt="Gameplay screenshot of CPlusPong" className="mb-2"/>
                            <h3 className="test-xl font-bold mb-2">Mixed Messages (Uninspirational Quotes)</h3>
                            <p className="test-xl mb-2">July 2025</p>
                            <p className="text-gray-400 mb-4">
                                This project was made as part of Codecademy's Full Stack Engineering Course, designed to enhance skills in JavaScript, HTML, and CSS while working with interactive web applications. 
                                This project is designed as a simple web page that displays a funny quote from a real historical figure chosen from a set of quotes based on what day it currently is.
                            </p>
                            <p className="text-gray-400 mb-4">
                                <span className="font-semibold">ROLE:</span> Sole Developer
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Web Development", "HTML", "CSS", "JavaScript", "Web Design", "Responsive Web Design", "GitHub Pages"].map((skill, key) => (
                                    <span key={key}
                                                className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm warp hover:bg-red-500/20
                                                            hover:shadow-[0_2px_8px_rgba(246,59,130,0.2)] transition"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://jackpatkinson4.github.io/Mixed-Messages/" className="text-red-400 hover:text-red-300 transition-colors my-4">
                                    View Project → 
                                </a>
                            </div>
                        </div>


                        <div className="p-5 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 
                                        hover:shadow-[0_2px_8px_rgba(246,59,130,0.1)] transition-all"
                        >
                            <img src={thrall} alt="Gameplay screenshot of Thrall" className="mb-2"/>
                            <h3 className="test-xl font-bold mb-2">Thrall</h3>
                            <p className="test-xl mb-2">January 2022 - May 2022</p>
                            <p className="text-gray-400 mb-4">
                                Thrall is an exploration based 2D platformer developed by Georgia Tech's VGDev club. It is primarily focused on exploring the delapidated world 
                                you find yourself in, fighting enemies and bosses, and overcoming platforming challenges as you proceed. There is a high emphasis on organic 
                                exploration, and picking up upgrades to increase the explorable area, without obvious hints as to where to go, and without a linear progression.
                            </p>
                            <p className="text-gray-400 mb-4">
                                <span className="font-semibold">ROLE:</span> Programmer
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Game Development", "C#", "Unity"].map((skill, key) => (
                                    <span key={key}
                                                className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm warp hover:bg-red-500/20
                                                            hover:shadow-[0_2px_8px_rgba(246,59,130,0.2)] transition"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://www.gtvgdev.com/games-archive/thrall" className="text-red-400 hover:text-red-300 transition-colors my-4">
                                    View Project → 
                                </a>
                            </div>
                        </div>

                        <div className="p-5 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 
                                        hover:shadow-[0_2px_8px_rgba(246,59,130,0.1)] transition-all"
                        >
                            <img src={cPlusPong} alt="Gameplay screenshot of CPlusPong" className="mb-2"/>
                            <h3 className="test-xl font-bold mb-2">CPlusPong</h3>
                            <p className="test-xl mb-2">November 2023</p>
                            <p className="text-gray-400 mb-4">
                                CPlusPong is a basic pong clone developed in C# with Visual Studio 2022 as a means to improve my skills in C++ and 
                                software development for Windows-based applications.
                            </p>
                            <p className="text-gray-400 mb-4">
                                <span className="font-semibold">ROLE:</span> Sole Developer
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Game Development", "C++", "Visual Studio", "Object-Oriented Programming", "Software Development"].map((skill, key) => (
                                    <span key={key}
                                                className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm warp hover:bg-red-500/20
                                                            hover:shadow-[0_2px_8px_rgba(246,59,130,0.2)] transition"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://jackpatkinson4.itch.io/cpluspong" className="text-red-400 hover:text-red-300 transition-colors my-4">
                                    View Project → 
                                </a>
                            </div>
                        </div>

                        <div className="p-5 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 
                                        hover:shadow-[0_2px_8px_rgba(246,59,130,0.1)] transition-all"
                        >
                            <img src={colmar} alt="Gameplay screenshot of CPlusPong" className="mb-2"/>
                            <h3 className="test-xl font-bold mb-2">Colmar Academy</h3>
                            <p className="test-xl mb-2">May 2025</p>
                            <p className="text-gray-400 mb-4">
                                This is a basic website made in HTML and CSS that I created as the capstone project for Codecademy's Build a Website with HTML, CSS, and GitHub Pages Skill Path.
                                I designed it using only a basic wireframe and I made it so that it was responsibe to both desktop and mobile displays. I also hosted the website on GitHub Pages.
                            </p>
                            <p className="text-gray-400 mb-4">
                                <span className="font-semibold">ROLE:</span> Sole Developer
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Web Development", "HTML", "CSS", "Web Design", "Responsive Web Design", "GitHub Pages"].map((skill, key) => (
                                    <span key={key}
                                                className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm warp hover:bg-red-500/20
                                                            hover:shadow-[0_2px_8px_rgba(246,59,130,0.2)] transition"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://jackpatkinson4.github.io/Colmar-Academy/" className="text-red-400 hover:text-red-300 transition-colors my-4">
                                    View Project → 
                                </a>
                            </div>
                        </div>

                        <div className="p-5 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 
                                        hover:shadow-[0_2px_8px_rgba(246,59,130,0.1)] transition-all"
                        >
                            <img src={gunWithLegs} alt="Gameplay Footage of Dive" className="mb-2"/>
                            <h3 className="test-xl font-bold mb-2">Gun With Legs</h3>
                            <p className="test-xl mb-2">January 2021 - May 2021</p>
                            <p className="text-gray-400 mb-4">
                                Gun with legs is an action platformer developed by Georgia Tech's VGDev club in which you play as... well, a gun with legs! Bullets not ony work
                                as projectiles to attack your enemies, but they are also your health, so be sure to get as much bullets scattered across the map as possible!
                            </p>
                            <p className="text-gray-400 mb-4">
                                <span className="font-semibold">ROLE:</span> Sprite Artist
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Game Development", "C#", "Unity", "Aseprite", "Spritework"].map((skill, key) => (
                                    <span key={key}
                                                className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm warp hover:bg-red-500/20
                                                            hover:shadow-[0_2px_8px_rgba(246,59,130,0.2)] transition"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://yameater.itch.io/project-dive" className="text-red-400 hover:text-red-300 transition-colors my-4">
                                    View Project → 
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
}