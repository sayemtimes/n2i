import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { MonthlyPlan } from "@/components/monthly-plan"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Features />
      <MonthlyPlan />
      <Testimonials />
      <CTA />
    </div>
  )
}
