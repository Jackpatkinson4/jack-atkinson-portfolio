import { RevealOnScroll } from "./RevealOnScroll"

export const About = () => {

    const commonSkills = [
        "Communication", 
        "Teamwork", 
        "Creativity", 
        "Problem-Solving", 
        "Critical Thinking", 
        "Troubleshooting", 
        "Adaptability"
    ];

    const industrySkills = [
        "Object-Oriented Programming (OOP)",
        "Design Patterns",
        "Unit Testing",
        "Version Control",
        "Git/GitHub",
        "Bash",
        "Agile Development"
    ];

    const softwareDev = [
        "Java",
        "C#",
        "C",
        "C++",
        "Visual Studio",
        "VSCode",
        "IntelliJ IDEA",
        "Eclipse IDE"
    ];
    
    const webDev = [
        "HTML",
        "CSS",
        "JavaScript",
        "Python",
        "React.js",
        "Web Design",
        "Responsive Design",
        "GitHub Pages",
        "TailwindCSS"
    ];

    const gameDev = [
        "Unity",
        "Unreal Engine",
        "Godot Engine",
        "libGDX",
        "MonoGame",
        "Blender",
        "Adobe Creative Cloud"
    ];

    const misc = [
        "Microsoft Windows",
        "Linux",
        "Microsoft Office",
        "Google Docs",
        "Jira",
        "Trello",
        "Miro",
        "UML",
        "Slack"
    ]

    
    return <section id="About" 
            className="min-h-screen flex items-center justify-center py-20"
            >
                <RevealOnScroll>
                    <div className="max-w-3xl mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-500 to-pink-400 bg-clip-text text-transparent text-center"
                        >
                            About Me
                        </h2>

                        <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                            <p className="text-gray-300 mb-6">
                                I am a passionate developer with broad skills in the fields of object-oriented-programming, agile development, data structures, computer graphics,
                                web development, and game deisgn.
                            </p>

                            <div classname="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                    <h3 className="text-xl font-bold mb-4">Common Skills</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {commonSkills.map((skill,key) => (
                                            <span key={key}
                                                className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/20
                                                            hover:shadow-[0_2px_8px_rgba(246,59,130,0.2)] transition"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                    <h3 className="text-xl font-bold mb-4">Industry Skills</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {industrySkills.map((skill,key) => (
                                            <span key={key}
                                                className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/20
                                                            hover:shadow-[0_2px_8px_rgba(246,59,130,0.2)] transition"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                    <h3 className="text-xl font-bold mb-4">Software Development</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {softwareDev.map((skill,key) => (
                                            <span key={key}
                                                className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/20
                                                            hover:shadow-[0_2px_8px_rgba(246,59,130,0.2)] transition"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                    <h3 className="text-xl font-bold mb-4">Web Development</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {webDev.map((skill,key) => (
                                            <span key={key}
                                                className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/20
                                                            hover:shadow-[0_2px_8px_rgba(246,59,130,0.2)] transition"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                    <h3 className="text-xl font-bold mb-4">Game Development</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {gameDev.map((skill,key) => (
                                            <span key={key}
                                                className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/20
                                                            hover:shadow-[0_2px_8px_rgba(246,59,130,0.2)] transition"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                    <h3 className="text-xl font-bold mb-4">Misc.</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {misc.map((skill,key) => (
                                            <span key={key}
                                                className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/20
                                                            hover:shadow-[0_2px_8px_rgba(246,59,130,0.2)] transition"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">🎓 Education</h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    <li>
                                        <strong> B.S. in Computer Science </strong> (Threads in Media and Intelligence) - Georgia Institute of Technology (2020-2024)
                                    </li>
                                    <li>
                                        Relevant Coursework: Object-Oriented Programming, Data Structures, Computer Graphics, Linear Algebra, Video Game Development....
                                    </li>
                                </ul>
                            </div>
                            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">🖥️ Work Experience</h3>
                                <div className="space-y-4 text-gray-300">
                                    <div>
                                        <h4 className="font-semibold space-y-2">IT Operations Specialist COE at Ocado Group (2024-2025)</h4>
                                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                                            <li>Managed business system performance, incident resolution, and technical support within health and safety guidelines, 
                                            serving as the primary liaison between clients and engineering teams.</li>
                                            <li>Proactively identified and managed system faults and technical issues, ensuring timely resolution through effective 
                                            communication and close collaboration with engineering and technology teams.</li>
                                            <li>Analyzed system performance, managed ticketing workflows, prioritized critical recoveries, and investigated failures, serving 
                                            as the technical liaison for onsite and offsite teams to improve operational efficiency and service quality.</li>
                                            <li>Adapted quickly to new technologies and trained team members on their functionality, resulting in recognition with the STAR Award 
                                            for outstanding contribution.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold space-y-2">Volunteer Disk Jockey at WREK Student Radio (2022-2023)</h4>
                                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                                            <li>Organized a wide range of music for broadcasting the Rock Rhythm and Roll block of WREK.</li>
                                            <li>Announced contests and awarded concert tickets to people who called in to the station.</li>
                                            <li>Presented PSAs and promos for other blocks on WREK to the listening audience.</li>
                                            <li>Worked as a team with other DJs and volunteered to DJ in their place if they couldn’t come.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>
            </section>
}