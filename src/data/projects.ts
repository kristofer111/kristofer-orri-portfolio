
export type Project = {
    title: string;
    subtitle: string;
    description: string;
    technologies: string[];
    github: string | null;
    link: string | null
    image: string;
}

export const projects: Project[] = [
    {
        title: "My Pages",
        subtitle: "Self-service accounting solution",
        description: "Admin portal for managing products, categories, users, orders & data related to Habitual Mobile Application.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn", "Vitest", "Playwright"],
        github: "https://github.com/kristofer111/Dogler",
        link: "https://skemman.is/handle/1946/53550",
        image: "/images/minar-sidur-landing-page-bottom.jpg"
    },
    {
        title: "Dogler",
        subtitle: "Discover dog breeds",
        description: "App to browse through images of dog breeds.",
        technologies: ["Kotlin", "Jetpack Compose"],
        github: "https://github.com/kristofer111/Dogler",
        link: null,
        image: "/images/dogler3.jpg"
    },
    {
        title: "Ecommerce API",
        subtitle: "Ordering API to create and charge orders",
        description: "Ordering API that creates orders, validates payments, and sends email confirmations.",
        technologies: ["Flask", "PostgreSQL", "Docker", "RabbitMQ", "Microservices"],
        github: "https://github.com/kristofer111/You-touch-it-you-buy-it",
        link: null,
        image: "/images/ecommerce-API.png"
    },
    {
        title: "Task Blaster",
        subtitle: "Task management API",
        description: "A web service that represents the background processes that occur in systems such as Trello or JIRA.",
        technologies: ["ASP.NET Core", "PostgreSQL", "Docker", "Auth0"],
        github: "https://github.com/kristofer111/Task-Blaster",
        link: null,
        image: "/images/task-blaster-code.png"
    },
    {
        title: "I Know the Answer",
        subtitle: "Multiplayer quiz game",
        description: "Online quiz, like Kahoot!, where users can create, join, and compete against each other in quizzes in real-time.",
        technologies: ["TypeScript", "React", "Redux", "Socket.io", "Node.js"],
        link: null,
        github: "https://github.com/kristofer111/I-Know-the-Answer",
        image: "/images/ikta-dashboard-16-9.png"
    },
]

