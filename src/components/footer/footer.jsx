import style from './footer.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
  return (
    <footer>
      <div className={style.mainFooter}>
      <div className="container">
        <div className="row text-center text-white">
        
          <div className="col-md-4 mb-4 mb-md-0">
            <h2 className="text-uppercase mb-2">LOCATION</h2>
            <p className="text-center">
              2215 John Daniel Drive<br />
              Clark, MO 65243
            </p>
          </div>

          <div className="col-md-4 mb-4 mb-md-0">
            <h2 className="text-uppercase text-center">AROUND THE WEB</h2>
            <div className={style.socialIcons}>
              <a href="#" className={`btn btn-outline-light btn-social mx-1 ${style.btnSocial}`}>
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className={`btn btn-outline-light btn-social mx-1 ${style.btnSocial}`}>
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className={`btn btn-outline-light btn-social mx-1 ${style.btnSocial}`}>
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className={`btn btn-outline-light btn-social mx-1 ${style.btnSocial}`}>
                <i className="fas fa-globe"></i>
              </a>
            </div>
          </div>

          <div className="col-md-4">
            <h2 className="text-uppercase">ABOUT FREELANCER</h2>
            <p className="mb-0 text-center">
              Freelancer is a free to use, licensed Bootstrap theme created by Route.
            </p>
          </div>
        </div>
      </div>
      </div>
      <div className={style.copyright}>
        <div className="container">
          <div className="text-center text-white">
            Copyright © Your Website 2021
          </div>
        </div>
      </div>

    </footer>
    
  );
}

export default Footer;
