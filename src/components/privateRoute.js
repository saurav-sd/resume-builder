import React from 'react'
import {Route,Navigate, Outlet, Routes, Redirect} from 'react-router-dom';
import{isLoaded,isEmpty} from 'react-redux-firebase'
import { connect } from 'react-redux';

function PrivateRoute({ auth, component: Component, ...remainingprops }) {
    console.log("auth : ", auth)
    return (
        <Route {...remainingprops} render={(props)=>(
            isLoaded(auth) && !isEmpty(auth) ?
            <Component {...props}/> : <Redirect to='/'/>
        )} />
    )
}

const mapStateToProps = (state) => {
    return {
        auth : state.firebase.auth
    }
}

export default connect(mapStateToProps)(PrivateRoute)