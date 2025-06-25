export default function Home() {
  return (
    <main className="p-6">
      <section className="home_section flex flex-col gap-4">
        <h1 className="text-4xl font-black">
          Discover what’s possible with 3D printing
        </h1>
        <p>
          Join our community of creators and explore a vast library of
          user-submitted models. Browse models
        </p>
        <a
          href="/about"
          className="self-start cursor-pointer hover:border-gray-400 hover:bg-gray-100 hover:text-gray-600 font-semibold py-1 px-4 border-2 
border-gray-900"
        >
          Browse All
        </a>
      </section>
      <img src="/Hero.png" className="mt-10" />
    </main>
  );
}
