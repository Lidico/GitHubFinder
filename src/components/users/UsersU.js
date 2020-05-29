import React, {useContext} from 'react'
import UserItem from './UserItem'
import SpinnerX from '../layouts/SpinnerX'
import GithubContext from '../../context/github/GithubContext'


const UsersU = () => {
        const githubContext = useContext(GithubContext);    
        const {loading, users} = githubContext;

        if(loading){
            return(
                <SpinnerX/>
            )
        }   
        else{ 
            return (
                    <div className='row'>
                        {
                            users.map(user => (
                                    <UserItem key={user.id} user={user} />
                            ))
                        }
                    </div>
                )
            }
        }


export default UsersU
