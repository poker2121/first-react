import { useRef } from "react";
import styles from "./style.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import imglogo from "../../assets/avataaars.svg";

function Home() {
  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    divRef.current.style.setProperty("--mouse-x", `${x}px`);
    divRef.current.style.setProperty("--mouse-y", `${y}px`);
    divRef.current.style.setProperty("--spotlight-color", "rgba(44, 62, 89, 0.5)");
  };

  return (
    <div
      className={styles.home}
      ref={divRef}
      onMouseMove={handleMouseMove}
      style={{ position: "relative" }} // تأكد أن العنصر قابل لتحديد موقع الفأرة داخله
    >
      <div
        className={`${styles.heroSection} container-fluid d-flex flex-column justify-content-center align-items-center text-white text-center`}
      >
        <div className={`${styles.masthead} mb-1`}>
          <img
            src={imglogo}
            alt="Portfolio avatar"
            className={`${styles.mastheadAvatar} mb-3 py-3`}
          />
          <h1 className={`${styles.mastheadHeading} text-uppercase mb-0`}>
            START FRAMEWORK
          </h1>

          {/* Star Divider */}
          <div className={`${styles.dividerCustom} divider-light py-3`}>
            <div className={styles.dividerCustomLine}></div>
            <div className={styles.dividerCustomIcon}>
              <i className="fas fa-star"></i>
            </div>
            <div className={styles.dividerCustomLine}></div>
          </div>

          {/* Subtitle */}
          <p className={`${styles.mastheadSubheading} mb-0 text-center`}>
            Graphic Artist - Web Designer - Illustrator
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
