import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Owner(props) {
  return (
    <Card className="m-2 h-100" style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        style={{ width: "286px", height: "180px", objectFit: "cover" }}
        className=""
        src={props.img}
      />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          Address: {props.address} <br />
          Tele. No.: {props.telephone}
        </Card.Text>
        <Link
          className="btn btn-info"
          to={`/boardings/?owner=${props.id}`}
          variant="dark"
        >
          Show Boardings
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Owner;
