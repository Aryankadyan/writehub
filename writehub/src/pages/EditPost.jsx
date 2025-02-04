import React, {useState, useEffect} from 'react'
import { Container, PostForm } from 'postcss'
import appwriteService from '../appwrite/configs'
import { useNavigate, useParams } from 'react-router-dom'

function EditPost() {
    const [post, setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

useEffect(()=> {
    if(slug){
        appwriteService.getPost(slug).then((post)=>{
            if(post){
                setPosts(post)
            }
        })
    }else{
        navigate('/')
    }
}, [slug, navigate])
  return post ? (
    <div className='py-9'>
        <Container>
            <PostForm post={post}/>
        </Container>
    </div>
  )
}

export default EditPost
