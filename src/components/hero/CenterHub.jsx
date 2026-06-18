import { motion } from "framer-motion";

/**
 * Central holographic platform with detailed device screens and curved subtitle.
 */
export default function CenterHub() {
  return (
    <div className="center-system scene-layer" data-depth="1.8">
      {/* Holographic platform rings */}
      <div className="hologram-platform">
        <div className="platform-ring platform-ring-one" />
        <div className="platform-ring platform-ring-two" />
        <div className="platform-ring platform-ring-three" />
        <div className="energy-core" />
        <div className="platform-glow" />
      </div>

      {/* Title overlay (Watermark behind devices) */}
      <div className="hub-title-wrap">
        <motion.h2
          className="hub-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Developer
        </motion.h2>
      </div>

      {/* Curved subtitle orbiting the central hub */}
      <div className="hub-curved-text-wrap">
        <svg viewBox="0 0 400 200" className="hub-curved-text-svg">
          <path
            id="textCurve"
            d="M 25,115 Q 200,205 375,115"
            fill="none"
          />
          <text className="curved-text-content">
            <textPath href="#textCurve" startOffset="50%" textAnchor="middle">
              Building Scalable Applications, Intelligent Systems, and Modern Digital Experiences
            </textPath>
          </text>
        </svg>
      </div>

      {/* Monitor with Stand */}
      <motion.div
        className="floating-device monitor-device"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="monitor-screen">
          <div className="editor-sidebar">
            <div className="sidebar-header">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
            </div>
            <div className="sidebar-files">
              <div className="file active"><span className="tag-react">⚛</span> App.jsx</div>
              <div className="file"><span className="tag-css">#</span> index.css</div>
              <div className="file"><span className="tag-js">⚡</span> config.js</div>
            </div>
          </div>
          <div className="editor-main">
            <div className="code-lines">
              <p className="line"><span className="kw">import</span> React <span className="kw">from</span> <span className="str">"react"</span>;</p>
              <p className="line"><span className="kw">const</span> App = () =&gt; &#123;</p>
              <p className="line">&nbsp;&nbsp;<span className="kw">return</span> (</p>
              <p className="line">&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="tag">div</span>&gt;</p>
              <p className="line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="tag">Portfolio</span> /&gt;</p>
              <p className="line">&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="tag">div</span>&gt;</p>
              <p className="line">&nbsp;&nbsp;);</p>
              <p className="line">&#125;;</p>
            </div>
          </div>
        </div>
        <div className="device-reflection" />
        {/* Monitor Physical Stand */}
        <div className="monitor-stand">
          <div className="stand-column" />
          <div className="stand-base" />
        </div>
      </motion.div>

      {/* Phone Mockup */}
      <motion.div
        className="floating-device phone-device"
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <div className="phone-screen">
          <div className="phone-notch" />
          <div className="phone-status-bar">
            <span>09:41</span>
            <div className="battery-icon" />
          </div>
          <div className="phone-app-header">
            <div className="phone-app-title">MERN Stack</div>
            <div className="phone-avatar" />
          </div>
          <div className="phone-app-content">
            <div className="phone-card">
              <div className="phone-bar" style={{ width: "85%", background: "#a855f7" }} />
              <div className="phone-bar" style={{ width: "55%", background: "#cbd5e1" }} />
            </div>
            <div className="phone-card">
              <div className="phone-bar" style={{ width: "65%", background: "#22d3ee" }} />
              <div className="phone-bar" style={{ width: "45%", background: "#cbd5e1" }} />
            </div>
            <div className="phone-card">
              <div className="phone-bar" style={{ width: "90%", background: "#34d399" }} />
              <div className="phone-bar" style={{ width: "30%", background: "#cbd5e1" }} />
            </div>
          </div>
        </div>
        <div className="device-reflection" />
      </motion.div>

      {/* 3D Laptop Mockup */}
      <motion.div
        className="floating-device laptop-device"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="laptop-screen-wrap">
          <div className="laptop-display">
            <div className="laptop-editor">
              <div className="laptop-code-line" style={{ width: "70%", background: "#e11d48" }} />
              <div className="laptop-code-line" style={{ width: "85%", background: "#2563eb" }} />
              <div className="laptop-code-line" style={{ width: "45%", background: "#d97706" }} />
              <div className="laptop-code-line" style={{ width: "60%", background: "#059669" }} />
            </div>
            <div className="laptop-preview">
              <svg viewBox="0 0 36 36" className="circular-chart">
                <path
                  className="circle-bg"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#1e293b"
                  strokeWidth="2.5"
                />
                <path
                  className="circle"
                  strokeDasharray="75, 100"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#a855f7"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
              <div className="laptop-percent">75%</div>
            </div>
            <div className="device-reflection" />
          </div>
          <div className="laptop-keyboard">
            <div className="keyboard-keys" />
            <div className="keyboard-trackpad" />
          </div>
        </div>
      </motion.div>

      {/* Hub CTA buttons */}
      <div className="hub-buttons">
        <motion.a
          href="#projects"
          className="hub-btn hub-btn-primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          View Projects
        </motion.a>
        <motion.a
          href="#contact"
          className="hub-btn hub-btn-secondary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Contact Me
        </motion.a>
      </div>
    </div>
  );
}
