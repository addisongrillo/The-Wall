import React from 'react'
import Posts from "../components/Posts"
import axios from 'axios'

class PostList extends React.Component {
    state = {
        posts: []
    }
    update = () => {
        setTimeout(this.updateAfterTimeout, 100)
    }

    updateAfterTimeout = () =>{
        axios.get('http://localhost:8000/posts/')
        .then(res=> {
            this.setState({
                posts: res.data
            })
        })
    }

    componentDidMount(){
        axios.get('http://localhost:8000/posts/')
        .then(res=> {
            this.setState({
                posts: res.data
            })
        })
    }
    render(){
        return(
            <Posts update={this.update.bind(this)} data={this.state.posts}/>
        )
    }
}

export default PostList