import React from'react'
import { Route } from 'react-router-dom'
import PostList from './containers/PostListView'
import WrappedNormalLoginForm from './containers/Login'
import WrappedSignupForm from './containers/SignupForm'

const BaseRouter = () => (
    <div>
        <Route exact path ='/' component={PostList}/>
        <Route exact path ='/login' component={WrappedNormalLoginForm}/>
        <Route exact path ='/signup' component={WrappedSignupForm}/>
    </div>
)
export default BaseRouter