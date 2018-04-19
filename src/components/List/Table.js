import React from 'react';
import {Table} from 'reactstrap';
import './ListControl.css'





const TableControl = (props) =>{
    const data = props.data;
   const columns = props.columns;
    const orderType = props.state.orderType;
    const isOrder = props.state.isOrder

    const indexOfLast = props.state.currentPage * props.state.tasksPerPage;
    const indexOfFirst = indexOfLast - props.state.tasksPerPage;


   
    const head = columns.map(c=>{
        let classes = 'default';
        if (c.key === orderType) {
         isOrder ? classes = 'down' : classes = 'up'
         }  
        return(
        <th key={c.key} id={c.key} className={classes} onClick={props.onClick}> {c.title}</th>
        )}

        
    )

    const filteredTable = data.filter(task => task.name.toLowerCase().indexOf(props.search.toLowerCase()) !== -1)

    const orderList = filteredTable.sort((a, b) => {
        return (
            isOrder ? a[orderType] > b[orderType] : a[orderType] < b[orderType] ? 1 : -1)

    });


    const currentTasks = orderList.slice(indexOfFirst, indexOfLast);
    

    const body = currentTasks.map(d=>{
        return(
            <tr>
                {columns.map(c=>{
                    return(
                        <td>{c.render(d[c.key])}</td>
                    )
                  
                })}
            </tr>
        )
    })
      
    
    return(
        <Table striped>
                <thead>
                    <tr>
                    {head}         
                    </tr>     
                </thead>
                <tbody>
                    {body}
                </tbody>
            </Table>
    )
}

export default TableControl;