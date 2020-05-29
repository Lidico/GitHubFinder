import React, {useReducer} from 'react'
import AlertContext from './AlertContext'
import AlertReducer  from './AlertReducer'
import {SET_ALERT, REMOVE_ALERT} from '../Types'

const AlertState = props => {
    const initialState = null

    const [state, dispatch] = useReducer(AlertReducer, initialState);   

    const setAlert = (msg, type) => {
        console.log(msg);
        dispatch({
            type: SET_ALERT,
            payload: {msg, type}
        })
      };

      const removeAlert = () => dispatch({type: REMOVE_ALERT});
      

    return <AlertContext.Provider
        value={{
            alert: state,
            setAlert,
            removeAlert
            
        }}>
            {props.children}
        </AlertContext.Provider>
}

export default AlertState