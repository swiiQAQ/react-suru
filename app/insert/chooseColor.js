import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'
import Back from '../common/back'
// import json from 'json-loader!color'
import config from '../config.json';

class chooseColor extends React.Component{
    constructor(props){
        super(props);
        // this.fetchData = this.fetchData.bind(this);
        this.color=[
            ['#F9ED69','#F08A5D','#B83B5E','#6A2C70'],
            ['#E3FDFD','#CBF1F5','#A6E3E9','#71C9CE'],
            ['#FFCFDF','#FEFDCA','#E0F9B5','#A5DEE5']
        ];
        this.jumpPage = this.jumpPage.bind(this);

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
    jumpPage(color){
        let path ={
            pathname: '/insertPlate',
            state: color
        }
        this.props.history.push(path);
    }
    render(){
        // this.fetchData();
        const colorRender =(
            <div className="centerWrap">
                {
                    this.color.map((item,index)=>{
                        return (
                            <div onClick={this.jumpPage.bind(this,item)} className="colorCircle" key={index}>
                                {
                                    item.map((item,index)=>{
                                        return(
                                            <div className="colorItem" style={{backgroundColor:item}} key={index}></div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        )
        return(
            <div>
                <Back history={this.props.history}/>
                <div>
                    {colorRender}
                </div>
            </div>
        )
    }
}

export default chooseColor