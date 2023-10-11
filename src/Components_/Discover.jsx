import React from 'react'

const Discover = () => {

  const genre=[
    {title:'pop',value:'POP'},
    {title:'Hip-Hop',value:'HIP_HOP'},
    {title:'soul',value:'SOUL'},
    {title:'country',value:'COUNTRY'},
    {title:'rock',value:'ROCK'},
  ]



  return (
    <div className='border-2 h-[85%]'>
      <div>
        <h2 className=''>Discover</h2>
        <select
        onChange={()=>{}}
        className='bg-black text-gray-300 p-3  text-sm rounded-lg outline-none'
        >
        {genre.map((genr)=>
         <option key={genr.value}>{genr.title}</option>
        )}

        </select>
      </div>

        <div className="flex flex-wrap sm:justify-start justify-center gap-8">
         {[1,2,3,4,5,6,7,8,9].map((song,i)=>(
          <div
            key={song.i}
          />
          ))}
        </div>


    </div>
  )
}

export default Discover
