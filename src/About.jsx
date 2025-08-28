function About() {
  return (
    <section id="about">
      <div className="about">
        <h1 className="about-h1">
          About <span>Us</span>
        </h1>

        <p className="about-p">
          MK <span>Tech</span> is a forward-thinking digital innovation brand
          driven by creativity, data and technology. We specialize in designing
          and developing solutions that merge functionality with futuristic
          design, empowering businesses and individuals to stay ahead in a
          rapidly evolving world.
        </p>

        <h3 className="about-h3">What We Do</h3>
        <p className="about-p">
          We deliver end-to-end digital experiences across multiple domains,
          including:
        </p>
        {/* ✅ List is now outside <p> */}
        <ul className="about-list">
          <li>Web & App Development – Scalable, modern and user-focused.</li>
          <li>Automation & Smart Systems – Streamlining workflows for efficiency.</li>
          <li>UI/UX Design – Interfaces that inspire and engage.</li>
          <li>Emerging Tech – AI-driven, cloud-ready and future-proof solutions.</li>
        </ul>

        <h3 className="about-h3">Why We Exist</h3>
        <p className="about-p">
          Technology is evolving at the speed of thought, and many businesses
          struggle to keep up. We exist to bridge that gap — simplifying complex
          solutions, creating impactful systems, and pushing boundaries to make
          futuristic tech accessible today.
        </p>

        <p className="about-cta">
          We don’t just build technology — we craft the future of innovation. <br />
          Are you ready to be part of it?
        </p>

        <button className="cta-btn">
          <a href="#contact">Let&apos;s collaborate</a>
        </button>
      </div>
    </section>
  );
}

export default About;
