// LOCATION — told in five chapters, like the film: privacy · education ·
// nature · the city · connectivity. A short intro, the sequence
// (LocationStory), then the practical part: the verified distances and Google
// Maps itself. No schematic map: a drawn map of the district could not be made
// accurately here, and a real map does the job better.

import type { Metadata } from "next";
import LocationStory from "@/components/LocationStory";
import SiteFooter from "@/components/SiteFooter";
import { DIRECTIONS_URL, MAPS_URL } from "@/components/site";

export const metadata: Metadata = {
  title: "Location",
  description:
    "Belmont Road, Bukit Timah, District 10. Sixth Avenue MRT is an eight-minute walk, Bukit Timah Nature Reserve a short drive, and several of Singapore's most established schools are within two kilometres.",
};

// Fictional demo: distances and walking times are illustrative, not survey data.
const BY_CAR: [string, string][] = [
  ["Orchard Road", "Approx. 10 min"],
  ["Pan Island Expressway (PIE)", "Approx. 5 min"],
  ["Marina Bay / CBD", "Approx. 18 min"],
  ["Changi Airport", "Approx. 28 min"],
];

const ON_FOOT: [string, string, string][] = [
  ["Sixth Avenue MRT", "Downtown line", "0.6 km · 8 min walk"],
  ["King Albert Park MRT", "Downtown line", "1.1 km · 13 min walk"],
  ["Bukit Timah Nature Reserve", "Nature park", "10 min drive"],
];

const SCHOOLS = ["Several established primary schools", "Independent and autonomous secondary schools", "International school options", "Full list available on request"];

const label = "font-sans text-[0.6875rem] uppercase tracking-[0.18em] text-stone md:text-xs";
const linkCls = "font-sans text-[0.6875rem] uppercase tracking-[0.18em] text-foreground/90 transition-colors hover:text-foreground md:text-xs";

export default function LocationPage() {
  return (
    <main id="content" className="bg-background text-foreground">
      {/* Intro */}
      <section className="px-[6vw] pb-[12vh] pt-[22vh] md:pb-[14vh] md:pt-[26vh]">
        <p className={label}>Location</p>
        <h1 className="mt-8 max-w-[16ch] font-serif text-[clamp(2rem,4.4vw,4.25rem)] uppercase leading-[1.04] tracking-[0.02em] md:mt-10">
          Secluded by nature. Connected to Singapore.
        </h1>
        <p className="mt-8 max-w-[52ch] font-sans text-sm leading-relaxed text-stone md:text-[0.9375rem]">
          Belmont Road sits quietly within Bukit Timah, lined with mature trees and established homes.
        </p>
        <p className={`mt-8 ${label}`}>
          9 Belmont Road <span aria-hidden="true">·</span> Bukit Timah <span aria-hidden="true">·</span> District 10
        </p>
      </section>

      {/* The five chapters */}
      <LocationStory />

      {/* The practical part: how the address is used, then the map */}
      <section className="px-[6vw] pt-[16vh] md:grid md:grid-cols-12 md:gap-[4vw] md:pt-[22vh]">
        <div className="md:col-span-7">
          <p className={label}>Minutes from the city</p>

          {/* By car */}
          <p className={`mt-10 text-foreground/80 md:mt-12 ${label}`}>By car</p>
          <dl className="mt-6">
            {BY_CAR.map(([name, mins]) => (
              <div key={name} className="flex items-baseline justify-between gap-6 border-b border-stone/15 py-4">
                <dt className="font-sans text-sm text-foreground md:text-[0.9375rem]">{name}</dt>
                <dd className={`whitespace-nowrap text-right ${label}`}>{mins}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 font-sans text-[0.6875rem] leading-relaxed text-stone/80">
            Driving times are approximate and vary with traffic conditions.
          </p>

          {/* On foot */}
          <p className={`mt-14 text-foreground/80 md:mt-16 ${label}`}>On foot</p>
          <dl className="mt-6">
            {ON_FOOT.map(([name, sub, dist]) => (
              <div key={name} className="flex items-baseline justify-between gap-6 border-b border-stone/15 py-4">
                <dt>
                  <span className="font-sans text-sm text-foreground md:text-[0.9375rem]">{name}</span>
                  {sub && <span className={`ml-3 hidden md:inline ${label}`}>{sub}</span>}
                </dt>
                <dd className={`whitespace-nowrap text-right ${label}`}>{dist}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-[10vh] md:col-span-4 md:col-start-9 md:mt-0">
          <p className={label}>Schools within 2 km</p>
          <ul className="mt-6 space-y-3">
            {SCHOOLS.map((s) => (
              <li key={s} className="font-sans text-sm text-foreground/90 md:text-[0.9375rem]">
                {s}
              </li>
            ))}
          </ul>

          {/* The residence on the map */}
          <p className={`mt-14 md:mt-16 ${label}`}>On the map</p>
          <p className="mt-6 font-sans text-sm leading-relaxed text-foreground/90 md:text-[0.9375rem]">
            9 Belmont Road
            <br />
            Singapore 269762
          </p>
          <p className="mt-6 flex flex-col gap-3">
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={linkCls}>
              View on Google Maps <span aria-hidden="true">↗</span>
            </a>
            <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className={linkCls}>
              Get directions <span aria-hidden="true">↗</span>
            </a>
          </p>

          <p className="mt-12 max-w-[36ch] font-sans text-[0.6875rem] leading-relaxed text-stone/80">
            Distances and walking times are illustrative for this fictional demonstration. Photographs of the
            surrounding area show the places named beneath them, not the residence.
          </p>
        </div>
      </section>

      <div className="pb-[12vh] md:pb-[16vh]" />
      <SiteFooter />
    </main>
  );
}
