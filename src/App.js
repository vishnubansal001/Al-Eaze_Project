import React from 'react';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Landing from './pages/landing';
import Restaurant from'./pages/resto';
import Recipe from './pages/singleRecipe';


const App = () => {
  return (
    <div>
      {/* <Landing/> */}
      <Recipe/>
    </div>
  );
};

export default App;