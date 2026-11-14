import type { Cta, Seo, TitleText } from './types';

export const seo: Seo = {
  title: 'Car & Auto Repair in Willow Springs, IL | Sandi Auto & Truck',
  description:
    'Auto repair for cars, SUVs and light trucks in Willow Springs, IL. Brakes, check engine lights, A/C and oil changes. Most repairs are done the same day.',
};

export const hero = {
  crumb: 'Auto Repair',
  title: 'Auto repair in Willow Springs, IL',
  lead: 'We fix cars, SUVs and light trucks of every make, from oil changes to engine replacements. Most repairs are done the same day.',
  facts: ['Foreign and domestic', 'Most repairs same day', 'Clear pricing up front'],
};

export const services = {
  title: 'What we work on',
  intro: 'All of it is done in our Willow Springs shop, close to Justice, Hickory Hills, Burr Ridge, Countryside, Hodgkins and Palos Hills.',
  items: [
    { title: 'Engine diagnostics and repair', text: 'We find the cause of a check engine light, rough idle or stalling, then fix it.' },
    { title: 'Brake service and replacement', text: 'We check pads, rotors, calipers and brake fluid, then replace only what’s worn.' },
    { title: 'Transmission service', text: 'We service and repair transmissions that slip, shift hard or hesitate going into gear.' },
    { title: 'A/C and heating repair', text: 'If the A/C blows warm or the heat won’t come up, we find out why and fix it.' },
    { title: 'Tire rotation, balancing and replacement', text: 'Rotation evens out tread wear, balancing smooths out a shake, and we replace worn tires.' },
    { title: 'Oil changes and fluid checks', text: 'We change the oil and check your coolant, brake fluid and other fluids.' },
    { title: 'Suspension and steering repair', text: 'We track down clunks, a bouncy ride or loose steering and replace worn parts.' },
  ] satisfies TitleText[],
  callCard: {
    title: 'Not sure what it needs?',
    text: 'That’s our job. Call and tell us what it’s doing, and we’ll take it from there.',
  },
};

export const signs = {
  title: 'Signs your car needs a mechanic',
  text: 'A small problem caught early is usually a smaller repair. If you notice any of these, call us and describe it.',
  rows: [
    { title: 'Grinding, squealing or clunking', text: 'Often worn brakes or suspension parts. Tell us when you hear it and we’ll know where to start.' },
    { title: 'Check engine light is on', text: 'It can mean anything from a loose gas cap to a serious fault. If it’s flashing, call us right away.' },
    { title: 'Shaking or pulling to one side', text: 'Shaking at speed is often wheel balance. Pulling can be tires, brakes or steering. Call and we’ll find out which.' },
    { title: 'Filling up more often', text: 'A sudden drop in gas mileage can point to the engine or exhaust. Call and tell us what changed.' },
    { title: 'Soft or spongy brake pedal', text: 'This can mean low fluid, air in the lines or worn pads. Brakes shouldn’t wait, so call us.' },
  ] satisfies TitleText[],
};

export const expect = {
  title: 'What to expect',
  reasons: [
    { title: 'Family-owned and local', text: 'We’re a family-owned Willow Springs shop with over 16 years in business, and our team has 65+ years of combined experience.' },
    { title: 'We explain the work', text: 'Tell us what you’re seeing or hearing. We’ll walk you through what we found and what the repair involves, in plain terms.' },
    { title: 'Clear pricing before we start', text: 'You get a clear price before any work starts, and we charge only for repairs your vehicle needs.' },
  ] satisfies TitleText[],
};

export const cta: Cta = {
  title: 'Ready to bring it in?',
  text: 'Call and describe what it’s doing, or send a request. We’ll set a time to look at it.',
};
