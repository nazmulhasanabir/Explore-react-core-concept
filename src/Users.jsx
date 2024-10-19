import { useEffect, useState } from 'react'
import './App.css'
import BioData from './Profile'
export default function Users(){

    const[Profile,setProfile]=useState([])
    useEffect(()=>{
        fetch ('https://jsonplaceholder.typicode.com/users')
        .then(resp=> resp.json())
        .then (data=> setProfile(data))
    }
        ,[])

    return(
        <div className="User">
            <h3>User:{Profile.length}</h3>
            {
                Profile.map(profile=><BioData friend={profile}>

                </BioData>)
            }
        </div>
    )


}