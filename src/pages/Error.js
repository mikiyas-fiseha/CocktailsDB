import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
      <section className='error-page section'>
        <div className='error-container'><h1>Ops! it's a Dead End</h1>
          <Link to="/" className='btn btn-primary'>
            Back To Home
          </Link>
        </div>

      </section>

    </div>

  )
}

export default Error
