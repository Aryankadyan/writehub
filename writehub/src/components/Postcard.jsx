import React from 'react'
import PropTypes from 'prop-types'
import appwriteService from "../appwrite/configs"
import {Link} from 'react-router-dom'

function Postcard({$id, title, featuredImage}) {
  return (
<Link to={`/post/${$id}`}>
<div className='w-full bg-orange-200 rounde-xl p-4'>
    <div className='w-full justify-center mb-5'>
        <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className='rounded-xl'/>

    </div>
    <h2 className='text-2xl font-bold p-2 bg-amber-300'>{title}</h2>
</div>
</Link>
  )
}
Postcard.propTypes = {
  $id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  featuredImage: PropTypes.string.isRequired,
}

export default Postcard

