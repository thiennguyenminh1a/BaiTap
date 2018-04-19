import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import TodoBuilder from './containers/TodoBuilder/TodoBuilder';




class App extends Component {
  render(){
    return(
      <Layout>
          <TodoBuilder/>
        </Layout>
    )
  }
}

export default App;
