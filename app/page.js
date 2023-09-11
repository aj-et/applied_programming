import { About, Projects } from "@/components"

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col">
      <div className="text-2xl">Hello World</div>

      <About />
      
      <Projects />
    </main>
  )
}
