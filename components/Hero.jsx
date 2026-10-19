import { useState } from "react";
import { BiSolidPlaneAlt } from "react-icons/bi";

const services = [
  {
    icon: "✈️",
    title: "Air Freight",
    text: "Fast international shipping for urgent packages, documents, and high-value goods.",
    tag: "FAST DELIVERY",
  },
  {
    icon: "🚢",
    title: "Ocean Freight",
    text: "Cost-effective international cargo shipping for large and heavy consignments.",
    tag: "BULK SHIPPING",
  },
  {
    icon: "🚚",
    title: "Road Transport",
    text: "Reliable ground transportation for domestic and cross-border deliveries.",
    tag: "FLEXIBLE ROUTES",
  },
  {
    icon: "📦",
    title: "Express Courier",
    text: "Door-to-door parcel delivery with convenient collection and tracking options.",
    tag: "DOOR TO DOOR",
  },
];

const steps = [
  {
    number: "01",
    title: "Book a shipment",
    text: "Tell us what you need to send and where it needs to go.",
  },
  {
    number: "02",
    title: "We collect your parcel",
    text: "Arrange a pickup or bring your package to a collection point.",
  },
  {
    number: "03",
    title: "Track your delivery",
    text: "Follow your shipment as it moves through the delivery process.",
  },
  {
    number: "04",
    title: "Delivered safely",
    text: "Your parcel reaches its destination, subject to customs clearance.",
  },
];

