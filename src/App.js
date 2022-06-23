import "./App.css";
import Address from "./Profile/Address";
import FullName from "./Profile/FullName";
import ProfilePhoto from "./Profile/ProfilePhoto";
import { DatePicker } from "antd";
import Navv from "./Profile/nav";
import Carousel_l from "./Profile/Carousel_l";
import Empcard from "./Profile/Emp-card";
import Profile from "./Profile/added";
import Foooter from "./Profile/footer";

function App() {
  return (
    <div className="App">
      <Navv />
      {/* <Carousel_l /> */}
      <Profile />
      <Foooter />
    </div>
  );
}

export default App;
