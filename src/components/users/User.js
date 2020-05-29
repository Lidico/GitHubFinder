import React, { Fragment, useEffect, useContext } from 'react'
import SpinnerX from '../layouts/SpinnerX'
import Repos from '../repos/Repos'
import {Link} from 'react-router-dom'
import GithubContext from '../../context/github/GithubContext'

const User = ({match}) => {
    const githubContext = useContext(GithubContext);
    const {getUser, loading, user, repos, getUserRepos} = githubContext;

    useEffect(()=>{
        getUser(match.params.login);
        getUserRepos(match.params.login);
        //eslint-disable-next-line
    }, []);

    const {
        name,
        avatar_url,
        location,
        bio,
        blog,
        login,
        html_url,
        company,
        followers,
        following,
        public_repos,
        public_gists,
        hireable
    } = user;

        if(loading) return <SpinnerX/>

        return (
            <Fragment>
                <Link to='/' className='btn btn-light'>Back to Search</Link>
                    <span className='float-right'>Hireable: {' '}
                    {hireable ? <i className='fas fa-check text-success'/> : <i className='fas fa-times-circle text-danger'/>}</span>
                
                <div className="mt-4 row">
                     <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <img className='d-none d-sm-block' src={avatar_url} alt="" style={{width: '150px'}}/> 
                        <img className='d-sm-none' src={avatar_url} alt="" style={{width: 'cover'}}/> 
                        <h4 className='h4 mt-2'>{name}</h4>
                        <p>Location: {location}</p> 
                    </div>
                    <div className="col-sm-6 col-md-8 col-lg-9 col-xl-10">
                        {bio&&(
                            <Fragment>
                                <h2 className='h2'>Bio</h2>
                                <p>{bio}</p>
                            </Fragment>
                        )}
                        <a className='btn btn-dark my-1' href={html_url}>Visit Github Profile</a>

                        <ul className='my-4 list-group'>
                            
                                {login &&(
                                    <li className='list-group-item'>
                                        <Fragment>    
                                                <strong>UserName:</strong><span>{login}</span>
                                        </Fragment>
                                    </li>
                                )}
                            
                            
                                {company &&(
                                    <li className='list-group-item'>
                                        <Fragment>
                                            <strong>Company:</strong><span>{company}</span>
                                        </Fragment>
                                    </li>
                                )}
                                {blog &&(
                                    <li className='list-group-item'>
                                        <Fragment>
                                            <strong>Website:</strong><span>{blog}</span>
                                        </Fragment>
                                    </li>
                                )}
                            
                        </ul>
                    </div>
                </div>
                <div className='card d-inline-block align-items-center p-2'>
                    <div className='mx-1 badge badge-danger'>Followers: {followers}</div>
                    <div className='mx-1 badge badge-success'>Following: {following}</div>
                    <div className='mx-1 badge badge-light'>Public Repos: {public_repos}</div>
                    <div className='mx-1 badge badge-dark'>Public Gists: {public_gists}</div>
                </div>
                <Repos repos={repos}/>
            </Fragment>
        )
}


export default User
