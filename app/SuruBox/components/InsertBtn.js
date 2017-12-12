import React from 'react'
import {
  Link,
} from 'react-router-dom'

class InsertBtn extends React.Component{
    
    render(){
        return(
            <div id="insertBtn" className={this.props.size}>
                <Link to='/chooseColor'>
                    <span></span>
                    <span></span>
                </Link>    
            </div>
        )
    }
}

export default InsertBtn