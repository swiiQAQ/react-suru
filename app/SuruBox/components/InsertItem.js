import React from 'react'

class InsertItem extends React.Component{
    render(){
        return(
            <div id="inserBtn" className={this.props.size}>
                <span></span>
                <span></span>
            </div>
        )
    }
}

export default InsertItem