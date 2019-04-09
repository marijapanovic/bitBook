import React from 'react'

const TextItem = (props) => {
    const post = props.post
    return (
        <div key={post.id} className="row cardItem">
            <div className="col s12 m6 l2"></div>
            <div className="col s12 m8 12 ">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text textPost">
                        <p>{post.text}</p>
                    </div>
                    <div className="card-action">
                        <span>Text post </span> <span className="commentsPost"> Comments:{post.comments.length}</span>
                    </div>
                </div>
            </div>
            <div className="col s12 m6 l2"></div>
        </div>
    )

}
export default TextItem