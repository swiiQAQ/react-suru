import React from 'react';
import SuruList from './components/SuruList';
import InsertBtn from './components/InsertBtn';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

class SuruBox extends React.Component{
    constructor(props){
        super(props);
        this.model = [
            {
                title:'2017.12.1',
                suruItem:[
                    {
                        title: '唱歌',
                        content:['http://img.hb.aicdn.com/df8474fdf28db472c6b3e63d0854f62e81033c698cd1-hP5Kj9_sq320','明天会更好']
                    }
                ]
            },
            {
                title:'2017.12.2',
                suruItem:[
                    {title: '画画',content:['//img.hb.aicdn.com/13f5dbb1d0ce9a39cba48ab9a1e7667ca5fe9529b724-DECkNq_sq320','小动物']},
                    {title: '画画',content:['//img.hb.aicdn.com/13f5dbb1d0ce9a39cba48ab9a1e7667ca5fe9529b724-DECkNq_sq320','小动物']}
                ]
            },
            {
                title:'2017.12.3',
                suruItem:[
                    {title: '画画',content:['//img.hb.aicdn.com/13f5dbb1d0ce9a39cba48ab9a1e7667ca5fe9529b724-DECkNq_sq320','小动物']},
                    {title: '画画',content:['//img.hb.aicdn.com/13f5dbb1d0ce9a39cba48ab9a1e7667ca5fe9529b724-DECkNq_sq320','小动物']}
                ]
            } 
        ];
        this.state ={list:''}; 
        this.listOperate = this.listOperate.bind(this);
    }
    listOperate(id){
        let list = this.state.list;
        list.splice(id,1);
        this.setState({list:list})
    }
    render(){
        let boxShow;
        // debugger;
        if(this.state.list[0]){
            boxShow = (
                <div>
                    <InsertBtn size="Small"></InsertBtn>
                    <SuruList list={this.state.list} listOperate={this.listOperate}></SuruList>
                    <InsertBtn size="Small"></InsertBtn>
                </div>
            )
        }
        else{
            boxShow = (
                <InsertBtn size="Large"></InsertBtn>
            )
        }
        return(
            <div className="suruList">
                {boxShow}
            </div>
            // <SuruList></SuruList>
            // <Router path="/">
            //     <Router Component={SuruList}></Router>
            //     {/* <Router Component={InsertList}></Router> */}
            // </Router>
        )
    }
}

export default SuruBox