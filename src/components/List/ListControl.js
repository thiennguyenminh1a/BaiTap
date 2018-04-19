import React from 'react';
import { Button,Input } from 'reactstrap';
import Aux from '../../hoc/Aux';
import './ListControl.css'
import PaginationControl from './PaginationControl';
import TableControl from './Table';

class ListControl extends React.Component{

    state = {
        search:'',
        
    }

    updateSearch = (event) => {
        this.setState({
            search: event.target.value
        })
    }

    
    render() {

        const columns = [
            {title:'Name',key:'name',render:(name)=>name},
            {title:'Date',key:'date',render:(date)=>date},
            {title:'Assignne',key:'assignne',render:(assignne)=>assignne},
            {title:'Status',key:'status',render:(status)=>status},
            {title:'',key:'id',render:(id)=>{
                return(
                <div>
                      <Button color="warning" onClick={() => this.props.getUpdateValue(id)}>Update</Button>{' '}
                    <Button color="danger" onClick={() => this.props.onDelete(id)}>Delete</Button>{' '}
                </div>
                )
            }
    
            } 
        ]

   return (
        <Aux>
            <Input className='search' placeholder='Search Name' onChange={this.updateSearch} value={this.state.search}></Input>
            <TableControl data={this.props.state.tasks} columns={columns} search={this.state.search} onClick={this.props.onOrder} state={this.props.state}/>
            <PaginationControl tasks={this.props.state.tasks} tasksPerPage={this.props.state.tasksPerPage} onClick={this.props.onClick} />
        </Aux>
    )
}
}

export default ListControl;