import Boarding from "../components/Boarding";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Modal } from "react-bootstrap";

function Boardings() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [isChecked, setIsChecked] = useState(true);

  const handleAvailable = () => {
    setIsChecked(!isChecked);
  };

  const [boardings, setBoardings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3001/boardings");
        setBoardings(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="text-center d-flex justify-content-between align-items-center">
        <h2 className="text-center pt-4">Boardings</h2>
        <Button className="" onClick={handleShow}>
          Add Boarding
        </Button>
      </div>
      <div className="d-flex flex-wrap">
        {boardings.map((boarding) => {
          return (
            <Boarding
              key={boarding.boarding_id}
              id={boarding.boarding_id}
              name={boarding.boarding_name}
              description={boarding.description}
              img={boarding.img}
            />
          );
        })}
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Boarding</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label htmlFor="name">Boarding Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter Boarding Name"
              />
              <label htmlFor="owner_username">Owner Username</label>
              <input
                type="text"
                className="form-control"
                id="owner_username"
                placeholder="Enter Owner Username"
              />
              <label htmlFor="address">Boarding Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="Enter Boarding Address"
              />
              <div className="form-check form-switch py-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckChecked"
                  onChange={handleAvailable}
                  checked={isChecked}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckChecked"
                >
                  Available
                </label>
              </div>
              <label htmlFor="no_of_rooms">No of rooms</label>
              <input
                type="number"
                className="form-control"
                id="no_of_rooms"
                placeholder="Enter Number of Rooms"
              />
              <label htmlFor="max_no_of_people">
                Maximum People Can Accommodate
              </label>
              <input
                type="number"
                className="form-control"
                id="max_no_of_people"
                placeholder="Enter Maximum Number of People Can Accommodate"
              />
              <label htmlFor="rent_period">Rent Period (Years)</label>
              <input
                type="number"
                className="form-control"
                id="rent_period"
                placeholder="Enter Rent Period (in Years)"
              />
              <label htmlFor="monthly_fee">Monthly Fee</label>
              <input
                type="number"
                className="form-control"
                id="monthly_fee"
                placeholder="Enter Monthly Fee"
              />
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                placeholder="Enter Description of Boarding"
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Boardings;
