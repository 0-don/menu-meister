export default function Home() {
  return (
    <main className="flex h-[90vh] items-center justify-center space-x-5">
      <div>
        {/* Gradient Heading */}
        <h1 className="bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text pb-3 text-5xl font-bold text-transparent dark:from-yellow-600 dark:to-orange-800">
          Meal Manager
        </h1>
        {/* Description Text */}
        <p className=" text-lg text-gray-400 dark:text-gray-300">
          Your ultimate companion for managing daily meals efficiently.
        </p>
      </div>
    </main>
  );
}
