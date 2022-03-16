import React from "react";
import HornedBeast from "./HornedBeast.js";
import beastData from "./data.json";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import FilterForm from "./FilterForm";

class Main extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      gallery: beastData
    };
  };

  updateGallery = (filteredGallery) => {
    this.setState({gallery: filteredGallery});
  };

  render() {
    return (
      <Container>
        <FilterForm updateGallery={this.updateGallery} />
        <Row xs={1} md={2} lg={3} xl={4}>
          {this.state.gallery.map((beast, idx) => (
            <HornedBeast key={idx} beast={beast} />
          ))}
        </Row>
      </Container>
    );
  }
}

export default Main;