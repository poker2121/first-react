import { useState } from 'react';
import styles from './portifolio.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import img1 from "../../assets/poert1.png";
import img2 from "../../assets/port2.png";
import img3 from "../../assets/port3.png";

export default function Portifolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div className={`${styles.Portifolio} d-flex justify-content-center align-items-center pt-5 pb-3`}>
        <div className="container text-white text-center">
          <div className={`${styles.masthead} mb-4`}>
            <h1 className={`${styles.mastheadHeading} text-uppercase mb-0 mt-4`}>portfolio component</h1>

            {/* Star Divider */}
            <div className={`${styles.dividerCustom} py-3`}>
              <div className={styles.dividerCustomLine}></div>
              <div className={styles.dividerCustomIcon}>
                <i className="fas fa-star"></i>
              </div>
              <div className={styles.dividerCustomLine}></div>
            </div>
            <div className="row justify-content-center">
              {[img1, img2, img3, img1, img2, img3].map((img, index) => (
                <div className="col-lg-4 col-md-6 mb-4" key={index}>
                  <div
                    className={styles.portfolioItem}
                    onClick={() => handleImageClick(img)}
                  >
                    <img
                      src={img}
                      alt={`Portfolio ${index + 1}`}
                      className={`${styles.portfolioImage} img-fluid rounded`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className={`modal d-block ${styles.modal}`} tabIndex="-1" onClick={handleCloseModal}>
          <div className="modal-dialog modal-dialog-centered modal-lg" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-body p-0">
                <img src={selectedImage} alt="Selected" className="img-fluid w-100" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
