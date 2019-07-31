import React from 'react'
import { List } from 'antd';
import ListItem from './ListItems';
import NewPostForm from './NewPostForm';

const Posts = (props) => {


    return(
      <>
        <List
        itemLayout="horizontal"
        dataSource={props.data}
        renderItem={item => (
          <ListItem update={props.update.bind(this)} item={item}/>
        )
        }
        />
        <NewPostForm update={props.update.bind(this)}/>
      </>
    )
    
}

export default Posts