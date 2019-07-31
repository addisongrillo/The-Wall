import React from 'react'
import { List, Avatar, Button } from 'antd';
import axios from 'axios'


const ListItem = (props) => {

    const handleDelete = () => {
        axios.delete(`${props.item.url}`)
      }

    return(
        <List.Item>
            <List.Item.Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={<a href="https://ant.design">{props.item.user}</a>}
              description={props.item.content}
            />
            <Button onClick={handleDelete}>Delete Post</Button>
          </List.Item>
    )
}

export default ListItem