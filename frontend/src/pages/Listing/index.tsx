import MovieCard from "../../components/MovieCard";
import Pagination from "../../components/Pagination";
function Listing(){
    return(
        <>
<Pagination/> 
<div className="container">
  <div className="row">
    <div className="col-sm-4 col-lg-5 col-xl-6 mb-3">
    <MovieCard/> 
    </div>

    <div className="col-sm-4 col-lg-5 col-xl-6 mb-3">
    <MovieCard/> 
    </div>  <div className="col-sm-4 col-lg-5 col-xl-6 mb-3">
    <MovieCard/> 
    </div>
    <div className="col-sm-4 col-lg-5 col-xl-6 mb-3">
    <MovieCard/> 
    </div>
    <div className="col-sm-4 col-lg-5 col-xl-6 mb-3">
    <MovieCard/> 
    </div>
    
  </div>
</div>

        </>
  );
}
export default Listing;