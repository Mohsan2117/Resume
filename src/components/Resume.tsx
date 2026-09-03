import { Icon } from "@/components/icons";
import { GitHubBadge } from "@/components/GitHubBadge";
import { LinkedInBadge } from "@/components/LinkedInBadge";

import * as Site_Data from "../data/resume";

function SkillDots({ level }: { level: number }) {
  return (
    <div className="skill-dots">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`dot ${i < level ? "filled expert" : ""}`}
        />
      ))}
    </div>
  );
}

export function Resume() {
  return (
    <div className="desktop-view">
      <div className="mobile-resume-bar d-xl-none">
        <span className="mobile-resume-bar__title">Mohsan Iqbal Resume</span>
        <a
          href={Site_Data.profile.pdf}
          download
          className="mobile-resume-bar__download"
        >
          <Icon name="download" />
          Download
        </a>
      </div>

      <div
        className="position-fixed top-0 end-0 m-3 p-1 mt-4 bg-transparent d-none d-xl-block"
        style={{ zIndex: 1000 }}
      >
        <LinkedInBadge />
      </div>

      <div
        className="position-fixed bottom-0 end-0 m-3 p-1 bg-transparent d-none d-xl-block"
        style={{ zIndex: 1000 }}
      >
        <GitHubBadge />
      </div>

      <article className="resume-wrapper text-center position-relative">
        <div
          id="resume-download"
          className="resume-wrapper-inner mx-auto text-start bg-white shadow-lg"
        >
          <header className="resume-header position-relative pt-4 pt-md-0">
            <a
              href={Site_Data.profile.pdf}
              download
              className="resume-header-download"
            >
              <Icon name="download" />
              Download
            </a>
            <div className="row g-0 g-md-3 align-items-center align-items-md-start">
              <div className="hidden md:flex col-12 col-md-auto resume-picture-holder text-center text-md-start">
                {/* eslint-disable-next-line @next/next/no-img-element */}

                <img
                  className="picture"
                  src={Site_Data.profile.image}
                  alt={Site_Data.profile.name}
                />
              </div>
              <div className="col-12 col-md">
                <div className="row pt-2 pt-md-3 align-items-start justify-content-between flex-wrap mx-2 my-1 gx-3">
                  <div className="primary-info col-12 col-lg-auto">
                    <h1
                      className="name mt-0 mb-1 text-white text-uppercase"
                      style={{ fontWeight: 700, letterSpacing: "1px" }}
                    >
                      {Site_Data.profile.name}
                    </h1>
                    <div className="mb-3 d-flex align-items-center flex-wrap gap-2">
                      <span className="opacity-90">
                        {Site_Data.profile.title}
                        {/* <span style={{ fontSize: "0.85em", fontWeight: 700 }}>
                          (remote only)
                        </span> */}
                      </span>
                    </div>
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <a className="text-link" href={`mailto:${Site_Data.profile.email}`}>
                          <Icon name="envelope" className="fa-fw me-2" />
                          {Site_Data.profile.email}
                        </a>
                      </li>
                      <li className="mb-2">
                        <a
                          className="text-link"
                          target="_blank"
                          rel="noopener noreferrer"
                          href={Site_Data.profile.locationUrl}
                        >
                          <Icon name="map-marker" className="fa-fw me-2" />
                          {Site_Data.profile.location}
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-link"
                          target="_blank"
                          rel="noopener noreferrer"
                          href={Site_Data.profile.whatsappUrl}
                        >
                          <Icon name="mobile" className="fa-fw me-2" />
                          {Site_Data.profile.phone}
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="secondary-info social-section col-12 col-lg-auto mt-2 mt-lg-3">
                    <ul className="resume-social list-unstyled mb-0">
                      {Site_Data.profile.social.map((link) => (
                        <li key={link.href} className="mb-3">
                          <a
                            className="text-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={link.href}
                          >
                            <span className="fa-container text-center me-2">
                              <Icon name={link.icon} brand />
                            </span>
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div className="resume-body p-3 p-sm-4 p-md-5">
            <section className="resume-section summary-section mb-5">
              <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                Career Summary
              </h2>
              <div className="resume-section-content">{Site_Data.careerSummary}</div>
            </section>

            <div className="row">
              <div className="col-lg-9">
                <section className="resume-section experience-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                    Work Experience
                  </h2>
                  <div className="resume-section-content">
                    {Site_Data.workExperience.map((job, index) => (
                      <div
                        key={`${job.company}-${job.period}`}
                        className={
                          job.timeline === "line"
                            ? "resume-timeline position-relative"
                            : "resume-timeline-no-line position-relative"
                        }
                      >
                        <article
                          className={`resume-timeline-item position-relative ${index === Site_Data.workExperience.length - 1
                              ? "pb-5"
                              : job.timeline === "line"
                                ? "pb-3"
                                : "pb-5"
                            }`}
                        >
                          <div className="resume-timeline-item-header mb-2">
                            <div className="d-flex flex-column flex-md-row flex-wrap gap-1 gap-md-2">
                              <div className="d-flex flex-wrap align-items-center" style={{ gap: "8px" }}>
                                <h3 className="resume-position-title font-weight-bold mb-1">
                                  {job.title}
                                </h3>
                                {job.remote && <span>{job.remote}</span>}
                              </div>
                              <div className="resume-company-name ms-md-auto">
                                {job.companyUrl ? (
                                  <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={job.companyUrl}
                                    className="project-link"
                                  >
                                    {job.company}
                                  </a>
                                ) : (
                                  job.company
                                )}
                              </div>
                            </div>
                            <div className="resume-position-time">
                              {job.period}
                            </div>
                          </div>
                          <div className="resume-timeline-item-desc">
                            <p>{job.description}</p>
                            {job.achievements && (
                              <>
                                <h4 className="resume-timeline-item-desc-heading font-weight-bold">
                                  Achievements:
                                </h4>
                                <ul>
                                  {job.achievements.map((item) => (
                                    <li key={item}>{item}</li>
                                  ))}
                                </ul>
                              </>
                            )}
                            {job.technologies && (
                              <>
                                <h4 className="tech-heading font-weight-bold">
                                  <Icon name="tools" />{" "}
                                  {job.technologiesHeading ??
                                    "Technologies used:"}
                                </h4>
                                <div className="tech-chips-list">
                                  {job.technologies.map((tech) => (
                                    <span key={tech} className="tech-chip">
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </>
                            )}
                          </div>
                        </article>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="resume-section summary-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                    Web Development Focus
                  </h2>
                  <div className="resume-section-content">
                    <div className="tech-chips-list">
                      {Site_Data.webFocus.map((item) => (
                        <span key={item.label} className="tech-chip">
                          <Icon name={item.icon} className="fas me-2 opacity-75" />
                          {item.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </section>

              </div>

              <div className="col-lg-3">
                <section className="resume-section projects-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                    Projects
                  </h2>
                  <div className="resume-section-content">
                    <h3 className="resume-position-title font-weight-bold mb-3">
                      WEB & AI PROJECTS
                    </h3>
                    <div className="project-list">
                      {Site_Data.projects.map((project) => (
                        <div key={project.href} className="project-item">
                          <a
                            className="project-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={project.href}
                          >
                            <div className="project-icon-box">
                              <Icon name={project.icon} className="text-primary" />
                            </div>
                            <div className="flex-grow-1">
                              <div className="project-name">
                                {project.name}{" "}
                                <span className="project-tag">
                                  {project.tag}
                                </span>
                              </div>
                              <div className="project-tagline">
                                {project.tagline}
                              </div>
                            </div>
                            <Icon
                              name="chevron-right"
                              className="fas fa-chevron-right project-arrow"
                            />
                          </a>
                        </div>
                      ))}
                    </div>
                    <div className="agentic-description mt-3 mb-0 p-2">
                      <p className="mb-0" style={{ fontSize: "0.8rem", lineHeight: 1.4 }}>
                        Built using <strong>agentic AI</strong> with{" "}
                        <strong>modern developer tools</strong>:
                        <br />- <strong>Cursor AI</strong>
                        <br />- <strong>GitHub Copilot</strong>
                      </p>
                    </div>
                  </div>
                </section>

                <section className="resume-section skills-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                    Tech Skills
                  </h2>
                  <div className="resume-section-content">
                    {Site_Data.skillGroups.map((group, gi) => (
                      <div
                        key={group.title}
                        className={`skill-group ${gi === Site_Data.skillGroups.length - 1 ? "mb-0" : ""}`}
                      >
                        <div className="skill-group-title">
                          <Icon name={group.icon} />
                          {group.title}
                        </div>
                        {group.skills.map((skill) => (
                          <div key={skill.label} className="skill-row">
                            <span className="skill-label">{skill.label}</span>
                            <SkillDots level={skill.level} />
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </section>

                <section className="resume-section education-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                    <Icon name="graduation-cap" className="me-2" />
                    Education
                  </h2>
                  <div className="resume-section-content">
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <div className="resume-degree font-weight-bold">
                          {Site_Data.education.degree}
                        </div>
                        <div className="resume-degree-org">{Site_Data.education.org}</div>
                        <div className="resume-degree-time text-muted">
                          {Site_Data.education.time}
                        </div>
                      </li>
                    </ul>
                  </div>
                </section>

                <section className="resume-section language-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                    <Icon name="language" className="me-2" />
                    Language
                  </h2>
                  <div className="resume-section-content">
                    <div className="tech-chips-list">
                      {Site_Data.languages.map((lang) => (
                        <div key={lang.name} className="tech-chip">
                          {lang.name}{" "}
                          <span
                            className="ms-2 opacity-75 fw-normal"
                            style={{ fontSize: "0.65rem" }}
                          >
                            ({lang.level})
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <section className="resume-section interests-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                    <Icon name="heart" className="me-2" />
                    Interests
                  </h2>
                  <div className="resume-section-content">
                    <div className="tech-chips-list">
                      {Site_Data.interests.map((item) => (
                        <span key={item.label} className="tech-chip">
                          <Icon
                            name={item.icon}
                            className="fas me-2 opacity-75"
                          />
                          {item.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </article>

      <div className="ats-only">{Site_Data.atsKeywords}</div>
    </div>
  );
}
