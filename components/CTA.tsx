"use client";

import { useState } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState<"buyer" | "agent">("buyer");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with email service (SendGrid, Resend, etc.)
    console.log("Email submitted:", { email, userType });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <section className="py-24 sm:py-32 bg-white" id="early-access">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl rounded-3xl bg-gradient-to-br from-primary-600 to-primary-700 p-8 sm:p-12 shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Join the BoardPackNYC pilot
            </h2>
            <p className="mt-4 text-lg text-primary-100">
              Be among the first to experience stress-free board packages.
              Limited spots available.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full rounded-lg border-0 px-4 py-3 text-neutral-900 shadow-sm placeholder:text-neutral-400 focus:ring-2 focus:ring-white"
              />
            </div>

            <div className="flex gap-4" id="agent-waitlist">
              <button
                type="button"
                onClick={() => setUserType("buyer")}
                className={`flex-1 rounded-lg px-4 py-3 font-semibold transition-all ${
                  userType === "buyer"
                    ? "bg-white text-primary-600 shadow-lg"
                    : "bg-primary-500 text-white hover:bg-primary-400"
                }`}
              >
                I'm a Buyer
              </button>
              <button
                type="button"
                onClick={() => setUserType("agent")}
                className={`flex-1 rounded-lg px-4 py-3 font-semibold transition-all ${
                  userType === "agent"
                    ? "bg-white text-primary-600 shadow-lg"
                    : "bg-primary-500 text-white hover:bg-primary-400"
                }`}
              >
                I'm an Agent
              </button>
            </div>

            <button
              type="submit"
              disabled={submitted}
              className="w-full rounded-lg bg-white px-6 py-3 font-semibold text-primary-600 shadow-sm hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {submitted ? "✓ Thanks! We'll be in touch" : "Apply for early access"}
            </button>

            <p className="text-center text-sm text-primary-100">
              No credit card required. Join 500+ people on the waitlist.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
