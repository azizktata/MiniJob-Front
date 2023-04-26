import React from 'react'

function Search(props) {
  return (
    <div className='Search'  >
      <section id="hero" class="hero d-flex align-items-center" >
    <div class="container">
          <form action="#" class="form-search d-flex align-items-stretch mb-3" data-aos="fade-up" data-aos-delay="200">
            <input 
            type="text" 
            class="form-control"
             placeholder="ZIP code or CitY"
             value={props.searchTerm}
             onChange={() => props.handleSearch}
             />
            <button type="submit" class="btn btn-primary">Search</button>
          </form>
    </div>
    </section>
    </div>
  )
}

export default Search