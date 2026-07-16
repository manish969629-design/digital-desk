export default function Testimonials() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-black">
          What Customers Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <div className="rounded-3xl bg-slate-50 p-8 shadow">
            ⭐⭐⭐⭐⭐
            <p className="mt-4">
              Fast PAN Card service.
            </p>
            <h4 className="mt-4 font-bold">
              Rahul
            </h4>
          </div>

          <div className="rounded-3xl bg-slate-50 p-8 shadow">
            ⭐⭐⭐⭐⭐
            <p className="mt-4">
              Very helpful support.
            </p>
            <h4 className="mt-4 font-bold">
              Priya
            </h4>
          </div>

          <div className="rounded-3xl bg-slate-50 p-8 shadow">
            ⭐⭐⭐⭐⭐
            <p className="mt-4">
              Best digital service platform.
            </p>
            <h4 className="mt-4 font-bold">
              Amit
            </h4>
          </div>

        </div>

      </div>

    </section>
  );
}