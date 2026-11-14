import type { Seo, TitleText } from './types';

export const seo: Seo = {
  title: 'Contact and Hours, Willow Springs, IL | Sandi Auto & Truck',
  description:
    'Call (708) 839-1515 or request an appointment at 8475 Corcoran Rd., Willow Springs, IL. Sandi Auto & Truck is open Monday to Friday, 7:30am to 5:30pm.',
};

export const hero = {
  crumb: 'Contact',
  title: 'Contact and directions',
  lead: 'We’re on Corcoran Rd. in Willow Springs, IL. Call, or send a request and we’ll call you back.',
};

export const form = {
  title: 'Request an appointment',
  intro: 'Tell us what your vehicle is doing and we’ll call you back to set a day and time.',
  serviceOptions: ['Car, SUV or pickup repair', 'Commercial truck repair', 'DPF or DOC cleaning', 'Not sure yet'],
  submit: 'Send request',
  /** Shown in place of the form until the form service is switched on. */
  offTitle: 'Call or email to set a time',
  offText: 'Have the year, make and model ready and tell us what it’s doing. We’ll set a time.',
};

export const next = {
  title: 'What happens next',
  steps: [
    { title: 'Call or send a request', text: 'Tell us the year, make and model, and what it’s doing.' },
    { title: 'We call you back', text: 'We’ll find a time that works for you.' },
    {
      title: 'Bring it in',
      text: 'We give you a clear price before work starts. Most repairs are done the same day.',
    },
  ] satisfies TitleText[],
};

export const thanks = {
  title: 'Thanks, we got your request',
  text: 'We’ll call the number you gave us to set a day and time. If it’s urgent, calling the shop is faster.',
};
