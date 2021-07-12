import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const fetchedJobs = await fetch(url);
    const parsedJobs = await fetchedJobs.json();
    setJobs(parsedJobs);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="job-center">
        <div className="btn-container">
          {jobs.map((job) => (
            <button key={job.id} class="job-btn false">
              {job.company}
            </button>
          ))}
        </div>
        <article class="job-info">
          <h3>Full Stack Web Developer</h3>
          <h4>TOMMY</h4>
          <p class="job-date">December 2015 - Present</p>
          <div class="job-desc">
            <FaAngleDoubleRight className="job-icon" />
            <p>
              Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke
              leggings offal cold-pressed brunch neutra. Hammock photo booth
              live-edge disrupt.
            </p>
          </div>
        </article>
      </div>
      <button type="button" class="btn">
        more info
      </button>
    </section>
  );
}

export default App;
