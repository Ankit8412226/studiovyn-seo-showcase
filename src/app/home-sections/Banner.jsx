export default function Banner() {
  return (
    <section className="py-10 sm:py-12 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <h2 className="text-white text-2xl sm:text-3xl font-bold font-secondary">Build faster. Rank higher. Convert more.</h2>
          <a href="/contact" className="btn-secondary bg-white text-blue-700 border-white hover:text-white hover:bg-transparent">Request Project</a>
        </div>
      </div>
    </section>
  );
}


