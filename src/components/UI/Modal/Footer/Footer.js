import React from 'react';
import {ModalFooter,Button} from 'reactstrap';


const Footer = (props) => {
    return(
        <ModalFooter>
            <Button color="success" onClick={props.save}>Save</Button>{' '}
            <Button color="secondary" onClick={props.toggle}>Cancel</Button>
        </ModalFooter>
    )
    }

export default Footer;