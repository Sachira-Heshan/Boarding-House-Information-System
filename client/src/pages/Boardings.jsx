import Boarding from "../components/Boarding";
import axios from "axios";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

function Boardings() {
  const [show, setShow] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  const owner = useLocation().search;

  const [isChecked, setIsChecked] = useState(true);

  const handleAvailable = () => {
    setIsChecked(!isChecked);
  };

  const [boardings, setBoardings] = useState([]);

  const [name, setName] = useState("");
  const [ownerUsername, setOwnerUsername] = useState("");
  const [address, setAddress] = useState("");
  const [noOfRooms, setNoOfRooms] = useState("");
  const [noOfMaxPeople, setNoOfMaxPeople] = useState("");
  const [rentPeriod, setRentPeriod] = useState("");
  const [monthlyFee, setMonthlyFee] = useState("");
  const [description, setDescription] = useState("");

  const handleAddBoarding = async (e) => {
    //e.preventDefault();
    const data = {
      owner_id: 7, //currentUser.id,
      boarding_name: name,
      address: address,
      no_of_rooms: noOfRooms,
      max_no_of_people: noOfMaxPeople,
      rent_period: rentPeriod,
      monthly_fee: monthlyFee,
      description: description,
    };
    try {
      const res = await axios.post("http://localhost:3001/boardings", data);
      console.log(res);
      setShow(false);
      navigate("/boardings");
    } catch (err) {
      console.log(err);
    }
  };

  // const isOwner = async () => {
  //   console.log(currentUser.id);
  //   if (currentUser) {
  //     try {
  //       const res = await checkOwner({ id: currentUser.id });
  //       console.log(res);
  //       return res;
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   } else {
  //     return false;
  //   }
  // };
  // isOwner();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/boardings${owner}`);
        setBoardings(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [owner]);

  return (
    <div className="container">
      <div className="text-center d-flex justify-content-between align-items-center">
        <h2 className="text-center pt-4">Boardings</h2>
        {currentUser && (
          <Button
            className=""
            onClick={() => {
              handleShow();
            }}
          >
            Add Boarding
          </Button>
        )}
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
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter Boarding Name"
                required
              />
              <label htmlFor="owner_username">Owner Username</label>
              <input
                value={ownerUsername}
                onChange={(e) => setOwnerUsername(e.target.value)}
                type="text"
                className="form-control"
                id="owner_username"
                placeholder="Enter Owner Username"
                required
              />
              <label htmlFor="address">Boarding Address</label>
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                className="form-control"
                id="address"
                placeholder="Enter Boarding Address"
                required
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
                value={noOfRooms}
                onChange={(e) => setNoOfRooms(e.target.value)}
                type="number"
                className="form-control"
                id="no_of_rooms"
                placeholder="Enter Number of Rooms"
                required
              />
              <label htmlFor="max_no_of_people">
                Maximum People Can Accommodate
              </label>
              <input
                value={noOfMaxPeople}
                onChange={(e) => setNoOfMaxPeople(e.target.value)}
                type="number"
                className="form-control"
                id="max_no_of_people"
                placeholder="Enter Maximum Number of People Can Accommodate"
                required
              />
              <label htmlFor="rent_period">Rent Period (Years)</label>
              <input
                value={rentPeriod}
                onChange={(e) => setRentPeriod(e.target.value)}
                type="number"
                className="form-control"
                id="rent_period"
                placeholder="Enter Rent Period (in Years)"
                required
              />
              <label htmlFor="monthly_fee">Monthly Fee</label>
              <input
                value={monthlyFee}
                onChange={(e) => setMonthlyFee(e.target.value)}
                type="number"
                className="form-control"
                id="monthly_fee"
                placeholder="Enter Monthly Fee"
                required
              />
              <label htmlFor="description">Description</label>
              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                className="form-control"
                id="description"
                placeholder="Enter Description of Boarding"
                required
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleAddBoarding} variant="primary">
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Boardings;
