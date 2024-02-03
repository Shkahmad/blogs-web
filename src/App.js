import React, { useEffect, useState } from 'react'
import Newblogs from './Comp/Newblogs/Newblogs'
import Allblogs from './Comp/Allblogs/Allblogs'

const App = () => {
  const[blogid,setblogid] = useState("")
  
  const handleid=(id)=>{
    setblogid(id)
    console.log(id)
  }
  return (
    <div>
      <Newblogs blogid={blogid} setblogid={setblogid}/>
      <Allblogs getblogid={handleid}/>
    </div>
  )
}

export default App
