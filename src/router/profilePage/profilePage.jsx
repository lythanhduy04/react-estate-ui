import "./profilePage.scss";
import List from "../../components/list/List";
import Chat from "../../components/chat/Chat";

function ProfilePage() {
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Infromation</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </span>
            <span>
              UserName: <p>Ferret</p>
            </span>
            <span>
              Gmail: <p>thanhduyly18@gmail.com</p>
            </span>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Add new post</button>
          </div>
          <List />
          <div className="title">
            <h1>Save List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
