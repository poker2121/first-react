import style from './about.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

function About() {
  return (
    <div className={`${style.about} d-flex justify-content-center align-items-center`}>
      <div className="container text-white text-center">
        <div className={`${style.masthead} mb-4`}>
          <h1 className={`${style.mastheadHeading} text-uppercase mb-0`}>about component</h1>

          {/* Star Divider */}
          <div className={`${style.dividerCustom} divider-light py-3`}>
            <div className={style.dividerCustomLine}></div>
            <div className={style.dividerCustomIcon}>
              <i className="fas fa-star"></i>
            </div>
            <div className={style.dividerCustomLine}></div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
            <div className="col-md-6">
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
