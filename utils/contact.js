import { openLink } from "./methods"

const contact = {
    label: `Get in touch`,
    heading: `Let's Work Together`,
    description: `I'm open to new opportunities, especially ambitious backend, data, or AI/LLM projects. My inbox is always open, whether you have a question, a collaboration idea, or just want to say hello.`,
    button: {
        label: 'Say Hello',
        onClick: () => openLink('mailto:elmore.eng@gmail.com?subject=Hello')
    },
    designAndBuiltBy: 'Designed & Built By Mark Elmore',
    handleBuiltByClick: () => openLink('https://github.com/elmorem')
}

export default contact
