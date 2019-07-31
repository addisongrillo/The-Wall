import React from 'react'
import Posts from "../components/Posts"
import axios from 'axios'

class PostList extends React.Component {
    state = {
        posts: []
    }
    componentDidMount(){
        axios.get('http://localhost:8000/posts/')
        .then(res=> {
            this.setState({
                posts: res.data
            })
            console.log(this.state.posts)
        })
    }
    render(){
        return(
            <Posts data={this.state.posts}/>
        )
    }
}

export default PostList