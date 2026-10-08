original_cities = [
  ("Jodhpur", "jodhpur", "Mehrangarh Fort, Sardarpura Market, Shastri Nagar Jodhpur, Chopasni Road, Basni Industrial Area", "handicraft export houses, stone processing industries, heritage hotels, and dense residential sectors", "Chopasni Road, Pal Road, High Court Road, and Mandore Road"),
  ("Udaipur", "udaipur", "Lake Pichola, Fatehsagar Lake Area, Hiran Magri Sectors, Bapu Bazar, City Palace Area", "luxury lake resorts, marble cutting units, handicraft shops, and upscale residential complexes", "NH-8 Bypass Udaipur, Hiran Magri Main Road, and Bapu Bazar Road"),
  ("Kota", "kota", "Talwandi, Landmark City, Kunhari, Rajiv Gandhi Nagar, Coral Park, Kota Railway Station", "coaching institute student hostels, PG blocks, chemical factories, and stone markets", "Jhalawar Road, Baran Road, and Kunhari bypass"),
  ("Ajmer", "ajmer", "Ana Sagar Lake, Hazrat Khwaja Garib Nawaz Dargah, Vaishali Nagar Ajmer, Foy Sagar Road, Kaiser Ganj", "religious tourist hotels, schools, colleges, and old central markets", "Jaipur-Ajmer Highway, Pushkar Road, and Station Road"),
  ("Bikaner", "bikaner", "Junagarh Fort, Kote Gate Market, Vyas Colony, Rani Bazar Industrial Area, Ganga Shahar", "bhujia food processing factories, clay pottery workshops, and traditional housing markets", "Sridungargarh Road, Jaipur Road Bikaner, and Station Road Bikaner"),
  ("Alwar", "alwar", "Siliserh Lake, Scheme No. 2, Manu Marg, Moti Dungri, Alwar Junction Area", "large industrial manufacturing units, retail showrooms, and old city colonies", "Delhi-Jaipur Highway Bypass, Manu Marg, and Jail Circle Road"),
  ("Sikar", "sikar", "Piprali Road Coaching Hub, Nawalgarh Road, Devipura Crossing, Radhakishanpura", "competitive coaching institutes, student PG accommodations, and local grain markets", "Jaipur-Sikar Highway, Nawalgarh Road, and Piprali Road"),
  ("Bhilwara", "bhilwara", "Subhash Nagar Bhilwara, Azad Nagar, Suwana Industrial Zone, Love Garden Road", "textile weaving units, denim processing plants, stone quarries, and commercial trading hubs", "Chittorgarh Road, Ajmer Highway Bhilwara, and Mandal Road"),
  ("Sri Ganganagar", "sri-ganganagar", "Suratgarh Road, Sukhadia Circle, Jawahar Nagar, Ridhi Sidhi Enclave, Grain Mandi Area", "cotton ginning mills, agricultural grain markets, sugar processing, and residential colonies", "Hanumangarh Road, Suratgarh Highway, and Padampur Road"),
  ("Bharatpur", "bharatpur", "Keoladeo National Park Zone, Circular Road, Ranjit Nagar, Mathura Gate, Industrial Area Extension", "oil extraction mills, handicraft carving units, hotels, and agricultural trade zones", "Agra-Jaipur Highway, Mathura Road, and Circular Road Bharatpur"),
  ("Pali", "pali", "Industrial Area Phase 1-3, Sumerpur Road, Mandia Road, Suraj Pole, Housing Board Sector", "textile dyeing factories, cotton processing units, marble polishing, and housing colonies", "Jodhpur-Pali Highway, Sumerpur Road, and Mandia Road"),
  ("Chittorgarh", "chittorgarh", "Chittorgarh Fort Zone, Collectorate Circle, Segwa Housing Board, Chanderiya Industrial Zone", "cement manufacturing plants, marble carving hubs, heritage tourism, and residential sectors", "Udaipur Highway Chittorgarh, Kota Road, and Collectorate Road"),
  ("Jaisalmer", "jaisalmer", "Jaisalmer Fort Zone, Hanuman Circle, Amar Sagar Road, Transport Nagar, Sunset Point Area", "desert tourism resorts, sandstone carving workshops, wind farm logistics, and local markets", "Jodhpur Highway Jaisalmer, Barmer Road, and Ramgarh Road"),
  ("Tonk", "tonk", "Sunhari Kothi Zone, Subhash Bazar, Banas River Bridge Area, Housing Board Tonk", "leather processing units, agricultural trade centers, melon farming hubs, and residential streets", "Jaipur-Kota Highway, Sawai Madhopur Road, and New Bus Stand Road"),
  ("Jhunjhunu", "jhunjhunu", "Modi Road, Khetri Nagar Link, Churu Road Crossing, Peeru Singh Circle, Housing Board", "copper mining logistics, educational institutions, Shekhawati haveli tourism, and local markets", "Jaipur-Jhunjhunu Highway, Mandawa Road, and Khetri Road"),
  ("Hanumangarh", "hanumangarh", "Hanumangarh Town Market, Junction Area, Rawatsar Road, Industrial Focal Point", "rice husking mills, cotton spinning units, brick kilns, and agricultural colonies", "Abohar Highway, Sri Ganganagar Road, and Town-Junction Road")
]

