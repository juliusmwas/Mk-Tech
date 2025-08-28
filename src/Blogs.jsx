import React from 'react';

function Blog() {
  return (
    <section id="blogs">
      <div className="blog-section">
        <div className="blog-header">
          <h2>The Future in Motion, Insights from MK <span>Tech</span>.</h2>
          <p>We don't just build technology, we talk about it, challenge it and shape what's next.</p>
        </div>

        {/* Featured Article */}
        <div className="featured-article">
          <img src="/Automation.jpg" alt="Automation" />
          <div className="featured-content">
            <h3>Why Automation is the New Competitive Edge</h3>
            <p>Discover how smart systems are reshaping industries and why it's no longer optional to automate.</p>
            <a
              href="https://technologymagazine.com/articles/automation-remaining-competitive"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-b"
            >
              Read Full Article
            </a>
          </div>
        </div>

        {/* Other Cards */}
        <div className="blog-cards">

          <div className="card-b">
            <img src="/ux designs.jpg" alt="UX Design 2030" />
            <h4>Designing for Tomorrow: UI/UX in 2030</h4>
            <p>From AR glasses to AI-driven personalization, here's how user experience will evolve.</p>
            <a
              href="https://uxplanet.org/i-asked-ai-about-the-future-of-ux-design-in-2030-the-answer-was-mindblowing-be98804ef1dd"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-b"
            >
              Read Full Article
            </a>
          </div>

          <div className="card-b">
            <img src="/Emerging tech.jpg" alt="AI Amplifies" />
            <h4>Breaking the Myth: AI Doesn't Replace, It Amplifies</h4>
            <p>Forget the fear. Learn how AI is more like a partner than a competitor.</p>
            <a
              href="https://hbr.org/2021/03/ai-should-augment-human-intelligence-not-replace-it"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-b"
            >
              Read Full Article
            </a>
          </div>

          <div className="card-b">
            <img src="/web dev.jpg" alt="Web Remains Strong" />
            <h4>The Web Isn't Dead: Why Websites still Matter</h4>
            <p>With apps dominating, here's why websites remain the foundation of the digital experience.</p>
            <a
              href="https://www.theatlantic.com/technology/archive/2025/08/ai-job-loss-human-enhancement-google/683963/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-b"
            >
              Read Full Article
            </a>
          </div>

        </div>

        <div className="blog-cta">
          <p>Knowledge isn't power — Applied Knowledge Is</p>
          <a
            href="https://medium.com/mk-tech-insights"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-dark"
          >
            Explore All Insights
          </a>
        </div>
      </div>
    </section>
  );
}

export default Blog;
