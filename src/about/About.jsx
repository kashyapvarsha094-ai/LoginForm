import React from 'react'

export default function About() {
  return (
    <div>
<div className="container mt-5">
        <div className="card shadow">
            <div className="card-body">
                <h1 className="text-center text-primary">About Us</h1>
                <hr/>

                <p className="lead text-center">
                    Welcome to our website! We are passionate about learning,
                    technology, and creating amazing web applications.
                </p>

                <h3>Who We Are</h3>
                <p>
                    We are a team of developers dedicated to building modern,
                    responsive, and user-friendly websites using HTML, CSS,
                    Bootstrap, JavaScript, and React.
                </p>

                <h3>Our Mission</h3>
                <p>
                    Our mission is to provide quality web solutions and help
                    beginners learn web development through simple examples.
                </p>

                <div className="row text-center mt-4">
                    <div className="col-md-4">
                        <div className="card border-primary">
                            <div className="card-body">
                                <h4>100+</h4>
                                <p>Projects</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card border-success">
                            <div className="card-body">
                                <h4>50+</h4>
                                <p>Happy Clients</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card border-danger">
                            <div className="card-body">
                                <h4>5+</h4>
                                <p>Years Experience</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-4">
                    <button className="btn btn-primary">Learn More</button>
                </div>
            </div>
        </div>


</div>


    </div>
  )
}
