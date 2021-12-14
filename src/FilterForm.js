import React from 'react';

class FilterForm extends React.Component {

    filter = (event) => {
        console.log('event:', event)
        const numOfHorns = event.target.vaule;
    }
    render() {
        return (
        <Form className= "form">
            <Form.Label for= "numofHorns">Filter by Horns </Form.Label>
            <br/>
            <Form.Select className = "formSelect" name="numOfHorns" onChane={this.filter}>  
         <option vaule = ''>ALL THE HORNS!</option>
         <option vaule = '1'>One Horn</option>
         <option vaule = '2'>Two Horns</option>
         <option vaule = '3'>Three Horns</option>
         <option vaule = '100'>More Horns Than I Can Count!</option>
            </Form.Select>
            </Form>
        );
        }
}

export default FilterForm;
