export default function Features() {
  const features = [
    {
      title: "REBNY FS Wizard",
      description: "Step-by-step REBNY-style financial statement builder",
    },
    {
      title: "Board Checklist Engine",
      description: "Dynamically generated checklist per building type",
    },
    {
      title: "Document Tracker",
      description: '"What\'s missing" view for buyers and agents',
    },
    {
      title: "Collaboration Workspace",
      description: "Invite agent / attorney with role-based access",
    },
    {
      title: "Secure Sharing",
      description: "Expiring links, audit trail of who accessed what",
    },
    {
      title: "Version History",
      description: "Track changes across offers and updated financials",
    },
    {
      title: "Multi-Offer Support",
      description: "Clone your board pack for a second apartment in minutes",
    },
    {
      title: "Bank-Level Security",
      description: "End-to-end encryption and secure document storage",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-neutral-50" id="features">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-primary-600">
            Features
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Everything you need to create board-ready packages
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 rounded-lg bg-white p-6 shadow-sm border border-neutral-200 hover:border-primary-300 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-2 w-2 rounded-full bg-primary-600" />
                <h3 className="font-semibold text-neutral-900">
                  {feature.title}
                </h3>
              </div>
              <p className="text-sm text-neutral-600 pl-5">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
