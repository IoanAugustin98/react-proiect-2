import React              from 'react'; 
import { Route, Routes }  from 'react-router-dom'; 
import Home               from './Pages/Home';
import About              from './Pages/About';
import LogIn              from './Pages/LogIn';
import Page404            from './Pages/Page404';

class App extends React.Component{
  constructor(){
    super();
    this.state = {};
  }
  render(){
    return(
      <div>
        <Routes>
            <Route exact  path="/"      element={<Home />} />
            <Route        path="/login" element={<LogIn />} />
            <Route        path="/about" element={<About />} />
            
            <Route        path="*"      element={<Page404 />} />
        </Routes>
      </div>
    );
  }
}

export default App;