export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Answer simple questions",
      description:
        "Income, assets, debts, monthly obligations – in plain language, with examples and helper text.",
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Connect your documents",
      description:
        "Upload or drag-and-drop: W-2s, 1099s, tax returns, pay stubs, statements. We track what's missing so you don't have to.",
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Review your BoardPack score",
      description:
        "See a completeness score, basic debt-to-income and post-closing liquidity snapshot to anticipate questions. Fix issues before your agent or board points them out.",
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Export, share, update",
      description:
        "Generate a clean REBNY Financial Statement PDF and a board-package summary. Share securely with your agent and attorney; update at any time.",
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-neutral-50" id="demo">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">
            How It Works
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            From "I'm interested" to "board-ready" in 4 steps
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {steps.map((step, index) => (
              <div key={index} className="relative flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                    {step.icon}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="mt-4 h-full w-px bg-neutral-200 lg:block hidden" />
                  )}
                </div>
                <div className="pb-12 lg:pb-0">
                  <div className="text-sm font-semibold text-primary-600 mb-2">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
