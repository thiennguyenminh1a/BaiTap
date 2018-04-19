import React from 'react';
import { PaginationItem, PaginationLink, Pagination } from 'reactstrap'
import './ListControl.css'

const PaginationControl = (props) => {

    
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(props.tasks.length / props.tasksPerPage); i++) {
        pageNumbers.push(i);
    }

    const RenderPageNumbers = pageNumbers.map(number => {
        return (

            <PaginationItem key={number}>
                <PaginationLink id={number} onClick={props.onClick}>
                    {number}
                </PaginationLink>
            </PaginationItem>

        )
    })


    return (
        <Pagination className='page-number'>
            {RenderPageNumbers} 
        </Pagination>
    )
}

export default PaginationControl;