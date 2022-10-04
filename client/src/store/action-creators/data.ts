import axios from "axios"
import { Dispatch } from "react"
import { DataAction, DataActionTypes, dataType } from "../../types/types"

export const fetchDataTable = () =>{
    return async(dispatch: Dispatch<DataAction>)=>{
        try {
            dispatch({type:DataActionTypes.FETCH_DATA})
            const response = await axios.get('http://localhost:5000/api/all')
            dispatch({type:DataActionTypes.FETCH_DATA_SUCCESS,payload:response.data})
        } catch (error) {
            return dispatch({
                type:DataActionTypes.FETCH_DATA_ERROR, 
                payload:"Произошла ошибка загрузки данных"})
        }
    }
}