import React, { useCallback, useEffect, useState } from 'react'
import { dataType } from '../../types/types'
import './search.css'
import Table from '../table/table'
import { ISearchInput } from '../../types/types'


const SearchInput:React.FC<ISearchInput> = (dataVisiavble) =>{

    const [searchText, setSearchText] = useState('')
    
    const [data, setData] = useState<dataType[]>(dataVisiavble.dataVisiavble)

    const onChangeHandler = (e:any)=> {
        /*setSearchText(e.target.value)
        const filteredData = dataVisiavble.dataVisiavble.filter(line =>{
            return line.name.toLowerCase().includes(searchText.toLowerCase()) ||
                line.date.toLowerCase().includes(searchText.toLowerCase())
        })
        setData(filteredData)*/
    }

    const sorted = (massive:dataType[],name:string,mode:boolean) =>{
        switch(name){
            case 'id':
                if(mode){ 
                    return [...massive].sort((a, b) => a.id > b.id ? 1 : -1)
                }
                else{
                    return [...massive].sort((a, b) => a.id < b.id ? 1 : -1)
                }
            case 'title':
                if(mode){
                    return [...massive].sort((a, b) => a.name > b.name ? 1 : -1)
                }
                else{
                    return [...massive].sort((a, b) => a.name < b.name ? 1 : -1)
                }
            
            case 'body':
                    if(mode){
                        return [...massive].sort((a, b) => a.date > b.date ? 1 : -1)
                    }
                    else{
                        return [...massive].sort((a, b) => a.date < b.date ? 1 : -1)
                    }
            default:
                return massive   
        }

    }
    const sortedHandler = (e:any) =>{
       if(e.target.classList.contains('fa')){
            e.target.classList.toggle('rotate')
            if(e.target.classList.contains('id')){
                
                const tmp = sorted(data,'id',e.target.classList.contains('rotate'))
                setData(tmp)
            }
            if(e.target.classList.contains('title')){
                const tmp = sorted(data,'title',e.target.classList.contains('rotate'))
                setData(tmp)
                
            }
            if(e.target.classList.contains('body')){
                const tmp = sorted(data,'body',e.target.classList.contains('rotate'))
                setData(tmp)
            }
        }
    }

    return(
        <div className="mainContainer">
            <div className="container">
                <div className="row">

                    <div className='col-md-3 mainSearcher'>
                        <select className = "selected">
                            <option>Дата</option>
                            <option>Название</option>
                            <option>Количество</option>
                            <option>Расстояние</option>
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
                        <select className="selected">
                            <option>Равно</option>
                            <option>Больше</option>
                            <option>Меньше</option>
                            <option>Содержит</option>
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