import Pdf from "../../assets/Atkinson_Resume_5_10_2025.pdf"
import profile from "../../assets/img/profile.jpg"
import { RevealOnScroll } from "./RevealOnScroll"

export const Home = () => {
    return <section 
            id="Home" 
            className="min-h-screen flex items-center justify-center relative"
            >
                <RevealOnScroll>
                    <div className="flex flex-col md:flex-row items-center space-x-4">
                        <img src={profile} className="max-w-100 md:max-w-150 mr:0 md:mr-50 mt-20 md:mt-0 mb-10 md:mb-0 border-8 md:border-16 border-red-500/50"/>
                        {/* Hero */}
                        <div className="text-center z-10 px-4">
                            <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent leading-right"
                            >
                                Hello! I'm Jack Atkinson.
                            </h1>

                            <p className="text-gray-400 text:sm smd:text-lg mb-8 max-w-sm md:max-w-lg mx-auto">
                                I am a computer programmer with interests in software engineering, game development, web development, 
                                and digital media. I am currently available for full time, part time, or contract work.
                            </p>

                            {/* Resume and Contact Buttons */}
                            <div className="flex justify-center space-x-4">
                                <a 
                                    href={Pdf} download="Atkinson_Resume_5_10_2025" target='_blank'
                                    className="bg-red-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 
                                    hover:shadow-[0-0_15px_rgba(246, 59, 130, 0.4)]"
                                >
                                    View Resume
                                </a>
                                <a 
                                    href="#Contact" 
                                    className="border border-red-500/50 text-red-500 py-3 px-6 rounded font-medium transition-all duration-200 
                                    hover:-translate-y-0.5 hover:shadow-[0-0_15px_rgba(246, 59, 130, 0.2)] hover:bg-red-500/10"
                                >
                                    Contact Me
                                </a>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>
            </section>
}