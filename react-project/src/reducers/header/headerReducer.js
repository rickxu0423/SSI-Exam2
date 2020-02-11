import { SHOW_LEFT_MENU, CLOSE_LEFT_MENU } from '../../actions/types'

const initialState = {
    show: true,
}

export default function (state=initialState, action) {
    switch (action.type) {
        case SHOW_LEFT_MENU:
            return {
                ...state,
                show: true,
            };
        
        case CLOSE_LEFT_MENU:
            return {
                ...state,
                show: false,
            };

        default:
            return state;
    }
}