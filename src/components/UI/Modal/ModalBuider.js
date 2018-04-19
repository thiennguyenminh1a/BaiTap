import React from 'react';
import { Modal } from 'reactstrap';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Body from './Body/Body';
import './Modal.css'


const ModalBuider = (props) => {

    let validateContent = null;
    let footer = <Footer toggle={props.toggled}/>;
    if(props.nameValued === ''){
        validateContent = <p>Please input name</p>
    }else if(props.dateValued === ''){
        validateContent = <p>Please input date</p>
    }else if(props.assignneValued === ''){
        validateContent = <p>Please input assignne</p>
    }else{
        footer= <Footer toggle={props.toggled} save={props.saved} />
    }
    
    

    return (
        <Modal isOpen={props.modaled} toggle={props.toggled}>
            
            <Header />

            <div className='validation-form'>
            {validateContent}
            </div>

            <Body nameValue={props.nameValued} 
                dateValue={props.dateValued} 
                assignneValue={props.assignneValued} 
                handleChanged={props.handleChanged}
            />
            
            {footer}
            
        </Modal>
    )
}

export default ModalBuider;