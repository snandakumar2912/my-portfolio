import React, { useState } from "react";

function WorkExperience() {
  const [popupVisible, setPopupVisible] = useState(false);
  const [currentCompany, setCurrentCompany] = useState("");

  const showDetails = (company) => {
    setCurrentCompany(company);
    setPopupVisible(true);
  };

  const hidePopup = () => {
    setPopupVisible(false);
  };

  const renderCompanyDetails = () => {
    const companyDetails = {
      Capgemini: {
        name: "Capgemini",
        description:
          "Role Description: I specialize in orchestrating AWS cloud infrastructure for production and development, with expertise in designing web environments using EC2, ELB, and S3. Proficient in DevOps tools like GitHub, Jenkins, and SonarQube, I ensure robust monitoring through CloudWatch. My role encompasses meticulous manual and automation testing, focusing on precise test data and cases. I swiftly identify defects, create Jira tickets for resolution, and ensure on-time delivery. Detailed documentation accompanies each step, aiding UAT understanding. I have automated builds for Maven, mobile, and API testing, utilizing tools like Cafenext, ConformQ, and Applitools for efficient operations.",
      },
      ECIL: {
        name: "ECIL",
        description:
          "Role Description: The experience involves an internship at ECIL focusing on embedded systems and the development of an RFID-based attendance system using Embedded C.",
      },
    };

    if (currentCompany && companyDetails[currentCompany]) {
      const { name, description } = companyDetails[currentCompany];

      return (
        <div>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      );
    } else {
      return <div>No details available for {currentCompany}</div>;
    }
  };

  return (
    <div>
      <main className="flex flex-col items-center justify-center min-h-screen">
        <section id="experience">
          <h2 className="font-extrabold text-center text-2xl">
            Work and Internship Experience
          </h2>
          <div className="font-bold items-center company" onClick={() => showDetails("Capgemini")}>
            <p>
              Capgemini
              <br />
              Aug 2021 - March 2023, role: Software Engineer
              <br />
              <img
                
                src="capgeminiLogo.jpg"
                alt="capgemini logo"
                style={{ width: "250px", height: "200px" }}
              />
            </p>
          </div>
          <div className="font-bold items-center company" onClick={() => showDetails("ECIL")}>
            <p>
              ECIL
              <br />
              June 2019, role: Intern
              <br />
              <img 
                src="ecillogo.jpg"
                alt="ECIL logo"
                style={{ display:"flex", width: "250px", height: "200px" }}
              />
            </p>
          </div>
        </section>

        {/* Popup Container */}
        {popupVisible && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-md" style={{ width: '400px' }}>
              <span onClick={hidePopup} className="float-right cursor-pointer p-2">&times;</span>
              {renderCompanyDetails()}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default WorkExperience;
