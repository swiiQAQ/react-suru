import React from 'react';

class SuruItem extends React.Component{
    constructor(props){
        super(props);
        this.startFunc = this.startFunc.bind(this);
        this.moveFunc = this.moveFunc.bind(this);
        this.endFunc = this.endFunc.bind(this);
        this.startX = 0;
        this.startY = 0;
        this.endX = 0;
        this.endY = 0;
        this.distanceX = 0;
        this.distanceY = 0;
        this.right = 40;
        
    }
    startFunc(e){
        
        let touch = e.targetTouches[0];
        this.startX = touch.pageX;
        this.startY = touch.pageY;
        let colorCircle = e.target.getElementsByClassName("itemColor")[0];
        this.right = window.getComputedStyle(colorCircle,false)['right'];
    }
    moveFunc(e){
        let touch = e.targetTouches[0];
        this.endX = touch.pageX;
        this.endY = touch.pageY;
        this.distanceX = this.endX - this.startX;
        this.distanceY = this.endY - this.startY;
        
        let colorCircle = e.target.getElementsByClassName("itemColor")[0];
        colorCircle.style.right = this.right.match(/[0-9]+/g) - this.distanceX +"px";
        if(-this.distanceX>this.startX/3){
            colorCircle.style.background = '#C0392B';
        }
    }
    endFunc(e){
        let colorCircle = e.target.getElementsByClassName("itemColor")[0];
        if(-this.distanceX>this.startX/3){
            colorCircle.style.left = '1rem';
        }
        else{
            colorCircle.style.right = '40px';
            colorCircle.style.background = '#3498DB';
        }
    }
    render(){
        return(
            <div className="suruItem" onTouchStart={this.startFunc} onTouchMove={this.moveFunc} onTouchEnd={this.endFunc}>
                {this.props.title}
                <span className="itemColor"></span>
            </div>
        )
    }
}

export default SuruItem;