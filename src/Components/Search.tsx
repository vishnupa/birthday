import React, {FunctionComponent, useEffect, useState} from 'react'
import Apidata from "../apidata.json"
import { IUser } from '../types';

const Search :React.FC<IProps> = (props) => { 
    const x =[];
    const [search, setSearch]: [string, (search: string) => void] = React.useState("");
    // const handleChange = (e: { target: { value: string; }; }) => {
    //   setSearch(e.target.value);
    // };

    return(
        <div className='Input'><input type ="text" placeholder="Search" onChange={(event) => {setSearch(event.target.value);}}></input>
        
        
         {
             Apidata.map((Apidata) => {
                 if (search == "" || Apidata.birthday.includes(search))
                return (
                    
                    <div className='user' key={Apidata.name}>
                        <p>{
                            x.push(Apidata.name)} </p>

                        <p>{Apidata.birthday}</p>
                        

                    </div>
                )
             })
         }           
                            
    </div>
    );
}
export default Search;

interface IProps {
    userdata: IUser[]
    }
