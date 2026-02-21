export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="w-full">
      <div className="w-full px-[clamp(1rem,3vw,2.5rem)] py-16 grid gap-5">
        <h2 id="about-heading">About</h2>

        <p>I'm a front-end web developer based in London.</p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Reprehenderit ratione quod dignissimos dolorum consequatur iste at
          mollitia et eveniet ducimus, atque, tenetur ipsum deleniti magni qui
          laboriosam. Explicabo, alias. Delectus?
        </p>

        <h3>Core stack</h3>
        <ul className="list-disc pl-5 grid gap-2">
          <li>React / Next.js</li>
          <li>Svelte</li>
          <li>TypeScript</li>
          <li>CSS / Tailwind</li>
          <li>REST APIs</li>
        </ul>
      </div>
    </section>
  );
}
