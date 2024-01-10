const { default: Link } = require("next/link")
import 'bootstrap/dist/css/bootstrap.css'




const Navbar = () => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="d-flex justify-content-center align-items-center pt-3">
                        <div className="col">
                            <h5>EduHome</h5>
                        </div>
                        <div className="col d-flex gap-3 ">
                            <Link className="text-decoration-none" href="/">Home</Link>
                            <Link className="text-decoration-none" href="/about">About</Link>
                            <Link className="text-decoration-none" href="/course">Course</Link>
                            <Link className="text-decoration-none" href="/event">Event</Link>
                            <Link className="text-decoration-none" href="/blog">Blog</Link>
                            <Link className="text-decoration-none" href="/contact">Contact</Link>
                        </div>
                        <div className="d-flex gap-3">
                            <button className="btn"></button>
                            <button className="btn">Login/Logout</button>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    )

}

export default Navbar;