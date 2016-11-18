import {actions} from "../actions/lottery";

const lotteryReducer = function (state = {tickets: []}, action) {
    switch (action.type) {
        case actions.play:
            return {
                tickets: [...state.tickets, action.payload]
            };

        default:
            return state;
    }
};

export default lotteryReducer