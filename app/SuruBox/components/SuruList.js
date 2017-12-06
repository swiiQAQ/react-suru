import React from 'react';
import SuruItem from './SuruItem'


class SuruList extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let list = this.props.list.map((item,index)=>{
            return <SuruItem title={this.props.list[index].title} key={index} />
        })
        return(
            <div>
                {list}
            </div>
        )
    }
}

export default SuruList;