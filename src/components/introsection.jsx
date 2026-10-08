export default function IntroSection() {

  return (

    <section
      className="
        min-h-screen
        bg-black
        px-[8vw]
        py-[15vh]
        text-white
      "
    >

      <p
        className="
          text-[10px]
          font-semibold
          tracking-[0.4em]
          text-white/50
        "
      >
        WHAT WE DO
      </p>


      <h2
        className="
          mt-10
          max-w-5xl
          text-[clamp(42px,7vw,100px)]
          font-bold
          leading-[0.92]
          tracking-[-0.06em]
        "
      >

        We create digital
        experiences that
        move people.

      </h2>


      <p
        className="
          mt-12
          max-w-md
          text-sm
          leading-7
          text-white/55
        "
      >

        Strategy, design and technology
        combined to create meaningful
        digital experiences.

      </p>

    </section>

  );
}