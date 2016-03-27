import React from 'react';
import Comment from '../Comment/Comment';

export default class CommonList extends React.Component{
    render(){
        return (
            <div className="commentList">
                <Comment author="Peter Json">
                    This is one Comment.
                </Comment>
                <Comment author="jack walke">
                    This is two Comment.
                    *hehe*
                </Comment>
            </div>
        )
    }
}