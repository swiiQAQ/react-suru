import React from 'react'
import {
  Link,
} from 'react-router-dom'
import insert from '../../insert/insert.js'

class InsertBtn extends React.Component{
    
    render(){
        return(
            <div id="insertBtn" className={this.props.size}>
                <Link to='/insert'>
                    <span></span>
                    <span></span>
                </Link>    
            </div>
        )
    }
}

export default InsertBtn