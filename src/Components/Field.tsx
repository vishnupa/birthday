import React from 'react'

const Field = () => {
  return (
    <div className='trail'>
      <div className='nav'>
      </div>
   
        <div className='section'>
        <div className='searchbar'>
          <form className="search-container">
              <input className='search-bar' type="text" id="search-bar"/>
                <button  type="submit" className="searchButton">
                <i className="fa fa-search" aria-hidden="true"></i>
                </button>
          </form>
        </div>
        </div>

        </div>
  )
}

export default Field