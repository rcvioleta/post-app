import React from 'react';

import Post from './Post/Post';

const posts = (props) => (
    <div style={{ width: '80%', margin: '3rem auto' }}>
        {props.posts.map(post => {
            return <Post
                key={post.id}
                name={post.name}
                email={post.email}
                body={post.body} />
        })}
    </div>
)

export default posts;