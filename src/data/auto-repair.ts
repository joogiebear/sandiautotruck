import type { Cta, Seo, TitleText } from './types';

export const seo: Seo = {
  title: 'Car and SUV Repair in Willow Springs, IL | Sandi Auto & Truck',
  description:
    'Car, SUV and light truck repair in Willow Springs, IL. Brakes, engine diagnostics, transmission, A/C, tires, oil changes and suspension. Most repairs done the same day.',
};

export const hero = {
  crumb: 'Auto Repair',
  title: 'Car, SUV and light truck repair',
  lead: 'From routine maintenance to complex repairs, on all makes and models. Most jobs are done the same day.',
  facts: ['All makes and models', 'Foreign and domestic', 'Most repairs same day'],
};

export const services = {
  title: 'What we work on',
  intro: 'Daily commuters, family SUVs and light-duty trucks all get the same careful work.',
  items: [
    { title: 'Engine diagnostics and repair', text: 'Accurate diagnosis and expert repairs to keep your engine running smoothly.' },
    { title: 'Brake service and replacement', text: 'Thorough brake inspections, repairs and replacements to keep you safe.' },
    { title: 'Transmission service', text: 'Expert maintenance and repairs to keep your transmission in top shape.' },
    { title: 'A/C and heating repair', text: 'Reliable A/C and heating service, so you stay comfortable all year.' },
    { title: 'Tire rotation, balancing and replacement', text: 'Regular tire maintenance that extends tire life and improves your ride.' },
    { title: 'Oil changes and fluid checks', text: 'Routine oil changes and fluid top-offs that protect your engine.' },
    { title: 'Suspension and steering repair', text: 'Suspension and steering work for better handling and stability.' },
  ] satisfies TitleText[],
  callCard: {
    title: 'Not sure what it needs?',
    text: 'Tell us what you are seeing or hearing and we will take a look.',
  },
};

export const signs = {
  title: 'Signs your vehicle needs service',
  text: 'Catching wear or damage early saves you time and money. If you notice any of these, bring it by.',
  rows: [
    { title: 'Strange noises', text: 'Grinding, squealing or knocking can point to the brakes, engine or suspension.' },
    { title: 'Warning lights', text: 'A dashboard light can mean anything from a simple sensor error to a serious mechanical issue.' },
    { title: 'Vibrations or pulling', text: 'If the vehicle vibrates or pulls to one side, it may need alignment, balancing or brake service.' },
    { title: 'Poor fuel economy', text: 'A drop in fuel efficiency can be a sign of engine or exhaust system issues.' },
    { title: 'Unresponsive brakes', text: 'If the pedal feels spongy or slow to respond, it is time for a brake check.' },
  ] satisfies TitleText[],
};

export const expect = {
  title: 'What to expect',
  reasons: [
    { title: 'Fixed right the first time', text: 'Accurate diagnosis, quality parts and advanced equipment, so you are not back with the same problem weeks later.' },
    { title: 'We explain the work', text: 'We listen to your concerns and walk you through the repair, so you know exactly what is happening with your vehicle.' },
    { title: 'Upfront pricing, no surprises', text: 'Clear pricing before we start, and we charge only for repairs that are truly necessary.' },
  ] satisfies TitleText[],
};

export const cta: Cta = {
  title: 'Ready to bring it in?',
  text: 'Call the shop, or send a request and we will call you back to set a time.',
};
