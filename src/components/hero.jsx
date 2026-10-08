import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /* =========================
         INITIAL STATES
      ========================= */

      gsap.set(".navbar", {
        opacity: 0,
        y: -30,
      });

      gsap.set(".logo img", {
        opacity: 0,
        scale: 0.7,
      });

      gsap.set(".nav-links a", {
        opacity: 0,
        y: -15,
      });

      gsap.set(".hero-title > span:first-child", {
        opacity: 0,
        x: -70,
      });

      gsap.set(".highlight", {
        opacity: 0,
        scale: 0.5,
        x: 50,
        rotation: -8,
      });

      gsap.set(".corner-image", {
        opacity: 0,
        scale: 0.65,
      });

      gsap.set(".stat-card", {
        opacity: 0,
        y: 45,
      });

      /* =========================
         PAGE LOAD ANIMATION
      ========================= */

      const intro = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      // Navbar
      intro.to(".navbar", {
        opacity: 1,
        y: 0,
        duration: 0.7,
      });

      // Logo
      intro.to(
        ".logo img",
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.5)",
        },
        "-=0.35"
      );

      // Navigation links
      intro.to(
        ".nav-links a",
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          stagger: 0.1,
        },
        "-=0.35"
      );

      // WELCOME
      intro.to(
        ".hero-title > span:first-child",
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
        },
        "-=0.15"
      );

      // INFIZZ
      intro.to(
        ".highlight",
        {
          opacity: 1,
          scale: 1,
          x: 0,
          rotation: 0,
          duration: 0.9,
          ease: "back.out(1.7)",
        },
        "-=0.55"
      );

      // Corner images
      intro.to(
        ".corner-image",
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.4)",
        },
        "-=0.5"
      );

      // Stats cards
      intro.to(
        ".stat-card",
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.15,
        },
        "-=0.45"
      );

      /* =========================
         SCROLL CONTROLLED ANIMATION
      ========================= */

      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero-page",
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      // Main heading moves upward and fades
      scrollTimeline.to(
        ".hero-title",
        {
          y: -150,
          scale: 0.78,
          opacity: 0.2,
          ease: "none",
        },
        0
      );

      // INFIZZ moves independently
      scrollTimeline.to(
        ".highlight",
        {
          rotation: 12,
          x: 40,
          y: -35,
          ease: "none",
        },
        0
      );

      // Top-right visual
      scrollTimeline.to(
        ".corner-top-right",
        {
          x: -130,
          y: 120,
          rotation: -18,
          ease: "none",
        },
        0
      );

      // Bottom-left visual
      scrollTimeline.to(
        ".corner-bottom-left",
        {
          x: 130,
          y: -100,
          rotation: 18,
          ease: "none",
        },
        0
      );

      // Stats move down and fade
      scrollTimeline.to(
        ".stats",
        {
          y: 130,
          opacity: 0,
          ease: "none",
        },
        0
      );

      // Navbar moves slightly upward
      scrollTimeline.to(
        ".navbar",
        {
          y: -25,
          scale: 0.97,
          ease: "none",
        },
        0
      );

      ScrollTrigger.refresh();
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="hero-content"
    >
      {/* TOP RIGHT VISUAL */}
      <img
        className="corner-image corner-top-right"
        src="/assets/herobackdrop1.webp"
        alt=""
      />

      {/* BOTTOM LEFT VISUAL */}
      <img
        className="corner-image corner-bottom-left"
        src="/assets/herobackdrop1.webp"
        alt=""
      />

      {/* HERO HEADING */}
      <div className="hero-heading">
        <h1 className="hero-title">
          <span>WELCOME</span>
          <span className="highlight">ITZFIZZ</span>
        </h1>
      </div>
    </section>
  );
}