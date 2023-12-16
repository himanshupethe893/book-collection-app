import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LoginForm from './components/LoginForm';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Service from './components/Service';
import AboutUs from './components/AboutUs';
import NotFound from './components/NotFound';
import ProtectedRoute from './components/ProtectedRoute';

import './App.css';

const App = () => (
  <Router>
    <Switch>
      <Route path="/login" component={LoginForm} />
      <Route
        path="/"
        render={(props) => <ProtectedRoute {...props} Component={Home} />}
      />
      <Route
        path="/service"
        render={(props) => <ProtectedRoute {...props} Component={Service} />}
      />
      <Route
        path="/aboutus"
        render={(props) => <ProtectedRoute {...props} Component={AboutUs} />}
      />
      <Route path="/signup" component={SignUp} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
);

export default App;

// src/App.js
// import React from 'react';
// import Home from './Home';

// function App() {
//   return (
//     <div className="App">
//       <Home />
//     </div>
//   );
// }

// export default App;
