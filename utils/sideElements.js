import { openLink } from "./methods"

const handleIconClick = (icon) => {
    const links = {
        'github': 'https://github.com/tuannguyenanh123',
        'instagram': 'https://www.instagram.com/anhtuan.g_/',
        'linkedin': 'https://www.linkedin.com/in/anh-tuan-nguyen-6a5876155/',
    }
    openLink(links[icon])
}

const sideElements = {
    emailButton: {
        label: 'anhtuan120600ohayo@gmail.com',
        onClick: () => openLink('mailto:anhtuan120600ohayo@gmail.com?subject=Hello')
    },
    handleIconClick,
}

export default sideElements