import {ADD_ORDER, EDIT_ORDER, REMOVE_ORDER} from "../constants/order";
import {castArray, isArray} from "lodash";

const defaultState = {
    orders: [],
}

export const orderReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_ORDER:
            return {...state, orders:[...state.orders, ...castArray(action.payload)]}
        case REMOVE_ORDER:
            return {...state, orders: state.orders.filter(order => order.orderNo !== action.payload.orderNo)}
        case EDIT_ORDER:
            if (!state.orders || !isArray(state.orders) || !state.orders.length) {
                return state
            }
            const newOrdersList = state.orders.map(order => {
                if (order.orderNo === action.payload.orderNo) {
                    return action.payload;
                }
                return order
            })
            return {...state, orders: newOrdersList}
        default:
            return state
    }
}
