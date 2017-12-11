
import React from 'react'
import SuruBox from './SuruBox/SuruBox'
import Insert from './insert/insert'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
  BrowserRouter,exact
} from 'react-router-dom'
// import createBrowserHistory from 'history/createBriwserHistory'

// const ParamsExample = () => (
//   <Router>
//     <div>
//       <h2>Accounts</h2>
//       <ul>
//         <li><Link to="/netflix">Netflix</Link></li>
//         <li><Link to="/zillow-group">Zillow Group</Link></li>
//         <li><Link to="/yahoo">Yahoo</Link></li>
//         <li><Link to="/modus-create">Modus Create</Link></li>
//       </ul>

//       <Route path="/:id" component={Child}/>
//     </div>
//   </Router>
// )

// const Child = ({ match }) => (
//   <div>
//     <h3>ID: {match.params.id}</h3>
//   </div>
// )

// export default ParamsExample

// const InsertItem = () =>(
//     <InsertItem></InsertItem>
// )
// const history = createBrowserHistory();
const RouterBox = () =>(
    <Router>
        <div>
            <Route exact={true} path="/" component={SuruBox}/>
            <Route path="/insert" component={Insert} />
        </div>
    </Router>
)

export default RouterBox;