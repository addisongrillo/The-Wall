import React from'react'
import { Route } from 'react-router-dom'
import PostList from './containers/PostListView'

const BaseRouter = () => (
    <div>
        <Route exact path ='/' component={PostList}/>
    </div>
)
export default BaseRouter