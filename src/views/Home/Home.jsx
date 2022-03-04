import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPostsAsync, loadSinglePostAsync, loadPostsByUserId, createPost, cleanResponses, editPost } from "../../middleware/reducers/post/post.thunks";


import { FormControl, InputGroup, Offcanvas, Toast, ToastContainer, Row, Col, Button, Container } from "react-bootstrap";

import "./Home.css"
import Collage from "../../components/Collage/Collage";
import Related from "../../components/Related/Related";


function Home() {
  //State
  const { isLoading, posts, postsUid, errorMessage, createResponse, createErrorMessage, editResponse, editErrorMessage, deleteResponse, deleteErrorMessage, pendingPostUpdate, originalPost } = useSelector((state) => state.posts);
  const [query, setQuery] = useState('');
  const [userId, setUserId] = useState(null);
  const [showCreate, setShowCreate] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");


  //New post state
  const [newPost, setNewPost] = useState(
    {
      title: "",
      body: "",
      userId: null
    }
  );
  const [editedPost, setEditedPost] = useState(
    {
      title: "",
      body: "",
      userId: null,
      id: null
    }
  );


  const dispatch = useDispatch();

  //Load posts once
  useEffect(() => {
    dispatch(loadPostsAsync());
  }, []);

  //Update post everytime props.query change
  useEffect(() => {
    if (query.trim() == '') {
      dispatch(loadPostsAsync());
      return;
    }
    dispatch(loadSinglePostAsync(query))
  }, [query]);

  //Update posts everytime props.userId change
  useEffect(() => {
    dispatch(loadPostsByUserId(userId))
  }, [userId]);

  useEffect(() => {
    dispatch(cleanResponses())
    console.log(deleteResponse, createResponse, editResponse);
    if (deleteResponse != "" && deleteResponse != null) {
      setMessage(deleteResponse)
      setShowMessage(true)
    }

    if (createResponse != "" && createResponse != null) {
      setMessage(createResponse)
      setShowMessage(true)
    }

    if (editResponse != "" && editResponse != null) {
      setMessage(editResponse)
      setShowMessage(true)
    }
  }, [createResponse, deleteResponse, editResponse]);

  useEffect(() => {
    if (pendingPostUpdate) {
      setEditedPost(originalPost)
      handleShowEdit()
    }
  }, [pendingPostUpdate]);

  //METHODS
  const handleQueryChange = (e) => setQuery(e.target.value)
  const onUserClick = (id) => setUserId(id)
  const handleCloseCreate = () => setShowCreate(false);
  const handleShowCreate = () => setShowCreate(true);
  const handleNewPostChange = (e) => {
    const { name, value } = e.target
    setNewPost((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  const handleCreatePost = () => {
    dispatch(createPost(newPost))
    setShowCreate(false)
  }
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);
  const handleEditPostChange = (e) => {
    const { name, value } = e.target
    setEditedPost((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  const handleEditPost = () => {
    dispatch(editPost(editedPost))
    setShowEdit(false)
  }
  //RENDERING
  return (
    <Container fluid>
      <Row>
        <Col xs={12} className="mt-3 mb-3" style={{ textAlign: 'right' }}>
          <InputGroup className="mb-3">
            <InputGroup.Text id="search-by-id">#</InputGroup.Text>
            <FormControl
              placeholder="Search by id"
              aria-label="Search"
              value={query}
              onChange={handleQueryChange}
            />
            <Button variant="success" onClick={handleShowCreate} style={{ marginLeft: '5px' }} className="rounded">Create</Button>
          </InputGroup>
        </Col>
        <Col xs={9}>
          {isLoading && <h3>Loading...</h3>}
          {errorMessage && console.log(errorMessage)}
          <Collage collagePosts={posts} key={postsUid}></Collage>
        </Col>
        <Col xs={3}>
          <h4>Explore user posts</h4>
          <Related handleUserClickCallback={onUserClick}></Related>
        </Col>
      </Row>

      <Offcanvas show={showCreate} onHide={handleCloseCreate} placement="bottom" scroll={false} style={{ height: 'auto' }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Create new post!</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Row>
            <Col xs="6" md="6">
              <InputGroup className="mb-3">
                <InputGroup.Text>Title</InputGroup.Text>
                <FormControl
                  name="title"
                  placeholder="Title"
                  aria-label="Title"
                  onChange={handleNewPostChange} />
              </InputGroup>
            </Col>
            <Col xs="6" md="6">
              <InputGroup className="mb-3">
                <InputGroup.Text>User#</InputGroup.Text>
                <FormControl
                  name="userId"
                  type="number"
                  placeholder="UserId"
                  aria-label="UserId"
                  onChange={handleNewPostChange} />
              </InputGroup>
            </Col>
            <Col md="12">
              <InputGroup className="mb-3">
                <InputGroup className="mb-3">
                  <InputGroup.Text>Body</InputGroup.Text>
                  <FormControl as="textarea" name="body" onChange={handleNewPostChange} />
                </InputGroup>
              </InputGroup>
            </Col>
          </Row>
          <Button variant="success" onClick={handleCreatePost}>Save</Button>
        </Offcanvas.Body>
      </Offcanvas>

      <Offcanvas show={showEdit} onHide={handleCloseEdit} placement="bottom" scroll={false} style={{ height: 'auto' }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Edit post!</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Row>
            <Col xs="6" md="6">
              <InputGroup className="mb-3">
                <InputGroup.Text>Title</InputGroup.Text>
                <FormControl
                  name="title"
                  placeholder="Title"
                  aria-label="Title"
                  value={editedPost.title}
                  onChange={handleEditPostChange} />
              </InputGroup>
            </Col>
            <Col xs="6" md="6">
              <InputGroup className="mb-3">
                <InputGroup.Text>User#</InputGroup.Text>
                <FormControl
                  name="userId"
                  type="number"
                  placeholder="UserId"
                  aria-label="UserId"
                  value={editedPost?.userId}
                  onChange={handleEditPostChange} />
              </InputGroup>
            </Col>
            <Col md="12">
              <InputGroup className="mb-3">
                <InputGroup className="mb-3">
                  <InputGroup.Text>Body</InputGroup.Text>
                  <FormControl as="textarea" name="body" value={editedPost?.body} onChange={handleEditPostChange} />
                </InputGroup>
              </InputGroup>
            </Col>
          </Row>
          <Button variant="success" onClick={handleEditPost}>Save</Button>
        </Offcanvas.Body>
      </Offcanvas>

      <ToastContainer className="p-3" position="bottom-end">
        <Toast onClose={() => setShowMessage(false)} show={showMessage} delay={2000} autohide>
          <Toast.Header closeButton={false}>
            <div
              className="rounded me-2"
              style={{ height: '20px', width: '20px', backgroundColor: '#000' }}
            />
            <strong className="me-auto">Notification</strong>
          </Toast.Header>
          <Toast.Body>{message}</Toast.Body>
        </Toast>
      </ToastContainer>
    </Container>
  );
}

export default Home;

