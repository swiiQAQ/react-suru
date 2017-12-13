import React from 'react'
import InsertItem from './InsertItem'
import InsertBox from './InsertBox'

class InsertPlate extends React.Component{
    constructor(props){
        super(props);
        this.blurHander = this.blurHander.bind(this);
        this.insClickHandler = this.insClickHandler.bind(this);
        this.IncLength = this.IncLength.bind(this);
        this.reduceLength = this.reduceLength.bind(this);
        this.goBack = this.goBack.bind(this);
        this.plateTouchStart = this.plateTouchStart.bind(this);
        this.plateTouchMove = this.plateTouchMove.bind(this);
        this.plateTouchEnd = this.plateTouchEnd.bind(this);
        this.data = this.props.location.state;
        this.state = {length: 0,colors: this.data};
    }
    blurHander(){
        let value = this.refs.titleInput.value;
        if(!value){
            this.setState({goBack:true});
            // this.props.history.push('/');
        }
        else{
            this.setState({goBack:false});
            this.refs.title.classList.replace("title","completeTitle");
        }
    }
    //点击后新增事项
    insClickHandler(){
        // let newPlate  = this.refs.newPlate;
        // this.setState({length: this.prevState.length+1})
        let input = document.getElementsByClassName("inputItem");
        if(input.length){
            input = input[input.length-1].value;
            if(!input){
                this.reduceLength()
            }
            else{
                this.IncLength()
            }
        }
        else{
            this.IncLength()
        }
    }
    goBack(){
        this.props.history.push('/')
    }
    IncLength(){
        this.setState((prevState,props)=>{
            return {length: prevState.length+1}
        })
    }
    reduceLength(){
        this.setState((prevState,props)=>{
            return {length: prevState.length-1}
        })        
    }
    plateTouchStart(){
        
    }
    plateTouchMove(){

    }
    plateTouchEnd(){

    }
    render(){
        // let insBtn;
        if(this.refs.titleInput&&this.refs.titleInput.value){
            this.state.goBack = false;
        }
        else{
            this.state.goBack = true;
        }        
        return(
            <div ref="insertPlate"  className="insertPlate">
                <div>
                    <div ref="title" className="title">
                        <input className="titleInput" ref="titleInput" onBlur={this.blurHander}/>
                        <div className="inputRightColor">
                            {
                                this.data.map((item,index)=>{
                                    return <span style={{background: item}}></span>
                                })
                            }
                        </div>
                    </div>
                    <InsertBox length={this.state.length} colors={this.state.colors}/>
                </div>
                {
                    this.state.goBack?(<div className="insBtn" onClick={this.goBack}></div>):(<div className="insBtn" onClick={this.insClickHandler}></div>)
                }
            </div>
        )
    }
}

export default InsertPlate;