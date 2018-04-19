import React from 'react';
import { FormGroup, Col, Label } from 'reactstrap';


const FormGroupControl = (props) => {


    return (
        <FormGroup>
            <Label sm={2}>{props.labelName}: </Label>
            <Col sm={11}>
                {props.children}
            </Col>
        </FormGroup>

    );
}

export default FormGroupControl;