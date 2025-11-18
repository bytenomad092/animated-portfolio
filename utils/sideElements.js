import { openLink } from "./methods"

const handleIconClick = (icon) => {
    const links = {
        'github': 'https://github.com/elmorem',
        'linkedin': 'https://www.linkedin.com/in/markelmore',
    }
    openLink(links[icon])
}

const sideElements = {
    emailButton: {
        label: 'elmore.eng@gmail.com',
        onClick: () => openLink('mailto:elmore.eng@gmail.com?subject=Hello')
    },
    handleIconClick,
}

export default sideElements
