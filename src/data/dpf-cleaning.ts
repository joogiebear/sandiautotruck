import type { Cta, Seo, TitleText } from './types';

export const seo: Seo = {
  title: 'DPF and DOC Filter Cleaning near Chicago | Sandi Auto & Truck',
  description:
    'DPF and DOC filter cleaning in Willow Springs, IL, for Chicago-area trucks and fleets. Inspected, cleaned on our OTC system, tested and reinstalled. Far cheaper than a new filter.',
};

export const hero = {
  crumb: 'DPF & DOC Cleaning',
  title: 'DPF and DOC filter cleaning',
  lead: 'Seeing “DPF full” or “load limit reached” on the dash? A clogged filter burns more fuel, costs you power and leads to expensive repairs. Cleaning it costs far less than replacing it.',
  facts: ['Cleaned in our own shop', 'Single trucks and whole fleets'],
  photoAlt: 'The OTC diesel particulate filter cleaning system in the shop',
  photoCaption: 'Our OTC Diesel Particulate Filter Cleaning System',
};

/**
 * Quick facts under the hero. Leave `turnaround` and `startingPrice` empty
 * until the shop confirms them. Empty ones are replaced by a "call us" line.
 */
export const facts = {
  turnaround: '',
  startingPrice: '',
  dropOffLabel: 'Drop-off',
  pricingFallbackLabel: 'Pricing and turnaround',
  pricingFallback: 'Call for a quote',
};

export const process = {
  title: 'How filter cleaning works',
  intro: 'Four steps, all done in our shop.',
  steps: [
    { title: 'Detailed inspection', text: 'We check the filter’s condition to choose the best cleaning approach.' },
    { title: 'Cleaning', text: 'We remove the built-up soot, ash and contaminants on our OTC cleaning system.' },
    { title: 'Performance testing', text: 'After cleaning, we test the filter to confirm it is working at full efficiency.' },
    { title: 'Reinstallation', text: 'We reinstall the filter and run a final check on the vehicle.' },
  ] satisfies TitleText[],
};

export const why = {
  title: 'Why clean instead of replace?',
  text: 'A clogged DPF or DOC raises fuel consumption and cuts performance. Regular cleaning restores the filter and keeps the truck earning.',
  rows: [
    { title: 'Cost savings', text: 'Regular, affordable cleaning avoids the high cost of a replacement filter.' },
    { title: 'Better performance', text: 'A clean filter keeps the engine running smoothly.' },
    { title: 'Better fuel economy', text: 'Exhaust gases flow freely, so you burn less fuel.' },
    { title: 'Emissions compliance', text: 'Stay within Illinois emission standards.' },
  ] satisfies TitleText[],
};

export const whatWeClean = {
  title: 'What we clean',
  items: ['Diesel particulate filters (DPF)', 'Diesel oxidation catalysts (DOC)', 'EGR components'],
};

export const whoWeCleanFor = {
  title: 'Who we clean for',
  items: ['Diesel trucks', 'Semi-trucks', 'Commercial fleets', 'Heavy-duty equipment', 'Passenger cars'],
};

export const cta: Cta = {
  title: 'Filter clogged? Bring it in.',
  text: 'Call the shop, or send a request and we will call you back to set a time.',
};
