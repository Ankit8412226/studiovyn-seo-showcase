/**
 * Consistent long-form content styling (SEO + readability)
 * Keeps typography and spacing unified across pages.
 */
export default function SeoProse({ children }) {
  return (
    <div className="mt-10 space-y-6 text-gray-700 font-primary leading-relaxed">
      {children}
    </div>
  );
}


