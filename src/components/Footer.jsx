import { useEffect } from "react"

export const Footer = () => {

    return <nav className="relative bottom-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-t border-white/10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
                <p className="text-gray-300">
                    © Copyright Jack Atkinson 2025
                </p>

                <div className="hidden md:flex items-center space-x-8">
                    <a 
                    href="#Home" 
                    className="text-gray-300 hover:text-white transition-colors"
                    > 
                        Home
                    </a>

                    <a 
                    href="#About" 
                    className="text-gray-300 hover:text-white transition-colors"
                    > 
                        About
                    </a>

                    <a 
                    href="#Projects" 
                    className="text-gray-300 hover:text-white transition-colors"
                    > 
                        Projects
                    </a>

                    <a 
                    href="#Contact" 
                    className="text-gray-300 hover:text-white transition-colors"
                    > 
                        Contact 
                    </a>
                </div>
            </div>
        </div>
    </nav>
}