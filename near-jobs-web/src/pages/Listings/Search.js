const Search = () => {
  return (
    <div className="gradient-x-three-sm-primary">
      <div className="container content-space-2">
        <form>
          {/* Input Card */}
          <div className="input-card input-card-sm mb-3">
            <div className="input-card-form">
              <label
                htmlFor="jobTitleForm"
                className="form-label visually-hidden"
              >
                Job, title, skills, or company
              </label>
              <div className="input-group input-group-merge">
                <span className="input-group-prepend input-group-text">
                  <i className="bi-search" />
                </span>
                <input
                  type="text"
                  className="form-control"
                  id="jobTitleForm"
                  placeholder="Job, title, skills, or company"
                  aria-label="Job, title, skills, or company"
                />
              </div>
            </div>
            <div className="input-card-form">
              <label htmlFor="cityForm" className="form-label visually-hidden">
                City, state, or zip
              </label>
              <div className="input-group input-group-merge">
                <span className="input-group-prepend input-group-text">
                  <i className="bi-geo-alt" />
                </span>
                <input
                  type="text"
                  className="form-control"
                  id="cityForm"
                  placeholder="City, state, or zip"
                  aria-label="City, state, or zip"
                />
              </div>
            </div>
            <button type="button" className="btn btn-primary">
              Search
            </button>
          </div>
          {/* End Input Card */}
        </form>
        <div className="row align-items-center">
          <div className="col-md-auto mb-3 mb-lg-0">
            <h6 className="mb-1">Limit search to:</h6>
          </div>
          {/* End Col */}
          <div className="col-md mb-3 mb-lg-0">
            {/* Check */}
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="jobSearchToCheckbox1"
                defaultValue="option1"
                defaultChecked=""
              />
              <label
                className="form-check-label font-light"
                htmlFor="jobSearchToCheckbox1"
              >
                Job title
              </label>
            </div>
            {/* End Check */}
            {/* Check */}
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="jobSearchToCheckbox2"
                defaultValue="option2"
              />
              <label
                className="form-check-label"
                htmlFor="jobSearchToCheckbox2"
              >
                Skills
              </label>
            </div>
            {/* End Check */}
            {/* Check */}
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="jobSearchToCheckbox3"
                defaultValue="option3"
              />
              <label
                className="form-check-label"
                htmlFor="jobSearchToCheckbox3"
              >
                Companies
              </label>
            </div>
            {/* End Check */}
            {/* Check */}
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="jobSearchToCheckbox4"
                defaultValue="option4"
              />
              <label
                className="form-check-label"
                htmlFor="jobSearchToCheckbox4"
              >
                Field of study
              </label>
            </div>
            {/* End Check */}
          </div>
          <div className="col-md-auto">
            {/* Switch */}
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="remoteOnlySwitch"
              />
              <label className="form-check-label" htmlFor="remoteOnlySwitch">
                Remote only
              </label>
            </div>
            {/* End Switch */}
          </div>
          {/* End Col */}
        </div>
        {/* End Row */}
      </div>
    </div>
  );
};

export default Search;
