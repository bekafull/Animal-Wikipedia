import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main>

      <div className="container">
        <h1>THE ANIMALS WIKIPEDIA</h1>

        <div className="info">
          <h2> Learn More About The Animals Life?</h2>
          <Link to="/animals"><button>Get Started</button></Link>
        </div>
      </div>

    </main>
  )
}
