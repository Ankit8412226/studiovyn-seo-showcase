/**
 * Consistent long-form content styling (SEO + readability)
 * Keeps typography and spacing unified across pages.
 */
export default function SeoProse({ children }) {
  return (
    <div className="mt-10 space-y-6 text-[#94a3b8] font-primary leading-relaxed">
      {children}
    </div>
  );
}
