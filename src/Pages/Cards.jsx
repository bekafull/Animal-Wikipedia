import React, { useState } from 'react' // Hooks
import { Link } from 'react-router-dom';
import Animdata from "./data.json" // Data

export default function Cards() {
    // Card-Nav States
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");

    // Filtered Search
    const filteredAnimData = Animdata.filter(el => {
        return el.name.toLowerCase().includes(input.toLowerCase())
    })

    return (
        <section className='container'>
            {/* Card-Navbar */}
            <nav>
                <div className="logo">
                    <Link to="/"><i class="fa-solid fa-circle-left"></i></Link>
                    <h1>Animals Wikipedia</h1>
                    <i onClick={() => setIsOpen(!isOpen)} class="fa-solid fa-magnifying-glass"></i>
                </div>
                {isOpen ? (
                    <input autoFocus value={input} onChange={(e) => setInput(e.target.value)} className='form-control' type="search" placeholder='Search...' />
                ) : false}
            </nav>
            {/* Cards */}
            {filteredAnimData.length ?
                filteredAnimData.map((e,id) => (        
                        <Link to={"/animals/" + e.name} key={id} className="animCard">
                            <div className="text">
                                <h4>{e.type}</h4>
                                <h2>{e.name}</h2>
                            </div>
                            <img src={e.image} alt={e.name + e.id} />
                        </Link>
                )) : <h2 className='text-center mt-5'>Nothing Found...</h2>}

        </section>
    )
}
