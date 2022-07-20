import {  Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import CompanyList from './CompanyList';
import CompanyDetail from './CompanyDetail';
import JobList from './JobList';

/** List of routes and the components they render */
function RoutesList(){
  return(
    <Routes>
    <Route path="/" element={<HomePage  />} />
    <Route path="/companies" element={<CompanyList  />} />
    <Route path="companies/:company" element={<CompanyDetail />} />
    <Route path="/jobs" element={<JobList  />} />
    <Route path="*" element={<Navigate to="/" />} />
    </Routes>


  )
}

export default RoutesList;
