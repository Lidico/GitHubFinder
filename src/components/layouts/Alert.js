import React, {useContext} from 'react'
import AlertContext from '../../context/alert/AlertContext'

const Alert = () => {
    const alertContext = useContext(AlertContext);
    const {alert, removeAlert} = alertContext;
    return (
        alert !== null && (
            <div className='mt-3 alert alert-warning'>
                <i className='fas fa-info-circle'/> {alert.msg}
                <button type="button"  className="close" onClick={removeAlert}>
                    <i className='fas fa-times'/>
                 </button>
            </div>
        )
    )
}
export default Alert