import React from 'react'

class InsertItem extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        let itemStyle={
            background: this.props.color,
            // width: '95%'
        }
        return(
            <div className="InsertItem">
                <input className="inputItem" style={itemStyle}/>
            </div>
        )
    }
}

export default InsertItem;