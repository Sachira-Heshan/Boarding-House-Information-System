import Owner from "../components/Owner";
import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Owners() {
  const [owners, setOwners] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3001/owners");
        setOwners(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h2 className="container text-center pt-4 pb-2">Owners</h2>
      <div className="container d-flex flex-wrap">
        {owners.map((owner) => {
          return (
            <Owner
              key={owner.id}
              id={owner.id}
              name={owner.name}
              address={owner.address}
              telephone={owner.tele_no}
              img={owner.pro_pic}
            />
          );
        })}
      </div>
    </>
  );
}

export default Owners;
