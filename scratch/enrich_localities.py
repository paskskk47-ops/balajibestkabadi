import re

original_localities = [
  ("Mansarovar", "mansarovar", "Mansarovar Plaza, VT Road, Thadi Market, Shipra Path, Mansarovar Metro Station, B2 Bypass", "independent houses, multi-story apartments, student hostels, coaching hubs, and commercial markets", "VT Road, Shipra Path, New Sanganer Road, and VT Road Crossing", "Sector 1, Sector 9, Sector 12, VT Road, Shipra Path, Aravali Marg, Kaveri Path, Thadi Market, Swarn Path, Rajat Path, Patel Marg, Swarn Path Market, Mansarovar Plaza Road"),
  ("Vaishali Nagar", "vaishali-nagar", "Amrapali Circle, National Handloom, Gandhi Path, Queens Road, Nursery Circle, Officers Campus", "premium residential bungalows, luxury apartments, high-end retail stores, and commercial cafes", "Gandhi Path, Queens Road, Amrapali Marg, and Nursery Circle Road", "Amrapali Marg, Gandhi Path, Queens Road, Nursery Circle, Hanuman Nagar, Officers Campus, Gandhi Path Bypass, Nem Sagar, Vaishali Block A-F, Rangoli Plaza Lane"),
  ("Amrapali Circle", "amrapali-circle", "Amrapali Circle Park, Vaishali Nagar Shopping Market, Rangoli Plaza, Gandhi Path", "retail showrooms, jewelry stores, commercial complexes, and premium residential flats", "Amrapali Marg, Queens Road, and Gandhi Path Bypass", "Amrapali Circle Outer Ring, Nursery Circle, Queens Road Crossing, Amrapali Marg, Gandhi Path Bypass, Rangoli Plaza Road, Vaishali Shopping Lane"),
  ("Malviya Nagar", "malviya-nagar", "Gaurav Tower (GT), World Trade Park (WTP), Calgiri Road, Apex Circle, Apex Hospital, Model Town", "modern residential societies, independent houses, retail malls, and corporate offices", "Calgiri Road, JLN Marg, Girdhar Marg, and Malviya Nagar Sector Roads", "Sector 1, Sector 3, Sector 5, Sector 9, Sector 13, Calgiri Road, JLN Marg, Girdhar Marg, Apex Circle, GT Shopping Lane, Malviya Industrial Area, Model Town Road"),
  ("Jagatpura", "jagatpura", "Jagatpura Railway Station, NRI Circle, Mahal Road, Akshaya Patra Temple, SKIT College", "new multi-story housing societies, institutional campuses, construction sites, and upcoming markets", "Mahal Road, Jagatpura Main Road, and NRI Circle Road", "Mahal Road, NRI Circle, Akshaya Patra Temple Road, CBI Colony Road, Jagatpura Railway Station Road, Model Town Jagatpura, Jagatpura Main Road"),
  ("Raja Park", "raja-park", "Gali Number 4 Shopping Lane, LBS College, Shanti Path, Panchwati Park, Govind Marg", "highly dense commercial markets, apparel showrooms, eateries, and older residential colonies", "Shanti Path, Govind Marg, Raja Park Main Market Road", "Govind Marg, Gali Number 1, Gali Number 2, Gali Number 3, Gali Number 4, Gali Number 5, Gali Number 6, Gali Number 7, Shanti Path, LBS College Road, Gurudwara Road, Panchwati Park Road"),
  ("Bapu Nagar", "bapu-nagar", "Rajasthan University Campus, JDA Market, Gandhi Nagar Crossing, Bapu Nagar Post Office", "educational departments, student hostels, library zones, and residential apartments", "JLN Marg, Tonk Road, and University Marg", "University Marg, JLN Marg, Tonk Road Crossing, JDA Market Road, Gandhi Nagar Railway Station Road, Bapu Nagar Main Road"),
  ("Sanganer", "sanganer", "Jaipur International Airport Area, Sanganer Bazar, Diggi Road, Sanganer Stadium", "textile printing factories, wholesale markets, narrow residential lanes, and local shops", "Diggi Road, Sanganer High Street, Airport Road, and Tonk Road Bypass", "Sanganer Bazar, Diggi Road, Sanganer High Street, Airport Road, Shikarpura Road, Muhana Mandi Road, Sanganer Stadium Road, Diggi Flyover Area"),
  ("Tonk Road", "tonk-road", "Lalkothi Market, Rambagh Palace Crossing, Gandhi Nagar Station, Nehru Place Flyover", "commercial banks, government offices, hotels, and established residential areas", "Tonk Road Main Highway, JLN Marg, and Sahkar Marg", "Tonk Road Highway, Lalkothi, Rambagh Circle, Gandhi Nagar Sector Roads, Himmat Nagar, Barkat Nagar, Mahaveer Nagar, Nehru Place Crossing, Sahkar Marg"),
  ("Pratap Nagar", "pratap-nagar", "Rajasthan Housing Board Sector 8, RHB Plaza, Coaching Hub Sector 16, Haldi Ghati Marg", "large housing board sectors, engineering colleges, government offices, and industrial pockets", "Haldi Ghati Marg, Tonk Road Highway, and Kumbha Marg", "Sector 3, Sector 5, Sector 8, Sector 11, Sector 16, Sector 26, Haldi Ghati Marg, Kumbha Marg, RHB Plaza Road, Pratap Nagar Sector 8 Market"),
  ("Jhotwara", "jhotwara", "Kanta Square, Jhotwara Industrial Area, Lata Circle, Niwaru Road, Kalwar Road Crossing", "industrial factories, dense residential colonies, wholesale markets, and workshop units", "Kalwar Road, Niwaru Road, Khatipura Road, and Jhotwara Main Highway", "Kanta Chouraha, Lata Circle, Niwaru Road, Kalwar Road, Jhotwara Industrial Area, Khatipura Road, Jhotwara High Street"),
  ("C Scheme", "c-scheme", "Statue Circle, Ashok Nagar, Subhash Marg, Ahinsa Circle, M I Road Boundary", "luxury heritage residences, corporate headquarters, law firms, and fine-dining restaurants", "Bhagwan Das Road, Subhash Marg, Sardar Patel Marg, and M I Road", "Statue Circle, Subhash Marg, Bhagwan Das Road, Sardar Patel Marg, Ahinsa Circle, Ashok Nagar, C Scheme Commercial Belt"),
  ("Adarsh Nagar", "adarsh-nagar", "Govind Marg, Bees Dukan Market, Pink Square Mall Area, Sethi Nagar, Frontier Colony", "traditional family bungalows, garment markets, commercial plazas, and residential streets", "Govind Marg, MDI Road, and Agra Road Crossing", "Govind Marg, Bees Dukan, Shanti Path Crossing, Pink Square Mall Road, Sethi Nagar, Frontier Colony, Adarsh Nagar High Street"),
  ("Civil Lines", "civil-lines", "Chief Minister Residence Zone, Civil Lines Metro Station, Jacob Road, Hawa Sadak Boundary", "high-security government bungalows, official residences, heritage villas, and quiet avenues", "Jacob Road, Hawa Sadak, and Ajmer Road Highway", "Jacob Road, Civil Lines Metro Station Area, Hawa Sadak Crossing, Civil Lines Main Road, Governor House Zone"),
  ("Ajmer Road", "ajmer-road", "DCM Crossing, 200 Feet Bypass, Tagore Nagar, Purani Chungi, Elements Mall Area", "rapidly developing residential townships, commercial auto showrooms, and highway logistics", "Ajmer Highway, 200 Feet Bypass, and DCM Road", "DCM Chouraha, 200 Feet Bypass Road, Tagore Nagar, Purani Chungi, Elements Mall Road, Ajmer Highway Stretch"),
  ("Nirman Nagar", "nirman-nagar", "DCM Market, Janpath Road, Kings Road Crossing, Shyam Nagar Boundary", "modern residential houses, private clinics, software offices, and neighbourhood shops", "Kings Road, Janpath, and Ajmer Road Bypass", "Janpath Road, Kings Road, DCM Market, Nirman Nagar Block A-C, Shyam Nagar Border Road"),
  ("Gopalpura", "gopalpura", "Gopalpura Bypass, Triveni Nagar Circle, Ridhi Sidhi Chouraha, Gurjar Ki Thadi", "coaching institutes, student PG accommodations, book markets, and busy transit junctions", "Gopalpura Bypass Highway, Tonk Road, and New Sanganer Road", "Gopalpura Bypass, Triveni Nagar Circle, Ridhi Sidhi Chouraha, Gurjar Ki Thadi, Mahesh Nagar, Vishveshwariya Nagar"),
  ("Durgapura", "durgapura", "Durgapura Railway Station, Agriculture Research Institute, Tonk Road Stretch, B2 Bypass", "established residential colonies, research campuses, government quarters, and retail markets", "Tonk Road Highway, B2 Bypass, and Durgapura Flyover Road", "Durgapura Railway Station Road, Tonk Road Durgapura, Agriculture Campus Area, B2 Bypass Junction, Mahaveer Nagar"),
  ("Chitrakoot", "chitrakoot", "Chitrakoot Stadium, Vaishali Scheme Area, Akshardham Temple Area, Maharana Pratap Road", "well-planned residential sectors, sporting complexes, religious landmarks, and peaceful colonies", "Maharana Pratap Road, Gandhi Path Bypass, and Ajmer Road", "Chitrakoot Sector 1-10, Chitrakoot Stadium Road, Akshardham Temple Lane, Maharana Pratap Road"),
  ("Kukas", "kukas", "RIICO Industrial Zone Kukas, Engineering College Campus, Delhi Highway Stretch", "industrial manufacturing units, engineering colleges, luxury resorts, and highway complexes", "Jaipur-Delhi National Highway 48 and RIICO Industrial Roads", "Kukas Industrial Area, Delhi Highway Stretch, Engineering Campus Area, RIICO Zone 1-4"),
  ("Muhana", "muhana", "Muhana Mandi Wholesale Market, Sanganer Extension, ISKCON Temple Road", "Asia's largest fruit & vegetable wholesale market, agricultural trade units, and new housing", "Muhana Mandi Main Road, Diggi Road, and Sanganer Bypass", "Muhana Mandi Complex, ISKCON Temple Road, Muhana Village Road, Sanganer Extension"),
  ("Vidhyadhar Nagar", "vidhyadhar-nagar", "National Handloom VDN, Sector 2 Market, Sector 6 Central Park, Central Spine Market", "planned housing sectors, wholesale trade plazas, commercial centers, and family residences", "Sikar Road Highway, Central Spine Road, and Sector Main Roads", "Sector 1, Sector 2, Sector 3, Sector 4, Sector 5, Sector 6, Central Spine Road, National Handloom Lane, Sikar Road Junction"),
  ("MI Road", "mi-road", "Raj Mandir Cinema, Panch Batti, Ajmeri Gate, Jayanti Market, GPO Junction", "historic commercial high street, electronics wholesale hubs, jewelry stores, and hotels", "Mirza Ismail Road Main Highway, Station Road, and Ashok Marg", "Panch Batti, Raj Mandir Lane, Jayanti Market, Ajmeri Gate Crossing, GPO Road, MI Road Wholesale Stretch"),
  ("Bani Park", "bani-park", "Collectorate Circle, Jaipur Railway Station Zone, Kanti Nagar, DTP Area", "heritage hotels, government administrative offices, quiet residential bungalows, and law chambers", "Station Road, Kabir Marg, and Collectorate Circle Road", "Collectorate Circle, Kabir Marg, Kanti Nagar, Station Road, Bani Park Block A-D, Railway Station Road"),
  ("Sitapura", "sitapura", "Sitapura Industrial Area, JECC Convention Center, Mahatma Gandhi Hospital, RIICO Zone", "massive industrial manufacturing parks, export zones, medical universities, and tech campuses", "Tonk Road Highway Extension, Ring Road Junction, and RIICO Arterial Roads", "RIICO Industrial Area Phase 1-4, JECC Complex Road, Mahatma Gandhi Hospital Zone, Sitapura Export Zone"),
  ("Sodala", "sodala", "Sodala Elevated Road, Ram Nagar, New Sanganer Road Junction, Hawa Sadak", "dense residential colonies, bustling local retail markets, transit hubs, and commercial lanes", "Ajmer Road, New Sanganer Road, and Hawa Sadak", "Ram Nagar, Sodala Chouraha, Hawa Sadak Junction, New Sanganer Road Sodala, Shyam Nagar Crossing"),
  ("Murlipura", "murlipura", "Murlipura Scheme, Sikar Road Junction, Dadi Ka Phatak, Ambabari Border", "residential housing colonies, local trade shops, hardware markets, and transport hubs", "Sikar Road Highway, Murlipura Main Road, and Niwaru Road Link", "Murlipura Scheme, Sikar Road Murlipura, Dadi Ka Phatak, Ambabari Border Lane, Murlipura Main Market"),
  ("Shastri Nagar", "shastri-nagar", "Kavotia Hospital, Science Park, Shastri Nagar Shopping Center, TB Hospital Area", "established residential blocks, medical institutions, public parks, and traditional retail shops", "Subhash Nagar Road, Sikar Road Link, and Science Park Road", "Shastri Nagar Sector 1-5, Science Park Road, Kavotia Hospital Zone, Shopping Center Lane, Subhash Nagar")
]

