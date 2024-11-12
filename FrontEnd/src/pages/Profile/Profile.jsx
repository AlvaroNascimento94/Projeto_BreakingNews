import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import {
  ProfileActions,
  ProfileAvatar,
  ProfileBackground,
  ProfileContainer,
  ProfileEditIcon,
  ProfileHeader,
  ProfileIconAdd,
  ProfileUser,
} from "./ProfileStyled";
import { HiOutlinePlusCircle } from "react-icons/hi2";
import { BsPencilSquare } from "react-icons/bs";

export function Profile() {
  const { user } = useContext(UserContext);
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
          <ProfileIconAdd>
            <HiOutlinePlusCircle />
          </ProfileIconAdd>
        </ProfileActions>
      </ProfileHeader>
    </ProfileContainer>
  );
}
