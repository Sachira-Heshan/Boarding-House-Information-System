import Boarding from '../components/Boarding';
import {useState} from 'react';
import { useEffect } from 'react';

function Boardings(){

    const [boardings, setBoardings] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/boardings")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setBoardings(data);
            });
    }, []);

    return (
        <div className="container">
            <h2 className="text-center pt-4">Boardings</h2>
            <div className="d-flex flex-wrap">

                {boardings.map((boarding) => {
                    return <Boarding key={boarding.boarding_id} name={boarding.boarding_name} description={boarding.description} img="" />
                })}

            </div>
        </div>
    );
}

export default Boardings;