'use strict';

import React from 'react';
import CommentList from "../CommentList/CommentList";
import CommentForm from "../CommentForm/CommentForm";


export default class CommentBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {data:[]};
    }
    componentDidMount(){
        let _this = this;
        $.ajax({
            url:this.props.url,
            dataType:'json',
            success:function(data){
                console.log(data)
                _this.setState({'data':data});
            }
        })
    }
    render(){
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data}></CommentList>
                <CommentForm></CommentForm>
            </div>
        )
    }
}
