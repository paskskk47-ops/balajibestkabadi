import json

localities_raw = [
  ("Mansarovar", "mansarovar", "VT Road, Shipra Path, Patel Marg, Kaveri Path, Varun Path, Sector 1-12", "residential housing boards, coaching institutes, schools, retail shops, and commercial plazas", "VT Road, Shipra Path, Patel Marg, New Aatish Market Road, and Madhyam Marg"),
  ("Vaishali Nagar", "vaishali-nagar", "Amrapali Circle, Queens Road, Nursery Circle, Hanuman Nagar, Gandhi Path", "upscale residential bungalows, luxury showrooms, corporate offices, and cafes", "Queens Road, Amrapali Marg, Gandhi Path, and Sirsi Road"),
  ("Amrapali Circle", "amrapali-circle", "Amrapali Plaza, Vaishali Circle, Block A-C Amrapali, National Handloom Zone", "high-density commercial showrooms, corporate offices, dining spots, and residential flats", "Amrapali Marg, Queens Road Crossing, and Gandhi Path"),
  ("Malviya Nagar", "malviya-nagar", "World Trade Park (WTP), Gaurav Tower (GT), Sector 1-13, Calgiri Marg, Apex Circle", "major commercial shopping malls, IT offices, residential blocks, and educational hubs", "Calgiri Marg, Apex Circle Road, JLN Marg, and Malviya Nagar Flyover Road"),
  ("Jagatpura", "jagatpura", "SKIT College Road, Ramnagaria, Bombay Hospital Circle, NRI Colony, Mahal Road", "educational institutes, high-rise apartment complexes, student PGs, and residential colonies", "Mahal Road, SKIT College Road, Ramnagaria Road, and Jagatpura Flyover Road"),
  ("Raja Park", "raja-park", "LBS College Road, Panchwati Circle, Tilak Nagar Border, Raja Park Main Market", "bustling commercial markets, retail clothing stores, food eateries, and dense residential houses", "Govind Marg, Fashion Street, LBS College Road, and Tilak Nagar Main Road"),
  ("Bapu Nagar", "bapu-nagar", "Rajasthan University Zone, Mangal Marg, Janta Store Circle, Bhagwan Das Road", "university staff quarters, student libraries, corporate offices, and quiet residential bungalows", "Mangal Marg, JLN Marg Link, and University Road"),
  ("Sanganer", "sanganer", "Sanganer Airport Zone, Tonk Road Crossing, Textile Print Market, Stadium Road", "hand-block printing factories, paper manufacturing units, retail markets, and housing sectors", "Tonk Road, Sanganer Town Road, and Airport Terminal Link Road"),
  ("Tonk Road", "tonk-road", "Glass Tower, Chokhi Dhani Zone, Vasundhara Colony, B2 Bypass Crossing", "commercial office towers, hotels, vehicle showrooms, and prime residential colonies", "Tonk Road Main Highway, B2 Bypass, and Gopalpura Bypass Crossing"),
  ("Pratap Nagar", "pratap-nagar", "RIICO Industrial Area, Sector 1-28, Haldi Ghati Marg, coaching hub zone", "large RIICO manufacturing plants, educational institutions, student hostels, and housing board flats", "Haldi Ghati Marg, Kumbha Marg, Tonk Road, and RIICO Main Road"),
  ("Jhotwara", "jhotwara", "Kanta Kathju Circle, Niwaru Road, Lata Circle, Kalwar Road Crossing, Industrial Area", "industrial machinery units, dense residential colonies, local markets, and grain trading hubs", "Kalwar Road, Niwaru Road, Lata Circle Road, and Jhotwara Flyover"),
  ("C Scheme", "c-scheme", "Ahinsa Circle, Ashok Nagar, Subhash Marg, Bhagwan Das Road, Panch Batti", "premium corporate offices, government institutions, heritage hotels, and high-end residential flats", "Bhagwan Das Road, Subhash Marg, Sardar Patel Marg, and JLN Marg"),
  ("Adarsh Nagar", "adarsh-nagar", "Govind Marg, Pink City Border, Frontier Colony, Moti Dungri Zone", "traditional commercial markets, handicraft stores, schools, and old residential housing sectors", "Govind Marg, Agra Road Crossing, and Moti Dungri Road"),
  ("Civil Lines", "civil-lines", "CM Residence Zone, Jacob Road, Hawa Sadak, Railway Officer Colony", "high-security government bungalows, luxury apartments, corporate offices, and heritage properties", "Jacob Road, Hawa Sadak, Ajmer Road, and Civil Lines Metro Station Road"),
  ("Ajmer Road", "ajmer-road", "DCM Crossing, 200 Feet Bypass, Purani Chungi, Heerapura Power Grid Zone", "major automotive showrooms, logistics warehouses, residential societies, and commercial towers", "Ajmer Road Highway, 200 Feet Bypass, DCM Road, and Gopalpura Bypass Link"),
  ("Nirman Nagar", "nirman-nagar", "DCM Market, Janpath, Kings Road Crossing, Shyam Nagar Border", "corporate offices, private clinics, modern residential bungalows, and retail showrooms", "Janpath, Kings Road, Ajmer Road Link, and Shyam Nagar Main Road"),
  ("Gopalpura", "gopalpura", "Gopalpura Bypass, Coaching Hub Circle, Triveni Nagar, Mahesh Nagar", "major competitive coaching centers, student hostels, PG blocks, and residential sector houses", "Gopalpura Bypass Road, Triveni Nagar Main Road, and Tonk Road Flyover"),
  ("Durgapura", "durgapura", "Durgapura Railway Station, Agriculture Research Zone, Mahavir Nagar, Tonk Road Link", "railway residential quarters, agricultural research centers, hotels, and quiet housing colonies", "Tonk Road Durgapura, Maharani Farm Road, and Station Road"),
  ("Chitrakoot", "chitrakoot", "Chitrakoot Stadium, Vaishali West, Sector 1-10, Akshardham Temple Zone", "sports facilities, premium residential societies, schools, and local shopping plazas", "Chitrakoot Main Road, Vaishali Link Road, and Ajmer Highway Bypass"),
  ("Kukas", "kukas", "RIICO Industrial Zone Kukas, Engineering Colleges Hub, Delhi Highway Resorts", "heavy manufacturing plants, engineering college campuses, luxury resorts, and hotel properties", "Delhi-Jaipur Highway NH-48, RIICO Industrial Road, and Amer Bypass"),
  ("Muhana", "muhana", "Muhana Mandi Terminal, ISKCON Temple Zone, Sanganer West Link, Hajawala", "Asia's largest fruit and vegetable wholesale mandi, agricultural trade hubs, and new housing projects", "Muhana Mandi Road, ISKCON Temple Road, and Diggi Malpura Highway"),
  ("Vidhyadhar Nagar", "vidhyadhar-nagar", "Sector 1-10, Central Spine Market, National Vidhyadhar Park, Alka Cinema Circle", "well-planned residential sectors, commercial spine shopping plazas, schools, and hospitals", "Sikar Road, Central Spine Road, Vidhyadhar Ring Road, and Spine Flyover"),
  ("MI Road", "mi-road", "Panch Batti, Raj Mandir Cinema Zone, Jayanti Market, Ajmeri Gate, Khasa Kothi", "Jaipur's iconic prime commercial boulevard, electronics trading hubs, jewelry shops, and heritage hotels", "Mirza Ismail (MI) Road, Station Road, and Station Circle"),
  ("Bani Park", "bani-park", "Collectorate Circle, Kanti Nagar, Kabir Marg, DLS Colony, Station Road Link", "heritage hotel properties, transport logistics hubs, corporate offices, and spacious residential homes", "Kabir Marg, Station Road, Collectorate Circle, and Sawai Jai Singh Highway"),
  ("Sitapura", "sitapura", "RIICO Industrial Area Phase 1-4, JECC Convention Centre, Mahatma Gandhi Hospital Zone", "Jaipur's largest industrial manufacturing hub, export zones, medical universities, and corporate parks", "Tonk Road Sitapura Bypass, JECC Road, and RIICO Main Arterial Roads"),
  ("Sodala", "sodala", "Ram Nagar Metro Station, New Sanganer Road, Shyam Nagar, Hawasadak Circle", "dense residential sectors, commercial markets, metro connectivity hubs, and auto repair zones", "New Sanganer Road, Hawa Sadak, Ajmer Road Link, and Metro Corridor Road"),
  ("Murlipura", "murlipura", "Murlipura Scheme, Ambabari Circle, National Highway Crossing, Road No. 14 Zone", "residential housing colonies, local retail shops, industrial workshops, and transport hubs", "Sikar Road, Murlipura Main Road, and Road No. 14 VKIA Link"),
  ("Shastri Nagar", "shastri-nagar", "Tia Hospital Zone, Subhash Nagar, Science Park Road, Nehru Nagar", "medical institutions, dense housing colonies, retail markets, and educational facilities", "Shastri Nagar Main Road, Subhash Nagar Road, and Pani Peecha Road")
]

