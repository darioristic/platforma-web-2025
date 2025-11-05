import { Inset } from '@/components/Inset'
import { Main } from '@/components/Main'
import { Section } from '@/components/Section'
import meta from './metadata.json'

export const metadata = meta

export default function Page() {
  return (
    <Main>
      <Section>
        <Inset format>
          <h2>Product Design & Development</h2>
          <p>
          We build digital products that work in the real world — fast, scalable, and built to last. No buzzwords, no decks full of theory. Just clean architecture, solid engineering, and a focus on execution. Every product starts from the system up: smart design, reliable infrastructure, and code that's meant to evolve, not decay. We move from concept to production with precision — research what matters, strip out the noise, and ship what delivers real impact.
          </p>
          <p>
          Every decision is technical, intentional, and measured. We automate where it counts, design for performance, and optimize for the future. The result: platforms that run fast, scale effortlessly, and stay maintainable long after launch. We don't chase trends or overthink problems — we engineer solutions, ship them, and make sure they work when it matters most.
          </p>
          <p>
          Our stack is modern but not experimental. We use proven technologies that handle real traffic, real users, and real business needs. Code reviews, automated testing, and deployment pipelines aren't optional — they're how we ensure quality at scale. When something breaks, we fix it fast. When something can be better, we improve it. Simple as that.
          </p>

          <h3>Methodology</h3>
          <p>
          We work in short cycles — ship, measure, learn, iterate. No long planning phases or endless meetings. We start with the core problem, build a working solution, and improve based on real feedback. Daily standups keep us aligned. Weekly demos keep stakeholders informed. Continuous deployment keeps things moving. It's not about following a rigid process — it's about staying flexible and shipping value consistently.
          </p>
        </Inset>
      </Section>
    </Main>
  )
}


