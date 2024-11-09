import  { useEffect, useState } from 'react'
import { ListGroup } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
interface postParams  {
    userId: number;
    id: number;
    title: string;
    body: string;
}
const fetchUserPosts =async(userId : string | undefined)=>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    const posts: postParams[]=await response.json()
    return posts;
}

function UserPosts() {
    const [userPosts,SetUserPosts]= useState<postParams[]>([])
    const {userId} =useParams <{userId: string }>()

useEffect(()=>{
    const getUserPosts =async ()=>{
        if (!userId) return
        const postsData =await fetchUserPosts(userId)
        SetUserPosts(postsData)
    };
    getUserPosts();
},[userId])

      return (
    <><ListGroup>
    {userPosts?.map((post)=>(
        <ListGroup.Item key={post.id} action >
            <Link to={`/users/${userId}/posts/${post.id}`}>{post.title}  </Link>
        </ListGroup.Item>   
    ) 
)}
   </ListGroup> </>
  )
}

export default UserPosts