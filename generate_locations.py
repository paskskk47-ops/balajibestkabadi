import os
import re
import json

# Database of 25 localities with rich context, metadata, and street list for hyper-local search optimization
localities = [
    {
        "name": "Mansarovar",
        "slug": "mansarovar",
        "landmarks": "Mansarovar Plaza, VT Road, Thadi Market, Shipra Path, Mansarovar Metro Station",
        "market_type": "independent houses, multi-story apartments, student hostels, and busy local markets",
        "roads": "VT Road, Shipra Path, New Sanganer Road, and VT Road Crossing",
        "details": "As one of the largest residential colonies in Asia, Mansarovar is home to thousands of families, coaching institutes, and colleges. The high density of population generates tons of paper waste, cardboard packaging, and electronic items monthly. Selling scrap here requires a systematic doorstep service that can navigate busy sectors and high-rise apartments easily.",
        "streets": "Sector 1, Sector 9, Sector 12, VT Road, Shipra Path, Aravali Marg, Kaveri Path, Thadi Market, Swarn Path, Rajat Path, Patel Marg, Swarn Path Market, Mansarovar Plaza Road"
    },
    {
        "name": "Vaishali Nagar",
        "slug": "vaishali-nagar",
        "landmarks": "Amrapali Circle, National Handloom, Gandhi Path, Queens Road, Nursery Circle",
        "market_type": "premium residential bungalows, luxury apartments, high-end retail stores, and cafes",
        "roads": "Gandhi Path, Queens Road, Amrapali Marg, and Nursery Circle Road",
        "details": "Vaishali Nagar is a premium commercial and residential hub in West Jaipur. Residents here demand high-quality, punctual services. The area accumulates premium scrap like heavy metal furniture, cardboard boxes from online shopping, and old electronics. Our digital scales and clean operations make us the preferred partner for Vaishali Nagar households.",
        "streets": "Amrapali Marg, Gandhi Path, Queens Road, Nursery Circle, Hanuman Nagar, Officers Campus, Gandhi Path Bypass, Nem Sagar, Vaishali Block A-F, Rangoli Plaza Lane"
    },
    {
        "name": "Amrapali Circle",
        "slug": "amrapali-circle",
        "landmarks": "Amrapali Circle Park, Vaishali Nagar Shopping Market, Rangoli Plaza, Gandhi Path",
        "market_type": "retail showrooms, jewelry stores, commercial complexes, and premium residential flats",
        "roads": "Amrapali Marg, Queens Road, and Gandhi Path Bypass",
        "details": "Amrapali Circle is the commercial heart of Vaishali Nagar, bustling with shops, markets, and apartments. Scrap disposal here is critical for shops looking to clear packing cardboard, and offices needing to dispose of paper waste. Our team provides specialized quick pickup service to ensure zero business disruption.",
        "streets": "Amrapali Circle Outer Ring, Nursery Circle, Queens Road Crossing, Amrapali Marg, Gandhi Path Bypass, Rangoli Plaza Road, Vaishali Shopping Lane"
    },
    {
        "name": "Malviya Nagar",
        "slug": "malviya-nagar",
        "landmarks": "Gaurav Tower (GT), World Trade Park (WTP), Calgiri Road, Apex Circle, Apex Hospital",
        "market_type": "modern residential societies, independent houses, retail malls, and corporate offices",
        "roads": "Calgiri Road, JLN Marg, Girdhar Marg, and Malviya Nagar Sector Roads",
        "details": "Malviya Nagar is a prime upscale neighborhood in South Jaipur. With WTP and Gaurav Tower drawing massive crowds, it has a high concentration of commercial offices and residential blocks. Scrap types here range from packaging materials to bulk e-waste like dead computer servers, laptops, and metals. We provide customized industrial and household pickup slots.",
        "streets": "Sector 1, Sector 3, Sector 5, Sector 9, Sector 13, Calgiri Road, JLN Marg, Girdhar Marg, Apex Circle, GT Shopping Lane, Malviya Industrial Area, Model Town Road"
    },
    {
        "name": "Pratap Nagar",
        "slug": "pratap-nagar",
        "landmarks": "Haldi Ghati Marg, NRI Colony, Sector 8 Shopping Plaza, Pratap Plaza, Sheopur Road",
        "market_type": "institutional buildings, industrial units, government residential quarters, and student PG housing",
        "roads": "Haldi Ghati Marg, Tonk Road, Sheopur Road, and Sanganer Sector Roads",
        "details": "Pratap Nagar is a rapidly developing educational and residential zone in South Jaipur. The presence of coaching institutes, PG accommodations, and schools results in huge volumes of old textbooks, raddi books, and plastic bottles. Our doorstep collection vehicles help students and families clear clutter easily at the best market rates.",
        "streets": "Haldi Ghati Marg, NRI Colony, Sector 8, Sector 11, Sector 16, Sector 22, Sheopur Road, Pratap Plaza, Tonk Road Bypass, Sanganer Sector Roads"
    },
    {
        "name": "Sanganer",
        "slug": "sanganer",
        "landmarks": "Jaipur International Airport Area, Sanganer Bazar, Diggi Road, Sanganer Stadium",
        "market_type": "textile printing factories, wholesale markets, narrow residential lanes, and local shops",
        "roads": "Diggi Road, Sanganer High Street, Airport Road, and Tonk Road Bypass",
        "details": "Sanganer is globally famous for its hand-block printing and paper industries. The local market produces paper cuttings, chemical containers, plastic drums, and textile scrap. Navigating the narrow, crowded streets of Sanganer requires local expertise, which our pickup executives have perfected over years of daily service.",
        "streets": "Sanganer Bazar, Diggi Road, Sanganer High Street, Airport Road, Shikarpura Road, Muhana Mandi Road, Sanganer Stadium Road, Diggi Flyover Area"
    },
    {
        "name": "Raja Park",
        "slug": "raja-park",
        "landmarks": "Gali Number 4 Shopping Lane, LBS College, Shanti Path, Panchwati Park",
        "market_type": "highly dense commercial markets, apparel showrooms, eateries, and older residential colonies",
        "roads": "Shanti Path, Govind Marg, Raja Park Main Market Road",
        "details": "Raja Park is a lively commercial and residential hotspot popular for food and shopping. The dense market generates daily cardboard box packaging and plastic waste. Our early morning pickup service helps local shopkeepers clear their commercial waste before the shopping rush begins.",
        "streets": "Govind Marg, Gali Number 1, Gali Number 2, Gali Number 3, Gali Number 4, Gali Number 5, Gali Number 6, Gali Number 7, Shanti Path, LBS College Road, Gurudwara Road, Panchwati Park Road"
    },
    {
        "name": "Jagatpura",
        "slug": "jagatpura",
        "landmarks": "Jagatpura Railway Station, NRI Circle, Mahal Road, Akshaya Patra Temple",
        "market_type": "new multi-story housing societies, institutional campuses, construction sites, and upcoming markets",
        "roads": "Mahal Road, Jagatpura Main Road, and NRI Circle Road",
        "details": "Jagatpura is Jaipur's fastest-growing residential and educational hub. The modern high-rise apartments generate substantial amounts of packaging material from e-commerce deliveries, old newspaper stacks, and domestic scrap. We coordinate directly with apartment association gates for seamless multi-flat pickups.",
        "streets": "Mahal Road, NRI Circle, Akshaya Patra Temple Road, CBI Colony Road, Jagatpura Railway Station Road, Model Town Jagatpura, Jagatpura Main Road"
    },
    {
        "name": "Vidhyadhar Nagar",
        "slug": "vidhyadhar-nagar",
        "landmarks": "Vidyadhar Ji Ka Bagh, Central Spine Shopping Complex, National Handloom Sector 2, Sector 5 Park",
        "market_type": "planned residential sectors, central spine commercial complexes, and private offices",
        "roads": "Sikar Road, Central Spine Road, and Vidyadhar Nagar Sector Roads",
        "details": "Vidyadhar Nagar is a beautiful, well-planned residential colony in North Jaipur. With organized sectors, residents appreciate clean, transparent services. We provide digital-weighing scrap collection directly from homes, ensuring that all plastic, metal, and newspaper waste is routed to eco-friendly recycling plants.",
        "streets": "Central Spine, Vidyadhar Ji Ka Bagh Road, Sikar Road, Sector 1, Sector 2, Sector 5, Sector 9, Sector 12, National Handloom Sector 2 Road, Sector 5 Park Road"
    },
    {
        "name": "Tonk Road",
        "slug": "tonk-road",
        "landmarks": "Lalkothi Market, Rambagh Palace Crossing, Gandhi Nagar Station, Nehru Place Flyover",
        "market_type": "commercial banks, government offices, hotels, and established residential areas",
        "roads": "Tonk Road Main Highway, JLN Marg, and Sahkar Marg",
        "details": "Tonk Road is one of the primary arterial roads of Jaipur, lined with commercial establishments, hotels, and luxury apartments. Commercial paper waste, office electronics, and old furniture are the main scrap items generated here. We offer dedicated B2B scrap recycling solutions with official documentation.",
        "streets": "Tonk Road Highway, Lalkothi, Rambagh Circle, Gandhi Nagar Sector Roads, Himmat Nagar, Barkat Nagar, Mahaveer Nagar, Nehru Place Crossing, Sahkar Marg"
    },
    {
        "name": "Gopalpura",
        "slug": "gopalpura",
        "landmarks": "Gopalpura Bypass Coaching Hub, Triveni Nagar Crossing, Ridhi Sidhi Circle, Mansarovar Metro Link",
        "market_type": "coaching institutes, student hostels, furniture markets, and residential colonies",
        "roads": "Gopalpura Bypass Road, Triveni Nagar Main Road, and New Sanganer Road",
        "details": "Gopalpura is Jaipur's primary educational hub and famous wood-furniture market. Thousands of students generate huge printout paper waste, raddi, and plastic bottles daily. The local furniture shops also produce metal and plastic packaging scrap. We run multiple pickup routes here every single day.",
        "streets": "Gopalpura Bypass, Triveni Nagar Road, Ridhi Sidhi Circle, Shanti Nagar Road, Gurjar Ki Thadi, New Sanganer Road link, Triveni Flyover area"
    },
    {
        "name": "Durgapura",
        "slug": "durgapura",
        "landmarks": "Durgapura Railway Station, Jaipur Club Road, Tonk Road Flyover, Durgapura Agriculture Research",
        "market_type": "established residential colonies, government offices, and local retail centers",
        "roads": "Tonk Road, Durgapura Main Road, and Maharani Farm Road",
        "details": "Durgapura is a quiet, well-established residential area in South Jaipur. The population mostly consists of government employees, retirees, and families who accumulate newspapers, old home appliances, and kitchen brass/copper utensils over time. We provide highly trusted and polite doorstep pickups.",
        "streets": "Maharani Farm Road, Jaipur Club Road, Durgapura Station Road, Durgapura Main Road, Tonk Road Flyover Line, Durgapura Sector Roads"
    },
    {
        "name": "Adarsh Nagar",
        "slug": "adarsh-nagar",
        "landmarks": "Govind Marg Crossing, Pink Square Mall, Bees Dukan Market, Gurudwara Road",
        "market_type": "retail shops, dense residential housing, commercial markets, and community centers",
        "roads": "Govind Marg, Adarsh Nagar Main Road, and Shanti Path",
        "details": "Adarsh Nagar is a premium central residential area close to the walled city. The mix of heritage bungalows and retail markets results in a variety of household scrap. We provide reliable weighing on the spot, helping residents declutter their garages and storerooms with ease.",
        "streets": "Govind Marg, Adarsh Nagar Main Road, Shanti Path, Pink Square Mall Lane, Bees Dukan, Gurudwara Road, Frontier Colony, Sethi Colony Road"
    },
    {
        "name": "Nirman Nagar",
        "slug": "nirman-nagar",
        "landmarks": "Shyam Nagar Metro Station, DCM Crossing, Kings Road Market, Nirman Nagar Park",
        "market_type": "residential houses, startup offices, local retail chains, and gyms",
        "roads": "Kings Road, Ajmer Road, and Jan Path",
        "details": "Nirman Nagar is a modern residential locality adjacent to Ajmer Road. With a rising number of corporate offices and young families, there is a steady demand for digital e-waste and office paper recycling. Our same-day doorstep pickup is popular among local IT offices and residents.",
        "streets": "Kings Road, Jan Path, Ajmer Road Crossing, DCM Link Road, Rani Sati Nagar Road, Swej Farm Road link, Nirman Nagar Sector Roads"
    },
    {
        "name": "C Scheme",
        "slug": "c-scheme",
        "landmarks": "Statue Circle, Bhagwandas Road, Sardar Patel Marg, Prithviraj Road, Ashok Nagar Area, Central Park",
        "market_type": "corporate head offices, government offices, cafes, premium bungalows, and embassies",
        "roads": "Bhagwandas Road, Sardar Patel Marg, Prithviraj Road, and MI Road",
        "details": "C Scheme is the most prestigious commercial and administrative zone in Jaipur. The area generates massive volumes of confidential paper waste, old files, and electronic hardware (PCs, printers, UPS). We offer secure data destruction and paper shredding alongside regular B2B scrap recycling.",
        "streets": "Statue Circle, Bhagwandas Road, Sardar Patel Marg, Prithviraj Road, Ashok Nagar Road, Yudhishthir Marg, Panch Batti Crossing, Jamnalal Bajaj Marg"
    },
    {
        "name": "MI Road",
        "slug": "mi-road",
        "landmarks": "Panch Batti, Raj Mandir Cinema, Government Hostel, Jayanti Market, Ajmeri Gate",
        "market_type": "heritage showrooms, electronic markets, retail shops, and corporate branch offices",
        "roads": "Mirza Ismail (MI) Road, Station Road, and Sansar Chandra Road",
        "details": "MI Road is Jaipur's historic high-street commercial avenue. Nearby electronic markets (Jayanti Market) generate massive volumes of packaging cardboard boxes, e-waste, wiring, and metal frames. Our commercial vehicles provide daily scrap clearing services for shop owners.",
        "streets": "Mirza Ismail Road, Sansar Chandra Road, Station Road, Jayanti Market Road, Panch Batti, Ajmeri Gate Crossing, Raj Mandir Cinema Lane"
    },
    {
        "name": "Bani Park",
        "slug": "bani-park",
        "landmarks": "Collectorate Circle, Kanti Nagar, Kabir Marg, Bani Park Police Station",
        "market_type": "heritage hotels, lawyers' offices, upscale residential houses, and government departments",
        "roads": "Kabir Marg, Sawai Jai Singh Highway, and Station Road",
        "details": "Bani Park is a historic residential and hospitality neighborhood near the main Jaipur Railway Station. The hotels and office complexes generate cardboard, plastic bottles, metal scrap, and office printouts. We work closely with hotel administrators to manage bulk recycling.",
        "streets": "Collectorate Circle, Kabir Marg, Sawai Jai Singh Highway, Station Road Link, Shiv Marg, Devi Marg, Kanti Nagar Road"
    },
    {
        "name": "Jhotwara",
        "slug": "jhotwara",
        "landmarks": "Jhotwara Industrial Area, Kalwar Road, Kardhani Plaza, Jhotwara Flyover",
        "market_type": "heavy industrial units, factories, dense residential colonies, and machinery shops",
        "roads": "Kalwar Road, Niwaru Road, and Sikar Bypass Road",
        "details": "Jhotwara features a massive industrial area alongside residential colonies. Industrial factories generate scrap iron, copper wiring, steel rods, and heavy plastic barrels. We have specialized transport trucks and heavy scales to handle bulk commercial metal scrap pickups in this industrial zone.",
        "streets": "Kalwar Road, Niwaru Road, Lata Circle Road, Jhotwara Industrial Area Road, Kardhani Scheme Roads, Tara Nagar Road, Sikar Bypass Road"
    },
    {
        "name": "Sitapura",
        "slug": "sitapura",
        "landmarks": "Sitapura Industrial Area, RIICO Flyover, JECC Exhibition Center, Chokhi Dhani Area",
        "market_type": "large manufacturing factories, export houses, educational colleges, and warehouses",
        "roads": "Tonk Road, Sitapura Industrial Bypass, and Goner Road Crossing",
        "details": "Sitapura is Jaipur's primary industrial zone, housing hundreds of manufacturing plants and colleges. The factories generate large amounts of industrial waste, including iron sheets, copper, packaging timber, and massive cardboard boxes. We offer contractual monthly scrap clearance services here.",
        "streets": "RIICO Industrial Road, Sitapura Bypass, JECC Exhibition Road, EPIP Zone, Chokhi Dhani Road, Tonk Road Crossing"
    },
    {
        "name": "Bapu Nagar",
        "slug": "bapu-nagar",
        "landmarks": "Rajasthan University Campus, JDA Market, Gandhi Nagar Crossing, Bapu Nagar Post Office",
        "market_type": "educational departments, student hostels, library zones, and residential apartments",
        "roads": "JLN Marg, Tonk Road, and University Marg",
        "details": "Bapu Nagar is adjacent to Rajasthan University, making it a hub for students, teachers, and researchers. Raddi papers, study materials, plastic bottles, and old PCs are the main scrap items. We offer discount rates and easy bookings for student hostels during moving season.",
        "streets": "University Marg, JLN Marg, Tonk Road Crossing, JDA Market Road, Gandhi Nagar Railway Station Road, Bapu Nagar Main Road"
    },
    {
        "name": "Sodala",
        "slug": "sodala",
        "landmarks": "Sodala Elevated Road, New Sanganer Road, Ram Nagar Metro Station, Sodala Circle",
        "market_type": "commercial markets, hardware stores, mid-tier residential sectors, and busy lanes",
        "roads": "Ajmer Road, New Sanganer Road, Hawa Sadak, and Ram Nagar Road",
        "details": "Sodala is a highly populated residential and commercial area in central Jaipur. The local hardware and repair shops produce iron pipes, wire cuttings, and plastic containers. Our doorstep pickup executives are trained to navigate the crowded lanes of Sodala quickly.",
        "streets": "Ram Nagar, Hawa Sadak, Swej Farm Road, New Sanganer Road, Shyam Nagar Link, Sodala Elevated Road, Sodala Circle Road, Sushilpura"
    },
    {
        "name": "Civil Lines",
        "slug": "civil-lines",
        "landmarks": "Civil Lines Metro Station, Raj Bhavan, Chief Minister Residence, Jacob Road",
        "market_type": "VIP bungalows, government ministers' quarters, administrative offices, and quiet avenues",
        "roads": "Jacob Road, Hawa Sadak, and Civil Lines Road",
        "details": "Civil Lines is the high-security VIP residential zone of Jaipur. Security is a primary concern for residents here. All our pickup executives are background-verified and wear official uniforms. We provide secure, digital scrap pickups for VIP houses, government offices, and bungalows.",
        "streets": "Jacob Road, Hawa Sadak Crossing, Civil Lines Road, CM Residence Area Road, Raj Bhavan Road, Civil Lines Metro Station Area"
    },
    {
        "name": "Murlipura",
        "slug": "murlipura",
        "landmarks": "Murlipura Scheme, Sikar Road Crossing, Murli Path, Murlipura Park",
        "market_type": "residential houses, local retail markets, small workshops, and schools",
        "roads": "Sikar Road, Murlipura Main Road, and Sikar Road Bypass",
        "details": "Murlipura is a growing residential neighborhood in North Jaipur. With many newly constructed houses, residents often have scrap metal from renovations, old steel fixtures, and cardboard packaging boxes. We provide quick doorstep pickup service with instant digital payouts.",
        "streets": "Sikar Road, Murli Path, Murlipura Scheme Roads, Sikar Road Bypass, Sector 1, Sector 3, Sector 6"
    },
    {
        "name": "Shastri Nagar",
        "slug": "shastri-nagar",
        "landmarks": "Shastri Nagar Science Park, Sanjay Bazar, Kavita Path, Shastri Nagar Hospital",
        "market_type": "medical clinics, residential flats, dense local markets, and parks",
        "roads": "Sikar Road, Shastri Nagar Main Road, and Subhash Nagar Road",
        "details": "Shastri Nagar is a busy residential and commercial locality in North-West Jaipur. The local clinics, shops, and homes generate a variety of paper, cardboard, and plastic scrap. We ensure all waste collected from Shastri Nagar is processed and sorted according to green recycling guidelines.",
        "streets": "Shastri Nagar Science Park Road, Sanjay Bazar Road, Kavita Path, Shastri Nagar Hospital Road, Sikar Road link, Subhash Nagar Road"
    },
    {
        "name": "Chitrakoot",
        "slug": "chitrakoot",
        "landmarks": "Chitrakoot Stadium, Vaishali Nagar Block A, Akshardham Temple Road, Chitrakoot Sector 3",
        "market_type": "modern residential houses, sports academies, residential apartments, and local retail centers",
        "roads": "Akshardham Road, Chitrakoot Marg, and Ajmer Road Bypass",
        "details": "Chitrakoot is a clean, modern residential area located next to Vaishali Nagar. Known for Chitrakoot Stadium and Akshardham Temple, it houses many families who appreciate clean, systematic scrap recycling. We provide premium doorstep pickups for old papers, metals, and plastic waste.",
        "streets": "Chitrakoot Stadium Road, Akshardham Temple Road, Chitrakoot Marg, Ajmer Road Bypass link, Chitrakoot Sector 1, Chitrakoot Sector 3, Chitrakoot Sector 8"
    }
]

