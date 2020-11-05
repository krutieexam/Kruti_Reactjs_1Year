import React, { useEffect } from 'react';
import Card from "react-bootstrap/Card";
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { removeFavourite } from './store/ContactList/actions';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';


export default function FavouriteList(props) {
    const FavouriteResponse = useSelector((state) => { return state.ContactList.favourites }, shallowEqual);
    const dispatch = useDispatch();
    return (
        <div className='App' >
            <div>
                <Container>
                    <Navbar expand="lg" variant="light" bg="light">
                        <Navbar.Brand style={{ marginLeft: '40%' }}>Favourites List</Navbar.Brand>
                    </Navbar>
                </Container>
            </div>
            <div>
                {FavouriteResponse.map((item) => {
                    return (
                        <div key={item.data.id + "row"}>
                            <Card style={{
                                width: '20rem', height: '15erm', marginTop: 10, marginBottom: 10, marginRight: "50%", marginLeft: "40%",
                            }} onClick={() => {
                                dispatch(removeFavourite(item.data.id));
                            }}>
                                <Card.Body>
                                    <Card.Img variant="top" style={{ borderRadius: '50%', height: '50%', width: '50%' }} src={item.data.avatar}></Card.Img>
                                    <Card.Title>{item.data.first_name + item.data.last_name}</Card.Title>
                                    <Card.Text>{item.data.email}</Card.Text>
                                </Card.Body>
                            </Card></div>
                    )
                })}
            </div>
        </div>

    )
}

