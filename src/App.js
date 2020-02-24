import React from 'react';
import Navbar from './component/Navbar'
import Content from './component/Content'
import Home from './component/Home'
import { Route, Switch} from 'react-router-dom'
class App extends React.Component {

 
  render() {
    return (
      <div>
      <Navbar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route  path='/home/:id' component={Content}/>
          
        </Switch>
      
      </div>
    );
  }
}

export default App;