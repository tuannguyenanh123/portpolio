import { openLink } from "./methods"

const outer = {
    title1:  `Hello, I'm`,
    title2: 'Nguyen Anh Tuan',
    decrypTexts: [
        'A Software Engineer',
        'A Front End Developer',
        'A Full Stack Developer',
        'I build things for the web',
    ],
    desciption: `A dedicated and disciplined Front End engineer who love to create things for internet, having more than 3 years of field experience I've delivered projects to many happy clients over globe.`,
    button: {
        label: 'Contact me!',
        onClick: () => openLink('mailto:anhtuan120600ohayo@gmail.com?subject=Hello')
    }
}

export default outer
