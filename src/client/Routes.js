import React from 'react'
// import { Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import UserListPage from './pages/UserListPage'
import AdminsListPage from './pages/AdminsListPage'
import PageNotFound from './pages/PageNotFound'
import App from './App'

// export default () => {
//     return (
//         <div>
//             <Route exact path="/" component={Home} />
//             <Route path="/users" component={UserList} />
//         </div>
//     )
// }

export default [
    {
        ...App,
        routes: [
            {
                ...HomePage,
                path: '/',
                exact: true,
            },
            {
                ...AdminsListPage,
                path: '/admins',
            },
            {
                ...UserListPage,
                path: '/users',
            },
            { ...PageNotFound },
        ],
    },
]
