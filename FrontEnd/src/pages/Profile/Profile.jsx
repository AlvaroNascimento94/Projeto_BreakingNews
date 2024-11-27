import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import {
  ProfileActions,
  ProfileAvatar,
  ProfileBackground,
  ProfileContainer,
  ProfileEditIcon,
  ProfileHeader,
  ProfileIconAdd,
  ProfilePosts,
  ProfileUser,
} from "./ProfileStyled";
import { HiOutlinePlusCircle } from "react-icons/hi2";
import { BsPencilSquare } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Card } from "../../components/Card/Card";
import { getAllNewsByUser } from "../../services/postServices";

export function Profile() {
  const { user } = useContext(UserContext);
  const [posts, setPosts] = useState([]);

  async function findAllNews() {
    const newsResponse = await getAllNewsByUser()
    console.log(newsResponse);
    setPosts(newsResponse.data.newsByUser)
    console.log(posts);
    
  }
useEffect(()=>{
  findAllNews()
},[])
  return (
    <ProfileContainer>
      <ProfileHeader>
        <ProfileEditIcon>
          <BsPencilSquare className="pencil" />
        </ProfileEditIcon>

        <ProfileBackground src={user.background} alt="" />

        <ProfileUser>
          <ProfileAvatar src={user.avatar} alt="Foto do usuário" />
          <h2>{user.name}</h2>
          <h3>@{user.username}</h3>
        </ProfileUser>

        <ProfileActions>
          <Link to="/manage-news/add">
            <ProfileIconAdd>
              <HiOutlinePlusCircle />
            </ProfileIconAdd>
          </Link>
        </ProfileActions>
      </ProfileHeader>
      <ProfilePosts>
        {posts && posts.length === 0 && <h3>Você ainda não criou nenhuma notícia...</h3>}
        {posts.map((post) => {
          return (
            <Card
              key={post.id}
              id={post.id}
              title={post.title}
              text={post.text}
              banner={post.banner}
              likes={post.likes}
              comments={post.comments}
              actions={true}
            />
          );
        })}
      </ProfilePosts>
    </ProfileContainer>
  );
}
