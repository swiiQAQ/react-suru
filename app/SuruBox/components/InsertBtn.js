import React from 'react'

class InsertBtn extends React.Component{
    render(){
        return(
            <div id="insertBtn" className={this.props.size}>
                <span></span>
                <span></span>
            </div>
        )
    }
}

export default InsertBtn