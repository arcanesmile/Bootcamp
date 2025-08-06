import React, { useEffect } from "react";
import "./App.css";

const App: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(".fade-in");
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero fade-in">
        <img src="/logo.png" alt="Bootcamp Logo" className="logo" />
        <h1>7-Day Web Development Bootcamp</h1>
        <p>Learn to build & launch a website using your <strong>phone or laptop</strong>.</p>
        <p className="price">🎓 <strong>Price:</strong> ₦10,000</p>
        <a
          href="https://forms.gle/94vAHbLXSnJDDVDt9"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Register Now
        </a>
      </section>
      {/* about */}
      <section className="section fade-in">
        <h2>About Bithub</h2>
        <p>In a world driven by technology, innovation and problem-solving skills are essential for growth. Bithub, a vibrant community of bright-minded developers, is on a mission to tackle challenges boldly through creativity and critical thinking. Recognizing the need for digital skills, Bithub has taken a bold step to equip students in MOAM, Benue State, with in-demand tech skills—specifically web development—bringing the opportunity right to their doorstep at an affordable cost.
        </p> 
        <h3>Why Web Development?</h3>
        <p>Web development is a foundational tech skill with vast opportunities. By mastering HTML, CSS, JavaScript, and more, students can:  
- Build websites and web applications  
- Freelance or secure remote jobs  
- Contribute to local and global tech solutions  
- Kickstart a career in tech without needing a degree</p>

        <h3>A Step Toward a Brighter Future</h3>
        <p>Bithub’s initiative is more than just a training program—it’s a movement to ignite innovation and foster self-reliance among Benue’s youth. By equipping students with web development skills, Bithub is planting seeds for a future where young Nigerians can compete globally, solve local problems, and drive economic growth through technology.</p>

          <h3>Join the Movement!</h3>
           <p>If you’re a student in MOAM, Benue State, or know someone who could benefit from this opportunity, don’t miss out! Follow Bithub for updates on upcoming training sessions and be part of the next generation of tech innovators.
           </p>
      </section>
      {/* What You'll Learn */}
      <section className="section fade-in">
        <h2>What You'll Learn</h2>
        <ul className="list">
          <li><strong>Day 1:</strong> HTML Basics</li>
          <li><strong>Day 2:</strong> Styling with CSS</li>
          <li><strong>Day 3:</strong> JavaScript Fundamentals</li>
          <li><strong>Day 4:</strong> Forms and Interactivity</li>
          <li><strong>Day 5:</strong> Responsive Design</li>
          <li><strong>Day 6:</strong> Hosting with GitHub</li>
          <li><strong>Day 7:</strong> Build & Launch Your Website</li>
        </ul>
      </section>

      {/* Tools Section */}
      <section className="section fade-in">
        <h2>Tools You'll Use</h2>
        <ul className="list">
          <li>📱 Acode (Android)</li>
          <li>💻 Termux (Android)</li>
          <li>🖥️ VS Code (Laptop)</li>
          <li>🌐 GitHub</li>
        </ul>

        <div className="download-links">
          <h3>Download the Tools</h3>
          <a href="https://play.google.com/store/apps/details?id=com.foxdebug.acodefree" target="_blank">📥 Acode</a><br />
          <a href="https://f-droid.org/en/packages/com.termux/" target="_blank">📥 Termux</a><br />
          <a href="https://code.visualstudio.com/download" target="_blank">📥 VS Code</a>
        </div>
      </section>

      {/* Why Join */}
      <section className="section fade-in">
        <h2>Why Join?</h2>
        <p>✅ Learn using a phone or laptop( No limitations)<br />
           ✅ Practical hands-on lessons<br />
           ✅ Live project guidance<br />
           ✅ Certificate after completion<br />
           ✅ Affordable at just ₦10,000</p>
      </section>

      {/* Instructor Profile */}
      <section className="section profile fade-in">
        <h2>Meet Your Instructor</h2>
        <div className="profile-box">
          <img src="/profile.jpg" alt="Instructor" className="profile-pic" />
          <p>
            Hello! I’m <strong>oryisa Bem Benjamin</strong>, a passionate software developer and the CEO of Bithub, a community-driven initiative empowering the next generation of tech innovators. With expertise in full-stack development, I specialize in building scalable web and mobile applications using clean, efficient code. My mission? To bridge the gap between user experience and technical performance, delivering solutions that drive real-world impact.  

As a developer, I don’t just build software—I build opportunities. Over the years, I’ve helped numerous beginners kickstart their web development journey, whether they’re using:  
- Acode (for mobile coding)  
- Termux (for Linux-based development on Android)  
- VS Code (for a full-fledged IDE experience)  

No matter your starting point, I provide step-by-step guidance—from writing your first line of HTML to deploying a live website.  
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="section fade-in">
        <h2>Need Help?</h2>
        <p>Message us on WhatsApp if you have questions.</p>
        <a
          href="https://wa.me/2347036750501"
          className="btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chat on WhatsApp
        </a>
        <p>Follow us on Instagram to stay updated</p>
        <a
          href="https://wa.me/1"
          className="btn"
          target="_blank"
          rel="noopener noreferrer"
        >follow us on Instagram</a>
      </section>

      {/* Footer */}
      <footer className="footer fade-in">
        <a
          href="https://forms.gle/94vAHbLXSnJDDVDt9"
          target="_blank"
          className="btn"
          rel="noopener noreferrer"
        >
          Register for ₦10,000
        </a>
        <p>Made by Bit Hub | &copy; 2025 Web Bootcamp</p>
      </footer>
    </div>
  );
};

export default App;