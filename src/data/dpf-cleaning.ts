import type { Cta, Seo, TitleText } from './types';

export const seo: Seo = {
  title: 'DPF & DOC Cleaning, Willow Springs, IL | Sandi Auto & Truck',
  description:
    'DPF and DOC cleaning in Willow Springs, IL, for trucks and fleets from the southwest suburbs and the Chicago area. Done in our own shop. Call for a quote.',
};

export const hero = {
  crumb: 'DPF & DOC Cleaning',
  title: 'DPF and DOC cleaning in Willow Springs, IL',
  lead: '“DPF full” on the dash, regens that keep coming back or a truck in derate can all point to a clogged filter. We clean DPFs and DOCs in our own shop for trucks and fleets across the southwest suburbs. Cleaning costs far less than replacing.',
  facts: ['Cleaned in our own shop', 'Single trucks and whole fleets'],
  photoAlt: 'The OTC diesel particulate filter cleaning system in our shop',
  photoCaption: 'Our OTC Diesel Particulate Filter Cleaning System',
};

/**
 * Quick facts under the hero. Leave `turnaround` and `startingPrice` empty
 * until the shop confirms them. Empty ones are replaced by a "call us" line.
 */
export const facts = {
  turnaround: '',
  startingPrice: '',
  dropOffLabel: 'Shop hours',
  pricingFallbackLabel: 'Price and turnaround',
  pricingFallback: 'Call for a quote',
};

export const process = {
  title: 'How DPF and DOC cleaning works',
  intro: 'Four steps, all in our Willow Springs shop.',
  steps: [
    { title: 'Inspection', text: 'We check the filter’s condition first, so we know what we’re working with.' },
    { title: 'Cleaning', text: 'Our OTC cleaning system removes the built-up soot, ash and contaminants.' },
    { title: 'Performance testing', text: 'We test the cleaned filter to confirm it’s working the way it should.' },
    { title: 'Reinstallation', text: 'We reinstall the filter and run a final check before the truck leaves.' },
  ] satisfies TitleText[],
};

export const why = {
  title: 'Why clean instead of replace?',
  text: 'A clogged DPF burns more fuel, cuts power and can put your truck into derate. Cleaning takes out the soot and ash that clog it.',
  rows: [
    { title: 'Lower cost', text: 'Cleaning a filter costs far less than buying a new one.' },
    { title: 'More power', text: 'A clogged filter holds the engine back. A clean one doesn’t.' },
    { title: 'Less fuel', text: 'A clogged filter makes the engine burn more fuel.' },
    { title: 'Emissions system', text: 'A clean filter helps the emissions system do its job.' },
  ] satisfies TitleText[],
};

export const whatWeClean = {
  title: 'What we clean',
  items: ['Diesel particulate filters (DPF)', 'Diesel oxidation catalysts (DOC)', 'EGR components'],
};

export const whoWeCleanFor = {
  title: 'Who we clean for',
  items: ['Diesel trucks', 'Semi-trucks', 'Commercial fleets', 'Heavy-duty equipment', 'Diesel passenger vehicles'],
};

export const cta: Cta = {
  title: 'DPF light on? Call for a quote.',
  text: 'Call and tell us what the truck is doing. You’ll get a clear price before any work starts.',
};
