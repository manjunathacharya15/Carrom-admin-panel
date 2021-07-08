
import React,{useEffect, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faBell, faCog, faSignOutAlt,   } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import {  Row, Col, Nav,  Image, Navbar, Dropdown, Container, ListGroup } from '@themesberg/react-bootstrap';
import { Link } from "react-router-dom";


import NOTIFICATIONS_DATA from "../data/notifications";
import Profile3 from "../assets/img/team/profile-picture-3.jpg";
import axios from "axios";


export default (props) => {
  const [notifications,setNotifications]=useState([]);
useEffect(()=>{
  axios.post("https://carrombackend.herokuapp.com/users/")
  .then((response)=>{
    setNotifications(response.data)
   
  })
})

  // const [notifications, setNotifications] = useState(NOTIFICATIONS_DATA);
  const areNotificationsRead = notifications.reduce((acc, notif) => acc && notif.read, true);

  const markNotificationsAsRead = () => {
    setTimeout(() => {
      setNotifications(notifications.map(n => ({ ...n, read: true })));
    }, 300);
  };


  const Notification = (props) => {
    const { name, email, read = false,created } = props;
    const readClassName = read ? "" : "text-danger";

    return (
      <ListGroup.Item  className="border-bottom border-light">
        <Row className="align-items-center">
         
          <Col className="ps-0 ms--2">
            
              <div>
                <h4 className="h6 mb-0 text-small">{name}</h4>
              </div>
              <div className="text">
                <small className={readClassName}>{email}</small>
              </div>
              <p className="font-small mt-1 mb-0">{created}
          
                </p>
                <p className="font-small mt-1 mb-0">
          User Created
          </p>

           
           
          </Col>
        </Row>
      </ListGroup.Item>
    );
  };

  return (
    <Navbar variant="dark" expanded className="ps-0 pe-2 pb-0">
      <Container fluid className="px-0">
        <div className="d-flex justify-content-between w-100">
          <div className="d-flex align-items-center">
          <div className="media d-flex align-items-center">
                  
                  <div className="media-body ms-2 text-dark align-items-center d-none d-lg-block">
                    <span className="mb-0 font-large fw-bold" style={{fontSize:"25px"}}><b>Carrom Admin Panel</b> </span>
                  </div>
                </div>
              {/* <Form.Group id="topbarSearch">
                <InputGroup className="input-group-merge search-bar">
                  <InputGroup.Text><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                  <Form.Control type="text" placeholder="Search" />
                </InputGroup>
              </Form.Group>
            </Form> */}
          </div>
          <Nav className="align-items-center">
            <Dropdown as={Nav.Item} onToggle={markNotificationsAsRead} >
              <Dropdown.Toggle as={Nav.Link} className="text-dark icon-notifications me-lg-3">
                <span className="icon icon-sm">
                  <FontAwesomeIcon icon={faBell} className="bell-shake" />
                  {areNotificationsRead ? null : <span className="icon-badge rounded-circle unread-notifications" />}
                </span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="dashboard-dropdown notifications-dropdown dropdown-menu-lg dropdown-menu-center mt-2 py-0">
                <ListGroup className="list-group-flush">
                  <Nav.Link href="#" className="text-center text-primary fw-bold border-bottom border-light py-3">
                    Notifications
                  </Nav.Link>

                  {notifications.map(n => <Notification key={`notification-${n.id}`} {...n} />)}

                  <Dropdown.Item className="text-center text-primary fw-bold py-3">
                    View all
                  </Dropdown.Item>
                </ListGroup>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle as={Nav.Link} className="pt-1 px-0">
                <div className="media d-flex align-items-center">
                  <Image src={Profile3} className="user-avatar md-avatar rounded-circle" />
                  <div className="media-body ms-2 text-dark align-items-center d-none d-lg-block">
                    <span className="mb-0 font-small fw-bold">Priyanka Padmini</span>
                  </div>
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu className="user-dropdown dropdown-menu-right mt-2">
                <Dropdown.Item className="fw-bold">
                 <Link to="/components/tabs"><FontAwesomeIcon icon={faUserCircle} className="me-2" /> My Profile</Link> 
                </Dropdown.Item>
                <Dropdown.Item className="fw-bold">
                  <Link to="/components/modals"><FontAwesomeIcon icon={faCog} className="me-2" />Change Password</Link>
                </Dropdown.Item>
                {/* <Dropdown.Item className="fw-bold">
                  <FontAwesomeIcon icon={faEnvelopeOpen} className="me-2" /> 
                </Dropdown.Item>
                <Dropdown.Item className="fw-bold">
                  <FontAwesomeIcon icon={faUserShield} className="me-2" /> 
                </Dropdown.Item> */}

                <Dropdown.Divider />

                <Dropdown.Item className="fw-bold">
                <Link to="/"> <FontAwesomeIcon icon={faSignOutAlt} className="text-danger me-2" /> Logout</Link> 
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
};
