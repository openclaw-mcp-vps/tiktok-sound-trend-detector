export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-4 pt-24 pb-16">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#58a6ff] bg-[#58a6ff]/10 px-3 py-1 rounded-full mb-6">
          For TikTok Creators &amp; Agencies
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight max-w-3xl mb-6">
          Detect Trending TikTok Sounds{" "}
          <span className="text-[#58a6ff]">Before They Peak</span>
        </h1>
        <p className="text-lg sm:text-xl text-[#8b949e] max-w-xl mb-10">
          Our scoring algorithm tracks engagement velocity on TikTok audio so you can ride the wave early — not after everyone else already has.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-8 py-4 rounded-xl transition-colors duration-200 shadow-lg"
        >
          Get Early Access — $11/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No contracts.</p>
      </section>

      {/* Feature highlights */}
      <section className="max-w-4xl mx-auto px-4 pb-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        {[
          { icon: "📈", title: "Velocity Scoring", desc: "Proprietary algorithm ranks sounds by engagement growth rate, not raw numbers." },
          { icon: "🔔", title: "Real-Time Alerts", desc: "Get notified the moment a sound crosses our viral-potential threshold." },
          { icon: "🎯", title: "Creator Dashboard", desc: "Clean, distraction-free view of early-stage trending audio updated hourly." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-2xl p-6">
            <div className="text-4xl mb-3">{f.icon}</div>
            <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="flex flex-col items-center px-4 pb-20">
        <h2 className="text-3xl font-bold text-white mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm w-full text-center shadow-xl">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-4">Pro Plan</p>
          <p className="text-5xl font-extrabold text-white mb-1">$11</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Hourly trending sound updates",
              "Velocity score for every track",
              "Real-time push notifications",
              "Unlimited sound bookmarks",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-xl transition-colors duration-200"
          >
            Subscribe Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-4 pb-24">
        <h2 className="text-3xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "How does the trend detection work?",
              a: "We monitor TikTok's trending sounds API and calculate an engagement velocity score based on how quickly a sound is gaining uses, likes, and shares over a rolling 24-hour window."
            },
            {
              q: "How early can I spot a trend?",
              a: "Our algorithm typically surfaces sounds 48–72 hours before they appear on mainstream trend lists, giving you a meaningful head start on content creation."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes. You can cancel at any time from your billing portal. You'll retain access until the end of your current billing period with no questions asked."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-8">
        © {new Date().getFullYear()} TikTok Sound Trend Detector. All rights reserved.
      </footer>
    </main>
  );
}
