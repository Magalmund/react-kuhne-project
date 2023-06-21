import {ADD_ORDER, EDIT_ORDER, REMOVE_ORDER} from "../constants/order";
import axios from "axios";
import data from "../../data/data.json";

export const addOrderAction = (payload) => ({type: ADD_ORDER, payload});
export const removeOrderAction = (payload) => ({type: REMOVE_ORDER, payload});
export const editOrderAction = (payload) => ({type: EDIT_ORDER, payload});

export  const getAllOrdersAction = () => async (dispatch) => {
    const response = await axios.get('https://my.api.mockaroo.com/shipments.json?key=5e0b62d0')
        .catch(error => {
            if (error.response.data.error.includes("Free accounts are limited")) {
                dispatch({type: ADD_ORDER, payload: data})
                return Promise.resolve()
            }
            return Promise.reject(error)
        })
    dispatch({type: ADD_ORDER, payload: response.data})
}
