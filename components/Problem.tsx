export default function Problem() {
  const problems = [
    "Endless REBNY Financial Statement spreadsheets",
    "Confusing board package checklists",
    "Email chains with \"you forgot this one document…\"",
    "Different expectations from every building, every broker, every lawyer",
  ];

  return (
    <section className="py-24 sm:py-32 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Buying in NYC shouldn't require a PhD in paperwork
          </h2>
          <p className="mt-6 text-lg leading-8 text-neutral-600">
            If you're buying a co-op or condo in New York City, you know the
            pain:
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl">
          <ul className="space-y-4">
            {problems.map((problem, index) => (
              <li
                key={index}
                className="flex items-start gap-x-3 bg-white p-4 rounded-lg shadow-sm"
              >
                <svg
                  className="h-6 w-6 flex-shrink-0 text-red-500 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                  />
                </svg>
                <span className="text-neutral-700">{problem}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 p-6 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-center text-neutral-900 font-medium">
              One missing line item or attachment can delay or sink an otherwise
              strong offer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