output_code = "export const localities = [\n"

for name, slug, landmarks, market_type, roads, streets in original_localities:
    title = f"Kabadiwala {name} Jaipur | Best Doorstep Scrap Pickup {name}"
    keywords = f"Kabadiwala {name} Jaipur, Scrap Pickup {name} Jaipur, Scrap Dealer {name} Jaipur, Scrap Buyer {name} Jaipur, Doorstep Kabadiwala {name}, Raddi Wala Near Me {name}"
    
    overview = f"{name} is a vital residential and commercial zone in Jaipur. Characterized by {market_type}, {name} generates substantial volumes of household paper raddi, packaging cardboard boxes, discarded plastic items, metal fittings, copper wiring, and electrical scrap every day. Balaji Kabadi Wala provides top-rated Kabadiwala {name} Jaipur doorstep scrap pickup services with government-certified electronic digital scales and instant cash or UPI payouts."
    
    residential_guide = f"Residents across {name} can effortlessly schedule free doorstep scrap collection right to their house or flat. Whether you reside near {landmarks.split(', ')[0]} or along {roads.split(', ')[0]}, our background-verified pickup team arrives at your doorstep to buy old newspapers, textbooks, plastic bottles, iron grills, and broken appliances without any heavy lifting required on your part."
    
    commercial_guide = f"For retail showrooms, commercial offices, schools, clinics, and workshops in {name}, we deliver bulk commercial scrap clearing services. We purchase office paper raddi, cardboard shipping boxes, copper cables, dead computers, aluminium partitions, and heavy steel furniture. Official weight receipts and certified document shredding slips are provided for corporate compliance."
    
    scrap_categories_detail = f"Accepted scrap categories in {name} with top Jaipur market payouts: Old Newspaper Raddi (₹18–₹22/kg), Packaging Cardboard (₹12–₹15/kg), Household Plastic & PET Bottles (₹14–₹28/kg), Copper Wire Scrap (₹550–₹720/kg), Yellow Brass Utensils (₹380–₹460/kg), Heavy Iron & Steel (₹28–₹38/kg), Aluminium Frames & Cans (₹125–₹165/kg), E-Waste Laptops & CPUs (₹40–₹450/pc), and Home Appliances like ACs & Fridges (₹800–₹3,500/pc)."
    
    recycling_workflow = f"When our pickup vehicle arrives at your address in {name}, our executive weighs every item on a calibrated electronic digital scale displaying exact decimal weights on an LED screen. Your total earnings are calculated based on live rate cards and paid instantly via Google Pay, PhonePe, Paytm, or Cash. All collected scrap is then transported directly to licensed RIICO recycling plants in Jaipur for eco-friendly processing."
    
    faq_1_q = f"How do I book Kabadiwala {name} Jaipur for doorstep pickup?"
    faq_1_a = f"Simply call 95097 52549 or send a WhatsApp message. Share your address near {landmarks.split(', ')[0]} in {name}, and our executive will arrive within 30 to 60 minutes!"
    
    faq_2_q = f"Are there any pickup charges in {name}?"
    faq_2_a = f"No, doorstep scrap collection is 100% FREE across all sectors and blocks in {name}. Zero transport or labor fees."
    
    faq_3_q = f"How is scrap weighed in {name}?"
    faq_3_a = f"We strictly use government-certified electronic digital scales that display exact decimal weights on an LED screen in front of you."
    
    faq_4_q = f"What payment methods are supported in {name}?"
    faq_4_a = f"We issue instant spot payouts immediately after weighing via Google Pay, PhonePe, Paytm, BHIM UPI, or Cash."

    output_code += f"""  {{
    name: "{name}",
    slug: "{slug}",
    title: "{title}",
    keywords: "{keywords}",
    landmarks: "{landmarks}",
    market_type: "{market_type}",
    roads: "{roads}",
    streets: "{streets}",
    overview: "{overview}",
    residential_guide: "{residential_guide}",
    commercial_guide: "{commercial_guide}",
    scrap_categories_detail: "{scrap_categories_detail}",
    recycling_workflow: "{recycling_workflow}",
    locality_faqs: [
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

with open("data/localities.js", "w", encoding="utf-8") as f:
    f.write(output_code)

print("Successfully enriched data/localities.js with 28 detailed locality objects!")
