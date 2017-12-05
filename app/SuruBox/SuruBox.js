import React from 'react';
import SuruList from './components/SuruList';
import InsertItem from './components/SuruItem';

// import InsertList from './components/InsertList';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

class SuruBox extends React.Component{
    constructor(props){
        super(props);
        this.state ={list: '123'};        
    }
    render(){
        let boxShow;
        if(this.state.list){
            boxShow = (
                <div>
                    <SuruList></SuruList>
                    <InsertItem size="Large"></InsertItem>
                </div>
            )
        }
        else{
            boxShow = (
                <InsertItem size="Small"></InsertItem>
            )
        }
        return(
            <div>
                {boxShow}
            </div>
            // <SuruList></SuruList>
            // <Router path="/">
            //     <Router Component={SuruList}></Router>
            //     {/* <Router Component={InsertList}></Router> */}
            // </Router>
        )
    }
}

export default SuruBox