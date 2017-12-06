
import React from 'react'
import InsertBtn from './SuruBox/Components/InsertBtn'
import SuruBox from './SuruBox/SuruBox'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

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
const RouterBox = () =>(
    <Router path="/">
        <div>
            <Router exact path="/" component={SuruBox}/>
            {/* <div>
                <Link to="/insert">新增</Link>
            </div> */}
            <Route path="/insert" component={InsertBtn} />
        </div>
    </Router>
)

export default RouterBox;