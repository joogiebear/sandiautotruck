import type { Cta, Seo, TitleText } from './types';

export const seo: Seo = {
  title: 'Medium and Heavy-Duty Truck Repair, Willow Springs, IL | Sandi Auto & Truck',
  description:
    'Medium and heavy-duty truck repair in Willow Springs, IL, serving Chicago-area fleets and owner-operators. Engine, clutch and transmission, brakes, suspension, exhaust and electrical, under one roof.',
};

export const hero = {
  crumb: 'Truck Repair',
  title: 'Medium and heavy-duty truck repair',
  lead: 'Commercial trucks, fleet vehicles and owner-operator rigs, all handled under one roof so your truck is not bouncing between shops.',
  facts: ['Volvo, Freightliner, Kenworth and more', 'Fleets and single trucks'],
};

export const services = {
  title: 'Truck services',
  intro: 'Everything your truck needs in one location, from diagnostics to final repairs.',
  items: [
    { title: 'Engine diagnostics and repair', text: 'Accurate diagnostics and thorough engine repairs for the best performance.' },
    { title: 'Clutch and transmission service', text: 'Keeps your truck’s transmission in top shape for smooth operation.' },
    { title: 'Brake systems repair', text: 'Regular brake inspections, repairs and replacements to keep you safe.' },
    { title: 'Suspension and steering maintenance', text: 'Suspension and steering repairs that improve handling and stability.' },
    { title: 'Exhaust system and emissions testing', text: 'Exhaust repairs and testing that cut emissions and improve efficiency.' },
    { title: 'Cooling system maintenance', text: 'Regular checks and repairs that prevent overheating and prolong engine life.' },
    { title: 'Electrical system diagnostics', text: 'Advanced diagnostic tools for complex electrical issues.' },
  ] satisfies TitleText[],
  callCard: {
    title: 'Truck down right now?',
    text: 'Call the shop and tell us what is going on.',
  },
};

export const oneShop = {
  title: 'One shop, start to finish',
  text: 'Instead of sending your truck to several repair shops, bring it to us. We manage every step, without multiple appointments or locations.',
  rows: [
    { title: 'Makes we know', text: 'Volvo, Freightliner, Kenworth and more.' },
    { title: 'Who we work with', text: 'Commercial trucks, fleet vehicles and independent drivers.' },
    { title: 'Where we are', text: 'Willow Springs, serving Chicago and the surrounding areas.' },
    { title: 'Diesel filters too', text: 'DPF and DOC cleaning on our own OTC cleaning system.' },
  ] satisfies TitleText[],
  link: { label: 'How filter cleaning works', href: '/dpf-cleaning/' },
};

export const why = {
  title: 'Why truck owners choose us',
  reasons: [
    { title: 'Specialized experience', text: 'Years of work on medium and heavy-duty trucks, with close attention to detail on every job.' },
    { title: 'All-in-one service', text: 'Diagnostics through final repairs in one place, with the tools for complex jobs.' },
    { title: 'Back on the road fast', text: 'Your truck is essential to your business, so we prioritize efficiency and repairs that last.' },
    { title: 'Fair, transparent pricing', text: 'We are clear about the work and the cost before we start.' },
  ] satisfies TitleText[],
};

export const cta: Cta = {
  title: 'Need your truck back on the road?',
  text: 'Call the shop, or send a request and we will call you back to set a time.',
};
