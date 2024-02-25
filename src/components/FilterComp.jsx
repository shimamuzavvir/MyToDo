import React from 'react';

const FilterComp = ({changeview}) => {
    return (
        
             <div class="container mt-5" >
        <div className=" d-flex justify-content-between ">
          <h1 className=" d-sm-inline-flex">My Todos</h1>
          <div className="d-flex">
            <h1 className="me-2"> Status:</h1>
            <select onChange={changeview} className="btn btn-danger dropdown-toggle">
              <option value='All'>All</option>
              <option value='Not Completed'>Not Completed </option>
              <option value='Completed'>Completed</option>
            </select>
          </div>
        </div>
      </div>
        
    );
};

export default FilterComp;