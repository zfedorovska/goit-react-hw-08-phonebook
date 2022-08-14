import React from 'react';
import { Container } from 'react-bootstrap';

const HomeView = () => (
  <Container>
    <h1 className="shadow-sm text-success mt-3 p-2 text-center rounded">
      Home page
    </h1>
    <h2 className="mt-3 p-2 text-center">
      Welcome to the contacts service
      <span role="img" aria-label="Welcome icon">
        💁‍♀️
      </span>
    </h2>
    <p className="p-2 m-auto">
      On the Contacts tab you can save your favorite contacts and review them
      whenever you need. For security purposes access to contacts is restricted
      with login and password. So to start work you need register first and use
      your login afterwards.
    </p>
    <p className="p-2 m-auto">
      Good luck! Enjoy your opportunities{' '}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-emoji-smile"
        viewBox="0 0 16 16"
      >
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
      </svg>
    </p>
  </Container>
);

export default HomeView;
