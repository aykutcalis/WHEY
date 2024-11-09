import { useLoaderData, useParams } from "react-router-dom";
import { UserProps } from "./UsersPage"
import { Container } from "react-bootstrap";
import UserTabs from "../components/UserTabs";
 
export const userDetailLoader =async ({params}: UserProps) =>
{
    const response =await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
    const userDetails = await response.json();
    return userDetails;
}

function UserDetailPage() {
    
const userDetails =useLoaderData() as UserProps as UserProps
const {userId}= useParams()
  return (
    <>
    <Container>

        <h1>{userDetails.name}</h1>
        <h4>{userDetails.username}</h4>
        <h4>{userDetails.email}</h4>
    </Container>
    <UserTabs {
        ...{
            postLink :`/users/${userId}/posts`,
            albumLink :`/users/${userId}/albums`,
            todoLink :`/users/${userId}/todos`
        }
    }/>
    </>
  )
}

export default UserDetailPage