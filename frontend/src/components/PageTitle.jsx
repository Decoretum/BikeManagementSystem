import React from 'react'
import { Link } from 'react-router-dom';


function PageTitle(props) {
  return (
    <div className='d-flex justify-content-between'>
      <h1 className='page-title mt-1 mb-5'>{props.page}</h1>
      <div className='d-flex align-items-center'>
          <Link to={props.link} className='btn btn-lg btn-main'>
              <i className='me-1 bi-plus-lg'></i>
              {props.button}
          </Link>
      </div>
    </div>
  )
}

export default PageTitle;
