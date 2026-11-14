import type { Seo, TitleText } from './types';

export const seo: Seo = {
  title: 'Auto & Truck Repair, Willow Springs, IL | Sandi Auto & Truck',
  description:
    'Family-owned auto and truck repair in Willow Springs, IL. We fix cars, SUVs and heavy-duty trucks and clean DPFs. Most repairs are done the same day.',
};

export const hero = {
  title: 'Auto and truck repair in Willow Springs, usually same day.',
  lead: 'Sandi Auto & Truck is a family-owned repair shop in Willow Springs, IL. We fix cars, SUVs and medium and heavy-duty trucks, and we clean diesel filters in-house. Call and tell us what your vehicle is doing.',
  facts: ['Over 16 years in business', '65+ years of combined experience', 'Foreign and domestic'],
};

export const services = {
  title: 'What can we help with?',
  intro:
    'From oil changes to engine replacements, for drivers in Willow Springs and nearby Justice, Hickory Hills, Burr Ridge, Countryside, Hodgkins and Palos Hills.',
  cards: [
    {
      icon: 'car',
      title: 'Cars, SUVs and light trucks',
      text: 'Daily drivers, family SUVs and light-duty trucks, all makes and models. Start here for a check engine light or grinding brakes.',
      items: [
        'Oil changes and fluid checks',
        'Brake service and replacement',
        'Check engine light and engine repair',
        'A/C and heating repair',
        'Tires, suspension and steering',
      ],
      link: { label: 'See all auto repair services', href: '/auto-repair/' },
    },
    {
      icon: 'truck',
      title: 'Medium and heavy-duty trucks',
      text: 'We work on commercial trucks for fleets and owner-operators: Volvo, Freightliner, Kenworth and more, all in our own shop.',
      items: [
        'Engine diagnostics and repair',
        'Clutch and transmission service',
        'Brake systems repair',
        'Suspension and steering',
        'Exhaust, cooling and electrical',
      ],
      link: { label: 'See all truck repair services', href: '/truck-repair/' },
    },
    {
      icon: 'filter',
      title: 'DPF and DOC filter cleaning',
      text: '“DPF full” on the dash, or a truck in derate? We clean the filter in our own shop, and it costs far less than a new one.',
      items: [
        'Diesel particulate filters (DPF)',
        'Diesel oxidation catalysts (DOC)',
        'EGR components',
        'Inspected, cleaned and tested',
        'Single trucks and whole fleets',
      ],
      link: { label: 'How filter cleaning works', href: '/dpf-cleaning/' },
    },
  ],
};

export const signs = {
  title: 'Is your car trying to tell you something?',
  text: 'Most problems give a warning before they get expensive. If you notice any of these, call us and describe it. We’ll take a look before it grows.',
  rows: [
    { title: 'A new noise', text: 'Grinding or squealing when you brake, or a knock from the engine or suspension.' },
    { title: 'A warning light', text: 'A check engine light or other light that won’t go away.' },
    { title: 'Shaking or pulling', text: 'Often points to the tires, brakes, suspension or steering.' },
    { title: 'Worse gas mileage', text: 'More fill-ups can point to an engine or exhaust problem.' },
    { title: 'A soft brake pedal', text: 'A spongy pedal or slow brakes. Don’t wait on this one.' },
  ] satisfies TitleText[],
};

export const why = {
  title: 'Why people keep coming back',
  reasons: [
    { title: 'Same day on most jobs', text: 'Most repairs and maintenance are done the same day, so you’re back on the road sooner.' },
    { title: 'Clear pricing before we start', text: 'You get the price before any work begins, and we only charge for repairs your vehicle needs.' },
    { title: 'All work done in-house', text: 'Every job is done in our own building in Willow Springs, so your vehicle stays in one place.' },
    { title: 'We explain the work', text: 'We tell you what we found, what we’re fixing and why, in plain language.' },
  ] satisfies TitleText[],
};

export const reviewsTitle = 'What our customers say';

export const visit = {
  title: 'Stop by, or give us a call',
};
