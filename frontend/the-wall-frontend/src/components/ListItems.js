import React from 'react'
import { List, Avatar, Button } from 'antd';
import axios from 'axios'
import WrappedUpdatePostForm from './UpdateForm';


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
                <Button type="danger" onClick={handleDelete}>Delete Post</Button>
                <div id="buttonspace"></div>
                <Button type="primary" onClick={toggleForm}>Update Post</Button>
            </>
            }
            
            
            
            
          </List.Item>
    )
}

export default ListItem