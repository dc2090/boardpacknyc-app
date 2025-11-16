export default function Footer() {
  const navigation = {
    product: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "How it works", href: "#demo" },
      { name: "FAQ", href: "#faq" },
    ],
    company: [
      { name: "About", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
    ],
  };

  return (
    <footer className="bg-neutral-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <span className="text-xl font-bold text-white">BoardPackNYC</span>
            </div>
            <p className="mt-4 text-sm text-neutral-400">
              Board-ready, without the chaos.
            </p>
            <p className="mt-2 text-sm text-neutral-500">
              © 2025 BoardPackNYC. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-3 gap-8 lg:col-span-3">
            <div>
              <h3 className="text-sm font-semibold text-white">Product</h3>
              <ul className="mt-4 space-y-2">
                {navigation.product.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm text-neutral-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">Company</h3>
              <ul className="mt-4 space-y-2">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm text-neutral-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">Legal</h3>
              <ul className="mt-4 space-y-2">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm text-neutral-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-neutral-800 pt-8">
          <p className="text-xs text-neutral-500 text-center">
            BoardPackNYC is a software platform. We are not a law firm, financial
            advisor, or real estate brokerage. Always consult with licensed
            professionals for legal, financial, and real estate advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
