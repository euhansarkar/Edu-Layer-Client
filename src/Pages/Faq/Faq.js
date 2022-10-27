import React from "react";

const Faq = () => {
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
            How it works
          </p>
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            Assignment Questions?
          </h2>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                What is "Cors"?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  Cross-Origin Resource Sharing (CORS) is an HTTP-header based
                  mechanism that allows a server to indicate any origins
                  (domain, scheme, or port) other than its own from which a
                  browser should permit loading resources. CORS also relies on a
                  mechanism by which browsers make a "preflight" request to the
                  server hosting the cross-origin resource, in order to check
                  that the server will permit the actual request. In that
                  preflight, the browser sends headers that indicate the HTTP
                  method and headers that will be used in the actual request.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                Why are you using "Firebase"? What other option do you have
                impliment authentication?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  The Firebase Realtime Database lets you build rich,
                  collaborative applications by allowing secure access to the
                  database directly from client-side code. Data is persisted
                  locally, and even while offline, realtime events continue to
                  fire, giving the end user a responsive experience.Usually,
                  authentication by a server entails the use of a user name and
                  password. Other ways to authenticate can be through cards,
                  retina scans, voice recognition, and fingerprints.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                How does the private router work?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  The private route component is similar to the public route,
                  the only change is that redirect URL and authenticate
                  condition. If the user is not authenticated he will be
                  redirected to the login page and the user can only access the
                  authenticated routes If he is authenticated (Logged in).
                </p>
                <p>
                  The constraints for Public and Private routes are that Public
                  routes should not be accessed after login and Private routes
                  should not be accessible before login. In this article, we can
                  see. How to create public and private routes using
                  react-router for your react apps. Let's start
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                What is "NODE"? How does "NODE" work?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  It is a used as backend service where javascript works on the
                  server-side of the application. This way javascript is used on
                  both frontend and backend. Node. js runs on chrome v8 engine
                  which converts javascript code into machine code, it is highly
                  scalable, lightweight, fast, and data-intensive.
                </p>
                <p>
                  It is a used as backend service where javascript works on the
                  server-side of the application. This way javascript is used on
                  both frontend and backend. Node. js runs on chrome v8 engine
                  which converts javascript code into machine code, it is highly
                  scalable, lightweight, fast, and data-intensive.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
