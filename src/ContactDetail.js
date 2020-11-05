import React, { useEffect } from 'react';
import { contactDetailPending, addFavourite } from './store/ContactList/actions';
import Card from "react-bootstrap/Card";
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';

export default function ContactDetail(props) {
    const [state, setState] = React.useState();
    const ContactDetailResponse = useSelector((state) => { return state.ContactList.ContactDetailResponse }, shallowEqual);
    const ContactDetailError = useSelector(state => state.ContactList.error, shallowEqual);
    const dispatch = useDispatch();
    useEffect(() => {
        if (props.match.params.id) {
            dispatch(contactDetailPending(
                { id: props.match.params.id }
            ))
        }
    }, [])
    return (
        <div>
            <Container >
                <Navbar expand="xl" variant="light" bg="light">
                    <Navbar.Brand style={{ marginLeft: '40%' }} href="/favouriteList">Go to Favourites</Navbar.Brand>
                </Navbar>
            </Container>
            {ContactDetailResponse &&
                <Card style={{
                    width: '20rem', height: '15erm', marginTop: 10, marginBottom: 10, marginRight: "50%", marginLeft: "40%",
                }}>
                    <Card.Body>
                        <Card.Img variant="top" src={"https://ucarecdn.com/05f649bf-b70b-4cf8-90f7-2588ce404a08/"}></Card.Img>
                        <Card.Img variant="top" style={{ borderRadius: '50%', height: '50%', width: '50%', marginLeft: '25%' }} src={ContactDetailResponse.data.avatar}></Card.Img>
                        <Card.Title style={{ marginLeft: '25%' }}><b>{ContactDetailResponse.data.first_name + ContactDetailResponse.data.last_name}</b></Card.Title>
                        <Card.Text>{ContactDetailResponse.ad.text}</Card.Text>
                        <Card.Text><b>Email:</b>{ContactDetailResponse.data.email}</Card.Text>
                        <Button variant="success" style={{ marginLeft: '25%' }} onClick={() => [
                            dispatch(addFavourite(ContactDetailResponse))
                        ]}>Add to Favourite</Button>{' '}
                    </Card.Body>
                </Card>}

        </div >
    )

}