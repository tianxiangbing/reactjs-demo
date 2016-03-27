import styles from  './_Comment.scss';
import React from 'react';

let converter = new Showdown.converter();

export default class Comment extends React.Component{
    render(){
        let rawMarkup = converter.makeHtml(this.props.children.toString());
        return (
            <div className={styles.comment}>
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                <span dangerouslySetInnerHTML={{"{{"}}__html: rawMarkup}} />
            </div>
        );
    }
}