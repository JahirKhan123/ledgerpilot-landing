import React, { useState } from "react";

function App() {
  const [email, setEmail] = useState("");

  const handleJoin = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Enter your email first 🙂");
      return;
    }
    alert("Thanks! You’re on the waitlist: " + email);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex flex-col items-center justify-center px-6">
      {/* Hero Section */}
      <header className="text-center">
        <h1 className="text-5xl font-bold mb-4">
          LedgerPilot 🚀
        </h1>
        <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
          AI-powered bookkeeping co-pilot. Track income, expenses & taxes in one place and save hours every week.
        </p>

        {/* Waitlist Form */}
        <form onSubmit={handleJoin} className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Work email"
            className="px-4 py-3 rounded-xl text-black w-full sm:w-80"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700"
          >
            Join Waitlist
          </button>
        </form>
        <div className="text-sm text-gray-400">
          No spam. 1–2 emails/month with updates.
        </div>
      </header>

      {/* Features Section */}
      <section className="mt-16 grid md:grid-cols-3 gap-6 max-w-5xl w-full">
        {[
          ["Auto-reconcile & file", "Bank feeds, invoice matching, one-click GST/e-invoice export."],
          ["AI document intake", "Parse PDFs & scans. Extract line items automatically."],
          ["Close faster", "Variance explainers, journal suggestions, month-end checklists."],
        ].map(([title, desc], i) => (
          <div key={i} className="rounded-2xl bg-white/5 border border-white/10 p-6">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-gray-300">{desc}</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} LedgerPilot — All rights reserved.
      </footer>
    </div>
  );
}

export default App;
              
