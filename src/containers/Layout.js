import React from 'react';
import { Layout, Menu, Breadcrumb} from 'antd';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../store/actions/auth'

const { Header, Content, Sider } = Layout;
// const { SubMenu } = Menu;

class SiderLayout extends React.Component {
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item><Link to="/">The Wall</Link></Menu.Item>
            {
              this.props.isAuthenticated ? 
              <Menu.Item onClick={this.props.logout}>Logout</Menu.Item> :
              <Menu.Item><Link to="/login">Login</Link></Menu.Item>

            }
            
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#002140', padding: 0 }}>
            <h1 style={{ color: '#E0E2E5', fontSize: "25px", fontFamily: 'impact', margin: '0 16px' }} >The Wall</h1>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              {/* <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>cat</Breadcrumb.Item> */}
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                {this.props.children}
            </div>
          </Content>
          {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
        </Layout>
      </Layout>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return{
      logout: () => dispatch(actions.logout())
  }
}
export default connect(null, mapDispatchToProps)(SiderLayout)