export default function WhoItsFor() {
  const audiences = [
    {
      title: "For NYC Buyers",
      benefits: [
        "Know exactly what's expected before you fall in love with an apartment",
        "Spot potential red flags early (liquidity, DTI, missing docs)",
        "Re-use your profile when you place multiple offers",
      ],
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      ),
    },
    {
      title: "For Real-Estate Agents",
      benefits: [
        "Stop chasing clients for piecemeal docs",
        "Get offer-ready buyers faster, with fewer surprises in board review",
        "Impress sellers and listing agents with clean, complete packages",
      ],
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
        </svg>
      ),
    },
    {
      title: "For Lenders & Attorneys",
      badge: "Coming Soon",
      benefits: [
        "Standardized intake across clients",
        "Faster underwriting / review with consistent formats and organized documents",
      ],
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Who It's For
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-neutral-200 p-8 hover:border-primary-300 hover:shadow-lg transition-all"
            >
              {audience.badge && (
                <div className="absolute -top-3 right-8">
                  <span className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">
                    {audience.badge}
                  </span>
                </div>
              )}

              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-600 text-white mb-6">
                {audience.icon}
              </div>

              <h3 className="text-xl font-bold text-neutral-900 mb-6">
                {audience.title}
              </h3>

              <ul className="space-y-3">
                {audience.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-start gap-3">
                    <svg
                      className="h-6 w-6 flex-shrink-0 text-primary-600 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-sm text-neutral-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
