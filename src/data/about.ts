import type { Seo, TitleText } from './types';

export const seo: Seo = {
  title: 'Family-Owned Willow Springs Repair Shop | Sandi Auto & Truck',
  description:
    'Sandi Auto & Truck Repair is a family-owned repair shop in Willow Springs, IL. In business for over 16 years, with most repairs done the same day.',
};

export const hero = {
  crumb: 'About',
  title: 'A family-owned repair shop in Willow Springs, IL',
  lead: 'Sandi Auto & Truck Repair has been fixing cars and trucks for over 16 years. We work on cars and SUVs, repair medium and heavy-duty trucks and clean diesel filters, all in one building on Corcoran Rd.',
};

export const stats = [
  { value: '16+', label: 'years in business' },
  { value: '65+', label: 'years of combined experience' },
  { value: 'Same day', label: 'for most repairs and maintenance' },
  { value: 'In-house', label: 'all work done in our own building' },
];

export const mission = {
  eyebrow: 'How we work',
  title: 'We tell you the price first and charge only for the repairs your vehicle needs.',
  paragraphs: [
    'Tell us what it’s doing, whether that’s grinding brakes, a check engine light or a truck in derate. We’ll explain what we find and price it before any work starts.',
    'The work stays in our own building. We change the oil in family SUVs, repair Volvo, Freightliner and Kenworth trucks, and clean DPF and DOC filters on our own equipment, all in the same shop. The team doing it has 65+ years of combined experience.',
    'Most repairs and maintenance are finished the same day. We know that matters, whether it’s the car you commute in or the truck you work with.',
  ],
};

export const why = {
  title: 'Why people come here',
  reasons: [
    { title: 'Family-owned', text: 'We’re a family business, and we’ve been at it for over 16 years.' },
    { title: '65+ years combined', text: 'That’s the experience of the team that works on your car or truck.' },
    { title: 'Cars and heavy trucks', text: 'We work on cars, SUVs and light trucks, and on medium and heavy-duty trucks.' },
    { title: 'Filter cleaning on site', text: 'We clean DPF and DOC filters here, on our own cleaning system.' },
    { title: 'Price before work', text: 'We explain the job and give you a clear price before we start.' },
  ] satisfies TitleText[],
};

export const reviewsTitle = 'In our customers’ words';

export const visit = {
  title: 'Call us or come by',
};
