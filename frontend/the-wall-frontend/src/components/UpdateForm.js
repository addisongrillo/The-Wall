import React from 'react'
import { Form, Input, Button } from 'antd';
import axios from 'axios'

class UpdatePostForm extends React.Component {
  componentDidMount() {
    this.props.form.validateFields();
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      axios.put(`${this.props.url}`, {
            content: values.content,
            user: "addison"
            })
            console.log(values.content)
    })
    console.log(this.props.url)
    this.props.update()
    this.props.toggleForm()
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
          <Form.Item>
          {getFieldDecorator('content', {
          })(
            <Input size="large" style={{ width: 500 }}
              placeholder="Update Your Post"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedUpdatePostForm = Form.create({ name: 'horizontal_login' })(UpdatePostForm);

export default WrappedUpdatePostForm