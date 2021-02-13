import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./App.css";
import Footer from './components/Footer'
import Home from './screens/Home'
import About from './screens/About'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Fanol Sela",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
      ],
      home: {
        title: "Born Ready",
        subTitle: "Heart of a Champion",
        text: "Check out my work",
      },
      about: {
        title: "About Me",
      },
    };
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expands="lg">
          <Navbar.Brand>Fanol Sela</Navbar.Brand>
          <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
          <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto">
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/about">
                About
              </Link>
            </Nav>
          </Navbar.Collapse>
          </Navbar>
          <Route path="/" exact render={() => <Home title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/about" render={() => <About title={this.state.about.title} />} />
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;