import { SHOW_LEFT_MENU, CLOSE_LEFT_MENU } from '../types'

export const showLeftMenu = () => {
    return {
        type: SHOW_LEFT_MENU,
        show: true,
    }
}

export const closeLeftMenu = () => {
    return {
        type: CLOSE_LEFT_MENU,
        show: false,
    }
}