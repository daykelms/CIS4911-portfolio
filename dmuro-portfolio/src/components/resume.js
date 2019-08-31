import React from "react";
import { Cell, Grid } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends React.Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://media.licdn.com/dms/image/C4E03AQGTmfHU7FmwYA/profile-displayphoto-shrink_200_200/0?e=1572480000&v=beta&t=drfEMVyWhP8FR_TrbtD03ovzDLnaiQG-JH8fAlMx_6U"
                alt="avatar"
                style={{ height: "200px", borderRadius: "50%" }}
              />
            </div>
            <h2 style={{ paddingTop: ".2em", textAlign: "center" }}>
              {" "}
              Daykel Muro{" "}
            </h2>
            <h4 style={{ color: "grey", textAlign: "center" }}>
              {" "}
              Software Engineer
            </h4>
            <hr
              style={{
                borderTop: "3px solid #000046",
                width: "100%"
              }}
            />
            <p style={{ textAlign: "justify" }}>
              Fast learner and proactive senior Computer Science student who
              enjoys collaborating with team members and stakeholders.
              Resourceful professional who has accomplished several projects in
              a deadline-oriented environment and always look for challenges
              that allow the growth on a personal and professional level.{" "}
            </p>
            <hr
              style={{
                borderTop: "3px solid #000046",
                width: "100%"
              }}
            />
            <h5 style={{ color: "grey", textAlign: "center" }}>address</h5>
            <p style={{ color: "grey", textAlign: "center" }}>
              {" "}
              Miami Lakes, Florida.{" "}
            </p>
            <h5 style={{ color: "grey", textAlign: "center" }}> phone</h5>
            <p style={{ color: "grey", textAlign: "center" }}>
              {" "}
              (786) 389-3228{" "}
            </p>
            <h5 style={{ color: "grey", textAlign: "center" }}> email </h5>
            <p style={{ color: "grey", textAlign: "center" }}>
              {" "}
              dmuros03@gmail.com{" "}
            </p>
            <hr
              style={{
                borderTop: "3px solid #000046",
                width: "100%"
              }}
            />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2> Education </h2>
            <Education
              startYear={2015}
              endYear={2019}
              schoolName="Florida International University - Bachelor in Computer Science"
              schoolDescription="Florida International University (FIU) is a public research university in Greater Miami, Florida.
              FIU has two major campuses in Miami-Dade County, with its main campus in University Park. Florida International University
              is classified as a research university with highest research activity by the Carnegie Foundation and a research university 
              by the Florida Legislature."
            />
            <hr style={{ borderTop: "3px solid #1cb5e0" }} />
            <h2>Experience</h2>
            <Experience
              startYear={2019}
              endYear={2019}
              jobName="Enterprise Technology Intern at State Farm, Atlanta, Georgia "
              jobDescription="•	 Implemented according to company standards the landing webpage for Community Offers App using React JS and Webpack. 
                •	Implemented modifications using React JS and redux to the Merchant Portal registration page of Community Offers State Farm’s web application.
                •	Implemented translation of Community Offers landing webpage using AWS Translate services"
            />
            <Experience
              startYear={2014}
              endYear={2019}
              jobName="IT Technician at Office Systems International, Miami, Florida "
              jobDescription="•	 Reduced company’s technical support costs by implementing an MFP management software, while increasing the availability of technicians to address service calls.
                •	Contributed to increase sales by performing continuous updates and improvements of the company’s website and database. 
                •	Provided remote technical support to website users."
            />
            <hr style={{ borderTop: "3px solid #1cb5e0" }} />
            <h2>Skills</h2>
            <Skills skill="HTML/CSS" progress={100} />
            <Skills skill="React JS" progress={80} />
            <Skills skill="JavaScript" progress={65} />
            <Skills skill="PostgreSQL" progress={55} />
            <Skills skill="Java" progress={90} />
            <Skills skill="Spring" progress={40} />
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Resume;
