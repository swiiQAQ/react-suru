import React from 'react'
import InsertItem from './InsertItem'

class InsertBox extends React.Component{
    constructor(props){
        super(props);

        this.renderInsertItem = this.renderInsertItem.bind(this);
    }
    renderInsertItem(){
        // for(let i=0;i<this.length;i++){
        //     // return <div className="InsertItem" style={{background:this.colors[i%4]}}></div>    
        //    return <div className="InsertItem" style={{background:this.colors[i%4]}}></div>;
        // }
        
    }
    // renderInsertItem(){

    // }
    render(){
        // this.setState({length:Array(this.props.length)})
        let length = Array(this.props.length);
        length.fill(0);
        let colors = this.props.colors;
        // let a = this.renderInsertItem();
        return(
            <div>
                {
                    length.map((item,index)=>{
                        {/* let color = colors[index%4]; */}
                        return <InsertItem className="InsertItem" color={colors[index%4]} />
                    })
                }
            </div>
        )
    }
}

export default InsertBox;