import Script from "next/script";

export default function Page({ params }) {
  const pageTitle = `GGMV Services - ${params.slug.replace("-", " ")}`;
  const pageUrl = `http://localhost:3000/${params.slug}`;

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": pageTitle,
    "url": pageUrl,
    "description": `Learn more about ${params.slug.replace("-", " ")} services at GGMV.`,
    "publisher": {
      "@type": "Organization",
      "name": "GGMV Services",
      "url": "http://localhost:3000",
    },
  };

  return (
    <div className="p-6">
      {/* ✅ JSON-LD is added here */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />
      
      <h1 className="text-3xl font-bold">Welcome to {params.slug.replace("-", " ")}</h1>
      <p className="text-lg">This is the {params.slug.replace("-", " ")} page.</p>
    </div>
  );
}
