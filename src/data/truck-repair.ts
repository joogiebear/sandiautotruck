import type { Cta, Seo, TitleText } from './types';

export const seo: Seo = {
  title: 'Heavy-Duty Truck Repair, Willow Springs | Sandi Auto & Truck',
  description:
    'Medium and heavy-duty truck repair in Willow Springs, IL, for fleets and owner-operators. Diesel engine, clutch, brake and electrical work in one shop.',
};

export const hero = {
  crumb: 'Truck Repair',
  title: 'Heavy-duty truck repair in Willow Springs',
  lead: 'We repair medium and heavy-duty trucks for fleets and owner-operators in Willow Springs, IL. The work is all done in-house, so your truck isn’t bouncing between shops.',
  facts: ['Volvo, Freightliner, Kenworth and more', 'Fleets and single trucks'],
};

export const services = {
  title: 'Truck services',
  intro: 'Diagnosis through repair, done in our own shop. Not sure what it needs? Tell us what it’s doing.',
  items: [
    { title: 'Engine diagnostics and repair', text: 'We track down the cause of power loss, warning lights and hard starts, then fix it.' },
    { title: 'Clutch and transmission service', text: 'We service and repair clutches and transmissions that slip, grind or shift hard.' },
    { title: 'Brake systems repair', text: 'We inspect and repair brake systems so a loaded truck stops the way it should.' },
    { title: 'Suspension and steering maintenance', text: 'We replace worn suspension and steering parts that cause wander or uneven tire wear.' },
    { title: 'Exhaust system and emissions testing', text: 'We repair exhaust leaks and damaged components, and we do emissions testing.' },
    { title: 'Cooling system maintenance', text: 'We check coolant, hoses and the radiator, and fix leaks before the engine overheats.' },
    { title: 'Electrical system diagnostics', text: 'We trace charging, starting, lighting and wiring faults to the source.' },
  ] satisfies TitleText[],
  callCard: {
    title: 'Truck down right now?',
    text: 'Call while we’re open and tell us what’s going on.',
  },
};

export const oneShop = {
  title: 'One shop, start to finish',
  text: 'A truck that goes to three shops is down three times. We do the diagnosis, the repair and the filter cleaning in our own building, so it makes one stop.',
  rows: [
    { title: 'Makes we know', text: 'Volvo, Freightliner, Kenworth and more. Just ask.' },
    { title: 'Who we work with', text: 'Fleets, owner-operators and businesses running one truck or many.' },
    { title: 'Where we are', text: 'Willow Springs, in the southwest suburbs, close to Justice, Hickory Hills, Burr Ridge, Countryside, Hodgkins and Palos Hills.' },
    { title: 'Diesel filters too', text: 'DPF and DOC cleaning in our shop, on our own OTC cleaning system.' },
  ] satisfies TitleText[],
  link: { label: 'How filter cleaning works', href: '/dpf-cleaning/' },
};

export const why = {
  title: 'Why truck owners choose us',
  reasons: [
    { title: 'An experienced team', text: 'We’re a family-owned shop that has served the area for over 16 years. Our team has 65+ years of combined experience.' },
    { title: 'All done in-house', text: 'Diagnosis, repair and filter cleaning all happen in our own building, so there’s one shop to call.' },
    { title: 'Downtime comes first', text: 'A parked truck earns nothing. With every job done in one building, we work to keep your downtime short.' },
    { title: 'Clear pricing up front', text: 'We price the job before we start and charge only for repairs you need.' },
  ] satisfies TitleText[],
};

export const cta: Cta = {
  title: 'Need your truck back on the road?',
  text: 'Call during shop hours and tell us what it’s doing, or send a request to set a time.',
};
