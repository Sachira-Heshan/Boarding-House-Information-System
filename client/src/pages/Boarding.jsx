import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../context/authContext";

function Boarding() {
  const [show, setShow] = useState(false);
  const { id } = useParams();

  const { currentUser } = useContext(AuthContext);

  const [boarding, setBoarding] = useState({});

  const [name, setName] = useState(boarding.boarding_name);
  const [ownerUsername, setOwnerUsername] = useState(boarding.owner_id);
  const [address, setAddress] = useState(boarding.address);
  const [noOfRooms, setNoOfRooms] = useState(boarding.no_of_rooms);
  const [noOfMaxPeople, setNoOfMaxPeople] = useState(boarding.max_no_of_people);
  const [rentPeriod, setRentPeriod] = useState(boarding.rent_period);
  const [monthlyFee, setMonthlyFee] = useState(boarding.monthly_fee);
  const [description, setDescription] = useState(boarding.description);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/boardings/${id}`);
        setBoarding(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id]);

  const handleValues = (e) => {
    setName(boarding.boarding_name);
    setOwnerUsername(boarding.owner_id);
    setAddress(boarding.address);
    setNoOfRooms(boarding.no_of_rooms);
    setNoOfMaxPeople(boarding.max_no_of_people);
    setRentPeriod(boarding.rent_period);
    setMonthlyFee(boarding.monthly_fee);
    setDescription(boarding.description);

    console.log("Boarding Name Direct: " + boarding.boarding_name);
    console.log("Boarding Name From State: " + name);
  };

  // const handleEdit = (e) => {
  //   e.preventDefault();
  //   const data = {
  //     boarding_name: name,
  //     owner_id: ownerUsername,
  //     address: address,
  //     no_of_rooms: noOfRooms,
  //     max_no_of_people: noOfMaxPeople,
  //     rent_period: rentPeriod,
  //     monthly_fee: monthlyFee,
  //     description: description,
  //   };
  //   axios
  //     .put(`http://localhost:3001/boardings/${id}`, data)
  //     .then((res) => {
  //       console.log(res.data);
  //       setShow(false);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [isChecked, setIsChecked] = useState(true);

  const handleAvailable = () => {
    setIsChecked(!isChecked);
  };

  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();
    const data = {
      boarding_name: name,
      //owner_id: ownerUsername,
      address: address,
      no_of_rooms: noOfRooms,
      max_no_of_people: noOfMaxPeople,
      rent_period: rentPeriod,
      monthly_fee: monthlyFee,
      description: description,
    };
    try {
      const res = await axios.put(
        `http://localhost:3001/boardings/${id}`,
        data
      );
      console.log(res.data);
      setShow(false);
      navigate("/boardings");
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (e) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Are you sure you want to delete this boarding?")) {
      e.preventDefault();
      try {
        await axios.delete(`http://localhost:3001/boardings/${id}`);
        navigate("/boardings");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <div className="boarding">
        <div className="boarding__container container">
          <h2>Boarding</h2>
          <img
            className="w-75"
            src={boarding.img} //"https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg" //{boarding.img}
            alt=""
          />
          <h3>Boarding Name: {boarding.boarding_name}</h3>
          <p>Boarding Address: {boarding.address}</p>
          <p>Boarding Description: {boarding.description}</p>
          <p>Boarding Monthly Fee: {boarding.monthly_fee}</p>
          <h4>Boarding Stuffs: </h4>
          <p>Asset Name: Quantity</p>
          {/* <p>
            {boarding.asset_name}: {boarding.asset_quantity}
          </p> */}
          <p>Asset Name: Quantity</p>
          <h4>Available Boarding Facilities: </h4>
          <p>Facility Name</p>
          {/* <p>{boarding.facility_name}</p> */}
          <p>Facility Name</p>

          {currentUser?.id === boarding.owner_id && (
            <div>
              <Button
                onClick={() => {
                  handleValues();
                  handleShow();
                }}
              >
                Edit Boarding
              </Button>
              <Button className="mx-2" onClick={handleDelete}>
                Delete Boarding
              </Button>
            </div>
          )}

          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Edit Boarding</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Boarding Name</label>
                  <input
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter Name of the Boarding"
                  />
                  <label htmlFor="owner_username">Owner Username</label>
                  <input
                    value={ownerUsername}
                    onChange={(e) => {
                      setOwnerUsername(e.target.value);
                    }}
                    type="text"
                    className="form-control"
                    id="owner_username"
                    placeholder="Enter Owner Username"
                  />
                  <label htmlFor="address">Boarding Address</label>
                  <input
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
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
                    value={noOfRooms}
                    onChange={(e) => {
                      setNoOfRooms(e.target.value);
                    }}
                    type="number"
                    className="form-control"
                    id="no_of_rooms"
                    placeholder="Enter Number of Rooms"
                  />
                  <label htmlFor="max_no_of_people">
                    Maximum People Can Accommodate
                  </label>
                  <input
                    value={noOfMaxPeople}
                    onChange={(e) => {
                      setNoOfMaxPeople(e.target.value);
                    }}
                    type="number"
                    className="form-control"
                    id="max_no_of_people"
                    placeholder="Enter Maximum Number of People Can Accommodate"
                  />
                  <label htmlFor="rent_period">Rent Period (Years)</label>
                  <input
                    value={rentPeriod}
                    onChange={(e) => {
                      setRentPeriod(e.target.value);
                    }}
                    type="number"
                    className="form-control"
                    id="rent_period"
                    placeholder="Enter Rent Period (in Years)"
                  />
                  <label htmlFor="monthly_fee">Monthly Fee</label>
                  <input
                    value={monthlyFee}
                    onChange={(e) => {
                      setMonthlyFee(e.target.value);
                    }}
                    type="number"
                    className="form-control"
                    id="monthly_fee"
                    placeholder="Enter Monthly Fee"
                  />
                  <label htmlFor="description">Description</label>
                  <input
                    value={description}
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
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
              <Button onClick={handleUpdate} variant="primary">
                Update
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  );
}

export default Boarding;
