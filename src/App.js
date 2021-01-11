import React, { useEffect } from 'react';
// import { user } from './features/user/UserLogin';
import './App.css';
import HeaderIcons from './HeaderIcons'
import Footericons from './Footericons';
import TinderCards from './TinderCards';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Chatboxes from './Chatboxes';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser_email, selectUser_name, selectUser_photourl, selectUser_uid, Sign_in, Sign_out } from './features/user/userSlice';
import UserLogin from './features/user/UserLogin';
import Imageupload from './Imageupload';
import { auth, database } from './firebase';



function App() {

  const uid = useSelector(selectUser_uid)
  // const name = useSelector(selectUser_name)
  // const photourl = useSelector(selectUser_photourl)
  // const email = useSelector(selectUser_email)
 
  const dispatch = useDispatch()

      useEffect(() => {
      
                  auth.onAuthStateChanged(authUser => {
                    if (authUser) {
                      dispatch(Sign_in({
                        uid_google: authUser.uid,
                        name_google: authUser.displayName,
                        photourl_google: authUser.photoURL,
                        email_google: authUser.email
                      }))
                    } else {
                      dispatch(Sign_out())
                    }
                  }
                
                  )
      }, [])


  return (
    <div className="app">


    
    
                  <Router>
                  

                  {!uid ? <UserLogin /> 
                    :

                  <Switch>



                  <Route path='/chats'>
                    <HeaderIcons backarrow_prop='/' />
                    <Chatboxes />
                  </Route>

                  <Route path='/imageupload'>
                      <Imageupload />
                  </Route>

                  <Route path='/'>
                      <HeaderIcons />
                      <TinderCards />
                      <Footericons />       
                  </Route>

            

                  
                  </Switch>
}
                  </Router>




      
     
    </div>
  );
}

export default App;





































{/* <div className="App">
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <Counter />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <span>
    <span>Learn </span>
    <a
      className="App-link"
      href="https://reactjs.org/"
      target="_blank"
      rel="noopener noreferrer"
    >
      React
    </a>
    <span>, </span>
    <a
      className="App-link"
      href="https://redux.js.org/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Redux
    </a>
    <span>, </span>
    <a
      className="App-link"
      href="https://redux-toolkit.js.org/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Redux Toolkit
    </a>
    ,<span> and </span>
    <a
      className="App-link"
      href="https://react-redux.js.org/"
      target="_blank"
      rel="noopener noreferrer"
    >
      React Redux
    </a>
  </span>
</header>
</div> */}