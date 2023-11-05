import { useState } from "react"
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'

export default function Post(){
    const [title ,setTitle]=useState('')
    const [summary ,setSummary]=useState('')
    const [content ,setContent]=useState('')
    const [files,setFiles]=useState('')
    async function createNewPost(event){
        const data =new FormData()
        data.set('title',title)
        data.set('summary',summary)
        data.set('content',content)
        data.set('file',files[0])
        event.preventDefault()
      const response=await fetch("http://localhost:5000/post",{
            method:"POST",
            body:data,
        })
    }

    return(
        <div>
            <form onSubmit={createNewPost}>
                <input
                  className="border-2 w-[100%] rounded-[5px] px-2 my-2"
                  value={title}
                  onChange={event=>setTitle(event.target.value)}
                  type="title" 
                  placeholder={"Title"}/><br/>
                <input 
                 className="border-2 w-[100%] w-[100%] rounded-[5px] px-2 my-2" 
                 type="summary" 
                 value={summary}
                 onChange={event=>setSummary(event.target.value)}
                 placeholder={"Summary"}
                /><br/>
                <input  
                 type="file"
                 className="my-2 border-2 rounded-[5px] w-[100%]  p-2"
               
                 onChange={event=>setFiles(event.target.files)}
                 />
                <ReactQuill
                 value={content}
                 onChange={event=>setContent(event.target.value)}
                /> 
                <button>Create a Post</button>
            </form>
        </div>
    )
}