# Read index.html to use as the layout template
with open("index.html", "r", encoding="utf-8") as f:
    template = f.read()

# Replace links in Service Areas cloud section of index.html to point to localized files
pills_pattern = r'<div class="areas-cloud scroll-reveal">[\s\S]*?</div>'
new_pills_content = '<div class="areas-cloud scroll-reveal">\n'
for loc in localities:
    new_pills_content += f'        <a href="{loc["slug"]}.html" class="area-pill">{loc["name"]}</a>\n'
new_pills_content += '      </div>'

template_with_links = re.sub(pills_pattern, new_pills_content, template)

# Replace links in footer localities list of index.html (Internal linking silo)
localities_links_html = ""
for i, loc in enumerate(localities):
    localities_links_html += f'<a href="{loc["slug"]}.html" style="color: var(--text-muted); text-decoration: none; transition: var(--transition);" onmouseover="this.style.color=\'var(--primary)\'" onmouseout="this.style.color=\'var(--text-muted)\'">{loc["name"]}</a>'
    if i < len(localities) - 1:
        localities_links_html += '\n        <span style="color: rgba(255,255,255,0.2);">|</span>\n        '

template_with_links = template_with_links.replace('<!-- LOCALITIES_LINKS -->', localities_links_html)

# Write updated index.html back
with open("index.html", "w", encoding="utf-8") as f:
    f.write(template_with_links)

