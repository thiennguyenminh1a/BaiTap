import React from 'react';
import './CreateButton.css'

import { Button} from 'reactstrap';

const CreateButton = (props) => {
    return(
       
        <Button className='add' color="primary" onClick={props.toggled}>Create new task </Button>
        
    )
}

export default CreateButton;