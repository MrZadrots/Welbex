import { dataType } from "../types/types"

export const filteredData = (searchText:any,e:any, dataVisiavble:dataType[]):dataType[]=>{
    let filteredData:dataType[] = dataVisiavble
    switch(searchText.tableField){
        case 'name':
            switch(searchText.searchСondition){
                case '>':
                    filteredData = dataVisiavble.filter(line =>{
                        return line.name.toString().toLowerCase()>e.target.value.toLowerCase()
                    })
                    
                    break;
                case '<':
                    filteredData = dataVisiavble.filter(line =>{
                        return line.name.toString().toLowerCase()<e.target.value.toLowerCase()
                    })
                    
                    break;
                case '=':
                    filteredData = dataVisiavble.filter(line =>{
                        return line.name.toString().toLowerCase()===e.target.value.toLowerCase()
                    })
                    
                    break;
                case 'eq':
                    filteredData = dataVisiavble.filter(line =>{
                        return line.name.toString().toLowerCase().includes(e.target.value.toLowerCase())
                    })
                    
                    break;
                default:
                    break;
            }
            break;
        case 'count':
            switch(searchText.searchСondition){
                case '>':
                    filteredData = dataVisiavble.filter(line =>{
                        return line.count>e.target.value.toLowerCase()
                    })
                    
                    break;
                case '<':
                    filteredData = dataVisiavble.filter(line =>{
                        return line.count<e.target.value.toLowerCase()
                    })
                    
                    break;
                case '=':
                    filteredData = dataVisiavble.filter(line =>{
                        return line.count===e.target.value.toLowerCase()
                    })
                    
                    break;
                case 'eq':
                    filteredData = dataVisiavble.filter(line =>{
                        return line.count.toString().toLowerCase().includes(e.target.value.toLowerCase())
                    })
                    
                    break;
                default:
                    break;
                }
            break;
        case 'dist':
            switch(searchText.searchСondition){
                case '>':
                    filteredData = dataVisiavble.filter(line =>{
                        return line.distance>e.target.value.toLowerCase()
                    })
                    
                    break;
                case '<':
                        filteredData = dataVisiavble.filter(line =>{
                            return line.distance<e.target.value.toLowerCase()
                        })
                        console.log(e.target.value)
                        console.log("filteredData",filteredData)
                        
                        break;
                    case '=':
                        filteredData = dataVisiavble.filter(line =>{
                            return line.distance===e.target.value.toLowerCase()
                        })
                        
                        break;
                    case 'eq':
                        filteredData = dataVisiavble.filter(line =>{
                            return line.distance.toString().toLowerCase().includes(e.target.value.toLowerCase())
                        })
                        
                        break;
                    default:
                        break;
                    }
        break;
    }
    return filteredData
}

export const sorted = (massive:dataType[],name:string,mode:boolean) =>{
    switch(name){
        case 'name':
            if(mode){ 
                return [...massive].sort((a, b) => a.name > b.name ? 1 : -1)
            }
            else{
                return [...massive].sort((a, b) => a.name < b.name ? 1 : -1)
            }
        case 'count':
            if(mode){
                return [...massive].sort((a, b) => a.count > b.count ? 1 : -1)
            }
            else{
                return [...massive].sort((a, b) => a.count < b.count ? 1 : -1)
            }
        
        case 'dist':
                if(mode){
                    return [...massive].sort((a, b) => a.distance > b.distance ? 1 : -1)
                }
                else{
                    return [...massive].sort((a, b) => a.distance < b.distance ? 1 : -1)
                }
        default:
            return massive   
    }

}