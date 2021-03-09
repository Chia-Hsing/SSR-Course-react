import React from 'react'

const PageNotFound = ({ staticContext = {} }) => {
    staticContext.notFound = true

    return <h1>oops, page not found</h1>
}

export default { component: PageNotFound }
