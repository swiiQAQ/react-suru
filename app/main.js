import React from 'react';
import ReactDOM from 'react-dom';
import Greeter from './Greeter.js';
import BasicExample from './Basic.js';
import SuruBox from './SuruBox/SuruBox';
import RouterBox from './RouterBox';
import './autoAdapt.js'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'


  
// function App() {
//     return (
//         <div>
//             <h1>App</h1>
//             <ul>
//                 <li><Link to="/about">About</Link></li>
//                 <li><Link to="/inbox">Inbox</Link></li>
//             </ul>
//         </div>
//     )
// }

// function About() {
//     return (
//         <h3>about</h3>
//     )
// }

// function Inbox() {
//     return (
//         <div>
//             <h2>Inbox</h2>
//         </div>
//     )
// }

// const Message = function () {
//     return <h3>Message </h3>
// }


// const router = (
//     <Router>
//         <Router path="/" component={App}>
//             <Router path="about" component={About} />
//             <Router path="inbox" component={Inbox} >
//                 <Router path="messages/:id" component={Message} />
//             </Router>
//         </Router>
//     </Router>
// );
// React.render(router, document.body)
// ReactDOM.render(<BasicExample />, document.getElementById('root'));
// function RouterBox(){
//   return(
//     <Router>
//       <Router path="/">
//       </Router>
//     </Router>
//   )
// }

// ReactDOM.render(<RouterBox />, document.getElementById('root'));
ReactDOM.render(<SuruBox />, document.getElementById('root'));


