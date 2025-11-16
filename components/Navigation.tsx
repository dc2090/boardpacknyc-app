"use client";

import { useState } from "react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "How it works", href: "#demo" },
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-neutral-200">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600">
              <span className="text-white font-bold">B</span>
            </div>
            <span className="text-xl font-bold text-neutral-900">
              BoardPackNYC
            </span>
          </a>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-neutral-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-neutral-900 hover:text-primary-600 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#early-access"
            className="rounded-md bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 transition-colors"
          >
            Get early access
          </a>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 px-6 pb-6 pt-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neutral-900 hover:bg-neutral-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#early-access"
              className="block rounded-lg bg-primary-600 px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-primary-500 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get early access
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
