import React, {Fragment} from 'react'
import UsersU from '../users/UsersU'
import Search from '../users/Search'

const Home = () => {
    return (
        <Fragment>
            <Search/>
            <UsersU/>
        </Fragment>
    )
}

export default Home