# We will build localities array with explicit contextual internal links and exact primary keyword matching!
all_slugs = [item[1] for item in localities_raw]

output_code = "export const localities = [\n"

for name, slug, landmarks, market_type, roads in localities_raw:
    primary_keyword = f"Kabadiwala in {name} Jaipur"
    title = f"Kabadiwala in {name} Jaipur | Doorstep Scrap Pickup"
    description = f"Looking for a trusted Kabadiwala in {name} Jaipur? Book free doorstep scrap pickup for paper raddi, plastic, copper, iron, e-waste & appliances with digital weighing & instant payout."
    h1 = f"Kabadiwala in {name} Jaipur – Doorstep Scrap Pickup"
    
    # Contextual nearby slugs (pick 4 different slugs)
    nearby_slugs = [s for s in all_slugs if s != slug][:4]
    
    overview = f"If you are looking for a reliable <strong>{primary_keyword}</strong>, Balaji Kabadi Wala provides fast, eco-friendly doorstep scrap collection across all sectors and blocks of {name}. Whether you live in a residential flat, manage a retail shop, or operate an office, our local pickup team brings government-certified electronic digital scales right to your doorstep. We weigh every item accurately in front of you and offer instant cash or UPI payout."
    
    residential_guide = f"Residents in {name} can easily dispose of accumulated household scrap without any hassle. We collect old newspaper raddi, corrugated cardboard boxes, plastic buckets, damaged washing machines, broken refrigerators, iron grills, copper wiring, and old brass utensils. Our trained staff handles all heavy lifting and loading, ensuring a clean and convenient decluttering experience."
    
    commercial_guide = f"For commercial establishments, retail showrooms, coaching centers, and corporate offices in {name}, we offer specialized bulk scrap clearance. We purchase dead computer CPUs, IT e-waste, aluminium partition sections, steel filing cabinets, and confidential office files with certified paper shredding and official weight receipts."
    
    scrap_categories_detail = f"Live daily scrap rates for {name}: Old Newspaper Raddi (₹18–₹22/kg), Packaging Cardboard (₹12–₹15/kg), Heavy Iron Rods (₹28–₹38/kg), Commercial Copper Wire (₹550–₹720/kg), Yellow Brass Utensils (₹380–₹460/kg), Aluminium Window Sections (₹125–₹165/kg), and Commercial E-Waste (₹40–₹450/pc)."
    
    recycling_workflow = f"Selling scrap in {name} is simple: 1) Call 95097 52549 or message us on WhatsApp. 2) Our executive arrives at your address within 30 to 60 minutes. 3) Materials are weighed on digital scales. 4) Get paid instantly on the spot via GPay, PhonePe, Paytm, or Cash. 5) Collected scrap is routed to RIICO-authorized green recycling facilities."

    locality_obj = {
        "name": name,
        "slug": slug,
        "primary_keyword": primary_keyword,
        "title": title,
        "description": description,
        "h1": h1,
        "landmarks": landmarks,
        "market_type": market_type,
        "roads": roads,
        "streets": landmarks,
        "overview": overview,
        "residential_guide": residential_guide,
        "commercial_guide": commercial_guide,
        "scrap_categories_detail": scrap_categories_detail,
        "recycling_workflow": recycling_workflow,
        "nearby_slugs": nearby_slugs,
        "locality_faqs": [
            {
                "q": f"How quickly can a Kabadiwala in {name} Jaipur reach my address?",
                "a": f"Our collection vehicle is stationed locally and typically reaches your address in {name} within 30 to 60 minutes of booking."
            },
            {
                "q": f"Is doorstep scrap pickup free in {name} Jaipur?",
                "a": f"Yes, doorstep inspection, weighing, and vehicle loading are 100% free with zero hidden service charges."
            },
            {
                "q": f"How do you ensure accurate weight measurement in {name}?",
                "a": f"We use government-certified electronic digital LED scales that display exact decimal weights right in front of you."
            },
            {
                "q": f"What payment options are available upon scrap collection in {name}?",
                "a": f"You can choose instant spot cash or direct UPI transfer via PhonePe, Google Pay, or Paytm immediately after weighing."
            }
        ]
    }
    
    output_code += "  " + json.dumps(locality_obj, indent=4) + ",\n"

output_code = output_code.rstrip(",\n") + "\n];\n"

with open("data/localities.js", "w", encoding="utf-8") as f:
    f.write(output_code)

print("Successfully generated data/localities.js with exact Primary Keyword mapping!")
