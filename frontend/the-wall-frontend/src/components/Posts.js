import React from 'react'
import { List } from 'antd';
import ListItem from './ListItems';

const Posts = (props) => {

    return(
        <List
        itemLayout="horizontal"
        dataSource={props.data}
        renderItem={item => (
          <ListItem item={item}/>
        )}
      />
    )
}

export default Posts