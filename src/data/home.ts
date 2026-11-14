import type { Seo, TitleText } from './types';

export const seo: Seo = {
  title: 'Auto and Truck Repair in Willow Springs, IL | Sandi Auto & Truck',
  description:
    'Family-owned auto and truck repair in Willow Springs, IL. Cars, SUVs, medium and heavy-duty trucks, and DPF and DOC filter cleaning. Most repairs done the same day.',
};

export const hero = {
  title: 'Honest repairs, usually done the same day.',
  lead: 'Sandi Auto & Truck is a family-owned shop in Willow Springs. We have kept Chicagoland’s cars, SUVs and work trucks on the road for over 16 years, with fast, reliable and affordable repairs.',
  facts: ['Family-owned', '65+ years of combined experience', 'Foreign and domestic'],
};

export const services = {
  title: 'What can we help with?',
  intro:
    'From oil changes to complete engine replacements, on compact cars, family SUVs, and light, medium and heavy-duty trucks.',
  cards: [
    {
      icon: 'car',
      title: 'Cars and SUVs',
      text: 'Daily commuters, family SUVs and light-duty trucks, all makes and models. Repairs that are meant to last.',
      items: [
        'Oil changes and fluid checks',
        'Brake service and replacement',
        'Engine diagnostics and repair',
        'A/C and heating repair',
        'Tires, suspension and steering',
      ],
      link: { label: 'See all auto repair services', href: '/auto-repair/' },
    },
    {
      icon: 'truck',
      title: 'Medium and heavy-duty trucks',
      text: 'Drop the truck off and we handle the rest, all under one roof. Volvo, Freightliner, Kenworth and more.',
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
      title: 'Diesel filter cleaning (DPF and DOC)',
      text: 'Seeing “DPF full” or “load limit reached”? Cleaning the filter costs far less than replacing it.',
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
  text: 'Most vehicles give you warning signs before a small problem becomes an expensive one. If you notice any of these, bring it by and we will take a look.',
  rows: [
    { title: 'Strange noises', text: 'Grinding, squealing or knocking from the brakes, engine or suspension.' },
    { title: 'Warning lights', text: 'A light on the dashboard that will not go away.' },
    { title: 'Vibrations or pulling', text: 'Usually a sign you need alignment, balancing or brake service.' },
    { title: 'Poor fuel economy', text: 'Can point to a problem with the engine or exhaust.' },
    { title: 'Unresponsive brakes', text: 'A spongy pedal, or brakes that are slow to respond.' },
  ] satisfies TitleText[],
};

export const why = {
  title: 'Why people keep coming back',
  reasons: [
    { title: 'Same day on most jobs', text: 'Most repairs and maintenance services are completed the same day.' },
    { title: 'Upfront pricing, no surprises', text: 'Clear pricing before we start, and we only charge for the repairs you need.' },
    { title: 'Everything done in-house', text: 'Every service is completed in our own shop, with your downtime and budget in mind.' },
    { title: 'We explain the work', text: 'Our team walks you through the process, so you know what we are doing and why.' },
  ] satisfies TitleText[],
};

export const reviewsTitle = 'What our customers say';

export const visit = {
  title: 'Stop by, or give us a call',
};
