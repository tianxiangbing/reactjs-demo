'use strict';

import React from 'react';
import CommentList from "../CommentList/CommentList";
import CommentForm from "../CommentForm/CommentForm";


export default class CommentBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {data:[]};
        //this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
        $.ajax({
            url:this.props.url,
            dataType:'json',
            success:function(data){
                console.log(data)
                this.setState({'data':data});
            }.bind(this)
        })
    }
    handleSubmit(comment){
        console.log('********');
        console.log(this.state)
        let comments = this.state.data;
        let newComments = comments.concat([comment]);
        this.setState({data:newComments});
        $.ajax({
            url:this.props.url,
            method:'get',
            data:comment,
            success:function(data){
                //this.setState({'data':data});
            }.bind(this)
        });
    }
    render(){
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data}></CommentList>
                <CommentForm onCommentSubmit={::this.handleSubmit}></CommentForm>
            </div>
        )
    }
}
