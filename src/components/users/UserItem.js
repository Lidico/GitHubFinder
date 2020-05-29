import React,{useContext} from 'react';
import './users.css';
import {Link} from 'react-router-dom'
import AlertContext from '../../context/alert/AlertContext';

const  UserItem = props => {
        const alertContext = useContext(AlertContext);
        const {login, avatar_url} = props.user;
        const hRef = '/user/'+login
        
        return (
                    <div className='box col-lg-3 col-md-4 col-sm-6 col-xs-6'>
                        <div className='card align-items-center paddCard'>
                            <img src={avatar_url} alt='' className='rounded-circle' style={{width: '60px'}}/>
                            <h4 className='h4'>{login}</h4>
                            <div>
                                <Link to={hRef} className='btn btn-dark text-light btn-sm' onClick={alertContext.removeAlert}>More</Link>
                            </div>
                        </div>
                    </div>
        )
    }

export default UserItem
