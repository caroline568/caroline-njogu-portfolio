import CaseStudyLayout from '../components/CaseStudyLayout.jsx'

export default function KavaroCaseStudy() {
  return (
    <CaseStudyLayout
      title="Kavaro Agency"
      subtitle="A digital product studio, founded and led by Caroline."
      image="/projects/kavaro-logo.png"
      meta={[
        { label: 'Role', value: 'Founder & Software Engineer' },
        { label: 'Stack', value: 'React, Node.js, TypeScript, Vercel' },
        { label: 'Status', value: 'Active — Sep 2025 →' },
      ]}
      sections={[
        {
          heading: 'Problem',
          body: 'Startups, small businesses, and organizations often need modern, well-designed digital products — websites, web apps, and AI-powered tools — but lack access to a team that can own both the design and the engineering without handing the project between multiple vendors.',
        },
        {
          heading: 'Research & user needs',
          body: 'Clients needed a single point of accountability: someone who could translate business goals into a product strategy, design the experience, build it, and ship it — without the friction of coordinating separate design and development teams.',
        },
        {
          heading: 'Design decisions',
          body: 'Kavaro is structured around end-to-end ownership: every engagement starts with understanding the client\u2019s goals and users, moves through UI/UX design, and continues into frontend development and technical implementation — with Caroline leading each stage directly.',
        },
        {
          heading: 'Technical architecture',
          list: [
            'React + TypeScript for client-facing web applications',
            'Node.js for backend services and APIs',
            'Vercel for deployment and hosting',
            'AI integrations where they add real product value',
          ],
        },
        {
          heading: 'Products shipped',
          body: 'Real, live products built to prove out the studio\u2019s process — from first booking flow to AI-assisted support.',
          products: [
            {
              name: 'MediFlow',
              desc: 'Healthcare booking platform with a 24/7 AI patient assistant.',
              href: 'https://healthbuddy-appointments.lovable.app',
            },
            {
              name: 'Kavaro AI Support',
              desc: 'Embeddable AI support widget trained on a business\u2019s own docs.',
              href: 'https://kavaro-support-ai.lovable.app',
            },
            {
              name: 'BookFlow',
              desc: 'Booking & operations dashboard for Kenyan service businesses.',
              href: 'https://my-biz-bookings.lovable.app',
            },
          ],
        },
        {
          heading: 'Development process',
          body: 'Each project moves through discovery, design, and build phases, with Caroline carrying product context across all three as the team executes — reducing the handoff loss that usually happens between separate designers and developers.',
        },
        {
          heading: 'Challenges',
          list: [
            'Coordinating design and engineering decisions across a growing team',
            'Scoping engagements clearly as the studio takes on its first clients',
            'Staying current across both design tooling and engineering stacks',
          ],
        },
        {
          heading: 'Lessons learned',
          body: 'Owning a project end-to-end — from product strategy through shipped code — produces sharper decisions than handing pieces of it off between separate vendors. Bringing on a team meant translating that same ownership into shared context, not losing it.',
        },
      ]}
    />
  )
}