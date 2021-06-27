import { FC } from "react";
import styles from "../../styles/LeftSide.module.css";
import BottomProfileLink from "./BottomProfileLink";
import { useSelector } from "react-redux";
import { IState } from "../../reducers";
import { IUsersReducer } from "../../reducers/usersReducers";
import { INumber } from "../../App";
import { ProfileLink, ProfileWrapper } from "./LeftSide_styles";

export const Profile: FC<INumber> = ({ id }) => {
  const { usersList } = useSelector<IState, IUsersReducer>((globalState) => ({
    ...globalState.users,
  }));
  const { photosList } = useSelector<IState, IUsersReducer>((globalState) => ({
    ...globalState.users,
  }));
  return (
    <ProfileWrapper>
      {ProfileInfo(
        photosList[10]?.url,
        usersList[id]?.name,
        "Software Developer"
      )}
      <BottomProfileLink />
    </ProfileWrapper>
  );
};

const ProfileInfo = (photo: string, name: string, job: string) => (
  <div className={styles.profileBox}>
    <img className={styles.profilePhoto} src="https://images.pexels.com/photos/7907687/pexels-photo-7907687.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
    <ProfileLink to="/profile" className={styles.profileName}>
      {name}
    </ProfileLink>
    <p className={styles.profileJobTitle}>Job title - {job}</p>
  </div>
);

export default Profile;
