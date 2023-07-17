import React from 'react'
import {decode} from 'html-entities'
decode('&lt; &gt; &quot; &apos; &amp; &#169; &#8710;')
import { useEffect } from "react"

export default function Start(){
    const [data, setData] = React.useState([])
    useEffect( () => {
       fetch("https://opentdb.com/api.php?amount=10")
       .then(response => response.json())
       .then(data => console.log(data))
       .then(data => setData(data))
    },[])



    function fetchData(){
        return(
           <form>
                 <h1>Give one answer only.</h1>
                {data ? <pre>{JSON.stringify(data,null,2) }</pre> : 'loading'}
                </form>
        )
    }

   return(
    <main>
        <div className="header">
        <h1>Quizzical Trivia</h1>

        </div>
    <div className="start-section">
        <h2>Quizzical</h2>
    <p className="description">Welcome to the Quizzical App! Test your knowledge and sharpen your 
        skills with our fun and challenging trivia questions. 
        Get ready for a fun and educational experience with the Quizzical App!</p>
    <button className="start-btn" onClick={fetchData}>Start quiz</button>
</div>
</main>
   )
}