import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Footer from './views/footer.jsx';
import Home from './views/home.jsx';
import about from './views/about.jsx';
import portfolio from './views/protfolio.jsx';
import android from './views/android.jsx';
import flutter from './views/flutter.jsx';
import uiux from './views/uiux.jsx';
import ios from './views/los.jsx'
import react from './views/react.jsx'
import unity from './views/unity.jsx'
import Web from './views/web.jsx'
import blog from './views/blog.jsx'
import career from './views/career.jsx'
import team from './views/team.jsx'
import contact from './views/Contact.jsx'
import life from './views/life.jsx'

import './helper/global';


const App = (global) => {

  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/portfolio' component={portfolio} />
        <Route path='/about' component={about} />
        <Route path='/service/android' component={android} />
        <Route path='/service/flutter' component={flutter} />
        <Route path='/service/uiux' component={uiux} />
        <Route path='/service/ios' component={ios} />
        <Route path='/service/react' component={react} />
        <Route path='/service/unity' component={unity} />
        <Route path='/service/web' component={Web} />
        <Route path='/blog' component={blog} />
        <Route path='/career/careeropenings' component={career} />
        <Route path='/team' component={team} />
        <Route path='/contact' component={contact} />
        <Route path='/career/life' component={life} />
      </Switch>
      <Footer />
    </>
  )
}

export default App



