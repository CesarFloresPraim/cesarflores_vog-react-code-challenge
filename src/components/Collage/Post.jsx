import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deletePost, postNeedsUpdate } from '../../middleware/reducers/post/post.thunks';

function Post({ post, image}) {
    const [post_, setPost] = useState(post);
    const [image_, setImage] = useState(image);
    const dispatch = useDispatch()
    //METHODS
    function handleEditPost() {
        dispatch(postNeedsUpdate(post_))
    }

    function handleDeletePost() {
        dispatch(deletePost(post_.id))
    }

    return (
        <Card style={{ marginTop: '10px', height: '100%' }}>
            <Card.Header>{post_.id + '. ' + post_.title.replace(/^\w/, (c) => c.toUpperCase())}</Card.Header>
            <Card.Img variant="bottom" src={image_} />
            <Card.Body>
                <Card.Text>
                    {post_.body.replace(/^\w/, (c) => c.toUpperCase())}
                </Card.Text>
                <Button variant="secondary" onClick={handleEditPost}>Edit</Button>{' '}
                <Button variant="danger" onClick={handleDeletePost}>Delete</Button>
            </Card.Body>
        </Card>
    )
}


export default Post;