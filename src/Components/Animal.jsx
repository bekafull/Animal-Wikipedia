import React from 'react'
import { Link, useParams } from 'react-router-dom';
import AnimData from "../Pages/data.json"


export default function Animal() {

    const { id } = useParams();

    const filteredAnim = AnimData.filter((e) => {
        return e.name.includes(id);
    })


    return (
        <>
            <Link className='back' to="/animals"><i class="fa-solid fa-circle-left"></i></Link>

            {filteredAnim.map((e,id) => (
                <div key={id} className="animal container">
                    <div className="img">
                        <img src={e.image} alt={e.name} />
                    </div>
                    <div className="text">
                        <h1>{e.name}</h1>
                        <p>{e.desc}</p>
                        <p>{e.desc2}</p>
                        <p>{e.desc3}</p>
                    </div>
                </div>
            ))}
        </>
    )
}
