import { Inset } from '@/components/Inset'
import { Main } from '@/components/Main'
import { Section } from '@/components/Section'
import { TextLink } from '@/components/TextLink'

export default function Page() {
  return (
    <Main>
      <Section>
        <Inset format>
          <h2>About</h2>
          <p>
          Platforma Agency was founded by tech veterans{' '}
          <TextLink href="https://darioristic.com" title="Dario Ristić" external /> and{' '}
          <TextLink href="https://ivandudas.com" title="Ivan Dudaš" external />{' '}
          and grew from a decade of hands-on product development experience. As leaders 
          with deep technical and business expertise, we design and deliver transformative
          digital solutions that help ambitious startups and companies scale. Our work f
          ocuses on mission-critical products that consistently create measurable value
          and strong ROI.
          </p>

          <h2>Service</h2>
          <p className="!mb-8">
          We’re a small, multidisciplinary team of digital product experts passionate 
          about amplifying the capabilities of today’s most innovative companies.
          </p>
          <p className="!mb-8">
          Over the past two decades, we’ve partnered with startups, entrepreneurs, 
          venture capital firms, and established enterprises to drive digital 
          transformation and build market-ready products from the ground up. 

          Our end-to-end services span digital strategy, product design, development, e-commerce, marketing automation, and brand experience optimization.
          </p>
          <p>
          We specialize in SaaS platforms, technology startups, cloud and media services, 
          and e-commerce ecosystems. Through design thinking and agile methodologies, 
          we prioritize understanding your customers, building authentic relationships, 
          and driving human-centered growth.
          </p>

          <h2>Connect</h2>
          <p>
            Find us on{' '}
            <TextLink href="https://x.com/Platforma_AI" title="X" external />,
            feel free to send a dm.
          </p>
        </Inset>
      </Section>
    </Main>
  )
}
