import React from 'react'

import appwriteService from "../appwrite/configs"
import {Link} from 'react-router-dom'

function Postcard({$id, title, featuredImage}) {
  return (
<Link to={`/post/${$id}`}>
<div className='w-full bg-orange-500 rounde-xl p-4'>
    <div className='w-full justify-center mb-5'>
        <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className='rounded-xl'/>

    </div>
    <h2 className='text-2xl font-bold p-2 bg-amber-400'>{title}</h2>
</div>
</Link>
  )
}

export default Postcard

