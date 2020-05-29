import React, {useContext} from 'react';
import './users.css';
import GithubContext from '../../context/github/GithubContext'
import AlertContext from '../../context/alert/AlertContext';

const Search = () => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);
    const {text, setText, clearUsers} = githubContext;

    const onSubmit = (e) => {
        e.preventDefault();
        if(text === '') {
            alertContext.setAlert('Please enter a Name', 'warning');
        }
        else{
            githubContext.searchUsers(text);
            alertContext.removeAlert();
            setText('');
        }
    };
    const onChangeHandler = (e) => setText(e.target.value);

        return (
            <div>
                <form onSubmit={onSubmit}>
                    <input className="form-control box" type="text" name="text" placeholder="Search Users..." value={text} onChange={onChangeHandler}/>
                    <input type="submit" value="Search" className='box btn btn-dark text-light btn-block' />
                </form>
                { githubContext.users.length > 0 && (
                 <button className="box btn btn-light text-dark btn-block" onClick={clearUsers}>Clear</button>
                )}
               
            </div>
        )    
}

export default Search
