import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions/index'
import { Helmet } from 'react-helmet'

class UserList extends Component {
    componentDidMount() {
        this.props.fetchUsers()
    }

    renderUsers() {
        return this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>
        })
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>{`${this.props.users.length} users loaded`}</title>
                    <meta property="or:title" title="Users App"></meta>
                </Helmet>
                Here's a big list of users:
                <ul>{this.renderUsers()}</ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { users: state.users }
}

function loadData(store) {
    return store.dispatch(fetchUsers())
}

export default {
    loadData,
    component: connect(mapStateToProps, { fetchUsers })(UserList),
}
