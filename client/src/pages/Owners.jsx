import Owner from "../components/Owner";
import React, { useState } from "react";
import { useEffect } from "react";

function Owners(){

    const [owners, setOwners] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/owners")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setOwners(data);
            });
    }, []);

    return (
        <>
            <h2 className="container text-center pt-4 pb-2">Owners</h2>
            <div className="container d-flex flex-wrap">

                {owners.map(owner => {
                    return <Owner key={owner.owner_id} name={owner.name} address={owner.address} telephone={owner.tele_no} img="" />;
                })}
                
            </div>
        </>
    );
}

export default Owners;