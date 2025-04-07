import Navbar from '@/components/Navbar'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      
      <div className="pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
            <p className="text-xl text-gray-600 text-center mb-12">
              Have questions about buying or selling property? Get in touch with
              Ryan today.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-semibold mb-6">
                  Get in Touch
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <svg
                      className="h-6 w-6 text-primary mt-1 mr-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-gray-600">(123) 456-7890</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg
                      className="h-6 w-6 text-primary mt-1 mr-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-600">info@ryannoels.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg
                      className="h-6 w-6 text-primary mt-1 mr-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div>
                      <h3 className="font-semibold">Location</h3>
                      <p className="text-gray-600">
                        Greater Toronto Area, Ontario
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg
                      className="h-6 w-6 text-primary mt-1 mr-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <h3 className="font-semibold">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Saturday: 10:00 AM - 4:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-semibold mb-6">
                  Send us a Message
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
} 