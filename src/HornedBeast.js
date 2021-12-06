
import React from 'react';
 import Card from 'react-bootstrap/Card';

    class HornedBeast extends React.Component{

render(){ 
    return (
    <card>
    <Card.Title> Beast Title coming soon...</Card.Title>
    <Card.Img src='https://via.placeholder.com/150' 
    alt='alt coming soon...' 
    title='title coming soon...' 
    style={{ width: "20%" }} />
<Card.Text>this.props.BeastObj.title</Card.Text>
</card>
);
 }
}
export default HornedBeast;