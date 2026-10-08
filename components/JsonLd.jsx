export default function JsonLd({ locality, city, blog }) {
  const verifiedLocalities = [
    "Mansarovar", "Vaishali Nagar", "Amrapali Circle", "Malviya Nagar", "Pratap Nagar",
    "Sanganer", "Raja Park", "Jagatpura", "Vidhyadhar Nagar", "Tonk Road",
    "Gopalpura", "Durgapura", "Adarsh Nagar", "Nirman Nagar", "C Scheme",
    "MI Road", "Bani Park", "Jhotwara", "Sitapura", "Bapu Nagar",
    "Sodala", "Civil Lines", "Murlipura", "Shastri Nagar", "Chitrakoot",
    "Ajmer Road", "Kukas", "Muhana"
  ];

  // ONLY verified business location profiles for sameAs entity disambiguation
  const verifiedSameAs = [
    "https://share.google/sZlWMRMg87CrNgT66"
  ];

  const currentArea = locality ? locality.name : (city ? city.name : "Jaipur");
  const currentUrl = locality 
    ? `https://balajibestkabadiwala.in/${locality.slug}`
    : (city 
        ? `https://balajibestkabadiwala.in/${city.slug}`
        : (blog 
            ? `https://balajibestkabadiwala.in/blog/${blog.slug}`
            : "https://balajibestkabadiwala.in/"));

  const pageTitle = locality
    ? `Kabadiwala in ${locality.name} Jaipur | Doorstep Scrap Pickup`
    : (city 
        ? `Scrap Dealer in ${city.name} | Scrap Collection Service`
        : (blog 
            ? `${blog.title} | Balaji Kabadi Wala Jaipur`
            : "Best Kabadi Wala in Jaipur | Doorstep Scrap Pickup"));

  const pageDescription = locality
    ? `Looking for a trusted Kabadiwala in ${locality.name} Jaipur? Book free doorstep scrap pickup with digital scales & instant payment.`
    : (city 
        ? `Leading Scrap Dealer in ${city.name}. Bulk commercial & industrial scrap buying with instant payment and certified weighbridge slips.`
        : (blog 
            ? blog.excerpt
            : "Looking for the best Kabadi Wala in Jaipur? Book doorstep scrap pickup for paper, metal, plastic, e-waste and more at competitive rates."));

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RecyclingCenter",
        "@id": "https://balajibestkabadiwala.in/#organization",
        "name": "Balaji Best Kabadi Wala",
        "alternateName": "Best Kabadi Wala in Jaipur",
        "url": "https://balajibestkabadiwala.in/",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://balajibestkabadiwala.in/#logo",
          "url": "https://balajibestkabadiwala.in/logo.webp",
          "caption": "Balaji Best Kabadi Wala Logo"
        },
        "image": "https://balajibestkabadiwala.in/saurabh_kabadi_wala_hero.webp",
        "telephone": "+919509752549",
        "priceRange": "₹12 - ₹1150 / kg",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Main Market, VT Road, Mansarovar",
          "addressLocality": "Jaipur",
          "addressRegion": "Rajasthan",
          "postalCode": "302020",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "26.9076",
          "longitude": "75.7381"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "07:00",
            "closes": "21:00"
          }
        ],
        "areaServed": verifiedLocalities.map(area => ({
          "@type": "AdministrativeArea",
          "name": `Kabadiwala in ${area} Jaipur`
        })),
        "knowsAbout": [
          "Scrap Recycling", "Kabadiwala Services", "Scrap Collection", "Scrap Pickup",
          "Metal Recycling", "Paper Recycling", "Plastic Recycling", "E-Waste Recycling",
          "Cardboard Recycling", "Household Scrap Collection", "Commercial Scrap Collection",
          "Industrial Scrap Collection"
        ],
        "sameAs": verifiedSameAs
      },
      {
        "@type": "WebSite",
        "@id": "https://balajibestkabadiwala.in/#website",
        "url": "https://balajibestkabadiwala.in/",
        "name": "Balaji Best Kabadi Wala",
        "publisher": {
          "@id": "https://balajibestkabadiwala.in/#organization"
        },
        "inLanguage": "en-IN"
      },
      {
        "@type": "WebPage",
        "@id": `${currentUrl}#webpage`,
        "url": currentUrl,
        "name": pageTitle,
        "description": pageDescription,
        "isPartOf": {
          "@id": "https://balajibestkabadiwala.in/#website"
        },
        "about": {
          "@id": "https://balajibestkabadiwala.in/#organization"
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://balajibestkabadiwala.in/saurabh_kabadi_wala_hero.webp"
        }
      },
      {
        "@type": "Service",
        "@id": `${currentUrl}#service`,
        "name": `Doorstep Scrap Pickup in ${currentArea}`,
        "serviceType": "Scrap Collection & Recycling",
        "provider": {
          "@id": "https://balajibestkabadiwala.in/#organization"
        },
        "areaServed": {
          "@type": "City",
          "name": currentArea
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Scrap Categories Accepted",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Newspaper Raddi Scrap" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Packaging Cardboard Scrap" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Plastic Waste Scrap" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Heavy Iron & Steel Scrap" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Copper Wire Scrap" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Yellow Brass Utensil Scrap" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Aluminium Window Scrap" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Electronic E-Waste" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Old Home Appliance Scrap" } }
          ]
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${currentUrl}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://balajibestkabadiwala.in"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": currentArea,
            "item": currentUrl
          }
        ]
      }
    ]
  };

  // Add BlogPosting schema if blog article
  if (blog) {
    schemaData["@graph"].push({
      "@type": "BlogPosting",
      "@id": `${currentUrl}#article`,
      "headline": blog.title,
      "description": blog.excerpt,
      "image": `https://balajibestkabadiwala.in${blog.image || '/saurabh_kabadi_wala_hero.webp'}`,
      "datePublished": "2025-05-01",
      "dateModified": "2026-08-09",
      "author": {
        "@type": "Organization",
        "@id": "https://balajibestkabadiwala.in/#organization",
        "name": "Balaji Best Kabadi Wala"
      },
      "publisher": {
        "@id": "https://balajibestkabadiwala.in/#organization"
      },
      "mainEntityOfPage": currentUrl,
      "articleSection": blog.tag || "Recycling Guide"
    });
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
