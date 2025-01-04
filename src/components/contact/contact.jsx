import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from './contact.module.css';

function Contact() {
  return (
    <>
      <div className={`${styles.contact} d-flex justify-content-center align-items-center`}> 
        <div className="container text-white text-center">
          <div className={`${styles.masthead} mb-4`}>
            <h1 className={`${styles.mastheadHeading} text-uppercase mb-0  mt-4`}>Contact Section</h1>

            {/* Star Divider */}
            <div className={`${styles.dividerCustom} py-3`}>
              <div className={`${styles.dividerCustomLine}`}></div>
              <div className={`${styles.dividerCustomIcon}`}>
                <i className="fas fa-star"></i>
              </div>
              <div className={`${styles.dividerCustomLine}`}></div>
            </div>

            {/* Form Section */}
            <div className="row justify-content-center">
              <div className="col-md-8">
                <form>
                  <div className="form-group mb-3">
                    <input 
                      type="text" 
                      className="form-control border-0 border-bottom py-3 "
                      placeholder="userName" 
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input 
                      type="number" 
                      className="form-control border-0 border-bottom py-3 "
                      placeholder="userAge" 
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input 
                      type="email" 
                      className="form-control border-0 border-bottom py-3 "
                      placeholder="userEmail" 
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input 
                      type="password" 
                      className="form-control border-0 border-bottom py-3 "
                      placeholder="userPassword" 
                    />
                  </div>
                  <button type="submit" className="btn">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
