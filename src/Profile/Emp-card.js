import Card from "react-bootstrap/esm/Card";
import Address from "./Address";
import FullName from "./FullName";
import ProfilePhoto from "./ProfilePhoto";
const Empcard = () => {
  return (
    <div className="carde">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" />
        <ProfilePhoto></ProfilePhoto>
        <Card.Body>
          <Card.Title>
            <FullName />
          </Card.Title>
          <Card.Text>
            <Address />
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Empcard;
