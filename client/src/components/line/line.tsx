import React from "react";
import { dataType } from "../../types/types";
import './line.css'

interface LineItemProps{
    line:dataType;
}
export const Line:React.FC<LineItemProps> = ({line}) =>{
    console.log("LOOK", line)
    return(
        <tr>
            <td><span className="lineText">{line.date}</span></td>
            <td><span className="lineText">{line.name}</span></td>
            <td><span className="lineText">{line.count.toLocaleString()}</span></td>
            <td><span className="lineText">{line.distance.toLocaleString()}</span></td>
        </tr>
    )
}

