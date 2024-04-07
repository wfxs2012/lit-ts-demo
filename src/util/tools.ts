import {createElement} from "lucide";


export const createIcons = (icons:any) => {
    if (Array.isArray(icons)) {
        return icons.map((icon) => {
            return createElement(icon)
        })
    } else {
        const newIcons: any = {}
        Object.keys(icons).forEach((key) => {
            const icon = createElement(icons[key])
            icon.style.width = '16px'
            icon.style.height = '16px'
            newIcons[key] = icon
        })
        return newIcons
    }

}
