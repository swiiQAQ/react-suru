import React from 'react'
import '../../assets/scss/common.scss';

class Back extends React.Component{
    constructor(props){
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler(){
        // this.props.history.push('/');
        this.props.history.goBack();
    }
    render(){
        return(
            <div className="backBox" onClick={this.clickHandler}>
                <span></span>
                <span></span>
            </div>
        )
    }
}

export default Back;