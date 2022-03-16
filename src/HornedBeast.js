import React from 'react';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favorites: 0
        }
    }

    addFavorites = () => {
        this.setState({ favorites: this.state.favorites + 1 });
    }

    render() {
        return (
            <Card className="beast" style={{ width: "18rem" }} onClick={this.addFavorites}>
                <Card.Title>{this.props.beast.title}</Card.Title>
                <Card.Img
                    className="beastImg"
                    src={this.props.beast.image_url}
                    alt={this.props.beast.description}
                    title={this.props.beast.title}
                />
                <Card.Text className="beastDescription">{this.props.beast.description}</Card.Text>
                <Card.Text className="fire">🔥 = {this.state.favorites}</Card.Text>
            </Card>
        );
    }
}
export default HornedBeast;