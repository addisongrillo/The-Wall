import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import BaseRouter from './routes'
import 'antd/dist/antd.css'

import SiderLayout from './containers/Layout'

function App() {
  return (
    <div>
      <Router>
      <SiderLayout>
          <BaseRouter/>
        </SiderLayout>
      </Router>
    </div>
  );
}

export default App;
