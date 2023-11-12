import { useEffect, useState } from "react"

const Home=()=>{
    const [post,setpost]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/post')
        .then(res=>res.json()
        .then(post=>{setpost(post)}))
    })
 return(
    <>
    {post.length > 0 && post.map(post=>(
      
            <h1>{post.title}</h1>
            
          
    ))}
    </>
 )
}

export default Home