import type { Seo, TitleText } from './types';

export const seo: Seo = {
  title: 'About Sandi Auto & Truck Repair | Family-Owned in Willow Springs, IL',
  description:
    'Sandi Auto & Truck Repair is a family-owned shop in Willow Springs, IL, serving Chicagoland for over 16 years with 65+ years of combined experience.',
};

export const hero = {
  crumb: 'About',
  title: 'Family-owned, serving Chicagoland for over 16 years',
  lead: 'Sandi Auto & Truck Repair handles auto repair, diesel repair, brakes, engine diagnostics and transmission work, for cars, SUVs and heavy-duty trucks.',
};

export const stats = [
  { value: '16+', label: 'years serving Chicagoland' },
  { value: '65+', label: 'years of combined experience' },
  { value: 'Same day', label: 'for most repairs and maintenance' },
  { value: 'In-house', label: 'every service, in our own shop' },
];

export const mission = {
  eyebrow: 'Our mission',
  title: 'Fast, reliable and affordable repairs, without compromising on quality.',
  paragraphs: [
    'With a combined 65+ years of industry experience, our team is dedicated to getting your vehicle back on the road quickly and safely.',
    'We complete every service in-house, with your downtime, budget and time frame in mind. Whether you drive a car, an SUV or a heavy-duty truck, we have the expertise and the equipment for a wide range of repairs and maintenance.',
    'When you choose Sandi Auto & Truck Repair, you are choosing a team that cares about your safety and satisfaction.',
  ],
};

export const why = {
  title: 'Why people choose us',
  reasons: [
    { title: 'Convenience', text: 'We make auto repair and maintenance easy and hassle-free.' },
    { title: 'Expert team', text: 'Friendly, professional technicians who handle a wide range of work.' },
    { title: 'Reliability', text: 'We get the job done right the first time.' },
    { title: 'Efficiency', text: 'Most repairs and maintenance services are completed the same day.' },
    { title: 'Customer first', text: 'We keep you informed and get you back on the road fast.' },
  ] satisfies TitleText[],
};

export const reviewsTitle = 'What our customers say';

export const visit = {
  title: 'Come see us',
};
