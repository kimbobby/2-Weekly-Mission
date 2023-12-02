import "./Profile.css";

const Profile = ({ selectedFolder }) => {
  const { name, owner } = selectedFolder;
  return (
    <div className="folder-info">
      <img className="folder-profile" src={owner?.profileImageSource} alt="owner profile" />
      <span id="folder-owner-name">@{owner?.name}</span>
      <span id="folder-name">{name}</span>
    </div>
  );
};

export default Profile;
