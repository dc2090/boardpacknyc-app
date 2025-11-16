export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-6xl">
            Offer-Ready in a Weekend,{" "}
            <span className="text-primary-600">Not a Month</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-600">
            The first AI-assisted platform that walks NYC buyers step-by-step
            through REBNY Financial Statements and co-op / condo board packages.
            No more mystery PDFs, missing docs, or back-and-forth with your
            agent.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#early-access"
              className="rounded-md bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-colors"
            >
              Get early access →
            </a>
            <a
              href="#agent-waitlist"
              className="text-base font-semibold leading-7 text-neutral-900 hover:text-primary-600 transition-colors"
            >
              Join the agent waitlist →
            </a>
          </div>
          <p className="mt-8 text-sm text-neutral-500">
            Built with input from NYC buyers, agents, and mortgage pros.
          </p>
        </div>

        {/* Trust badges / logos could go here */}
        <div className="mt-16 flex justify-center gap-8 opacity-70">
          <div className="flex items-center gap-2 text-sm text-neutral-600">
            <svg className="h-5 w-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
            </svg>
            <span>Secure & Encrypted</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-neutral-600">
            <svg className="h-5 w-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
            </svg>
            <span>REBNY Compliant</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-neutral-600">
            <svg className="h-5 w-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
            </svg>
            <span>NYC-Specific</span>
          </div>
        </div>
      </div>
    </section>
  );
}
