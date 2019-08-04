import React from 'react'
import { List } from 'antd';
import ListItem from './ListItems';
import NewPostForm from './NewPostForm';
import { connect } from 'react-redux'
import * as actions from '../store/actions/auth'

class Posts extends React.Component {
  render(){
    return(
      <>
        <List
        itemLayout="horizontal"
        dataSource={this.props.data}
        renderItem={item => (
          <ListItem update={this.props.update.bind(this)} item={item}/>
        )}
        />
        {this.props.isAuthenticated ?
        <NewPostForm update={this.props.update.bind(this)}/> : <div><h3>You must be logged in to post to the wall.</h3></div>
        }
      </>
    )
  }
    
}
const mapStateToProps = state => {
  return{
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
