import React from 'react'
import { Form, Input, Button } from 'antd';
import axios from 'axios'
import { connect } from 'react-redux'


class NewPostForm extends React.Component {
  componentDidMount() {
    this.props.form.validateFields();
  }
  
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      let config = {
        headers: {
          'Authorization': `Token ${this.props.token}`
        }
      }
      let data = {
            content: values.content,
            user: this.props.username
      }
      axios.post('http://localhost:8000/posts/', data, config)
    })
    this.props.update()
    this.props.form.resetFields()
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
          <Form.Item>
          {getFieldDecorator('content', {
          })(
            <Input size="large" style={{ width: 500 }}
              placeholder="Post something on the wall!"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Post
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedNewPostForm = Form.create({ name: 'horizontal_login' })(NewPostForm);

const mapStateToProps = state => {
  return{
    token: state.token,
    username: state.username
  }
}


export default connect(mapStateToProps, null)(WrappedNewPostForm)