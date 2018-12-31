import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom'

import SearchPage from './SearchPage'
import AboutPage from './AboutPage'

const App = () =>  (
      // トップレベルエンティティはエレメントを一つだけ持てる（HTMLタグが一つ持てる）だからdivで括る
    <Router>
      <div className="app">
        <ul className="left-navi">
          <li><Link to="/">ホテル検索</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        <Switch>
          <Route exact path="/" component={SearchPage}></Route>
          <Route exact path="/about" component={AboutPage}></Route>
        </Switch>
      </div>
    </Router>
)

export default App
