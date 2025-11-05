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
          <h2>Intelligent Marketing</h2>
          <p>
          We embed AI across every aspect of sales and marketing — from lead generation to customer retention. Our approach uses intelligent automation, predictive analytics, and personalized experiences to drive real business results, not just clicks.
          </p>
          <p>
          AI powers our entire marketing funnel. We use machine learning to identify high-value prospects, predict customer behavior, and optimize campaigns in real time. Content generation, A/B testing, and performance analysis all run on intelligent systems that learn and adapt continuously. No more guessing what works — data tells us, and we act on it.
          </p>
          <p>
          Personalization isn't a nice-to-have — it's how modern marketing works. AI analyzes user behavior, preferences, and engagement patterns to deliver the right message to the right person at the right time. Email campaigns, website experiences, product recommendations, and ad targeting all adapt dynamically based on what each individual actually wants and needs.
          </p>
          <p>
          Sales processes get smarter with AI. Lead scoring prioritizes prospects based on likelihood to convert. Chatbots and virtual assistants handle initial inquiries, qualify leads, and route opportunities to the right sales team. Predictive analytics forecast revenue, identify churn risks, and suggest next best actions. Your sales team spends time closing deals, not chasing dead ends.
          </p>
          <p>
          We measure everything that matters. AI-driven analytics track customer journeys, attribute conversions accurately, and surface insights that drive decisions. ROI isn't estimated — it's calculated in real time across channels, campaigns, and touchpoints. We know what works, what doesn't, and why. Then we optimize relentlessly.
          </p>
          <p>
          Automation handles the repetitive work. Email sequences, social media posting, content distribution, and follow-up campaigns all run automatically, triggered by user actions and optimized by AI. Your team focuses on strategy and creative work, while systems handle execution at scale.
          </p>
        </Inset>
      </Section>
    </Main>
  )
}

