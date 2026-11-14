import type { Review } from './types';

/**
 * Customer reviews, word for word from the shop's customers.
 * Do not edit the quotes. Add new ones only with the customer's permission.
 */
export const reviews = {
  jenny: {
    quote:
      'I have taken several of the family cars here for the past several years and without exception the experiences have been outstanding. I would highly recommend this place to any one who wants great service, honest value, and really great people.',
    name: 'Jenny',
    context: 'Family cars',
  },
  greg: {
    quote: 'The most honest and hardworking group I have ever dealt with for truck service.',
    name: 'Greg',
    context: 'Truck service',
  },
  adam: {
    quote: 'This is the only place we bring our truck filters. Great pricing and fast turn around time.',
    name: 'Adam',
    context: 'Filter cleaning',
  },
} satisfies Record<string, Review>;

export const allReviews: Review[] = [reviews.jenny, reviews.greg, reviews.adam];