print("Updated index.html service areas section and footer localities links successfully.")

# Generate individual pages
for i, loc in enumerate(localities):
    name = loc["name"]
    slug = loc["slug"]
    landmarks = loc["landmarks"]
    market_type = loc["market_type"]
    roads = loc["roads"]
    details = loc["details"]
    streets = loc["streets"]
    
    # Customize the template content specifically for this location
    page_content = template_with_links
    
    # 1. Update Title and Meta Description
    title_pattern = r'<title>.*?</title>'
    new_title = f'<title>Kabadi Wala in {name} Jaipur | Doorstep Scrap Pickup in {name}</title>'
    page_content = re.sub(title_pattern, new_title, page_content)
    
    meta_desc_pattern = r'<meta name="description" content=".*?">'
    new_meta_desc = f'<meta name="description" content="Looking for a reliable online kabadi wala in {name}, Jaipur? Balaji Kabadi Wala offers free doorstep scrap pickup across {name} with digital weighing & instant UPI.">'
    page_content = re.sub(meta_desc_pattern, new_meta_desc, page_content)
    
    meta_keywords_pattern = r'<meta name="keywords" content=".*?">'
    new_meta_keywords = f'<meta name="keywords" content="kabadi wala in {name}, scrap dealer in {name}, online raddi pickup {name}, doorstep scrap collection {name}, sell scrap metals {name}, best kabadiwala near me {name}, junk buyer {name}, scrap shop in {name}">'
    page_content = re.sub(meta_keywords_pattern, new_meta_keywords, page_content)
    
    # 2. Update Canonical URL
    canonical_pattern = r'<link rel="canonical" href=".*?">'
    new_canonical = f'<link rel="canonical" href="https://balajibestkabadiwala.in/{slug}.html">'
    page_content = re.sub(canonical_pattern, new_canonical, page_content)
    
    # 3. Update OG tags
    og_title_pattern = r'<meta property="og:title" content=".*?">'
    new_og_title = f'<meta property="og:title" content="Kabadi Wala in {name} Jaipur | Doorstep Scrap Pickup">'
    page_content = re.sub(og_title_pattern, new_og_title, page_content)
    
    og_desc_pattern = r'<meta property="og:description" content=".*?">'
    new_og_desc = f'<meta property="og:description" content="Sell your household and office scrap in {name}, Jaipur. Balaji Kabadi Wala offers free doorstep scrap pickup in {name} with digital weighing & instant payment.">'
    page_content = re.sub(og_desc_pattern, new_og_desc, page_content)
    
    og_url_pattern = r'<meta property="og:url" content=".*?">'
    new_og_url = f'<meta property="og:url" content="https://balajibestkabadiwala.in/{slug}.html">'
    page_content = re.sub(og_url_pattern, new_og_url, page_content)

    # 4. Update Hero H1 and Subtitle for local context
    hero_h1_pattern = r'<h1 class="hero-title">[\s\S]*?</h1>'
    new_hero_h1 = f'<h1 class="hero-title">ONLINE KABADI WALA IN <span class="gradient-text">{name.upper()}</span></h1>'
    page_content = re.sub(hero_h1_pattern, new_hero_h1, page_content)

    hero_h2_pattern = r'<h2 class="hero-subtitle">[\s\S]*?</h2>'
    new_hero_h2 = f'<h2 class="hero-subtitle">Ghar Se Scrap Uthao in {name} | Live Rates & Instant Cash</h2>'
    page_content = re.sub(hero_h2_pattern, new_hero_h2, page_content)

    # 5. Generate dynamic internal link structures for nearby service areas (SEO optimization)
    nearby_indices = [(i + offset) % len(localities) for offset in [1, 2, 3, 4]]
    nearby_links_html = ""
    for idx in nearby_indices:
        n_loc = localities[idx]
        nearby_links_html += f'<a href="{n_loc["slug"]}.html" style="color: var(--primary); text-decoration: underline; margin-right: 15px; font-weight: 600;">{n_loc["name"]}</a>'

    # 6. Insert localized Intro Section
    services_intro_target = '<section class="services section-padding" id="services">'
    
    # Constructing a rich, 800+ word localized article block specifically optimized with local keywords & internal links
    localized_content_block = f"""
  <!-- ====================================================
       LOCAL SEO & COMPREHENSIVE LOCALIZED GUIDE (800+ WORDS)
       ==================================================== -->
  <section class="local-guide-section section-padding" id="local-guide" style="background: linear-gradient(180deg, var(--bg-color) 0%, #0d2310 100%); border-top: 1px solid rgba(37, 176, 90, 0.15); border-bottom: 1px solid rgba(37, 176, 90, 0.15);">
    <div class="container" style="max-width: 960px;">
      
      <div class="section-header scroll-reveal">
        <h2 class="section-title gold-underline">Scrap Pick Up in {name}</h2>
        <p class="section-subtitle">Comprehensive local recycling guide for {name} area</p>
      </div>

      <!-- Introduction: Local Context (approx 200 words) -->
      <div class="glass-card" style="margin-bottom: 30px; border-left: 4px solid var(--primary);">
        <h3 style="font-family: var(--font-heading); font-size: 2.2rem; color: var(--accent); margin-bottom: 15px; text-transform: uppercase;">1. Trusted Online Kabadi Wala in {name}, Jaipur</h3>
        <p style="color: var(--text-white); font-size: 1.05rem; line-height: 1.8; margin-bottom: 15px;">
          Are you looking for a reliable, professional, and digital-first <strong>kabadi wala in {name}</strong>? You have come to the right place. Balaji Kabadi Wala is proud to offer premium, hassle-free doorstep scrap collection services across {name} and surrounding areas. {name} is widely recognized for its fast-paced development, containing a lively mix of {market_type}. For more details on our background, values, and recycling setup in Rajasthan, please visit our dedicated <a href="about.html" style="color: var(--primary); text-decoration: underline; font-weight: 600;">About Us page</a>.
        </p>
        <p style="color: var(--text-muted); font-size: 1rem; line-height: 1.7; margin-bottom: 15px;">
          {details} Whether you are located near the prominent <strong>{landmarks}</strong> or situated inside one of the residential blocks, our dedicated pickup executives can reach your location within hours of booking. We understand that traditional street kabadiwalas often use inaccurate scales and offer inconsistent rates. Balaji Kabadi Wala changes this by introducing certified, government-approved electronic digital weighing scales, ensuring you receive the exact value for every gram of scrap you sell. Explore our main <a href="index.html" style="color: var(--primary); text-decoration: underline; font-weight: 600;">Balaji Kabadi Wala homepage</a> to learn about our corporate services.
        </p>
        <p style="color: var(--text-white); font-size: 0.95rem; line-height: 1.7; margin-top: 15px; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 15px; margin-bottom: 0;">
          📍 <strong>Sectors & Streets Served in {name}:</strong> We provide prompt doorstep pickups across all corners of {name}, including <em>{streets}</em>, and other nearby lanes.
        </p>
      </div>

      <!-- Section 2: Localized Scrap Rates & Materials (approx 250 words) -->
      <div class="glass-card" style="margin-bottom: 30px; border-left: 4px solid var(--accent);">
        <h3 style="font-family: var(--font-heading); font-size: 2.2rem; color: var(--primary); margin-bottom: 15px; text-transform: uppercase;">2. Aaj Ke Scrap Rates in {name} - Get Best Payouts</h3>
        <p style="color: var(--text-white); font-size: 1.05rem; line-height: 1.8; margin-bottom: 15px;">
          Scrap prices fluctuate daily based on global metal exchanges and local demand from recycling plants in Jaipur. We guarantee the most competitive and transparent <strong>scrap rates in {name}</strong>. To see our detailed daily pricing blogs, check out our <a href="blog-scrap-rates-jaipur.html" style="color: var(--primary); text-decoration: underline; font-weight: 600;">Jaipur Scrap Rates Blog</a>. Below is a detailed overview of the primary materials we accept and their current market value:
        </p>
        <ul style="list-style-type: none; padding-left: 0; margin-bottom: 20px; display: grid; grid-template-columns: 1fr 1fr; gap: 12px; color: var(--text-muted); font-size: 0.95rem;">
          <li style="padding: 6px 12px; background: rgba(255,255,255,0.03); border-radius: 6px;">📰 <strong>Newspaper (Raddi):</strong> ₹17 – ₹18 / Kg</li>
          <li style="padding: 6px 12px; background: rgba(255,255,255,0.03); border-radius: 6px;">📦 <strong>Cardboard (Carton):</strong> ₹13 / Kg</li>
          <li style="padding: 6px 12px; background: rgba(255,255,255,0.03); border-radius: 6px;">🔩 <strong>Iron (Lohaa):</strong> ₹32 / Kg</li>
          <li style="padding: 6px 12px; background: rgba(255,255,255,0.03); border-radius: 6px;">🔗 <strong>Steel (Steel scrap):</strong> ₹50 / Kg</li>
          <li style="padding: 6px 12px; background: rgba(255,255,255,0.03); border-radius: 6px;">🔌 <strong>Copper Wire:</strong> ₹1150 / Kg</li>
          <li style="padding: 6px 12px; background: rgba(255,255,255,0.03); border-radius: 6px;">🔋 <strong>Aluminium:</strong> ₹250 / Kg</li>
          <li style="padding: 6px 12px; background: rgba(255,255,255,0.03); border-radius: 6px;">🔔 <strong>Brass (Peetal):</strong> ₹750 / Kg</li>
          <li style="padding: 6px 12px; background: rgba(255,255,255,0.03); border-radius: 6px;">🧴 <strong>Plastic Waste:</strong> ₹12 / Kg</li>
          <li style="padding: 6px 12px; background: rgba(255,255,255,0.03); border-radius: 6px;">💻 <strong>Dead Laptop:</strong> ₹200 / Unit</li>
          <li style="padding: 6px 12px; background: rgba(255,255,255,0.03); border-radius: 6px;">🖥️ <strong>Desktop PC:</strong> ₹300 / Unit</li>
        </ul>
        <p style="color: var(--text-muted); font-size: 1rem; line-height: 1.7; margin-bottom: 0;">
          If you have bulk quantities of old newspapers from schools or libraries, check out our guide on <a href="blog-raddi-newspaper-price-jaipur.html" style="color: var(--primary); text-decoration: underline; font-weight: 600;">Raddi Newspaper Prices in Jaipur</a>. For industrial waste or office shifting in the <strong>{roads}</strong> area, please contact us directly for customized premium pricing. We offer higher rates for clean, segregated metal and cardboard scrap in large quantities.
        </p>
      </div>

      <!-- Section 3: Step-by-Step Logistics & Operations (approx 200 words) -->
      <div class="glass-card" style="margin-bottom: 30px; border-left: 4px solid #ab47bc;">
        <h3 style="font-family: var(--font-heading); font-size: 2.2rem; color: var(--accent); margin-bottom: 15px; text-transform: uppercase;">3. How Doorstep Scrap Pickup Works in {name}</h3>
        <p style="color: var(--text-white); font-size: 1.05rem; line-height: 1.8; margin-bottom: 15px;">
          We have streamlined our collection process to ensure that selling scrap is a fast, transparent, and pleasant experience for residents along <strong>{roads}</strong> and all neighboring streets:
        </p>
        <div style="display: flex; flex-direction: column; gap: 15px; color: var(--text-muted); font-size: 1rem; line-height: 1.6;">
          <div style="display: flex; gap: 15px; align-items: flex-start;">
            <span style="background: var(--primary); color: #000; font-weight: 700; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">1</span>
            <p style="margin: 0;"><strong>Book Your Slot:</strong> Fill out our online booking form or send a message on WhatsApp. Specify your scrap types, estimated weight, and preferred date.</p>
          </div>
          <div style="display: flex; gap: 15px; align-items: flex-start;">
            <span style="background: var(--primary); color: #000; font-weight: 700; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">2</span>
            <p style="margin: 0;"><strong>Executive Verification:</strong> Our background-verified team member will contact you to confirm the location coordinates near <strong>{landmarks}</strong> and estimate arrival time.</p>
          </div>
          <div style="display: flex; gap: 15px; align-items: flex-start;">
            <span style="background: var(--primary); color: #000; font-weight: 700; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">3</span>
            <p style="margin: 0;"><strong>Digital Weighing:</strong> We weigh all scrap materials in front of you using highly accurate digital scales. No round-offs or hidden manual reductions.</p>
          </div>
          <div style="display: flex; gap: 15px; align-items: flex-start;">
            <span style="background: var(--primary); color: #000; font-weight: 700; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">4</span>
            <p style="margin: 0;"><strong>Instant Payment & Eco-Routing:</strong> Receive money on the spot via Cash, UPI (GPay, PhonePe, Paytm). If you are looking to discard electronic waste or old servers, check out our <a href="blog-ewaste-disposal-jaipur.html" style="color: var(--primary); text-decoration: underline; font-weight: 600;">E-Waste Disposal Jaipur Guide</a> for safe eco-friendly recycling.</p>
          </div>
        </div>
      </div>

      <!-- Section 4: Localized FAQs (approx 200 words) -->
      <div class="glass-card" style="margin-bottom: 30px; border-left: 4px solid #26c6da;">
        <h3 style="font-family: var(--font-heading); font-size: 2.2rem; color: var(--primary); margin-bottom: 15px; text-transform: uppercase;">4. Frequently Asked Questions (FAQs) for {name} Residents</h3>
        <div style="display: flex; flex-direction: column; gap: 20px; font-family: var(--font-body); font-size: 0.95rem; line-height: 1.6;">
          <div>
            <h5 style="color: var(--text-white); font-weight: 600; margin-bottom: 5px; font-size: 1.05rem;">Q: Do you pick up scrap from high-rise residential apartments in {name}?</h5>
            <p style="color: var(--text-muted); margin: 0;">A: Yes, absolutely. We serve all high-rise societies, flat schemes, and gated communities near <strong>{landmarks}</strong>. Our executives will handle the loading and stairs/elevator transit themselves.</p>
          </div>
          <div>
            <h5 style="color: var(--text-white); font-weight: 600; margin-bottom: 5px; font-size: 1.05rem;">Q: Are there any extra transportation or labor charges for doorstep pickup?</h5>
            <p style="color: var(--text-muted); margin: 0;">A: No. We offer 100% free doorstep scrap pickup across {name}. There are absolutely zero loading, labor, or transportation fees deducted from your payout.</p>
          </div>
          <div>
            <h5 style="color: var(--text-white); font-weight: 600; margin-bottom: 5px; font-size: 1.05rem;">Q: How do we know the daily scrap prices are correct?</h5>
            <p style="color: var(--text-muted); margin: 0;">A: We display our updated scrap rates transparently on our website. Our rates align with market commodities in Jaipur and are calculated per kilogram using verified scales.</p>
          </div>
          <div>
            <h5 style="color: var(--text-white); font-weight: 600; margin-bottom: 5px; font-size: 1.05rem;">Q: What happens to the scrap materials collected from {name}?</h5>
            <p style="color: var(--text-muted); margin: 0;">A: The waste is brought to our sorting facility, segregated by material type, and forwarded directly to licensed green recycling foundries and mills in Rajasthan, preventing environmental hazards.</p>
          </div>
        </div>
      </div>

      <!-- Section 5: SEO Internal Linking Circle (approx 80 words) -->
      <div class="glass-card" style="border-left: 4px solid var(--accent); padding: 20px 30px;">
        <h4 style="font-family: var(--font-heading); font-size: 1.6rem; color: var(--accent); margin-bottom: 10px; text-transform: uppercase;">Other Service Locations Nearby</h4>
        <p style="color: var(--text-muted); font-size: 0.92rem; margin-bottom: 10px; line-height: 1.5;">We also provide same-day scrap collection and raddi pickup services in neighboring zones of Jaipur:</p>
        <div style="display: flex; flex-wrap: wrap; gap: 10px;">
          {nearby_links_html}
        </div>
      </div>

    </div>
  </section>

  <section class="services section-padding" id="services">"""
    
    page_content = page_content.replace(services_intro_target, localized_content_block)

    # 7. Inject rich multi-graph Schema (LocalBusiness, FAQPage, WebPage, BreadcrumbList)
    schema_pattern = r'<script type="application/ld\+json">[\s\S]*?</script>'
    
    schema_graph = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "RecyclingCenter",
                "@id": f"https://balajibestkabadiwala.in/{slug}.html#recyclingcenter",
                "name": f"Balaji Kabadi Wala {name}",
                "alternateName": f"Balaji Best Kabadi Wala {name} Jaipur",
                "description": f"Premium doorstep scrap collection service in {name}, Jaipur. Offering certified digital weighing accuracy, live daily scrap market rates, and instant UPI/cash payouts.",
                "url": f"https://balajibestkabadiwala.in/{slug}.html",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://balajibestkabadiwala.in/saurabh_kabadi_wala_hero.png"
                },
                "image": [
                    "https://balajibestkabadiwala.in/saurabh_kabadi_wala_hero.png",
                    "https://balajibestkabadiwala.in/saurabh_kabadi_wala_about.png"
                ],
                "telephone": "+919509752549",
                "email": "info@balajibestkabadiwala.in",
                "priceRange": "$$",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": f"{name}, Near {landmarks.split(',')[0]}",
                    "addressLocality": "Jaipur",
                    "addressRegion": "Rajasthan",
                    "postalCode": "302021",
                    "addressCountry": "IN"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 26.9076,
                    "longitude": 75.7381
                },
                "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                    ],
                    "opens": "07:00",
                    "closes": "20:00"
                },
                "contactPoint": [
                    {
                        "@type": "ContactPoint",
                        "telephone": "+919509752549",
                        "contactType": "customer service",
                        "areaServed": "Jaipur",
                        "availableLanguage": ["Hindi", "English"]
                    },
                    {
                        "@type": "ContactPoint",
                        "telephone": "https://wa.me/919509752549",
                        "contactType": "WhatsApp Support",
                        "areaServed": "Jaipur"
                    }
                ],
                "sameAs": [
                    "https://wa.me/919509752549",
                    "https://share.google/aUcX2DvL8lFflNRvQ"
                ],
                "areaServed": [
                    {"@type": "AdministrativeArea", "name": "Jaipur"},
                    {"@type": "Neighborhood", "name": name}
                ] + [{"@type": "Place", "name": s.strip()} for s in loc["streets"].split(",")]
            },
            {
                "@type": "FAQPage",
                "@id": f"https://balajibestkabadiwala.in/{slug}.html#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": f"Do you pick up scrap from high-rise residential apartments in {name}?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": f"Yes, absolutely. We serve all high-rise societies, flat schemes, and gated communities near {landmarks}. Our executives will handle the loading and stairs/elevator transit themselves."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Are there any extra transportation or labor charges for doorstep pickup?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": f"No. We offer 100% free doorstep scrap pickup across {name}. There are absolutely zero loading, labor, or transportation fees deducted from your payout."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How do we know the daily scrap prices are correct?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "We display our updated scrap rates transparently on our website. Our rates align with market commodities in Jaipur and are calculated per kilogram using verified scales."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": f"What happens to the scrap materials collected from {name}?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": f"The waste is brought to our sorting facility, segregated by material type, and forwarded directly to licensed green recycling foundries and mills in Rajasthan, preventing environmental hazards."
                        }
                    }
                ]
            },
            {
                "@type": "WebPage",
                "@id": f"https://balajibestkabadiwala.in/{slug}.html#webpage",
                "url": f"https://balajibestkabadiwala.in/{slug}.html",
                "name": f"Online Kabadi Wala in {name} Jaipur | Doorstep Scrap Pickup",
                "description": f"Looking for a reliable online kabadi wala in {name}, Jaipur? Balaji Kabadi Wala offers free doorstep scrap pickup across {name} with digital weighing & instant UPI.",
                "publisher": {
                    "@id": f"https://balajibestkabadiwala.in/{slug}.html#recyclingcenter"
                }
            },
            {
                "@type": "BreadcrumbList",
                "@id": f"https://balajibestkabadiwala.in/{slug}.html#breadcrumb",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://balajibestkabadiwala.in/"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": f"{name} Scrap Pickup",
                        "item": f"https://balajibestkabadiwala.in/{slug}.html"
                    }
                ]
            }
        ]
    }
    
    localized_schema = f'<script type="application/ld+json">\n{json.dumps(schema_graph, indent=2)}\n</script>'
    page_content = re.sub(schema_pattern, localized_schema, page_content, count=1)

    # 8. Save the localized page in the main root directory
    with open(f"{slug}.html", "w", encoding="utf-8") as f:
        f.write(page_content)

