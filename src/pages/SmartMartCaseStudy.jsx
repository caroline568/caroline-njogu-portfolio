import CaseStudyLayout from '../components/CaseStudyLayout.jsx'

export default function SmartMartCaseStudy() {
  return (
    <CaseStudyLayout
      title="S Mart"
      subtitle="A grocery shopping and delivery app for Kenyan shoppers — browse, pay with M-Pesa, and track delivery live."
      image="/projects/smart-mart/home.png"
      meta={[
        { label: 'Role', value: 'UX/UI Designer (solo)' },
        { label: 'Tools', value: 'Figma' },
        { label: 'Type', value: 'Product design case study' },
      ]}
      gallery={[
        { src: '/projects/smart-mart/splash.png', alt: 'Onboarding / welcome screen' },
        { src: '/projects/smart-mart/products.png', alt: 'Product browsing by category' },
        { src: '/projects/smart-mart/payment.png', alt: 'Payment method screen with M-Pesa' },
        { src: '/projects/smart-mart/delivery.png', alt: 'Live delivery tracking' },
      ]}
      sections={[
        {
          heading: 'Overview',
          body: 'S Mart is a grocery shopping and delivery app designed for the Kenyan market — letting shoppers browse fresh produce, dairy, meat, and bakery items, check out with locally relevant payment methods, and track their delivery in real time. The home screen greets returning users by name and location ("Welcome Back Carol, Nairobi, Kenya"), grounding the experience in a specific, local context rather than a generic storefront.',
        },
        {
          heading: 'Goals',
          list: [
            'User goal: quickly browse groceries by category with clear, per-unit pricing',
            'User goal: pay using a method that\u2019s actually common locally, not just international card options',
            'User goal: know exactly when a delivery will arrive, not just that it\u2019s "on the way"',
            'Business goal: build repeat usage through personalization (greeting, location) and visible promotions (the "Big Sale" banner on the home screen)',
          ],
        },
        {
          heading: 'User flow',
          body: 'The primary journey runs: Welcome/onboarding \u2192 Home (browse categories, see promotions) \u2192 Product browsing (select items by category with quantity/price shown) \u2192 Payment method (choose Cash, Card, or M-Pesa and enter billing details) \u2192 Live delivery tracking on a map through to drop-off.',
        },
        {
          heading: 'Key features',
          list: [
            'Personalized home screen — greets the shopper by name and location, surfaces a promotional banner, and groups products into clear categories (Fresh Farm Produce, Dairy/Animal Products)',
            'Category-based product browsing — items grouped by Produce, Dairy and Meat, Bakery, and Fruits, each with per-unit or per-kg pricing shown directly on the item',
            'Localized payment options — Cash, Credit Card, and M-Pesa side by side, with a clear "transactions are secure and encrypted" reassurance and a billing address form',
            'Live delivery tracking — a map view showing route, ETA, and current traffic conditions, plus a direct call button to reach the customer',
          ],
        },
        {
          heading: 'Design decisions',
          body: 'The palette leans on green and orange — colors associated with freshness and produce — carried from the splash screen\u2019s logo through to category banners on the home screen. Pricing is shown inline on every product card so a shopper never has to tap in to see cost. The delivery tracking screen borrows a familiar map-and-route pattern from ride-hailing and delivery apps users are already used to, reducing the learning curve for that step.',
        },
        {
          heading: 'Challenges',
          list: [
            'Branding consistency — the splash screen introduces the app as "S Mart," but the home screen\u2019s top navigation currently shows an "opencart" label; unifying this under one consistent brand mark is a clear next fix',
            'Pricing format consistency — different screens show pricing in slightly different formats (e.g. "60ksh/kg" vs. "2 @ 50" vs. "1kg @ 70"); standardizing this would make scanning prices faster and more predictable',
            'Payment trust — asking users to enter card and M-Pesa details requires very deliberate visual trust signals, which the security messaging on the payment screen starts to address but could be strengthened further',
          ],
        },
        {
          heading: 'Outcome',
          body: 'The result is a grocery app that feels built for its actual market — local currency, local payment methods, and a delivery experience that gives real-time confidence instead of a vague "your order is on the way" message.',
        },
        {
          heading: 'Reflection',
          body: 'This project reinforced how much localization shapes good UX beyond just translation — payment methods, currency formatting, and even the tone of a promotional banner all needed to reflect the actual market. The clearest next step is a full design-system pass: unifying branding, pricing formats, and component styles across every screen so the whole app reads as one consistent product rather than a set of individually designed screens.',
        },
      ]}
    />
  )
}
