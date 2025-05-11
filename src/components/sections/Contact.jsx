import { RevealOnScroll } from "./RevealOnScroll"

export const Contact = () => {
    return (
        <section id="Contact" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div>
                    <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-red-500 to-purple-400 bg-clip-text text-transparent text-center">Contact Me!</h2>
                    <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 my-4"> If you are an employer and you wish to contact me for potential work offers, here are the best ways to do so!</p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>Email: Jackpatkinson4@hotmail.com</li>
                            <li>
                                LinkedIn: 
                                <a href="https://www.linkedin.com/in/jackpatkinson4/" className="text-red-400 hover:text-red-300 transition-colors mx-1">
                                    https://www.linkedin.com/in/jackpatkinson4/
                                </a>
                            </li>
                            <li>
                                Itch.io:
                                <a href="https://jackpatkinson4.itch.io/" className="text-red-400 hover:text-red-300 transition-colors mx-1">https://jackpatkinson4.itch.io/</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
}