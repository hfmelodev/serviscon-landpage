import { Header } from './_components/header'
import { Hero } from './_components/hero'
import { Partners } from './_components/partners'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />

      <Hero />
      <Partners />
    </main>
  )
}
0
