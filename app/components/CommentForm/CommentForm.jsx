import React from 'react';

export default class CommentForm extends React.Component{
    handleSubmit(e){
        e.preventDefault();
        var author= this.refs.author.getDOMNode().value.trim();
        var text = this.refs.text.getDOMNode().value.trim();
        if(!author || !text){
            return;
        }
        this.props.onCommentSubmit.call(this,{author:author,text:text});
        this.refs.author.getDOMNode().value="";
        this.refs.text.getDOMNode().value="";
        return ;
    }
    render(){
        return (
            <form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" placeholder="your name" ref="author"/>
                <input type="text" placeholder="say something ..." ref="text"/>
                <input type="submit" value="post"/>
            </form>
        );
    }
}