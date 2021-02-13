import React from "react";
import Card from "../components/Card"
import business from '../assets/images/business.png'
import mangaGuy from '../assets/images/mangaGuy.png'
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row'

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Manga Guy",
          subTitle: "Best mangas in the game",
          imgSrc: mangaGuy,
          link: "https://naughty-leakey-ff1757.netlify.app/",
          selected: false,
        },
        {
          id: 1,
          title: "Business Revenues",
          subTitle: "Businesses that flourished",
          imgSrc: business,
          link: "https://zen-murdock-aae893.netlify.app/",
          selected: false,
        },
        // {
        //   id: 2,
        //   title: "",
        //   subTitle: "",
        //   imgSrc: github,
        //   link: "Netifly",
        //   selected: false,
        // },
      ],
    };
  }

  handleCardClick = (id, card) => {

    let items = [...this.state.items]

    items[id].selected = items[id].selected ? false : true;

    items.forEach(item => {
      if (item.id !== id) {
        item.selected = false;
      }
    })

    this.setState({
      items
    })
  }

  makeItems = (items) => {
    return items.map(item => {
      return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
    })
  }

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    )
  }
}

export default Carousel;