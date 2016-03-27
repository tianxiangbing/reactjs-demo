import React from 'react';
import Comment from '../Comment/Comment';

export default class CommonList extends React.Component{
    render(){
        console.log('========');
        console.log(this.props.data);
        var commentNodes = this.props.data.map((comment)=>{
            return (
                <Comment author={comment.author}>
                    {comment.text}
                </Comment>
            )
        });
        return (
            <div className="commentList">
                {commentNodes}
            </div>
        )
    }
}