import React, {useState} from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import {Button} from '@material-ui/core';
import {useNavigate} from 'react-router';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';



function Search({hidebuttons}) {

  const[{},dispatch] = useStateValue();
  const [input,setInput] = useState("");
  const  navigate = useNavigate()
  
  const search = (e) => {
    e.preventDefault();
    dispatch({
      type:actionTypes.SET_SEARCH_TERM,
      term:input
    })
     navigate("/search")
  }

  return (
    <form className="search">
       <div className="search_input">
           <SearchIcon className="searchicon"/>
           
          <input value={input} onChange={e=>setInput(e.target.value)}/>
          < MicIcon/>
       </div>
       
      {
        !hidebuttons ? (<div className='search_buttons'>
        <Button type='submit' onClick={search} variant='outline'>Google Search</Button>
        <Button type='submit' variant='outline'>I AM FEELING LUCKY</Button>
   </div>) : (
        <div className='search_buttons' style={{display:'none'}}>
        <Button type='submit' onClick={search} variant='outline'>Google Search</Button>
   </div>
   )
   
      }


       
    </form>
  )
  
}

export default Search
