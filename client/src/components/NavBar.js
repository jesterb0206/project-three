/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav, Container, Modal, Tab} from 'react-bootstrap';
import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';
import Auth from '../utils/auth';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

const AppNavbar = () => {
  // Set Modal Display State

  const [showModal, setShowModal] = useState(false);

  // Returns the Navigation Bar

  return (
    <>
      <Navbar sticky='top' className='navBarColor' variant='dark' expand='sm'>
        <Container fluid>
          {/* Redirects to Homepage */}
          <Navbar.Brand as={Link} to='/'>
            🄵🄸🅃 ❚█══█❚ 🄽🅄🅃🅂
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbar' />
          <Navbar.Collapse id='navbar'>
            <Nav className='ml-auto'>
              {/* Homepage Link */}
              <Nav.Link className='homeNavLink' as={Link} to='/'></Nav.Link>
              {Auth.loggedIn() ? (
                <>
                  {/* Start Workout Link */}
                  <Nav.Link className='workoutNavLink' as={Link} to='/workout'>
                    Create Workout
                  </Nav.Link>
                  {/* Workout Summary Link */}
                  <Nav.Link
                    className='summaryNavLink'
                    as={Link}
                    to='/workoutSummary'
                  >
                    Workout Summary
                  </Nav.Link>
                  {/* About Us Link */}
                  <Nav.Link className='aboutNavLink' as={Link} to='/About'>
                    Meet The Devs
                  </Nav.Link>
                  <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                </>
              ) : (
                <Nav.Link onClick={() => setShowModal(true)}>
                  Log In / Sign Up
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Set Modal Data Up */}
      <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'
      >
        {/* A Tab Container to do Either the Signup or Login Component */}
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link eventKey='login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
};

export default AppNavbar;
