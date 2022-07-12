import React from 'react'

export const Pagination = ({ itemsPerPage, totalitems, paginate }) => {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalitems / itemsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <>
                {pageNumbers.map(number => (
                        <a onClick={() => paginate(number)} href='#' className='page-link'>
                            {number}
                        </a>
                ))}
        </>
    )
}
