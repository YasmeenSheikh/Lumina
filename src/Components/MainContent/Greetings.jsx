export default function Greetings() {
  return (
    <header className="text-start mb-10">
      <h2 className="text-3xl md:text-5xl font-extrabold">
        <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Hello, Dev.
        </span>
      </h2>
      <p className="mt-3 text-2xl md:text-6xl text-gray-600 dark:text-gray-400">
        How can I help you today?
      </p>
    </header>
  );
}
