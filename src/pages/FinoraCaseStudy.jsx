import CaseStudyLayout from '../components/CaseStudyLayout.jsx'

export default function FinoraCaseStudy() {
  return (
    <CaseStudyLayout
      title="Finora"
      subtitle="An AI-powered financial coach for everyday Kenyans."
      image="/projects/finora-promo.png"
      meta={[
        { label: 'Role', value: 'Product strategy, UX, frontend engineering, AI integration' },
        { label: 'Stack', value: 'React, TypeScript, Supabase, Tailwind CSS' },
        { label: 'Status', value: 'In progress — building in public' },
      ]}
      sections={[
        {
          heading: 'Problem',
          body: 'Many people struggle with managing money because financial tools are often complicated, generic, or disconnected from everyday realities — especially for informal workers, salaried employees, and students in Kenya whose income and expenses don\u2019t look like a standard budgeting app\u2019s assumptions.',
        },
        {
          heading: 'Research & user needs',
          body: 'Everyday Kenyan users need financial guidance that speaks their language — literally and financially. That means supporting irregular income (daily, weekly, business income, not just fixed salaries), making savings goals and debt tracking feel achievable rather than punitive, and surfacing insights in plain, practical terms rather than dense charts.',
          list: [
            'Informal workers with variable daily/weekly income',
            'Salaried employees managing fixed monthly budgets',
            'Students learning to manage money for the first time',
          ],
        },
        {
          heading: 'Design decisions',
          body: 'The interface centers on a single, clear view of financial health — balance, income, expenses, savings, and debt in one place — rather than splitting these across disconnected screens. An AI coach sits alongside this view, offering proactive, specific suggestions instead of static reports.',
        },
        {
          heading: 'Technical architecture',
          list: [
            'React + TypeScript frontend for a fast, type-safe UI',
            'Supabase for auth, database, and real-time data',
            'Tailwind CSS for a consistent, themeable design system',
            'AI-powered coaching layer for personalized financial guidance',
          ],
        },
        {
          heading: 'Development process',
          body: 'Built in public, feature by feature — starting with the financial command center and income tracking, then layering in savings goals, debt management, and AI-driven recommendations. Each feature is shaped by real user scenarios drawn from Kenyan financial habits rather than assumptions carried over from Western fintech products.',
        },
        {
          heading: 'Challenges',
          list: [
            'Designing for irregular, non-salaried income patterns',
            'Making AI guidance feel genuinely useful rather than generic',
            'Balancing simplicity for first-time budgeters with depth for power users',
          ],
        },
        {
          heading: 'Lessons learned',
          body: 'Financial tools succeed or fail on trust and relevance, not feature count. The most valuable design and engineering decisions were the ones that made Finora feel like it understood the Kenyan financial context specifically, rather than a generic budgeting app translated into a new market.',
        },
      ]}
    />
  )
}
