import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
const Result = () => {
  const [polls,setPolls]=useState([]);
  useEffect(()=>{
     const fetchPolls=async ()=>{
        try{
        const response=await fetch('http://127.0.0.1:7000/polls/all');
        const data=await response.json();
        
        setPolls(data);
        }
        catch(error){
            console.error('Error Fetching polls:',error);
        }
         };
      fetchPolls();
    
  },[]);
  return (
    <div>
      <h2>All Polls Results</h2>
      <ul>
        {
            polls.map((poll)=>(
                <li key={poll._id}>
                 <Link to={`/polls/${poll._id}/results`}>{poll.title}</Link>
                </li>
            ))
        }
      </ul>
    </div>
  )
}

export default Result