export default function Pricing() {
  const plans = [
    {
      name: "Buyer Plan",
      subtitle: "Per transaction",
      price: "Contact for pricing",
      description: "Perfect for individual buyers creating their first board package",
      features: [
        "Guided REBNY Financial Statement",
        "Board-package checklist",
        "Document vault & export",
        "Email support",
        "Secure sharing links",
      ],
      cta: "Apply for pilot",
      highlighted: false,
    },
    {
      name: "Agent Plan",
      subtitle: "Per agent per month",
      price: "Contact for pricing",
      description: "For real estate agents managing multiple buyer clients",
      features: [
        "Unlimited buyers",
        "Shared templates",
        "Team dashboard & tracking",
        "Priority support",
        "White-label options (coming soon)",
      ],
      cta: "Join agent waitlist",
      highlighted: true,
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-white" id="pricing">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Straightforward pricing for a stressful process
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Currently accepting applications for our pilot program
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? "border-2 border-primary-600 shadow-xl"
                  : "border border-neutral-200 shadow-sm"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-primary-600 px-4 py-1 text-sm font-medium text-white">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-neutral-900">
                  {plan.name}
                </h3>
                <p className="text-sm text-neutral-600 mt-1">{plan.subtitle}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-3xl font-bold tracking-tight text-neutral-900">
                    {plan.price}
                  </span>
                </p>
                <p className="mt-3 text-sm text-neutral-600">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <svg
                      className="h-6 w-6 flex-shrink-0 text-primary-600"
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
                    <span className="text-sm text-neutral-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={index === 0 ? "#early-access" : "#agent-waitlist"}
                className={`block w-full rounded-lg px-6 py-3 text-center text-sm font-semibold transition-colors ${
                  plan.highlighted
                    ? "bg-primary-600 text-white hover:bg-primary-500 shadow-sm"
                    : "bg-neutral-100 text-neutral-900 hover:bg-neutral-200"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