function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [trackingNumber, setTrackingNumber] = useState("");

  function handleTrack(e) {
    e.preventDefault();

    if (!trackingNumber.trim()) {
      alert("Please enter your tracking number.");
      return;
    }

    alert(
      "Tracking number: " +
        trackingNumber +
        ". Connect your shipment tracking API to retrieve live updates."
    );
  }

  const links = [
    ["Home", "#home"],
    ["About Us", "#about"],
    ["Services", "#services"],
    ["How It Works", "#how-it-works"],
    ["Contact", "#contact"],
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500 text-xl font-black text-white">
              G
            </div>
            <div>
              <p className="text-xl font-black tracking-tight text-slate-900">
                Globe<span className="text-orange-500">Way</span>
              </p>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                Global Logistics
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-sm font-semibold text-slate-600 transition hover:text-orange-500"
              >
                {label}
              </a>
            ))}
          </div>

          <a
            href="#quote"
            className="hidden rounded-lg bg-orange-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-600 sm:inline-flex"
          >
            Get a Quote ↗
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            className="rounded-lg border border-slate-200 px-3 py-2 text-xl lg:hidden"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-slate-100 bg-white px-5 py-4 lg:hidden">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-3 py-3 font-semibold hover:bg-orange-50 hover:text-orange-600"
              >
                {label}
              </a>
            ))}
            <a
              href="#quote"
              onClick={() => setMenuOpen(false)}
              className="mt-2 block rounded-lg bg-orange-500 px-4 py-3 text-center font-bold text-white"
            >
              Get a Quote
            </a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="home" className="relative isolate overflow-hidden bg-slate-950">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=2000&q=85')",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/35" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 sm:py-32 lg:grid-cols-2 lg:px-8 lg:py-36">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white">
              <span className="h-2 w-2 rounded-full bg-orange-400" />
              Connecting businesses to the world
            </div>

            <h1 className="max-w-2xl text-5xl font-black leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Your world.
              <br />
              Our <span className="text-orange-400">delivery.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              From a single parcel to global cargo, we help move your goods
              across borders with dependable shipping solutions designed
              around your business.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#quote"
                className="rounded-lg bg-orange-500 px-7 py-4 font-bold text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-1 hover:bg-orange-600"
              >
                Ship with us ↗
              </a>
              <a
                href="#services"
                className="rounded-lg border border-white/30 px-7 py-4 font-bold text-white transition hover:bg-white/10"
              >
                Explore services
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-sm text-slate-300">
              <span>✓ Worldwide shipping options</span>
              <span>✓ Shipment tracking</span>
              <span>✓ Business solutions</span>
            </div>
          </div>

          {/* Tracking card */}
          <div className="mx-auto w-full max-w-md rounded-2xl border border-white/20 bg-white p-6 shadow-2xl sm:p-8">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-orange-500">
                  SHIPMENT TRACKING
                </p>
                <h2 className="mt-2 text-2xl font-black text-slate-900">
                  Where is your parcel?
                </h2>
              </div>
              <span className="text-3xl">📍</span>
            </div>

            <p className="mb-6 text-sm leading-6 text-slate-500">
              Enter your tracking reference to check your shipment.
            </p>

            <form onSubmit={handleTrack}>
              <label
                htmlFor="tracking"
                className="mb-2 block text-sm font-bold text-slate-700"
              >
                Tracking number
              </label>
              <input
                id="tracking"
                type="text"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                placeholder="e.g. GW123456789"
                className="w-full rounded-lg border border-slate-200 px-4 py-4 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
              />
              <button
                type="submit"
                className="mt-4 w-full rounded-lg bg-slate-900 px-5 py-4 font-bold text-white transition hover:bg-orange-500"
              >
                Track Shipment →
              </button>
            </form>

            <div className="mt-6 flex items-center gap-3 rounded-xl bg-slate-50 p-4">
              <span className="text-2xl">🔒</span>
              <p className="text-xs leading-5 text-slate-500">
                Keep your tracking reference handy for shipment updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 py-10 sm:grid-cols-4 lg:px-8">
          {[
            ["Global", "Shipping network"],
            ["Air + Sea", "Freight solutions"],
            ["24/7", "Online access"],
            ["B2B + B2C", "Delivery options"],
          ].map(([value, label]) => (
            <div key={label} className="text-center">
              <p className="text-2xl font-black text-slate-900 sm:text-3xl">
                {value}
              </p>
              <p className="mt-2 text-sm text-slate-500">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-slate-50 px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="font-bold uppercase tracking-[0.2em] text-orange-500">
              Our services
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
              Every shipment has a solution.
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              Flexible delivery options for individuals, growing businesses,
              and international supply chains.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.title}
                className="group rounded-2xl border border-slate-100 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-orange-200 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-3xl transition group-hover:bg-orange-100">
                  {service.icon}
                </div>
                <p className="mt-6 text-[10px] font-extrabold tracking-[0.15em] text-orange-500">
                  {service.tag}
                </p>
                <h3 className="mt-3 text-xl font-extrabold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {service.text}
                </p>
                <a
                  href="#quote"
                  className="mt-6 inline-block font-bold text-slate-900 transition hover:text-orange-500"
                >
                  Learn more →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85"
              alt="Organized cargo in a logistics warehouse"
              className="h-[360px] w-full rounded-2xl object-cover shadow-xl sm:h-[480px]"
              loading="lazy"
            />
            <div className="absolute -bottom-6 right-4 rounded-xl bg-orange-500 p-5 text-white shadow-xl sm:-right-5 sm:p-7">
              <p className="text-3xl font-black">Global</p>
              <p className="mt-1 text-sm font-medium">Logistics solutions</p>
            </div>
          </div>

          <div className="pt-4 lg:pl-4">
            <p className="font-bold uppercase tracking-[0.2em] text-orange-500">
              About GlobeWay
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight text-slate-900 sm:text-5xl">
              Moving more than packages. Connecting possibilities.
            </h2>
            <p className="mt-6 leading-8 text-slate-600">
              GlobeWay is a sample international logistics brand built around
              convenient shipping, transparent communication, and flexible
              freight options. Our goal is to make sending goods across
              borders easier for individuals and businesses.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              Whether you are sending documents, ecommerce orders, or larger
              commercial cargo, choose a shipping solution that fits your
              timeline, destination, and budget.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Flexible international shipping options",
                "Clear shipment information and support",
                "Solutions for personal and commercial cargo",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-black text-orange-600">
                    ✓
                  </span>
                  <p className="font-semibold text-slate-700">{item}</p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-9 inline-flex rounded-lg bg-slate-900 px-7 py-4 font-bold text-white transition hover:bg-orange-500"
            >
              About our company →
            </a>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="bg-slate-950 px-5 py-24 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="font-bold uppercase tracking-[0.2em] text-orange-400">
              Simple process
            </p>
            <h2 className="mt-4 text-3xl font-black sm:text-5xl">
              Four steps. One smooth journey.
            </h2>
            <p className="mt-5 leading-7 text-slate-400">
              From your first booking to final delivery, know what comes next.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.number} className="relative border-l-2 border-orange-500/50 pl-6">
                <p className="text-4xl font-black text-orange-400">
                  {step.number}
                </p>
                <h3 className="mt-5 text-xl font-bold">{step.title}</h3>
                <p className="mt-3 leading-7 text-slate-400">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote CTA */}
      <section id="quote" className="px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-3xl bg-orange-500 p-8 text-white sm:p-12 lg:grid-cols-2 lg:p-16">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-orange-100">
              Ready to ship?
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">
              Let's get your next delivery moving.
            </h2>
            <p className="mt-5 leading-7 text-orange-50">
              Tell us about your shipment and get in touch to discuss
              destinations, cargo requirements, and delivery options.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 text-slate-900 sm:p-8">
            <h3 className="text-2xl font-black">Request a shipping quote</h3>
            <p className="mt-2 text-sm text-slate-500">
              Start by choosing your shipping route.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href =
                  "mailto:shipping@example.com?subject=" +
                  encodeURIComponent("Shipping quote request") +
                  "&body=" +
                  encodeURIComponent(
                    "Origin: " + e.currentTarget.origin.value +
                    "\nDestination: " + e.currentTarget.destination.value +
                    "\nShipment type: " + e.currentTarget.shipment.value
                  );
              }}
              className="mt-6 space-y-4"
            >
              <div>
                <label htmlFor="origin" className="mb-2 block text-sm font-bold">
                  Shipping from
                </label>
                <input
                  id="origin"
                  name="origin"
                  required
                  placeholder="City or country"
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-orange-500"
                />
              </div>
              <div>
                <label htmlFor="destination" className="mb-2 block text-sm font-bold">
                  Shipping to
                </label>
                <input
                  id="destination"
                  name="destination"
                  required
                  placeholder="Destination city or country"
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-orange-500"
                />
              </div>
              <div>
                <label htmlFor="shipment" className="mb-2 block text-sm font-bold">
                  Shipment type
                </label>
                <select
                  id="shipment"
                  name="shipment"
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 outline-none focus:border-orange-500"
                >
                  <option>Express courier</option>
                  <option>Air freight</option>
                  <option>Ocean freight</option>
                  <option>Road transport</option>
                </select>
              </div>
              <button className="w-full rounded-lg bg-slate-900 px-5 py-4 font-bold text-white transition hover:bg-slate-800">
                Request a Quote →
              </button>
              <p className="text-xs leading-5 text-slate-500">
                Demo contact: replace shipping@example.com with your actual
                company email before publishing.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-slate-100 bg-slate-50 px-5 py-16 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-orange-500">
              Need assistance?
            </p>
            <h2 className="mt-3 text-3xl font-black text-slate-900">
              We're here to help.
            </h2>
            <p className="mt-3 text-slate-600">
              Contact our team for shipping questions and business enquiries.
            </p>
          </div>
          <a
            href="mailto:shipping@example.com"
            className="inline-flex w-fit rounded-lg border-2 border-slate-900 px-7 py-4 font-bold text-slate-900 transition hover:bg-slate-900 hover:text-white"
          >
            Contact our team ↗
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 px-5 pb-8 pt-16 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#home" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500 text-xl font-black">
                G
              </div>
              <div>
                <p className="text-xl font-black">
                  Globe<span className="text-orange-400">Way</span>
                </p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                  Global Logistics
                </p>
              </div>
            </a>
            <p className="mt-6 max-w-xs text-sm leading-7 text-slate-400">
              International shipping and logistics solutions for people and
              businesses moving goods around the world.
            </p>
          </div>

          <div>
            <h3 className="font-bold">Quick Links</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              {[
                ["Home", "#home"],
                ["About Us", "#about"],
                ["Our Services", "#services"],
                ["How It Works", "#how-it-works"],
                ["Contact Us", "#contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a className="transition hover:text-orange-400" href={href}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold">Our Services</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              {services.map((service) => (
                <li key={service.title}>
                  <a className="transition hover:text-orange-400" href="#services">
                    {service.title}
                  </a>
                </li>
              ))}
              <li>
                <a className="transition hover:text-orange-400" href="#quote">
                  Request a Quote
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold">Contact Information</h3>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-slate-400">
              <li>✉ shipping@example.com</li>
              <li>🌍 International shipping enquiries</li>
              <li>🕒 Support hours to be confirmed</li>
            </ul>
            <a
              href="mailto:shipping@example.com"
              className="mt-5 inline-flex rounded-lg bg-white/10 px-4 py-3 text-sm font-bold transition hover:bg-orange-500"
            >
              Email us ↗
            </a>
          </div>
        </div>

        <div className="mx-auto mt-14 flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-7 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} GlobeWay Logistics. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <a href="#contact" className="hover:text-white">Privacy Policy</a>
            <a href="#contact" className="hover:text-white">Terms of Service</a>
            <a href="#contact" className="hover:text-white">Shipping Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Hero;