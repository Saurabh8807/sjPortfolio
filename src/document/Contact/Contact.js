import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [notification, setNotification] = useState(null);

  // Function to clear the notification after 3 seconds
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Make a POST request to getform.io to store the form data
    fetch('https://getform.io/f/ba18425d-ab54-4495-8161-0c672c45a640', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer https://getform.io/f/ba18425d-ab54-4495-8161-0c672c45a640', // Replace with your actual getform.io API key
      },
      body: JSON.stringify({ name, email, message }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // This will show the response from getform.io
        if (data.success) {
          setNotification({
            type: 'success',
            message: 'Your message has been sent successfully.',
          });
        } else {
          setNotification({
            type: 'danger',
            message: 'Form submission failed. Please try again later.',
          });
        }
        // Reset form fields
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error storing form data:', error);
        setNotification({
          type: 'danger',
          message: 'Form submission failed. Please try again later.',
        });
      });
  };

  return (
    <section id="Contact">
      <h1>Contact Me</h1>
      {notification && (
        <Alert
          variant={notification.type}
          onClose={() => setNotification(null)}
          dismissible
          className="text-dark"
        >
          {notification.message}
        </Alert>
      )}
      <Container>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit} className="form">
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  className="inputBox"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <br />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  className="inputBox"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  className="inputBox"
                  placeholder="Enter your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <br />
              </Form.Group>

              <Button variant="primary" className="formbtn" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
