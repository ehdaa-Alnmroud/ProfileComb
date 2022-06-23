// the Profile comb
import Address from "./Address";
import FullName from "./FullName";
import ProfilePhoto from "./ProfilePhoto";

const Profile = () => {
  return (
    <div className="contann">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="card">
          <div className="user text-center">
            <div className="profile">
              <ProfilePhoto
                className="rounded-circle"
                width={80}
              ></ProfilePhoto>
            </div>
          </div>
          <div className="mt-5 text-center">
            <h4 className="mb-0">
              <FullName></FullName>
            </h4>
            <span className="text-muted d-block mb-2">
              <Address />
            </span>
            <button className="btn btn-primary btn-sm follow">Follow</button>
            <div className="d-flex justify-content-between align-items-center mt-4 px-4">
              <div className="stats">
                <h6 className="mb-0">Followers</h6>
                <span>8,797</span>
              </div>
              <div className="stats">
                <h6 className="mb-0">Projects</h6>
                <span>142</span>
              </div>
              <div className="stats">
                <h6 className="mb-0">Ranks</h6>
                <span>129</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
