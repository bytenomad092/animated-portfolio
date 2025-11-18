import { openLink } from "./methods"

const outer = {
    title1: `Hi, I'm`,
    title2: 'MARK ELMORE',
    decrypTexts: [
        'Backend Engineer (Python & Go)',
        'LLM / Agentic Systems Builder',
        'I design resilient APIs & systems',
        'Billing & payments domain expert',
    ],
    desciption: `Backend engineer with 8+ years of experience designing robust, well-tested systems in Python, Go, and Django, recently focused on deep research agents, LLM-powered applications, and high-volume billing platforms.`,
    button: {
        label: 'Contact me!',
        onClick: () => openLink('mailto:elmore.eng@gmail.com?subject=Hello')
    }
}

export default outer
