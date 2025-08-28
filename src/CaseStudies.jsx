
function CaseStudies(){
    return(
        <section id="casestudies">
        <div className="CaseStudies">
            <h3 className="case-h3">From Vision to Impact: Real Stories, Real Results</h3>
            <p className="case-p">Here's how we have helped Businesses move into the future</p>

            <div className="case-cards">
                <div className="case-card">
                    <h3>E-commerce Beyond Borders</h3>
                    <h4>Challenge</h4>
                    <p>A growing e-commerce start-up was loosing 40% of visitors during checkout. Their site was slow, cluncky on mobile and lacked trust-building design.</p>
                    <h4>Our Approach</h4>
                    <p>We rebuilt their store-front with a react + next.js frontend, introduced AI-powered product recommendations and intergrated one-click payments for a frictionless checkout. We designed with mobile-first futuristic visuals that built customer confidence.</p>
                    <h4>Outcome</h4>
                        <ol>
                            <li>Checkout time reduced by 60%.</li>
                            <li>Mobile conversions increased by 35%.</li>
                            <li>Expanded into 3 new markets within 6 months.</li>
                        </ol>
                    <h4 className="result">Result</h4> 
                    <p className="result-p">Customers stayed longer, bought more and trusted te brand globally.</p>   
                </div>

                <div className="case-card">
                    <h3>Automation That Saves Time</h3>
                    <h4>Challenge</h4>
                    <p>A logistics company was drowning in repetitive manual work Updating spreadsheets, tracking shipments and handling customer queries. Over 20+ hours weekly were lost on tasks that didn't scale.</p>
                    <h4>Our Approach</h4>
                    <p>We designed a cloud-based dashboard with real-time shipment tracking, IoT-based fleet monitoring and automated customer alerts. No more manual updates, no more missd deliveries.</p>
                    <h4>Outcome</h4>
                        <ol>
                            <li>Manual work reduced by 60%.</li>
                            <li>Saved over 1000 hours annually.</li>
                            <li>Customers gained live transparency into shipments.</li>
                        </ol>
                    <h4>Result</h4> 
                    <p>The company shifted focus from firefight to growing scaling their operations seamlessly.</p>   
                </div>

                <div className="case-card">
                    <h3>Reinventing Digital Presence.</h3>
                    <h4>Challenge</h4>
                    <p>A consultant firm had an outdated website that felt more like a bronchure than a brand.They weren't generting quality leads and their global presence was invisible.</p>
                    <h4>Our Approach</h4>
                    <p>We redesigned their platform with futuristic, minimal UI, built-in multilingual support and seo-first Architecture. We integrated interactive animations and storytelling elements that made the brand unforgettable.</p>
                    <h4>Outcome</h4>
                        <ol>
                            <li>Web traffic up 200% in 3 months.</li>
                            <li>Inquiries from 5+ new countries.</li>
                            <li>Established authority in their industry niche.</li>
                        </ol>
                    <h4>Result</h4> 
                    <p>Their site became a growth engine, not just a digital card.</p>   
                </div>

            </div>

            <div className="closing-cta">
                <p>Your brand's success story could be next....</p>
                <a href="#contact">Let's create a case study thet redefines what's possible for you.</a>
            </div>
        </div>
        </section>
    );
}

export default CaseStudies;