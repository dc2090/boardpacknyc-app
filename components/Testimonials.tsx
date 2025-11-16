export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "My buyers used to send me fifteen separate emails with half-finished spreadsheets. With BoardPackNYC, I get a clean REBNY statement and a checklist I can trust.",
      author: "NYC Buyer's Agent",
      role: "Beta tester",
    },
    {
      quote:
        "It's the first time I felt in control of the co-op process instead of being interrogated about my finances.",
      author: "First-time co-op buyer",
      role: "Upper East Side",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-primary-600">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What early testers say
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-8 shadow-lg"
            >
              <div className="mb-6">
                <svg
                  className="h-8 w-8 text-primary-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-lg text-neutral-700 mb-6">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600 font-semibold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-neutral-900">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-neutral-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
