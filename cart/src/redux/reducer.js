import { GET_VALUE } from './action.types';

const INITIAL_STATE = {

    cart: []
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_VALUE:
            return {

                ...state, cart: action.data 

            };

        default: return state;

    }
}

export default reducer;