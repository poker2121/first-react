import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function NotFound() {
  return (
<div className='vh-100 d-flex flex-column justify-content-center align-items-center bg-light'>
  <h1 className="display-4 text-danger">404</h1>
  <h3 className="text-secondary">This page is not found</h3>
</div>

  );
}
