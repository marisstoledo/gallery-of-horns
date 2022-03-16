import React from 'react';
import Form from "react-bootstrap/Form";
import beastData from "./data.json";

class FilterForm extends React.Component {

    filter = (event) => {
        const numOfHorns = parseInt(event.target.vaule);
        console.log('numOfHorns selected: ', numOfHorns);
        let gallery = beastData;
        if (numOfHorns) {
            gallery = beastData.filter(beast => beast.horns === numOfHorns);
        }
        this.props.updateGallery(gallery);

    };
    render() {
        return (
            <>
                <Form className="form">
                    <Form.Label for="numofHorns">Filter by Horns </Form.Label>
                    <br />
                    <Form.Select
                        className="formSelect"
                        name="numOfHorns"
                        onChange={this.filter}>
                        <option vaule=''>ALL THE HORNS!</option>
                        <option vaule='1'>One Horn</option>
                        <option vaule='2'>Two Horns</option>
                        <option vaule='3'>Three Horns</option>
                        <option vaule='100'>More Horns Than I Can Count!</option>
                    </Form.Select>
                </Form>
            </>
        );
    }
}

export default FilterForm;
