const CreateJob = () => {
  return (
    <>
      {/* Page Header */}
      <div className="container content-space-t-2">
        <div className="w-lg-75 mx-lg-auto">
          <div className="page-header">
            {/* Media */}
            <div className="d-sm-flex mb-3">
              <div className="flex-shrink-0 mb-2 mb-sm-0">
                <a href="../demo-jobs/employer.html">
                  <img
                    className="avatar avatar-lg mb-3"
                    src="../assets/svg/brands/capsule-icon.svg"
                    alt="Image Description"
                  />
                </a>
              </div>
              <div className="flex-grow-1 ms-sm-4">
                <div className="row">
                  <div className="col">
                    <h1 className="page-header-title h2">UX/UI Designer</h1>
                  </div>
                  {/* End Col */}
                  <div className="col-auto">
                    {/* Checkbbox Bookmark */}
                    <div className="form-check form-check-bookmark">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="jobsPageHeaderBookmarkCheck"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="jobsPageHeaderBookmarkCheck"
                      >
                        <span className="form-check-bookmark-default">
                          <i className="bi-star me-1" /> Save this job
                        </span>
                        <span className="form-check-bookmark-active">
                          <i className="bi-star-fill me-1" /> Saved
                        </span>
                      </label>
                    </div>
                    {/* End Checkbbox Bookmark */}
                  </div>
                  {/* End Col */}
                </div>
                {/* End Row */}
                <ul className="list-inline list-separator d-flex align-items-center mb-2">
                  <li className="list-inline-item">
                    <a className="link" href="../demo-jobs/employer.html">
                      Capsule
                    </a>
                  </li>
                  <li className="list-inline-item">
                    {/* Rating */}
                    <a
                      className="d-flex gap-1"
                      href="../demo-jobs/employer.html"
                    >
                      <img
                        src="../assets/svg/illustrations/star.svg"
                        alt="Review rating"
                        width={14}
                      />
                      <img
                        src="../assets/svg/illustrations/star.svg"
                        alt="Review rating"
                        width={14}
                      />
                      <img
                        src="../assets/svg/illustrations/star.svg"
                        alt="Review rating"
                        width={14}
                      />
                      <img
                        src="../assets/svg/illustrations/star.svg"
                        alt="Review rating"
                        width={14}
                      />
                      <img
                        src="../assets/svg/illustrations/star-half.svg"
                        alt="Review rating"
                        width={14}
                      />
                      <span className="ms-1">2,391 reviews</span>
                    </a>
                    {/* End Rating */}
                  </li>
                </ul>
                <ul className="list-inline list-separator small text-body mb-2">
                  <li className="list-inline-item">Posted 7 hours ago</li>
                  <li className="list-inline-item">
                    Oxford, England, United Kingdom
                  </li>
                  <li className="list-inline-item">Full time</li>
                </ul>
              </div>
            </div>
            {/* End Media */}
          </div>
        </div>
      </div>
      {/* End Page Header */}
      {/* Content */}
      <div className="container content-space-1 content-space-b-lg-3">
        <div className="w-lg-75 mx-lg-auto">
          {/* Card */}
          <div className="card card-bordered mb-10">
            <div className="card-body">
              <div className="row align-items-sm-center">
                <div className="col-sm mb-2 mb-sm-0">
                  <h5 className="card-title text-uppercase">
                    <i className="bi-lightning-charge-fill me-1" /> Autofill
                    application
                  </h5>
                  <p className="card-text small">
                    Save time by importing your resume.
                  </p>
                </div>
                {/* End Col */}
                <div className="col-sm-auto">
                  {/* Dropdown */}
                  <div className="dropdown">
                    <a
                      className="btn btn-primary"
                      href="#"
                      id="jobImportResumeDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      data-bs-dropdown-animation=""
                    >
                      Import resume from{" "}
                      <i className="bi-chevron-down small ms-1" />
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="jobImportResumeDropdown"
                    >
                      <a className="dropdown-item" href="#">
                        <img
                          className="avatar avatar-xss avatar-4x3 me-2"
                          src="../assets/vendor/bootstrap-icons/icons/laptop.svg"
                          alt="Image Description"
                        />{" "}
                        My Computer
                      </a>
                      <a className="dropdown-item" href="#">
                        <img
                          className="avatar avatar-xss avatar-4x3 me-2"
                          src="../assets/svg/brands/dropbox-icon.svg"
                          alt="Image Description"
                        />{" "}
                        Dropbox
                      </a>
                      <a className="dropdown-item" href="#">
                        <img
                          className="avatar avatar-xss avatar-4x3 me-2"
                          src="../assets/svg/brands/google-drive-icon.svg"
                          alt="Image Description"
                        />{" "}
                        Google Drive
                      </a>
                    </div>
                  </div>
                  {/* End Dropdown */}
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
          </div>
          {/* End Card */}
          {/* Form */}
          <form>
            <div className="mb-4">
              <h3>Personal information</h3>
            </div>
            <div className="row">
              <div className="col-sm-6">
                {/* Form */}
                <div className="mb-4">
                  <label className="form-label" htmlFor="applyForJobFirstName">
                    First name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="applyForJobNameFirstName"
                    id="applyForJobFirstName"
                    placeholder="First name"
                    aria-label="First name"
                  />
                </div>
                {/* End Form */}
              </div>
              <div className="col-sm-6">
                {/* Form */}
                <div className="mb-4">
                  <label className="form-label" htmlFor="applyForJobLasttName">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="applyForJobNameLastName"
                    id="applyForJobLasttName"
                    placeholder="Last name"
                    aria-label="Last name"
                  />
                </div>
                {/* End Form */}
              </div>
            </div>
            {/* End Form */}
            {/* Form */}
            <div className="mb-4">
              <label className="form-label" htmlFor="applyForJobEmail">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                name="applyForJobNameEmail"
                id="applyForJobEmail"
                placeholder="email@site.com"
                aria-label="email@site.com"
              />
            </div>
            {/* End Form */}
            {/* Form */}
            <div
              className="js-add-field mb-4"
              data-hs-add-field-options='{
            "template": "#addPhoneFieldTemplate",
            "container": "#addPhoneFieldContainer",
            "defaultCreated": 0
          }'
            >
              <label className="form-label" htmlFor="applyForJobPhone">
                Phone <span className="form-label-secondary">(Optional)</span>
              </label>
              <div className="input-group">
                <input
                  type="text"
                  className="js-input-mask form-control"
                  name="applyForJobNamePhone"
                  id="applyForJobPhone"
                  placeholder="+x(xxx)xxx-xx-xx"
                  aria-label="+x(xxx)xxx-xx-xx"
                  data-hs-mask-options='{
                  "mask": "+{0}(000)000-00-00"
                }'
                />
                {/* Select */}
                <select
                  className="form-select"
                  name="applyForJobPhoneSelect"
                  style={{ maxWidth: "8rem" }}
                >
                  <option value="Mobile" selected="">
                    Mobile
                  </option>
                  <option value="Home">Home</option>
                  <option value="Work">Work</option>
                  <option value="Fax">Fax</option>
                  <option value="Direct">Direct</option>
                </select>
                {/* End Select */}
              </div>
              {/* Container For Input Field */}
              <div id="addPhoneFieldContainer" />
              <a href="javascript:;" className="js-create-field form-link">
                <i className="bi-plus-circle me-1" /> Add phone
              </a>
            </div>
            {/* End Form */}
            {/* Add Phone Input Field */}
            <div
              id="addPhoneFieldTemplate"
              style={{ display: "none", position: "relative" }}
            >
              <div className="input-group input-group-add-field">
                <input
                  type="text"
                  className="js-input-mask form-control"
                  data-name="applyForJobNameAdditionalPhone"
                  id="applyForJobAdditionalPhone"
                  placeholder="+x(xxx)xxx-xx-xx"
                  aria-label="+x(xxx)xxx-xx-xx"
                  data-hs-mask-options='{
                "mask": "+{0}(000)000-00-00"
              }'
                />
                {/* Select */}
                <select
                  className="form-select"
                  data-name="applyForJobAdditionalPhoneSelect"
                  style={{ maxWidth: "8rem" }}
                >
                  <option value="Mobile" selected="">
                    Mobile
                  </option>
                  <option value="Home">Home</option>
                  <option value="Work">Work</option>
                  <option value="Fax">Fax</option>
                  <option value="Direct">Direct</option>
                </select>
                {/* End Select */}
                <a
                  className="js-delete-field input-group-add-field-delete"
                  href="javascript:;"
                >
                  <i className="bi-x-lg" />
                </a>
              </div>
            </div>
            {/* End Add Phone Input Field */}
            <hr className="my-7" />
            <div className="mb-4">
              <h3>Profile</h3>
            </div>
            {/* Form */}
            <div className="mb-4">
              <label className="form-label" htmlFor="applyForJobSummary">
                Summary
              </label>
              <textarea
                className="form-control"
                name="applyForJobSummaryName"
                id="applyForJobSummary"
                placeholder="In a few words, tell us about yourself"
                aria-label="In a few words, tell us about yourself"
                rows={6}
                defaultValue={""}
              />
            </div>
            {/* End Form */}
            {/* Form */}
            <div className="mb-4">
              <label className="form-label">
                Resume/CV and Cover Letter{" "}
                <i
                  className="bi-question-circle text-body ms-1"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title=""
                  data-bs-original-title="Maximum file size 10 MB."
                  aria-label="Maximum file size 10 MB."
                />
              </label>
              <div
                id="resumeAttach"
                className="js-dropzone dz-dropzone dz-dropzone-card dz-clickable"
              >
                <div className="dz-message">
                  <span className="d-block mb-1">Browse your files</span>
                  <span className="d-block text-muted small">
                    or drag' n' drop here
                  </span>
                </div>
              </div>
            </div>
            {/* End Form */}
            <hr className="my-7" />
            <div className="mb-4">
              <h3>Details</h3>
            </div>
            <div className="mb-1">
              <label className="input-label">
                Do you have the right to work in the UK?
              </label>
            </div>
            {/* Radio Button Group */}
            <div
              className="btn-group btn-group-segment mb-4"
              role="group"
              aria-label="Work status radio button group"
            >
              <input
                type="radio"
                className="btn-check"
                name="applyForJobWorkStatusBtnRadio"
                id="applyForJobWorkStatusYesBtnRadio"
                autoComplete="off"
              />
              <label
                className="btn btn-sm"
                htmlFor="applyForJobWorkStatusYesBtnRadio"
              >
                <i className="bi-hand-thumbs-up me-1" /> Yes
              </label>
              <input
                type="radio"
                className="btn-check"
                name="applyForJobWorkStatusBtnRadio"
                id="applyForJobWorkStatusNoBtnRadio"
                autoComplete="off"
              />
              <label
                className="btn btn-sm"
                htmlFor="applyForJobWorkStatusNoBtnRadio"
              >
                <i className="bi-hand-thumbs-down me-1" /> No
              </label>
            </div>
            {/* End Radio Button Group */}
            {/* Form */}
            <div className="mb-4">
              <label className="form-label" htmlFor="applyForJobNoticePeriod">
                Notice period
              </label>
              <input
                type="text"
                className="form-control"
                name="applyForJobNameNoticePeriod"
                id="applyForJobNoticePeriod"
                placeholder="2 months"
                aria-label="2 months"
              />
            </div>
            {/* End Form */}
            {/* Form */}
            <div className="mb-4">
              <label className="form-label">
                Upload your portfolio{" "}
                <i
                  className="bi-question-circle text-body ms-1"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title=""
                  data-bs-original-title="Maximum file size 10 MB."
                  aria-label="Maximum file size 10 MB."
                />
              </label>
              <div
                id="portfolioAttach"
                className="js-dropzone dz-dropzone dz-dropzone-card dz-clickable"
              >
                <div className="dz-message">
                  <span className="d-block mb-1">Browse your files</span>
                  <span className="d-block text-muted small">
                    or drag' n' drop here
                  </span>
                </div>
              </div>
            </div>
            {/* End Form */}
            {/* Form */}
            <div className="mb-4">
              <label className="form-label" htmlFor="applyForJobExpectedSalary">
                Expected salary
              </label>
              <input
                type="text"
                className="form-control"
                name="applyForJobNameExpectedSalary"
                id="applyForJobExpectedSalary"
                placeholder="$5k-$7k"
                aria-label="$5k-$7k"
              />
            </div>
            {/* End Form */}
            <div className="mb-1">
              <label className="input-label">
                Do you have experience designing for mobile?
              </label>
            </div>
            {/* Radio Button Group */}
            <div
              className="btn-group btn-group-segment mb-4"
              role="group"
              aria-label="Work status radio button group"
            >
              <input
                type="radio"
                className="btn-check"
                name="applyForJobWorkExperienceBtnRadio"
                id="applyForJobWorkExperienceYesBtnRadio"
                autoComplete="off"
              />
              <label
                className="btn btn-sm"
                htmlFor="applyForJobWorkExperienceYesBtnRadio"
              >
                <i className="bi-hand-thumbs-up me-1" /> Yes
              </label>
              <input
                type="radio"
                className="btn-check"
                name="applyForJobWorkExperienceBtnRadio"
                id="applyForJobWorkExperienceNoBtnRadio"
                autoComplete="off"
              />
              <label
                className="btn btn-sm"
                htmlFor="applyForJobWorkExperienceNoBtnRadio"
              >
                <i className="bi-hand-thumbs-down me-1" /> No
              </label>
            </div>
            {/* End Radio Button Group */}
            <div className="d-grid mt-5">
              <button type="submit" className="btn btn-primary btn-lg">
                Post Job
              </button>
            </div>
          </form>
          {/* End Form */}
        </div>
      </div>
      {/* Content */}
    </>
  );
};

export default CreateJob;
