import Boarding from "../components/Boarding";
import axios from "axios";
import { useState } from "react";

function Search() {
  const [place, setPlace] = useState("");

  const [boardings, setBoardings] = useState([]);

  const handleSearch = async (e) => {
    console.log(place);
    const data = {
      search: place,
    };
    try {
      const res = await axios.post("http://localhost:3001/search", data);
      console.log(res);
      setBoardings(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <div className="text-center d-flex justify-content-between align-items-center">
        <h2 className="text-center pt-4">Boardings</h2>

        <div className="d-flex">
          <input
            value={place}
            onChange={(e) => {
              setPlace(e.target.value);
            }}
            style={{ width: "350px", marginRight: "10px" }}
            type="text"
            className="form-control"
            id="place"
            placeholder="Enter a Place"
          />
          <button type="button" className="btn btn-dark" onClick={handleSearch}>
            Search
          </button>
        </div>
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
    </div>
  );
}

export default Search;
