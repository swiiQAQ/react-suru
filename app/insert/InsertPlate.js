import React from 'react'

class InsertPlate extends React.Component{
    constructor(props){
        super(props);
        this.blurHander = this.blurHander.bind(this);
    }
    blurHander(){
        let value = this.refs.titleInput.value;
        if(!value){
            this.props.history.push('/');
        }
        else{
            this.refs.title.classList.replace("title","completeTitle");
        }
    }
    render(){
        let data = this.props.location.state;

        return(
            <div className="insertPlate">
                <div ref="title" className="title">
                    <input className="titleInput" ref="titleInput" onBlur={this.blurHander}/>
                    <div className="inputRightColor">
                        {
                            data.map((item,index)=>{
                                return <span style={{background: item}}></span>
                            })
                        }
                    </div>
                </div>
            </div>
            
        )
    }
}

export default InsertPlate;