output_code = "export const cities = [\n"

for name, slug, landmarks, market_type, roads in original_cities:
    title = f"Scrap Dealer in {name} | Best Scrap Buyer & Collection {name}"
    keywords = f"Scrap Dealer in {name}, Scrap Buyer in {name}, Kabadiwala in {name}, Scrap Collection {name}, Industrial Scrap {name}"
    
    overview = f"{name} is a major commercial, industrial, and cultural center in Rajasthan. Featuring {market_type}, {name} produces continuous volumes of industrial scrap metals, commercial cardboard packaging, electrical wiring, paper raddi, and machinery scrap. Balaji Kabadi Wala connects commercial businesses and bulk scrap sellers in {name} with verified buyers, market rate pricing, and high-capacity bulk transport logistics."
    
    commercial_trading = f"For industrial factories, commercial establishments, agricultural markets, and institutions in {name}, we facilitate bulk scrap purchasing and heavy material clearance. Whether disposing of structural iron, heavy copper cable scrap, yellow brass fittings, aluminium industrial profiles, or packaging paper, we ensure transparent weight slips and reliable bulk transactions."
    
    scrap_categories_detail = f"Primary scrap categories traded in {name}: Heavy Iron Rods & Structural Steel (₹28–₹38/kg), Commercial Copper Wire (₹550–₹720/kg), Yellow Brass Fittings (₹380–₹460/kg), Industrial Aluminium Scrap (₹125–₹165/kg), Packaging Cardboard & Cartons (₹12–₹15/kg), Commercial E-Waste & Computer Scrap (₹40–₹450/pc), and Heavy Battery Scrap (₹80–₹90/kg)."
    
    logistics_workflow = f"Bulk scrap sellers and industrial units in {name} can request transparent weight verification, truck scale weighbridge slips, and direct bank/UPI payments upon material loading. All collected recyclables are handled through authorized environmental channels for responsible metal and paper processing."
    
    faq_1_q = f"How to contact Balaji Kabadi Wala for bulk scrap in {name}?"
    faq_1_a = f"Call 95097 52549 or WhatsApp our team with your scrap location and approximate quantity in {name} to arrange bulk inspection and pricing."
    
    faq_2_q = f"What type of scrap is purchased in bulk in {name}?"
    faq_2_a = f"We trade industrial iron, structural steel, copper cables, brass fittings, aluminium profiles, packaging cardboard, battery scrap, and commercial e-waste."
    
    faq_3_q = f"Are weighbridge slips provided for commercial scrap in {name}?"
    faq_3_a = f"Yes, we provide official weighbridge slips and transparent documentation for all bulk commercial scrap deals."
    
    faq_4_q = f"How is payment handled for bulk scrap in {name}?"
    faq_4_a = f"Payments are transferred instantly via direct bank transfer or UPI immediately upon weight confirmation and loading."

    output_code += f"""  {{
    name: "{name}",
    slug: "{slug}",
    title: "{title}",
    keywords: "{keywords}",
    landmarks: "{landmarks}",
    market_type: "{market_type}",
    roads: "{roads}",
    details: "{overview}",
    overview: "{overview}",
    commercial_trading: "{commercial_trading}",
    scrap_categories_detail: "{scrap_categories_detail}",
    logistics_workflow: "{logistics_workflow}",
    city_faqs: [
      {{
        q: "{faq_1_q}",
        a: "{faq_1_a}"
      }},
      {{
        q: "{faq_2_q}",
        a: "{faq_2_a}"
      }},
      {{
        q: "{faq_3_q}",
        a: "{faq_3_a}"
      }},
      {{
        q: "{faq_4_q}",
        a: "{faq_4_a}"
      }}
    ]
  }},\n"""

output_code = output_code.rstrip(",\n") + "\n];\n"

with open("data/cities.js", "w", encoding="utf-8") as f:
    f.write(output_code)

print("Successfully enriched data/cities.js with 16 Rajasthan city objects!")
