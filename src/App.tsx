import { useState, useEffect } from "react"
import { HeroRelease } from "@/components/ui/hero-dithering-card"
import {
  Music,
  Keyboard,
  Volume2,
  Waves,
  Gauge,
  Sparkles,
  Github,
  Download,
  ChevronDown,
  Monitor,
  Cpu,
  HardDrive,
  ExternalLink,
} from "lucide-react"

/* ───────────────────── Navbar ───────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass border-b border-border/50 shadow-lg" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <Music className="h-4 w-4 text-primary" />
          </div>
          <span className="font-semibold text-foreground tracking-tight">AI Harmonium</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden sm:block">
            Features
          </a>
          <a href="#controls" className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden sm:block">
            Controls
          </a>
          <a href="#requirements" className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden sm:block">
            Requirements
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all"
          >
            <Github className="h-4 w-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>
      </div>
    </nav>
  )
}

/* ───────────────────── Scroll Indicator ───────────────────── */
function ScrollIndicator() {
  return (
    <div className="flex flex-col items-center gap-2 pb-8 animate-bounce">
      <span className="text-xs text-muted-foreground">Scroll to explore</span>
      <ChevronDown className="h-4 w-4 text-muted-foreground" />
    </div>
  )
}

/* ───────────────────── Features Section ───────────────────── */
const features = [
  {
    icon: Waves,
    title: "Additive Synthesis",
    description: "Pure mathematical tone generation using sine waves and harmonics — no pre-recorded audio files.",
  },
  {
    icon: Gauge,
    title: "ADSR Envelope",
    description: "Realistic bellows-driven reed simulation with Attack, Decay, Sustain, and Release shaping.",
  },
  {
    icon: Keyboard,
    title: "Keyboard Mapping",
    description: "Home-row keys (A–J) mapped to one full octave (C–B) for intuitive, instant playback.",
  },
  {
    icon: Volume2,
    title: "Polyphonic Playback",
    description: "Play multiple notes simultaneously with 16 dedicated mixer channels for rich chords.",
  },
  {
    icon: Music,
    title: "Real-Time Octave Shift",
    description: "Hold Shift or Ctrl to shift octaves up or down instantly — no fumbling with toggles.",
  },
  {
    icon: Sparkles,
    title: "Fun Modes",
    description: "Auto-play Bollywood-style scales with Space and trigger dramatic chords with Enter.",
  },
]

function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-6">
            Features
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-4">
            Everything you need to play
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Built from scratch with Python, NumPy, and Pygame — every sound is mathematically generated in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group relative rounded-3xl border border-border bg-card/50 p-8 transition-all duration-300 hover:bg-card hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────────────────── Controls Section ───────────────────── */
const controls = [
  { keys: "A  S  D  F  G  H  J", action: "Play notes C  D  E  F  G  A  B" },
  { keys: "Left Shift (hold)", action: "Octave +1" },
  { keys: "Left Ctrl (hold)", action: "Octave −1" },
  { keys: "Space", action: "Auto-play Bollywood-style scale" },
  { keys: "Enter", action: "Dramatic chord (C + E + G)" },
  { keys: "ESC", action: "Quit application" },
]

function ControlsSection() {
  return (
    <section id="controls" className="py-24 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-6">
            Controls
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-4">
            Keyboard shortcuts
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Your keyboard becomes a harmonium. No setup needed — just launch and play.
          </p>
        </div>

        <div className="rounded-3xl border border-border bg-card/50 overflow-hidden">
          {controls.map((control, i) => (
            <div
              key={i}
              className={`flex flex-col sm:flex-row items-start sm:items-center justify-between px-8 py-5 gap-3 ${i !== controls.length - 1 ? "border-b border-border" : ""
                } hover:bg-card transition-colors`}
            >
              <code className="px-4 py-2 rounded-xl bg-muted text-sm font-mono text-foreground tracking-wider">
                {control.keys}
              </code>
              <span className="text-muted-foreground text-sm">{control.action}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────────────────── Sound Pipeline ───────────────────── */
function SoundPipelineSection() {
  return (
    <section className="py-24 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-6">
            Under the Hood
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-4">
            How it generates sound
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Each tone is built on-the-fly by summing harmonically related sine waves, then sculpted with an ADSR envelope.
          </p>
        </div>

        <div className="rounded-3xl border border-border bg-card/50 p-8 md:p-12">
          <pre className="font-mono text-sm text-muted-foreground leading-loose overflow-x-auto">
            {`signal(t) = 1.00 × sin(2π × f × t)       ← Fundamental
           + 0.50 × sin(2π × 2f × t)      ← 2nd harmonic
           + 0.25 × sin(2π × 3f × t)      ← 3rd harmonic

           ↓ normalize ↓

   ADSR Envelope (50ms atk / 100ms dec / 70% sus / 200ms rel)

           ↓ shape ↓

      int16 PCM Samples → pygame.Sound → Speaker 🔊`}
          </pre>
        </div>
      </div>
    </section>
  )
}

/* ───────────────────── System Requirements ───────────────────── */
function RequirementsSection() {
  return (
    <section id="requirements" className="py-24 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-6">
            System Requirements
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-4">
            Ready to run
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Lightweight and self-contained — just download and launch. No installation wizard needed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Monitor, label: "Operating System", value: "Windows 10 / 11" },
            { icon: Cpu, label: "Processor", value: "Any modern x64 CPU" },
            { icon: HardDrive, label: "Disk Space", value: "~26 MB" },
          ].map((req, i) => (
            <div key={i} className="rounded-3xl border border-border bg-card/50 p-8 text-center hover:bg-card hover:border-primary/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 mx-auto">
                <req.icon className="h-6 w-6 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground mb-1">{req.label}</p>
              <p className="text-lg font-semibold text-foreground">{req.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────────────────── Download CTA Footer ───────────────────── */
function DownloadCTA() {
  return (
    <section className="py-24 px-4 md:px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-6">
          Ready to play?
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
          Download the standalone executable and start making music with your keyboard in seconds.
        </p>
        <a
          href="/AI_Keyboard_Harmonium.exe"
          download
          className="group inline-flex h-14 items-center justify-center gap-3 rounded-full bg-primary px-12 text-base font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:scale-105 active:scale-95 hover:ring-4 hover:ring-primary/20 cursor-pointer"
        >
          <Download className="h-5 w-5" />
          <span>Download v1.0.0</span>
        </a>
      </div>
    </section>
  )
}

/* ───────────────────── Footer ───────────────────── */
function Footer() {
  return (
    <footer className="border-t border-border py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <Music className="h-4 w-4 text-primary" />
          </div>
          <span className="text-sm text-muted-foreground">
            AI Keyboard Harmonium · MIT License
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-4 w-4" />
            Source Code
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </footer>
  )
}

/* ───────────────────── App ───────────────────── */
export default function App() {
  return (
    <div className="dark min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <HeroRelease />
        <ScrollIndicator />
        <FeaturesSection />
        <SoundPipelineSection />
        <ControlsSection />
        <RequirementsSection />
        <DownloadCTA />
      </main>
      <Footer />
    </div>
  )
}
