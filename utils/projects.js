const projects = {
    heading: `Selected Projects`,
    list: [
        {
            image: '/assets/projects/deep-homework.png',
            label: 'Featured Project',
            title: 'Deep Homework',
            description: 'Deep Homework, a multi-agent deep research tool optimized for educational use cases that tailors its results to different education levels--from junior high school to graduate school. It uses the plan and solve approach to deep research agent creation. It dynamically generates its agents on the fly according to the query. It allows researching of local documents and the web or a hybrid approach.',
            techs: [
                'LangChain',
                'FastAPI',
                'Vector Database',
                'Generative AI',
                'Retrieval Augmented Generation',
            ],
            link: 'https://www.deephomework.com'
        },
        {
            image: '/assets/projects/fowldata.png',
            label: 'Featured Project',
            title: 'FowlData',
            description: 'FowlData is an advanced geo-referenced data storage and mapping tool built around Django and PostGIS tailored for waterfowl hunters. This application offers a comprehensive suite of features: enabling users to log hunts with detailed spatial and weather data, share scouting and conditions reports among peers, and aggregate information from public resources.',
            techs: [
                'Django',
                'PostGIS',
                'Amazon Web Services',
                'User Authentication',
                'PostgreSQL',
            ]
        },
        {
            image: '/assets/projects/context-cleaner.png',
            label: 'Featured Project',
            title: 'Context Cleaner',
            description: 'Context-cleaner is a Python-based CLI and web tool that provides detailed analytics on Claude Code usage, far beyond standard token and cost metrics. It features a real-time monitoring layer powered by ClickHouse, Next.js, and Flask, enabling users to visualize and understand the full context of their coding conversations.',
            techs: [
                'Python',
                'Next.js',
                'Docker',
                'Kubernetes',
                'Websockets',
            ]
        },
        {
            image: '/assets/projects/south-africa.jpg',
            label: 'Featured Project',
            title: 'South Asian Archive',
            description: 'A meticulously designed data storage system with a user-friendly interface, housing a vast collection of geo-referenced images, videos, and textual translations spanning South Asian history and culture. Over the past decade, this monumental repository has introduced this invaluable material to tens of thousands of students.',
            techs: [
                'Data Modeling',
                'UX & UI',
                'RESTful Architecture',
                'PostgreSQL',
                'Django',
            ]
        }
    ]
}

export default projects
