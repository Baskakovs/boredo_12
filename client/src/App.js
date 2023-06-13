import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';

//import redux
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from './slices/loginSlice';

//pages
import Feed from './pages/Feed';
import Login from './pages/Login';
import ReadFurther from './pages/ReadFurther';
import Profile from './pages/Profile';
import Write from './pages/Write';
import NavBar from './components/large/NavBar';
import UserPosts from './pages/UserPosts'
import Edit from './pages/Edit'
import AccountSettings from './pages/AccountSettings';

function App() {
  const user = useSelector((state) => state.login.user)
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("/me")
      .then((r) => {
        if (r.ok) {
        r.json().then((user) => {
          dispatch(setUser(user));
        })}
      });
  }, []);

  return (
    <>
    <Router>
      <Switch>
      {
        !user ?
        <Login/>
        :
        <>
        <Route path="/" exact component={Feed} />
        <Route path="/post/:id" exact component={ReadFurther} />
        <Route path="/login" exact component={Login} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/write" exact component={Write} />
        <Route path="/profile/posts" component={UserPosts}/>
        <Route path="/edit/:id" component={Edit}/>
        <Route path="/profile/settings" component={AccountSettings}/>
        </>
      }
      </Switch>
      {
        user ? <NavBar/> : null
      }
    </Router>
    </>
  );
}

export default App;
