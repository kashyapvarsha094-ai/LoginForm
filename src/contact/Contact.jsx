import React from 'react'

export default function Contact() {
  return (
    <div>
<div className="container mt-5">
        <h1 className="text-center text-primary mb-4">Contact Us</h1>

        <div className="row">
        
            <div className="col-md-6">
                <div className="card shadow">
                    <div className="card-body">
                        <h3 className="mb-3">Send a Message</h3>

                        <form>
                            <div className="mb-3">
                                <label className="form-label">Full Name</label>
                                <input type="text" className="form-control" placeholder="Enter your name"/>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Email Address</label>
                                <input type="email" className="form-control" placeholder="Enter your email"/>
                            </div>
 
                            <div className="mb-3">
                                <label className="form-label">Subject</label>
                                <input type="text" className="form-control" placeholder="Enter subject"/>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Message</label>
                                <textarea className="form-control" rows="4" placeholder="Write your message"></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        
            <div className="col-md-6">
                <div className="card shadow">
                    <div className="card-body">
                        <h3>Contact Information</h3>
                        <p><strong>📍 Address:</strong> Moradabad, Uttar Pradesh</p>
                        <p><strong>📞 Phone:</strong> +91 98765 43210</p>
                        <p><strong>✉ Email:</strong> info@example.com</p>
                        <p><strong>🕒 Office Hours:</strong> Mon - Fri, 9:00 AM - 6:00 PM</p>
                    </div>
                </div>
            </div>
        </div>
    </div>





    </div>
  )
}
