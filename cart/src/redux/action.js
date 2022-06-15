import { GET_VALUE } from './action.types';


export const increaseCounter = (data) => {
    return {
        type: GET_VALUE,
        data,
    };

};
