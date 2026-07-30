import CaseStudyLayout from '../components/CaseStudyLayout.jsx'

export default function WeddingPlannerCaseStudy() {
  return (
    <CaseStudyLayout
      title="Wedding Planner App"
      subtitle="A single home base for wedding planning — budget, guests, tasks, and inspiration in one place."
      image="/projects/wedding-planner/dashboard.png"
      meta={[
        { label: 'Role', value: 'UX/UI Designer' },
        { label: 'Tools', value: 'Figma' },
        { label: 'Type', value: 'Product design case study' },
      ]}
      gallery={[
        { src: '/projects/wedding-planner/budget.png', alt: 'Budget tracker with itemized expenses' },
        { src: '/projects/wedding-planner/guests.png', alt: 'Guest management with RSVP status tabs' },
        { src: '/projects/wedding-planner/tasks.png', alt: 'Task checklist with search and progress' },
        { src: '/projects/wedding-planner/inspiration.png', alt: 'Inspiration board by wedding style' },
      ]}
      sections={[
        {
          heading: 'Overview',
          body: 'Wedding planning generates a lot of moving, emotionally-loaded information at once — who\u2019s coming, what\u2019s been paid for, what\u2019s left to do, and what the day should even look like. Most couples end up managing this across disconnected tools: a spreadsheet for budget, a notes app for tasks, a Pinterest board for inspiration, and a group chat for guest RSVPs. This app consolidates those four pillars — Event, Tasks, Inspiration, and Guests — into one place, anchored by a dashboard that gives couples an at-a-glance read on where things stand.',
        },
        {
          heading: 'Goals',
          list: [
            'User goal: see the full picture of the wedding without opening four different apps',
            'User goal: feel a sense of progress, not just a list of what\u2019s left',
            'User goal: track spending against a real budget, itemized by category',
            'Business goal: anchor daily/weekly return visits with a dashboard that feels personal, not purely functional',
          ],
        },
        {
          heading: 'User flow',
          body: 'The primary journey follows a dashboard-first pattern: open the app to the Event dashboard, see budget, guests, and task progress at a glance, drill into a specific area to take an action (log an expense, check an RSVP, complete a task), then return to the dashboard where the numbers reflect the update.',
        },
        {
          heading: 'Key features',
          list: [
            'Event dashboard — couple\u2019s names, date, venue, live budget figure, guest progress, task-completion ring, and an inspiration board preview in one scroll',
            'Task checklist — searchable wedding to-dos with checkbox completion and a floating add button',
            'Budget tracker — total vs. remaining budget with a progress bar, itemized by category with paid/unpaid status',
            'Guest management — RSVP tracking split into Going / Pending / Declined tabs with expandable guest rows',
            'Inspiration board — browsable wedding styles (beach, outdoor, indoor) with full-bleed photography',
          ],
        },
        {
          heading: 'Design decisions',
          body: 'A script/serif typeface carries emotionally personal content — the couple\u2019s names, "Our Story," section titles — while a bold, plain sans-serif handles functional content like lists, numbers, and actions. Layout leans on cards for the dashboard\u2019s at-a-glance summaries and lists for the detail screens, tied together by a persistent four-tab bottom navigation.',
        },
        {
          heading: 'Challenges',
          list: [
            'Consolidating dense information (budget, guests, tasks, inspiration) on one dashboard without overwhelming the user',
            'Accent colors currently vary by section (pink for tasks, gold/green for budget, pink/black for guests) — unifying this into one deliberate color system is the clearest next step toward feeling like one cohesive product',
            'Balancing emotional, personal moments with operational, data-heavy screens in the same product',
          ],
        },
        {
          heading: 'Outcome',
          body: 'The result replaces the spreadsheet-plus-notes-app-plus-Pinterest-board approach most couples default to, with a dashboard that makes wedding planning feel trackable rather than like an open-ended list of unfinished tasks.',
        },
        {
          heading: 'Reflection',
          body: 'The clearest lesson from this project was how much a single dashboard can do to make a complex process feel manageable — but also how quickly visual consistency (especially color) needs a system once a product has more than two or three screens. Next steps would include unifying the color language across sections, adding shared access for both partners, and vendor contact tracking alongside the budget.',
        },
      ]}
    />
  )
}
