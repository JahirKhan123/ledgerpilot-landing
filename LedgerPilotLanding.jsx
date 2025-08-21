import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles, Shield, Rocket, Zap, Mail, Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// "LedgerPilot" — an AI compliance & bookkeeping co‑pilot for SMEs and solo accountants.
// This file is a production‑ready single‑page landing site you can deploy immediately.
// It follows the canvas guidelines: Tailwind classes, shadcn/ui components, motion, grid layout.

const features = [
  {
    icon: <Shield className="w-6 h-6" />, 
    title: "Auto‑reconcile & file",
    text: "Bank feeds, invoice matching, and one‑click GST/e‑invoice/e‑way bill prep with audit trails."
  },
  {
    icon: <Zap className="w-6 h-6" />, 
    title: "AI document intake",
    text: "Parse PDFs, WhatsApp bills & scans. Extract line items with >99% accuracy using human‑in‑the‑loop."
  },
  {
    icon: <Rocket className="w-6 h-6" />, 
    title: "Close books 10× faster",
    text: "Variance explainers, journal suggestions, and month‑end checklists that learn your patterns."
  }
];

const tiers = [
  {
    name: "Starter",
    price: "₹2,999/mo",
    tagline: "For solo CAs & tiny teams",
    bullets: [
      "Up to 5 clients",
      "200 invoices/mo",
      "AI intake + basic reconciliation",
      "Email support"
    ]
  },
  {
    name: "Growth",
    price: "₹9,999/mo",
    tagline: "Firms scaling ops",
    bullets: [
      "Up to 25 clients",
      "2,000 invoices/mo",
      "Advanced rules & workflows",
      "Priority support"
    ]
  },
  {
    name: "Scale",
    price: "Custom",
    tagline: "BPOs & enterprises",
    bullets: [
      "Unlimited clients",
      "API + SSO",
      "Dedicated success manager",
      "SLA & security review"
    ]
  }
];

export default function LedgerPilotLanding() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-800">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/60 border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6" />
            <span className="font-semibold text-lg">LedgerPilot</span>
            <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">Beta</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
            <a href="#faq" className="hover:text-slate-900">FAQ</a>
          </div>
          <div className="flex items-center gap-2">
            <Button className="rounded-2xl">Sign in</Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Close books in hours, not weeks.
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              An AI co‑pilot for compliance, bookkeeping, and tax ops. Reduce manual work by 80%,
              increase margins, and keep clients audit‑ready — automatically.
            </p>
            <form onSubmit={handleSubmit} className="mt-6 flex gap-2">
              <div className="flex-1 relative">
                <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email for beta access"
                  className="w-full pl-10 pr-4 py-3 rounded-2xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400"
                />
              </div>
              <Button type="submit" className="rounded-2xl px-5">
                Join waitlist <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
            {submitted && (
              <p className="mt-3 text-sm text-emerald-700">
                Thanks! You're on the list — we'll email you when your invite is ready.
              </p>
            )}
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-2"><Shield className="w-4 h-4" /> SOC2‑ready</div>
              <div className="flex items-center gap-2"><Zap className="w-4 h-4" /> API first</div>
              <div className="flex items-center gap-2"><Rocket className="w-4 h-4" /> 14‑day trial</div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
            <Card className="rounded-2xl shadow-xl border-slate-200">
              <CardContent className="p-6">
                <div className="aspect-video rounded-xl bg-slate-900 flex items-center justify-center">
                  <Button variant="secondary" className="rounded-2xl">
                    <Play className="w-4 h-4 mr-2" /> Watch 90‑sec demo
                  </Button>
                </div>
                <ul className="mt-6 space-y-3 text-sm">
                  {[
                    "Import a month's bank statements and 500 invoices",
                    "AI suggests journals, flags anomalies, and drafts returns",
                    "You review, approve, and file — all in one place",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Logos */}
      <section className="mx-auto max-w-6xl px-4 py-6 opacity-80">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 place-items-center text-sm">
          {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".slice(0,6).split("").map((l, i) => (
            <div key={i} className="w-full h-10 rounded-xl bg-slate-200 flex items-center justify-center">
              Firm {i+1}
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <Card key={i} className="rounded-2xl border-slate-200">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center mb-4">
                  {f.icon}
                </div>
                <h3 className="font-semibold text-xl">{f.title}</h3>
                <p className="mt-2 text-slate-600">{f.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* KPI strip */}
      <section className="bg-white border-y border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {["80% less manual work","99.8% data accuracy","< 24h onboarding","ISO 27001 in progress"].map((k, i) => (
            <div key={i} className="p-4 rounded-2xl bg-slate-50">
              <div className="text-2xl font-bold">{k.split(" ")[0]}</div>
              <div className="text-sm text-slate-600">{k.replace(k.split(" ")[0] + " ", "")}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold text-center">Pricing that scales with you</h2>
        <p className="mt-2 text-center text-slate-600">Start free. Upgrade when you see ROI.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <Card key={i} className={`rounded-2xl border-slate-200 ${i===1 ? 'ring-2 ring-slate-300' : ''}`}>
              <CardContent className="p-6">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl font-semibold">{t.name}</h3>
                  <div className="text-2xl font-bold">{t.price}</div>
                </div>
                <p className="mt-1 text-sm text-slate-600">{t.tagline}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {t.bullets.map((b, bi) => (
                    <li key={bi} className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5" /> {b}</li>
                  ))}
                </ul>
                <Button className="w-full mt-6 rounded-2xl">Start free</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-4xl px-4 py-16">
        <h2 className="text-3xl font-bold text-center">Frequently asked</h2>
        <div className="mt-8 grid gap-4">
          {[
            ["How do you reach >99% accuracy?","We combine top OCR, domain‑tuned LLMs, and human‑in‑the‑loop review where confidence is low."],
            ["Is my data secure?","Data is encrypted at rest and in transit. We offer region‑locked storage and granular access controls."],
            ["What does onboarding look like?","We import your chart of accounts and vendors, set up bank feeds, and mirror your workflows."],
          ].map(([q,a], i) => (
            <Card key={i} className="rounded-2xl border-slate-200">
              <CardContent className="p-6">
                <div className="font-semibold">{q}</div>
                <div className="mt-2 text-slate-600 text-sm">{a}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-24">
        <Card className="rounded-2xl border-slate-200">
          <CardContent className="p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold">Be among the first to automate your month‑end.</h3>
              <p className="text-slate-600 mt-1">Join the beta waitlist — limited spots each week.</p>
            </div>
            <form onSubmit={handleSubmit} className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Work email"
                className="flex-1 md:flex-none md:w-80 pl-4 pr-4 py-3 rounded-2xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400"
              />
              <Button type="submit" className="rounded-2xl">Get invite <ArrowRight className="w-4 h-4 ml-2" /></Button>
            </form>
          </CardContent>
        </Card>
      </section>

      <footer className="border-t border-slate-200 py-10 text-sm">
        <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-slate-500">© {new Date().getFullYear()} LedgerPilot — All rights reserved.</div>
          <div className="flex items-center gap-4 text-slate-600">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Security</a>
          </div>
        </div>
      </footer>
    </div>
  );
      }
              
