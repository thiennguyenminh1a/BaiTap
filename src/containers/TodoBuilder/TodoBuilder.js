import React, { Component } from 'react';
import CreateButton from '../../components/UI/CreateButton/CreateButton';
import ModalBuider from '../../components/UI/Modal/ModalBuider';
import Aux from '../../hoc/Aux';
import ListControl from '../../components/List/ListControl';


class TodoBuilder extends Component {
    state = {
        tasks: [
            { id: 1, name: 'Learn HTML/CSS', date: '2018-04-23', assignne: 'A', status: 'Done' },
            { id: 2, name: 'Learn Javascript', date: '2018-05-11', assignne: 'C', status: 'Done' },
            { id: 3, name: 'Learn React', date: '2018-02-17', assignne: 'E', status: 'In process' },
            { id: 4, name: 'Do to-do app', date: '2018-03-15', assignne: 'B', status: 'In process' },
            { id: 5, name: 'Draw prototype', date: '2018-04-01', assignne: 'D', status: 'Cancel' },
            { id: 6, name: 'Draw app workflow', date: '2018-04-05', assignne: 'Thien', status: 'Cancel' },
            { id: 7, name: 'Code function', date: '2018-03-28', assignne: 'Thien', status: 'Done' },
            
            
        ],
        name: '',
        date: '',
        assignne: '',
        status: 'In process',
        modal: false,
        update: false,
        currentId: '',
        search: '',
        validate: true,
        currentPage: 1,
        tasksPerPage: 7,
        isOrder:true,
        orderType:''
    }

    handleOrder = (event) =>{
        this.setState({
            isOrder:!this.state.isOrder,
            orderType:event.target.id
        })
    }

    handleClick = (event) =>{
        this.setState({
            currentPage: Number(event.target.id)  
        }) 
    } 

    toggle = () => {
        this.setState({
            modal: !this.state.modal,
            update: false,
            name: '',
            date: '',
            assignne: '',
        })
    }

    deleteHandler = (id) => {
        const tasks = [...this.state.tasks];
        const taskIndex =  this.state.tasks.findIndex(p=>p.id === id);
        tasks.splice(taskIndex, 1);
        this.setState({
            tasks: tasks
        })
    }

    saveHandler = () => {
        const tasks = [...this.state.tasks];
        let validated = this.state.validate;
       
        if (this.state.update === false) {
           
            const name = this.state.name;
            const date = this.state.date;
            const id = new Date();
            const assignne = this.state.assignne;
            const status = this.state.status;
           
            tasks.push({ id: id.toString(), name: name, date: date, assignne: assignne, status: status });
        }
        
        
        else {
            const taskIndex = this.state.tasks.findIndex(p => p.id === this.state.currentId);
            const task = this.state.tasks[taskIndex];
            task.name = this.state.name;
            task.date = this.state.date;
            task.assignne = this.state.assignne;
            task.status = this.state.status;
            tasks[taskIndex] = task;

        }
 
        this.setState({
            tasks: tasks,
            name: '',
            date: '',
            assignne: '',
            status: 'In Process',
            modal: !this.state.modal,
            update: false,
            validate: validated
        })

        if(this.state.validate === false){
            return
        }
        
    }

    getUpdateValue = (id) => {
        const taskIndex = this.state.tasks.findIndex(p => p.id === id);
        const task = this.state.tasks[taskIndex];
        this.setState({
            modal: !this.state.modal,
            name: task.name,
            date: task.date,
            assignne: task.assignne,
            status: task.status,
            update: true,
            currentId: id
        })
    }

    handleChange = (event) => {
        this.setState({ 
            [event.target.name]: event.target.value 
        });
      }

    render() {

        return (
            <Aux>
                <CreateButton toggled={() => this.toggle()} searchValue={this.state.search} searched={this.updateSearch} />

                <ModalBuider modaled={this.state.modal}
                    toggled={() => this.toggle()}
                    saved={() => this.saveHandler()}
                    nameValued={this.state.name}
                    dateValued={this.state.date}
                    assignneValued={this.state.assignne}
                    handleChanged ={(event)=>this.handleChange(event)}
                    validated = {this.state.validate}
                />

                <ListControl onClick={(event)=>this.handleClick(event)} getUpdateValue={this.getUpdateValue} onDelete={this.deleteHandler} 
                onOrder={(event)=>this.handleOrder(event)} state={this.state}/>
                
            </Aux>

        );
    }
}

export default TodoBuilder; 