import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPostsAsync, loadSinglePostAsync, loadPostsByUserId } from "../../middleware/reducers/post/post.thunks";

import { Row, Col } from 'react-bootstrap';
import Post from "./Post";

const _ = require('lodash');
const chunkSize = 3

function Collage({ collagePosts }) {
    const [posts, setPosts] = useState(collagePosts);

    useEffect(() => {
        setPosts(collagePosts)
    }, [collagePosts])
    //METHODS
    function randomImage() {
        let images = [
            'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300',
            'https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true',
            'https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg',
            'https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcN2P5YcOKn24rv1071WX1cQujWc1BXQRRcw&usqp=CAU'
        ]
        return images[Math.floor(Math.random() * images.length)]
    }

    function arrangePost() {
        let postChunks = _.chunk(posts, chunkSize)
        console.log(posts);
        return postChunks.map((chunk, idx) => {
            if (idx % 2 === 0) {
                return (
                    <Row style={{ marginTop: '10px' }} key={idx}>
                        <Col xs={12}>
                            <Row>
                                {
                                    typeof chunk[0] !== 'undefined' && (
                                        <Col md={8}>
                                            <Post post={chunk[0]} image={randomImage()} key={chunk[0].id}></Post>
                                        </Col>
                                    )
                                }
                                <Col md={4}>
                                    <Row>
                                        {
                                            typeof chunk[1] !== 'undefined' && (
                                                <Col xs={12}>
                                                    <Post post={chunk[1]} image={randomImage()} key={chunk[1].id}></Post>
                                                </Col>
                                            )
                                        }
                                        {
                                            typeof chunk[2] !== 'undefined' && (
                                                <Col xs={12} style={{ marginTop: '10px' }}>
                                                    <Post post={chunk[2]} image={randomImage()} key={chunk[2].id}></Post>
                                                </Col>
                                            )
                                        }
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                )
            } else {
                return (
                    <Row style={{ marginTop: '10px' }} key={idx}>
                        <Col xs={12}>
                            <Row>
                                <Col md={4}>
                                    <Row>
                                    {
                                            typeof chunk[1] !== 'undefined' && (
                                                <Col xs={12}>
                                                    <Post post={chunk[1]} image={randomImage()} key={chunk[1].id}></Post>
                                                </Col>
                                            )
                                        }
                                        {
                                            typeof chunk[2] !== 'undefined' && (
                                                <Col xs={12} style={{ marginTop: '10px' }}>
                                                    <Post post={chunk[2]} image={randomImage()} key={chunk[2].id}></Post>
                                                </Col>
                                            )
                                        }
                                    </Row>
                                </Col>
                                {
                                    typeof chunk[0] !== 'undefined' && (
                                        <Col md={8}>
                                            <Post post={chunk[0]} image={randomImage()} key={chunk[0].id}></Post>
                                        </Col>
                                    )
                                }
                            </Row>
                        </Col>
                    </Row>
                )
            }
            return;
        })
    }

    return (
        <Row>
            {!posts && <h3>No posts found!</h3>}
            {posts && arrangePost()}
        </Row>
    );

}

export default Collage;