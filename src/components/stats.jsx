import { useEffect, useRef } from "react";
import gsap from "gsap";

const stats = [
  {
    value: 58,
    suffix: "%",
    description: (
      <>
        Increase in pick
        <br />
        up point use
      </>
    ),
  },
  {
    value: 27,
    suffix: "%",
    description: (
      <>
        Increase in pick
        <br />
        up point use
      </>
    ),
  },
  {
    value: 23,
    suffix: "%",
    description: (
      <>
        Decreased in
        <br />
        customer phone calls
      </>
    ),
  },
  {
    value: 40,
    suffix: "%",
    description: (
      <>
        Decreased in
        <br />
        customer phone calls
      </>
    ),
  },
];

function StatCard({ value, suffix, description, index }) {
  const numberRef = useRef(null);

  useEffect(() => {
    const counter = {
      value: 0,
    };

    const animation = gsap.to(counter, {
      value: value,
      duration: 1.4,
      delay: 1.5 + index * 0.15,
      ease: "power2.out",

      onUpdate: () => {
        if (numberRef.current) {
          numberRef.current.textContent =
            Math.round(counter.value);
        }
      },
    });

    return () => animation.kill();
  }, [value, index]);

  return (
    <div className="stat-card">

      <h2>
        <span ref={numberRef}>0</span>
        {suffix}
      </h2>

      <p>{description}</p>

    </div>
  );
}

export default function Stats() {
  return (
    <section className="stats">

      {stats.map((stat, index) => (
        <StatCard
          key={index}
          {...stat}
          index={index}
        />
      ))}

    </section>
  );
}