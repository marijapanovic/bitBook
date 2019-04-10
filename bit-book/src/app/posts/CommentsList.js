import React from 'react';

const CommentsList = (props) => {
    const comments = props.comments
    return (
        <>
            <div>
                <ul className="collection">
                    {comments.map((comment) =>
                        comment)}
                    <li className="collection-item avatar">
                        <img src="images/yuna.jpg" alt="" className="circle" />
                        <span className="title">Title</span>
                        <p>First Line <br />
                            Second Line
                        </p>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default CommentsList;