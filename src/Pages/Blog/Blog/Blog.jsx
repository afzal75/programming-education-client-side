import React from 'react';

const Blog = () => {
    return (
        <div style={{width: "50%", margin: "0 auto"}}>
            <h4>What is cors?</h4>
            <p>Answere: CORS is an HTTP-header based mechanism that allows a server to indicate any origins domain, scheme, or port other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>

            <h4>Why are you using firebase?</h4>
            <p>Answere: Firebase provides tools to grow your app and business, for startups & global enterprises. Get your app up and running quickly & securely with fully managed backend infrastructure. Accelerate Development. Cross-Platform Solutions. Monitor App Performance.</p>

            <h4>How does the private route work?</h4>
            <p>Answere: The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated Logged in</p>

            <h4>What is node? How does node work?</h4>
            <p>Answere: It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
        </div>
    );
};

export default Blog;