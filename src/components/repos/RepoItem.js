import React from 'react'
import PropTypes from 'prop-types'

const RepoItem = ({repo}) => {
    return (
        <div className='card p-3 m-1'>
            <h5 className='h5 item-link'>
                 <a href={repo.html_url}>{repo.name}</a>
            </h5>
            <p>{repo.description}</p>
        </div>
    )
}

RepoItem.protoType = {
    repo: PropTypes.object.isRequired
}

export default RepoItem
