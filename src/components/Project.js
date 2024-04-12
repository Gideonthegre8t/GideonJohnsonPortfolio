import React from "react";
import Investment from "../assets/images/Investment.png";
import Financial from "../assets/images/Financial.png";

function Project() {
  //Handle OnClick for project
  const handleProjectInvestment = () => {
    const investUrl =
      process.env.PUBLIC_URL +
      "https://gideonthegre8t.github.io/portfolio-website-2/";
    window.open(investUrl, "_blank");
  };

  const handleProjectFinancial = () => {
    const financialUrl =
      process.env.PUBLIC_URL +
      "https://gideonthegre8t.github.io/portfolio-website-1/";
    window.open(financialUrl, "_blank");
  };

  const handleProjectPortfolio = () => {
    const portfolioUrl =
      process.env.PUBLIC_URL +
      "https://Gideonthegre8t.github.io/GideonJohnsonPortfolio";
    window.open(portfolioUrl, "_blank");
  };

  //Handle OnClick for Github
  const handleInvesmentGithub = () => {
    const investGithubUrl =
      process.env.PUBLIC_URL +
      "https://github.com/Gideonthegre8t/portfolio-website-2";
    window.open(investGithubUrl, "_blank");
  };

  const handleFinancialGithub = () => {
    const FinancialGithubUrl =
      process.env.PUBLIC_URL +
      "https://github.com/Gideonthegre8t/portfolio-website-1";
    window.open(FinancialGithubUrl, "_blank");
  };

  const handlePortfolioGithub = () => {
    const PortfolioGithubUrl =
      process.env.PUBLIC_URL +
      "https://github.com/Gideonthegre8t/GideonJohnsonPortfolio";
    window.open(PortfolioGithubUrl, "_blank");
  };

  return (
    <section>
      <div id="project" className="project-container">
        <div>
          <h2 className="project-header">Projects</h2>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="project-top">
              <img className="financial" src={Investment} alt="financial-pic" />
              <div className="project-text">
                <h3 className="project-title">Investment Website</h3>
                <p>Responsive and functional React website</p>
              </div>
            </div>
            <div className="project-links">
              {" "}
              <button
                onClick={handleProjectInvestment}
                className="preview-button"
              >
                Live Preview
              </button>
              <button onClick={handleInvesmentGithub} className="git-button">
                GitHub
              </button>
            </div>
          </div>
          <div className="card">
            <div className="project-top">
              <img className="financial" src={Financial} alt="financial-pic" />
              <div className="project-text">
                <h3 className="project-title">Financial Advisers Website</h3>
                <p>Responsive and functional React website</p>
              </div>
            </div>
            <div className="project-links">
              {" "}
              <button
                onClick={handleProjectFinancial}
                className="preview-button"
              >
                Live Preview
              </button>
              <button onClick={handleFinancialGithub} className="git-button">
                GitHub
              </button>
            </div>
          </div>

          <div className="project-container2">
            <div className="card">
              <div className="project-top">
                <img
                  className="financial"
                  src={Financial}
                  alt="financial-pic"
                />
                <div className="project-text">
                  <h3 className="project-title">Portflio Website</h3>
                  <p>Responsive and functional React websitegit push -u origin main</p>
                </div>
              </div>
              <div className="project-links">
                {" "}
                <button
                  onClick={handleProjectPortfolio}
                  className="preview-button"
                >
                  Live Preview
                </button>
                <button onClick={handlePortfolioGithub} className="git-button">
                  GitHub
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
