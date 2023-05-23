import React, { useEffect } from "react";
import "../Pages/Style.css";
import Icon from "../assets/Search-icon.png";
import Location from "../assets/location-icon.png";
import Experience from "../assets/experience-icon.png";
import { useState } from "react";

const SearchArea = () => {
  const [jobList, setJobList] = useState([]);
  const [title, setTitle] = useState("");
  const [error, setError] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const requestBody = {
    jobTitle: title,
    department: selectedDepartment,
    location: selectedLocation,
  };

  const citiesInIndia = [
    { name: "Mumbai" },
    { name: "Delhi" },
    { name: "Bengaluru" },
    { name: "Hyderabad" },
    { name: "Ahmedabad" },
    { name: "Chennai" },
    { name: "Kolkata" },
    { name: "Pune" },
    { name: "Jaipur" },
    { name: "Surat" },
  ];

  const [Height, setHeight] = useState(false);
  const heihtControl = Height ? { height: "51.5rem" } : { height: "51.5rem" };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDepartment = (e) => {
    setSelectedDepartment(e.target.value);
  };

  const handleLocation = (e) => {
    setSelectedLocation(e.target.value);
  };

  const handleSubmit = () => {
    setHeight(true);
    if (requestBody.department === "" || requestBody.location === "") {
      setError("error");
    } else {
      fetchData();
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://careerserver-production.up.railway.app/jobs",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      const data = await response.json();
      console.log(data);
      setJobList(data);
    } catch (err) {
      console.log(err);
      setError(err);
    }
  };

  const fetchAllJobs = async () => {
    try {
      const response = await fetch("https://careerserver-production.up.railway.app/jobs");
      const data = await response.json();
      console.log(data);
      setJobList(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(()=>{
    fetchAllJobs()
  },[])
  return (
    <div className="search-area" style={heihtControl} >
      <div className="search-box-conatiner">
        <div className="search-input">
          <h5>Job Title</h5>
          <input
            placeholder="Search by Job Title"
            onChange={handleTitle}
            value={title}
          />
        </div>
        <div className="search-input">
          <h5>Department</h5>
          <select value={selectedDepartment} onChange={handleDepartment}>
            <option disabled selected value="">
              Select Department
            </option>
            <option value="Marketing">Marketing</option>
            <option value="Finance">Finance</option>
            <option value="sales">Sales</option>
            <option value="Information Technology">
              Information Technology (IT)
            </option>
          </select>
        </div>
        <div className="search-input">
          <h5>Location</h5>
          <select
            name="Location"
            value={selectedLocation}
            onChange={handleLocation}
          >
            <option value="" disabled selected>
              Select Location
            </option>
            {citiesInIndia?.map((item) => (
              <option key={item.name} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className="search-btn" onClick={handleSubmit}>
          <img src={Icon} alt="search-icon" />
        </div>
      </div>
      {jobList?.map((job) => (
        // <div className="jobs-container">
        <div className="job-container">
          <div className="job-details">
            <h3>{job.title}</h3>
            <div className="loc-exp-continer">
              <div className="loc-exp">
                <img src={Location} alt="location-icon" />
                <h4>{job.location}</h4>
              </div>
              <div className="loc-exp">
                <img src={Experience} alt="experience-icon" />
                <h4>{job.experience}years</h4>
              </div>
            </div>
          </div>
          <div className="jobDetails-Btn-conatainer">
            <div className="jobDetails-Btn">
              <h3>View Job</h3>
            </div>
          </div>
        </div>
        // </div>
      ))}
    </div>
  );
};

export default SearchArea;
