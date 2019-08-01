import React from 'react'
import { List, Avatar, Button } from 'antd';
import axios from 'axios'
import WrappedUpdatePostForm from './UpdateForm';
import { connect } from 'react-redux'
import * as actions from '../store/actions/auth'



const ListItem = (props) => {

    const [formOn, setFormOn] = React.useState(false)
 
        const toggleForm = () => {
          setFormOn(!formOn)
        } 

    const handleDelete = () => {
        axios.delete(`${props.item.url}`)
        props.update()
      }

    return(
        <List.Item>
            { formOn ?
            <WrappedUpdatePostForm toggleForm={toggleForm} update={props.update} url={props.item.url}/> :
            <>
                <List.Item.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={<a href="https://ant.design">{props.item.user}</a>}
                description={props.item.content}
                />
                {props.isAuthenticated &&
                  <Button type="danger" onClick={handleDelete}>Delete Post</Button>
                }
                  <div style={{width: '10px'}}></div>
                  {props.isAuthenticated &&
                  <Button type="primary" onClick={toggleForm}>Update Post</Button>
                }
            </>
            }
            
            
            
            
          </List.Item>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(ListItem)
