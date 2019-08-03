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
        axios.get('https://thewall2019.herokuapp.com/api/posts/')
        .then(res=> {
            this.setState({
                posts: res.data
            })
            console.log(this.state.posts)
        })
    }

    componentDidMount(){
        axios.get('https://thewall2019.herokuapp.com/api/posts/')
        .then(res=> {
            this.setState({
                posts: res.data
            })
            console.log(this.state.posts)
        })
    }
    render(){
        return(
            <Posts update={this.update.bind(this)} data={this.state.posts}/>
        )
    }
}

export default PostList