// The disclaimer that must appear wherever the site is shown: this is a
// fictional demonstration, not a real listing. Used by the inner-page footer
// and by the Signature at the end of the film, so the wording lives in one
// place.

export default function Colophon({ className = "" }: { className?: string }) {
  return (
    <p className={`max-w-[70ch] font-sans text-[0.6875rem] leading-relaxed text-stone/80 ${className}`}>
      This is a fictional demonstration project created for portfolio purposes only. Cassia Hollow&rsquo;s name,
      address, pricing and stated facts are invented and do not depict, represent or relate to any real property,
      development, listing or business. Images of the residence are artist&rsquo;s impressions. Plans are
      diagrammatic and not to scale.
    </p>
  );
}
