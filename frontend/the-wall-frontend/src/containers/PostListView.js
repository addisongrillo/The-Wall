import React from 'react'
import Posts from "../components/Posts"
import axios from 'axios'

const data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
  ];

class PostList extends React.Component {
    state = {
        posts: []
    }
    componentDidMount(){
        axios.get('http://localhost:8000/api/')
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