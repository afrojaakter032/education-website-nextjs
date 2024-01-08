import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link'

export default function Home() {
  return (
    <section>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">EduHome</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{'--bs-scroll-height': '100px'}}>
              <li className="nav-item">
                <Link className="nav-link" href="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/about">About</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" href="/course">Courses</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/event">Event</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/blog">Blog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/contact">Contact</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Login/Register</button>
            </form>
          </div>
        </div>
      </nav>
    </section>
  )
}
