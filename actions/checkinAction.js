
import axios from "axios"
import { CHECK_IN_USER, GET_ERRORS, GET_TICKET_TYPE, LOADING, REG_SPRITUAL, REG_CONTRACT, CLEAR, SET_BOOKING } from "./types"

export const checkinUser = (userData) => dispatch => {

    const url = 'https://aman-backend-ticket-system.herokuapp.com/api/v1/travels/checkin';
    dispatch(setLoading())
    axios
        .post(url, userData, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json;charset=UTF-8",
            },
        })
        .then(res => dispatch({
            type: CHECK_IN_USER,
            payload: res.data
        })).catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err
            }))
    return {
        type: CHECK_IN_USER,
        payload: userData
    }
}
export const getTickets = () => dispatch => {
    dispatch(setLoading())
    axios.get('https://aman-backend-ticket-system.herokuapp.com/api/v1/tickets')
        .then(res =>
            dispatch({
                type: GET_TICKET_TYPE,
                payload: res.data.success
            })).catch(err =>
                console.log(err))


}
export const registerSpritual = (userData) => dispatch => {

    const url = 'https://aman-backend-ticket-system.herokuapp.com/api/v1/booking/spritual';
    dispatch(setLoading())
    axios
        .post(url, userData, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json;charset=UTF-8",
            },
        })
        .then(res => dispatch({
            type: REG_SPRITUAL,
            payload: res.data
        })).catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err
            }))
    return {
        type: REG_SPRITUAL,
        payload: userData
    }
}
export const registerContract = (userData) => dispatch => {

    const url = 'https://aman-backend-ticket-system.herokuapp.com/api/v1/booking/contract';
    dispatch(setLoading())
    axios
        .post(url, userData, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json;charset=UTF-8",
            },
        })
        .then(res => dispatch({
            type: REG_CONTRACT,
            payload: res.data
        })).catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err
            }))
    return {
        type: REG_CONTRACT,
        payload: userData
    }
}

export const setLoading = () => {
    return {
        type: LOADING
    }
}
export const clear = () => {
    return {
        type: CLEAR
    }
}

