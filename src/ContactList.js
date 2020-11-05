import React, { useEffect } from 'react';
import Card from "react-bootstrap/Card";
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { contactListPending } from './store/ContactList/actions';
import { useHistory } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';


export default function ContactList() {
    const [state, setState] = React.useState({ contactArr: [] })
    const ContactListResponse = useSelector((state) => { return state.ContactList.ContactListResponse }, shallowEqual);
    const ContactListError = useSelector(state => state.ContactList.error, shallowEqual);
    const [selectedOption, setSelectedOption] = React.useState('All');
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
        if (ContactListResponse) {
            setState({
                ...state, contactArr: ContactListResponse.data
            })
        }
    }, [ContactListResponse])
    useEffect(() => {
        dispatch(contactListPending());
    }, []);

    return (
        <div className='App' style={{ background: '#ADD8E6' }}>
            <Container >
                <Navbar expand="lg" variant="light" bg="light">
                    <Navbar.Brand style={{ marginLeft: '40%' }} href="/favouriteList">Go to Favourites</Navbar.Brand>
                </Navbar>
            </Container>

            <div style={{
                marginTop: 10, marginRight: "50%", marginLeft: "30%",
            }}>
                <select name="all" id="all" value={selectedOption}
                    onChange={(e) => {
                        setSelectedOption(e.target.value);
                        if (e.target.value === 'All') {
                            state.contactArr.sort((item) => { return item.first_name })
                        }
                    }}>
                    <option value="All">All</option>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                </select>
            </div>
            <div>
                {state.contactArr.map((item) => {
                    return (
                        <div key={item.id + "row"}>
                            <Card style={{
                                width: '20rem', height: '13rem', marginTop: 10, marginBottom: 10, marginRight: "50%", marginLeft: "30%",
                            }} onClick={() => {
                                history.push('/contactDetail/' + item.id)
                            }}>
                                <Card.Body>
                                    <Card.Img variant="top"
                                        src={item.avatar} style={{ borderRadius: '50%', height: '50%', width: '50%' }}></Card.Img>
                                    <Card.Title><b>{item.first_name + item.last_name}</b></Card.Title>
                                    <Card.Text>{item.email}</Card.Text>
                                </Card.Body>
                            </Card></div>
                    )
                })}
            </div>
        </div>

    )
}

