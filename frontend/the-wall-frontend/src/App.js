import React from 'react';
import 'antd/dist/antd.css'

import SiderLayout from './containers/Layout'
import PostList from './containers/PostListView'

function App() {
  return (
    <div>
      <SiderLayout>
          <PostList/>
        </SiderLayout>
    </div>
  );
}

export default App;
