import type { Seo, TitleText } from './types';

export const seo: Seo = {
  title: 'Contact and Directions | Sandi Auto & Truck Repair, Willow Springs, IL',
  description:
    'Call (708) 839-1515, get directions to 8475 Corcoran Rd. in Willow Springs, IL, or request an appointment online. Open Monday to Friday, 7:30am to 5:30pm.',
};

export const hero = {
  crumb: 'Contact',
  title: 'Contact and directions',
  lead: 'Call, stop by, or send a request and we will call you back to set a time.',
};

export const form = {
  title: 'Request an appointment',
  intro: 'Tell us what is going on and we will call you back to set a time.',
  serviceOptions: ['Car or SUV repair', 'Truck repair', 'DPF or DOC cleaning', 'Not sure yet'],
  submit: 'Send request',
  /** Shown in place of the form until the form service is switched on. */
  offTitle: 'Book by phone or email',
  offText: 'Tell us about the vehicle and what is going on, and we will set a time.',
};

export const next = {
  title: 'What happens next',
  steps: [
    { title: 'Send a request or call', text: 'Tell us about the vehicle and what is going on.' },
    { title: 'We call you back', text: 'We set a time that works for you.' },
    { title: 'Bring it in', text: 'Most repairs and maintenance services are completed the same day.' },
  ] satisfies TitleText[],
};

export const thanks = {
  title: 'Thanks, we got your request',
  text: 'We will call you back to set a time. If it is urgent, calling the shop is faster.',
};
