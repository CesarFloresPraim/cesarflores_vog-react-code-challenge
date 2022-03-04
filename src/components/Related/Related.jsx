import React, { useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { loadUsersAsync } from "../../middleware/reducers/user/user.thunks";

export default function Related({handleUserClickCallback}) {
    const { isLoading, users, errorMessage } = useSelector((state) => state.users);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadUsersAsync())
    }, [])

    //METHODS
    function handleUserClick(e){
        let id = e.target.id.split('-')[0]
        handleUserClickCallback(id)
    }

    return (
        <ListGroup>
            {isLoading && <h4>Loading...</h4>}
            {errorMessage && console.log(errorMessage)}
            {users &&  users.map(user => <ListGroup.Item key={user.id + '-user'} onClick={handleUserClick} id={user.id + '-user'}>{user.name}</ListGroup.Item>)}
        </ListGroup>
    )
}


