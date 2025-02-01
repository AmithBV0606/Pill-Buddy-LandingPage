import Header from "./components/Header"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Download from "./components/Download"
import Footer from "./components/Footer"
import BackgroundParticles from "./components/BackgroundParticles"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <BackgroundParticles />
      <Header />
      <main>
        <Hero />
        <Features />
        <Download />
      </main>
      <Footer />
    </div>
  )
}

