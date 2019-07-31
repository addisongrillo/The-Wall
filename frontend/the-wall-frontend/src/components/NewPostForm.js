import React from 'react'
import { Form, Input, Button } from 'antd';
import axios from 'axios'

// function hasErrors(fieldsError) {
//   return Object.keys(fieldsError).some(field => fieldsError[field]);
// }

class NewPostForm extends React.Component {
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      axios.post('http://localhost:8000/posts/', {
            content: values.content,
            user: "addison"
            })
    });
    window.location.reload()
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

export default WrappedNewPostForm