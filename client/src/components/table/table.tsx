import React, { useEffect, useState,useMemo, useCallback } from 'react'
import './table.css'
import { Line } from '../line/line'
import { dataType } from '../../types/types'
import {Pagination} from '../pagination/pagination'
import { ITable } from '../../types/types'


const PageSize = 10

const Table:React.FC<ITable> = ({dataVisible,sortedHandler}) =>{
    const [currentPage , setCurrentPage] = useState(0)  

    const onPageChange = (page:number,e:any) => {
        setCurrentPage(page-1)
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 tableMain">
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope='col'>
                                    <div className="thContainer" >
                                        <span>Дата</span>
                                    </div>
                                </th>
                                <th scope='col'>
                                    <div className="thContainer">
                                        <span>Название</span>
                                        <i className="fa fa-angle-down name" aria-hidden="true"  onClick={sortedHandler}></i>
                                    </div>
                                </th>
                                <th scope='col'>
                                    <div className="thContainer">
                                        <span>Количество</span>
                                        <i className="fa fa-angle-down count" aria-hidden="true"  onClick={sortedHandler}></i>
                                    </div>
                                </th>
                                <th scope='col'>
                                    <div className="thContainer">
                                        <span>Расстояние</span>
                                        <i className="fa fa-angle-down dist" aria-hidden="true"  onClick={sortedHandler}></i>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        {dataVisible.slice(currentPage * 10 , (currentPage * 10) + 10).map((el:dataType) =>{
                                return(<Line line={el} ></Line>)
                            })}
                            
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 paginationMain">
                    <Pagination 
                        onPageChange={onPageChange}
                        totalCount={dataVisible.length}
                        pageSize={PageSize}
                        siblingCount={1}
                        currentPage= {currentPage}
                        className={''}
                    />
                </div>
            </div>
        </div>
    )
}

export default Table;