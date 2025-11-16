"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is BoardPackNYC a law firm or financial advisor?",
      answer:
        "No. We're a software platform that helps you organize and present your information. You still work with your own lawyer, lender, and agent.",
    },
    {
      question: "Will building boards accept these documents?",
      answer:
        "We generate standard REBNY-style financial statements and familiar PDF packages that can be printed or emailed just like traditional board packages.",
    },
    {
      question: "Is my data secure?",
      answer:
        "We use industry-standard encryption in transit and at rest, and limit access based on roles (buyer, agent, attorney). You are always in control of who sees your information.",
    },
    {
      question: "Does this replace my agent?",
      answer:
        "No. It helps you and your agent get to \"offer-ready\" faster and with fewer mistakes.",
    },
    {
      question: "How long does it take to create a package?",
      answer:
        "Most users complete their first board package in under 25 minutes, including document uploads. Once created, you can clone and update packages for additional offers in just a few minutes.",
    },
    {
      question: "What if I need to update my package?",
      answer:
        "You can update your financial information and documents at any time. All changes are tracked with version history, and you can regenerate your package with the latest information.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 sm:py-32 bg-neutral-50">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-lg border border-neutral-200 bg-white overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between p-6 text-left hover:bg-neutral-50 transition-colors"
              >
                <span className="font-semibold text-neutral-900">
                  {faq.question}
                </span>
                <svg
                  className={`h-5 w-5 flex-shrink-0 text-neutral-500 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-neutral-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
