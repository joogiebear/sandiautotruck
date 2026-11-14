# Sandi Auto & Truck Repair website

The website for Sandi Auto & Truck Repair, 8475 Corcoran Rd., Willow Springs, IL.

It is a static site built with [Astro](https://astro.build). There is no database, no plugins and nothing to keep patched. Each page is plain HTML and CSS, and a full page weighs under 100 KB.

## Pages

| Page | Address | Copy lives in |
| --- | --- | --- |
| Home | `/` | `src/data/home.ts` |
| Auto Repair | `/auto-repair/` | `src/data/auto-repair.ts` |
| Truck Repair | `/truck-repair/` | `src/data/truck-repair.ts` |
| DPF & DOC Cleaning | `/dpf-cleaning/` | `src/data/dpf-cleaning.ts` |
| About | `/about/` | `src/data/about.ts` |
| Contact | `/contact/` | `src/data/contact.ts` |

There is also a thank-you page shown after the form is sent (`/thanks/`) and a "page not found" page.

## Changing the words

All copy is in `src/data/`. You should not need to touch a layout file to change text.

- **Phone, address, hours, email:** `src/data/site.ts`. Change them once and every page, the footer and the search engine data update.
- **Page text, titles and search descriptions:** the file for that page, listed above.
- **Customer reviews:** `src/data/reviews.ts`. These are real quotes, so keep them word for word.

Some facts are deliberately left out until the shop confirms them. Each has an empty slot ready:

- Weekend hours: `hours.weekend` in `src/data/site.ts`.
- DPF cleaning turnaround and starting price: `facts` in `src/data/dpf-cleaning.ts`.
- Link to the Google reviews: `googleReviewsUrl` in `src/data/site.ts`.

## Photos

The only real shop photo so far is the DPF cleaning system (`src/assets/dpf-cleaning-system.jpg`), and it is small. New photos go in `src/assets/`. The page opener (`src/components/Hero.astro`) shows whatever is passed in its `aside` slot beside the heading, which is how the DPF page shows its photo. Images are resized and converted to WebP when the site builds.

Worth taking at the shop: the building and sign from the road, a truck and a car in the bays, the DPF machine with a filter before and after, and the owner and team.

## Working on the site

You need [Node.js](https://nodejs.org) 22.

```sh
npm install      # once
npm run dev      # preview at http://localhost:4321, updates as you save
npm run build    # build the finished site into dist/
npm run preview  # look at the built site
```

## Putting it online (Cloudflare Pages)

1. In the Cloudflare dashboard, go to Workers & Pages, create a Pages project and connect this GitHub repository.
2. Use the Astro preset. Build command `npm run build`, output folder `dist`.
3. Every push to `main` then publishes the site. Every pull request gets its own preview link.

The free plan covers a business site.

## Turn on the appointment form

Until this is done, the site shows "call or email us" buttons where the form goes, so no request can go missing.

1. Go to [web3forms.com](https://web3forms.com) and create an access key using the email address that should receive requests. The free plan allows 250 requests a month.
2. In Cloudflare Pages, open Settings, then Environment variables, and add `PUBLIC_WEB3FORMS_KEY` with that key. For local work, copy `.env.example` to `.env` and put it there.
3. Redeploy, then send a test request from the Contact page.

If spam becomes a problem, Web3Forms supports hCaptcha on the free plan.

## Visitor counts (optional)

Cloudflare Web Analytics is free and uses no cookies. Add its token as `PUBLIC_CF_ANALYTICS_TOKEN` the same way as the form key.

## Before pointing the domain here

- [ ] Confirm the open questions with the shop: weekend hours, DPF price and turnaround, and whether the fax number should stay.
- [ ] Add real photos where you want them.
- [ ] Turn on the appointment form and test it.
- [ ] Write down every existing DNS record for sandiautotruck.com, especially mail records, before changing anything.
- [ ] Add sandiautotruck.com as a custom domain on the Pages project.
- [ ] Check that the old addresses redirect (see `public/_redirects`), for example `/diesel-filters/` should land on `/dpf-cleaning/`.
- [ ] Submit `https://sandiautotruck.com/sitemap-index.xml` in Google Search Console and update the website link on the Google Business Profile.
- [ ] Keep the old WordPress site and a backup for 30 days, then cancel its hosting.

## Where things are

```
public/          files copied as they are: redirects, headers, favicon, robots.txt, share image
src/assets/      logo and photos
src/data/        all the words and business facts
src/components/  page sections: header, footer, cards, form, map
src/layouts/     the page shell, with search engine tags and business details
src/pages/       one file per page
src/styles/      colors, type and shared styles
```
