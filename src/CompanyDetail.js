import { useEffect, useState } from "react";
import JoblyApi from "./api";
import "./CompanyDetail.css";
import { Navigate, useParams } from 'react-router-dom';
import "./CompanyList.css";
import JobCard from "./JobCard";

/**
 * CompanyDetail
 * Renders a list of job cards for a company
 * Jobly API
 *
 * state:
 *  - company: {data: null or {company}, errors: null or [errors]}
 *
 * props: none
 *
 * Rendered at /companies/:company
 *
 */

function CompanyDetail() {
  const [company, setCompany] = useState({ data: null, errors: null });
  const params = useParams();

  useEffect(function fetchCompanyOnRender() {
    async function fetchCompany() {
      try {
        const result = await JoblyApi.getCompany(params.company);
        setCompany({ data: result, errors: null });
      } catch (err) {
        setCompany({
          data: null,
          errors: err
        });
      }
    }
    fetchCompany();
  }, []);

  console.log(company);

  if (company.errors) return <Navigate to="/" />;
  else if (company.data === null) return <i>Loading...</i>;

  return (
    <div className="CompanyDetail">
      <div>
        <h2>{company.data.name}</h2>
        <p>{company.data.description}</p>
      </div>

      {company.data.jobs.map(job => (
        <JobCard key={job.id} job={job} company={company.name} />
      ))}
    </div>
  );

}

export default CompanyDetail;
