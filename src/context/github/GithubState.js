import React, {useReducer} from 'react'
import axios from 'axios'
import GithubContext from './GithubContext'
import GithubReducer  from './GithubReducer'
import {SEARCH_USERS, SET_LOADING, CLEAR_USERS, GET_REPOS, GET_USER, SET_TEXT} from '../Types'

const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        text: '',
        loading: false,
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);   

    const searchUsers = async text =>{
        setLoading();
        const res = await axios.get("https://api.github.com/search/users?q="+text+"&client_id="+process.env.REACT_APP_GITHUB_CLIENT_ID+"&client_secret="+process.env.REACT_APP_GITHUB_CLIENT_SECRET);

        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items
        });
    }

    const getUser = async (userName) => {
        setLoading();
        const res = await axios.get("https://api.github.com/users/"+userName+"?client_id="+process.env.REACT_APP_GITHUB_CLIENT_ID+"&client_secret="+process.env.REACT_APP_GITHUB_CLIENT_SECRET);
        
        dispatch({
            type: GET_USER,
            payload: res.data
        });
      }

    const getUserRepos = async (userName) => {
        setLoading();
        const res = await axios.get("https://api.github.com/users/"+userName+"/repos?per_page=5&sort=created:asc&client_id="+process.env.REACT_APP_GITHUB_CLIENT_ID+"&client_secret="+process.env.REACT_APP_GITHUB_CLIENT_SECRET);
        
        dispatch({
            type: GET_REPOS,
            payload: res.data
        });
    }
    
    const setText = (txt) => {
        dispatch({
            type: SET_TEXT,
            searchText: txt
        });
    }
    

    const clearUsers = () => dispatch({type: CLEAR_USERS});

    const setLoading = () => dispatch({ type: SET_LOADING});


    return <GithubContext.Provider
        value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading,
            text: state.text,
            searchUsers,
            clearUsers,
            getUser,
            getUserRepos,
            setText
        }}>
            {props.children}
        </GithubContext.Provider>
}

export default GithubState