import React from 'react'
import Moviecard from '../Components/Moviecard'
import { Link, useSearchParams } from 'react-router-dom'
import useFetch from '../Hooks/useFetch'
import Loader from '../Components/Loader'
import { errorToast } from '../Components/Toaster'

const Search = ({apipath}) => {
  const [params]=useSearchParams()
  const queryTerm=params.get("q")
  let {data,loading,isError}=useFetch(apipath,queryTerm)

  if(loading){
    return (
      <div className="d-flex align-items-center justify-content-center vh-100, vw-100">
        <Loader />
      </div>
    )
  }
  if(isError){
    return (
      errorToast()
    )
  }
  return (
    <>
    <section className='search_card py-5'>
      <div className="container">
        <div className="back_button">
          <Link to="/home" className='mx-3'><i className="fa-solid fa-arrow-left"></i> Back To Home </Link>
        </div>
        <div className="row">
          <div className="movie_row">
            {data && data.length > 0 ?(            
              data.map((movie)=>(
                <div className="col-lg-3 d-flex justify-content-center" key={movie.id}>
                  <Moviecard movie={movie}  />
                </div>
            ))):(
              <div className="text-center">
                <p className='overview '>No movie search yet</p> 
              </div>
            )
            }
          </div>
        </div>

      </div>
    </section>

    
    </>
  )
}

export default Search