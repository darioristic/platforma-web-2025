import { Inset } from '@/components/Inset'
import { Main } from '@/components/Main'
import { Section } from '@/components/Section'
import { TextLink } from '@/components/TextLink'

export default function Page() {
  return (
    <Main>
      <Section>
        <Inset format>
          <h2>About Us</h2>
          <p>
          Founded by tech veterans{' '}
          <TextLink href="https://darioristic.com" title="Dario Ristić" external /> and{' '}
          <TextLink href="https://ivandudas.com" title="Ivan Dudaš" external />{' '}
          in 1999 during the early dot-com era, our platform has evolved from a bold idea 
          into a hub of digital innovation. Today, as serial entrepreneurs with deep technical 
          and business expertise, we design and deliver digital solutions that empower ambitious 
          startups and established companies to create products people genuinely love to use. 
          Our work blends product and platform innovation with intelligent marketing to generate 
          measurable impact and sustainable ROI.
          </p>

          <h2>We Believe</h2>
          <p>
          The future will be defined by intelligent, dynamic interactions between technology 
          and people—where every experience feels intuitive, personal, and naturally 
          conversational. This next era of digital engagement will anticipate user needs 
          before they're expressed, creating seamless, meaningful connections that feel 
          almost human.
          </p>

          <h2>Services</h2>
          <p>
          We provide end-to-end services spanning{' '}
          <TextLink href="/digital-strategy" title="digital strategy" />,{' '}
          <TextLink href="/product-design-development" title="product design - development" />,{' '}
          <TextLink href="/infrastructure-implementation" title="infrastructure implementation" />, automation,{' '}
          <TextLink href="/intelligent-marketing" title="intelligent marketing" />, and brand experience 
          optimization. AI is embedded across every stage of the product, marketing, and operations 
          lifecycle—enabling adaptive personalization and intelligent experiences that guide users, 
          recommend products, and resolve issues in real time. We specialize in SaaS platforms, 
          technology startups, cloud and media ecosystems, and other high-growth digital ventures. 
  
          </p>

          <h2>Connect</h2>
          <p>
            Find us on{' '}
            <TextLink href="https://x.com/Platforma_AI" title="X" external />,
            feel free to send a dm or drop us an email.
          </p>
        </Inset>
      </Section>
    </Main>
  )
}
