import React from 'react'
import { Form, Input, Button } from 'antd';
import axios from 'axios'
import { connect } from 'react-redux'

class UpdatePostForm extends React.Component {
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
      axios.put(`${this.props.url}`, data, config)
    })
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

const mapStateToProps = state => {
  return{
    token: state.token,
    username: state.username
  }
}


export default connect(mapStateToProps, null)(WrappedUpdatePostForm)