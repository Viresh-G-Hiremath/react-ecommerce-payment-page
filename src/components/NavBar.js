import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom py-4">
      <div className="container-fluid p-0">
        <div>
          <Link className="navbar-brand" to="/">
            <i className="bi bi-shop ms-5 me-3"></i>
            <span className="text-warning">E-</span>Shop
          </Link>
        </div>
        <div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link text-dark" aria-current="page" href="#">
                Men
              </a>
              <a className="nav-link text-dark mx-5" href="#">
                Women
              </a>
              <a className="nav-link text-dark" href="#">
                Kids
              </a>
            </div>
          </div>
        </div>
        <div>
          <i className="bi bi-search me-4 ms-5 ms-xs-0"></i>
          <i className="bi bi-cart3 me-4"></i>
          <i className="bi bi-person me-5"></i>
        </div>
      </div>
    </nav>
  );
}
