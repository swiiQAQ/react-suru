import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'
import Back from '../common/back'
// import json from 'json-loader!color'
import config from '../config.json';

class Insert extends React.Component{
    constructor(props){
        super(props);
        // this.fetchData = this.fetchData.bind(this);
        this.color=[
            ['#F9ED69','#F08A5D','#B83B5E','#6A2C70'],
            ['#E3FDFD','#CBF1F5','#A6E3E9','#71C9CE'],
            ['#FFCFDF','#FEFDCA','#E0F9B5','#A5DEE5']
        ]
    }
    // fetchData(){
    //     fetch('../../jsonData/color.json')
    //         .then(
    //             (response) => {
    //                 return response.json();
    //             }
    //         ).then(
    //             (data) =>{
    //                 console.log(data);
    //             }
    //         )
    // }
    
    render(){
        // this.fetchData();
        const coloRender =(
            <div className="centerBox">
                {
                    this.color.map((item,index)=>{
                        return <div className="">{item}</div>
                    })
                }
            </div>
        )
        return(
            <div>
                <Back />
                <div>
                    {coloRender}
                </div>
            </div>
        )
    }
}

export default Insert