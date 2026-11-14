/**
 * Business facts used on every page. Change a phone number, the hours or the
 * address here and the whole site updates.
 */
const street = '8475 Corcoran Rd.';
const city = 'Willow Springs';
const state = 'IL';
const zip = '60480';
const mapQuery = encodeURIComponent(`Sandi Auto & Truck Repair, ${street}, ${city}, ${state} ${zip}`);

export const site = {
  name: 'Sandi Auto & Truck Repair',
  shortName: 'Sandi Auto & Truck',
  url: 'https://sandiautotruck.com',

  phone: { display: '(708) 839-1515', href: 'tel:+17088391515', schema: '+1-708-839-1515' },
  fax: { display: '(708) 839-0650', schema: '+1-708-839-0650' },
  email: 'sandiautotruck@gmail.com',

  address: { street, city, state, zip, cityLine: `${city}, ${state} ${zip}`, oneLine: `${street}, ${city}, ${state} ${zip}` },

  hours: {
    /** Shown in the small "open" pill and the footer. */
    summary: 'Open weekdays, 7:30am to 5:30pm',
    days: 'Monday to Friday',
    time: '7:30am to 5:30pm',
    /** Leave empty until the shop confirms weekend hours, e.g. 'Saturday and Sunday: closed'. */
    weekend: '',
    /** 24-hour times for search engines. */
    opens: '07:30',
    closes: '17:30',
    schemaDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  },

  directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`,
  mapEmbedUrl: `https://www.google.com/maps?q=${mapQuery}&output=embed`,

  /** Paste the shop's Google Business Profile reviews link here to show a "Read our Google reviews" link. */
  googleReviewsUrl: '',

  /** Appointment form. See README, "Turn on the appointment form". */
  form: {
    action: 'https://api.web3forms.com/submit',
    accessKey: import.meta.env.PUBLIC_WEB3FORMS_KEY ?? '',
  },

  /** Optional Cloudflare Web Analytics token. */
  analyticsToken: import.meta.env.PUBLIC_CF_ANALYTICS_TOKEN ?? '',

  nav: [
    { label: 'Auto Repair', href: '/auto-repair/' },
    { label: 'Truck Repair', href: '/truck-repair/' },
    { label: 'DPF & DOC Cleaning', href: '/dpf-cleaning/' },
    { label: 'About', href: '/about/' },
    { label: 'Contact', href: '/contact/' },
  ],

  /** Where "Request an appointment" buttons go. */
  requestHref: '/contact/#request',
};

export type Site = typeof site;