print(f"Generated {len(localities)} unique localized location landing pages successfully.")

# Generate updated sitemap.xml
sitemap_base = """<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

  <!-- Homepage — Highest Priority -->
  <url>
    <loc>https://balajibestkabadiwala.in/</loc>
    <lastmod>2026-07-08</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- About Page -->
  <url>
    <loc>https://balajibestkabadiwala.in/about.html</loc>
    <lastmod>2026-07-08</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Blog Index -->
  <url>
    <loc>https://balajibestkabadiwala.in/blog.html</loc>
    <lastmod>2026-07-08</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Blog Post 1: Scrap Rates Jaipur -->
  <url>
    <loc>https://balajibestkabadiwala.in/blog-scrap-rates-jaipur.html</loc>
    <lastmod>2026-07-08</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Blog Post 2: Raddi Newspaper Price -->
  <url>
    <loc>https://balajibestkabadiwala.in/blog-raddi-newspaper-price-jaipur.html</loc>
    <lastmod>2026-07-08</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <!-- Blog Post 3: E-Waste Disposal -->
  <url>
    <loc>https://balajibestkabadiwala.in/blog-ewaste-disposal-jaipur.html</loc>
    <lastmod>2026-07-08</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <!-- Blog Post 4: Kabadi Wala Near Me -->
  <url>
    <loc>https://balajibestkabadiwala.in/blog-kabadi-wala-near-me-jaipur.html</loc>
    <lastmod>2026-07-08</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Blog Post 5: Benefits of Recycling -->
  <url>
    <loc>https://balajibestkabadiwala.in/blog-benefits-recycling-scrap-home.html</loc>
    <lastmod>2026-07-08</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>

  <!-- Blog Post 6: Battery Scrap Prices -->
  <url>
    <loc>https://balajibestkabadiwala.in/blog-battery-scrap-prices-jaipur.html</loc>
    <lastmod>2026-07-08</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <!-- Blog Post 7: Copper Brass Scrap Guide -->
  <url>
    <loc>https://balajibestkabadiwala.in/blog-copper-brass-scrap-guide-jaipur.html</loc>
    <lastmod>2026-07-08</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <!-- Blog Post 8: Commercial Office Scrap -->
  <url>
    <loc>https://balajibestkabadiwala.in/blog-commercial-office-scrap-recycling-jaipur.html</loc>
    <lastmod>2026-07-08</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <!-- Blog Post 9: Digital Weighing vs Manual Scales -->
  <url>
    <loc>https://balajibestkabadiwala.in/blog-digital-weighing-vs-manual-scales-kabadiwala.html</loc>
    <lastmod>2026-07-08</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <!-- Blog Post 10: Aluminium Recycling Guide -->
  <url>
    <loc>https://balajibestkabadiwala.in/blog-aluminium-recycling-guide-jaipur.html</loc>
    <lastmod>2026-07-08</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
"""

for loc in localities:
    slug = loc["slug"]
    sitemap_base += f"""
  <!-- Location Page: {loc["name"]} -->
  <url>
    <loc>https://balajibestkabadiwala.in/{slug}.html</loc>
    <lastmod>2026-07-08</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>"""

sitemap_base += "\n</urlset>"

with open("sitemap.xml", "w", encoding="utf-8") as f:
    f.write(sitemap_base)

print("Updated sitemap.xml to include all new location pages.")
