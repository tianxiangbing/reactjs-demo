'use strict';

import React from 'react';
import CommentList from "../CommentList/CommentList";
import CommentForm from "../CommentForm/CommentForm";
export default class CommentBox extends React.Component{
    render(){
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList></CommentList>
                <CommentForm></CommentForm>
            </div>
        )
    }
}
