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
          <h2>Digital Strategy</h2>
          <p>
          We help companies refine their digital products and platforms so they deliver 
          real business value. Our focus is on connecting product thinking, technology, 
          and execution - creating strategies that don't just look good on slides, but 
          actually work in production. Through a clear process that combines analysis, 
          design, and technology insight, we help teams set priorities, align around a 
          shared product vision, and move fast with confidence.
          </p>

          <h2>Our Approach</h2>
          <p>
          Our strategies go beyond theory and move into practice — with clear priorities, implementation phases, and measurable impact that lead to real business growth. Whether you're building a new digital product or improving an existing one, we help you make smarter decisions, move faster, and create experiences users actually want to use.
          </p>
          <h3>Discovery & Insights</h3>
          <p>
          We start by understanding where the real value lies. Through deep analysis of your product, users, and market, we identify what truly drives engagement and growth. This stage helps uncover blind spots, validate assumptions, and set a clear foundation for every strategic decision that follows.
          </p>

          <h3>Product Vision & Roadmap</h3>
          <p>
          Every successful product needs direction. Together, we define a focused vision and translate it into actionable priorities and milestones. The roadmap we create isn't a static document—it's a living framework that aligns business goals with user needs and keeps teams moving in sync.
          </p>

          <h3>Platform Optimization</h3>
          <p>
          We look under the hood of your digital ecosystem to find where technology can work harder for you. Whether it's improving performance, scalability, or the overall user experience, we help modernize your platform so it becomes faster, more resilient, and easier to evolve.
          </p>

          <h3>Data-Driven Growth</h3>
          <p>
          Strategy only matters if it evolves. We establish systems for ongoing measurement, learning, and iteration, turning data into insight and insight into improvement. This creates a feedback loop where your product continuously adapts to users and the market — not the other way around.
          </p>
        </Inset>
      </Section>
    </Main>
  )
}

