import React, { useCallback, useEffect, useState } from 'react'
import { dataType } from '../../types/types'
import './search.css'
import Table from '../table/table'
import { ISearchInput } from '../../types/types'
import { filteredData, sorted } from '../../utils/utils'

const SearchInput:React.FC<ISearchInput> = (dataVisiavble) =>{

    const [searchText, setSearchText] = useState({
        tableField:'name',searchText:'',searchСondition:'eq'
    })
    const [data, setData] = useState<dataType[]>(dataVisiavble.dataVisiavble)
    
    const onChangeHandler = async(e:any)=> {
        await setSearchText({...searchText, [e.target.name]:e.target.value})
        const tmp = filteredData(searchText,e,dataVisiavble.dataVisiavble)
        setData(tmp)

    }

    
    
    const sortedHandler = (e:any) =>{
       if(e.target.classList.contains('fa')){
            e.target.classList.toggle('rotate')
            if(e.target.classList.contains('name')){
                
                const tmp = sorted(data,'name',e.target.classList.contains('rotate'))
                setData(tmp)
            }
            if(e.target.classList.contains('count')){
                const tmp = sorted(data,'count',e.target.classList.contains('rotate'))
                setData(tmp)
                
            }
            if(e.target.classList.contains('dist')){
                const tmp = sorted(data,'dist',e.target.classList.contains('rotate'))
                setData(tmp)
            }
        }
    }

    return(
        <div className="mainContainer">
            <div className="container">
                <div className="row">
                        <div className='col-md-3 mainSearcher'>
                            <select 
                            className = "selected"  
                            onChange={onChangeHandler}
                            name="tableField"
                            defaultValue='name'
                            >
                                <option value="date">Дата</option>
                                <option value="name">Название</option>
                                <option value="count">Количество</option>
                                <option value="dist">Расстояние</option>
                            </select>
                        </div>
                        <div className="col-md-3 mainSearcher">
                            <input 
                                type='text'
                                name='searchText'
                                onChange={onChangeHandler}
                                className = "searched"
                                placeholder='Поиск'
                            >
                            </input>
                        </div>
                        <div className='col-md-3 mainSearcher'>
                            <select className="selected"  
                            onChange={onChangeHandler} 
                            name="searchСondition"
                            defaultValue='eq'>
                                <option value="=">Равно</option>
                                <option value=">">Больше</option>
                                <option value="<">Меньше</option>
                                <option value="eq">Содержит</option>
                            </select>
                        </div>
                </div>
            </div>
            <div className='container'>
                <div className="row">
                    <Table dataVisible={data} sortedHandler={sortedHandler}/>    
                </div>
            </div>
        </div>
    )
}

export default SearchInput