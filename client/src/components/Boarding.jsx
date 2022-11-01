import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Boarding(props) {
  const navigate = useNavigate();

  return (
    <>
      <div className="container my-4">
        <div className="d-flex row w-100">
          <div className="col-5">
            <img
              src={props.img}
              alt=""
              className="w-100 h-100"
              style={{ maxWidth: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="col-7 px-5">
            <h3>{props.name}</h3>
            <p> {props.description} </p>
            <Button
              onClick={(e) => {
                e.preventDefault();
                navigate(`/boardings/${props.id}`);
              }}
              variant="outline-primary"
            >
              Show Details
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Boarding;
