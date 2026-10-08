import re
import json

print("=== EXECUTING COMPLETE SITE AUDIT ===")

# Read data files directly
with open('data/localities.js', 'r', encoding='utf-8') as f:
    loc_raw = f.read()

with open('data/cities.js', 'r', encoding='utf-8') as f:
    city_raw = f.read()

with open('data/blogs.js', 'r', encoding='utf-8') as f:
    blog_raw = f.read()

loc_names = re.findall(r'name:\s*["\']([^"\']+)["\']', loc_raw)
loc_slugs = re.findall(r'slug:\s*["\']([^"\']+)["\']', loc_raw)

city_names = re.findall(r'name:\s*["\']([^"\']+)["\']', city_raw)
city_slugs = re.findall(r'slug:\s*["\']([^"\']+)["\']', city_raw)

blog_slugs = re.findall(r'slug:\s*["\']([^"\']+)["\']', blog_raw)

inventory = [
    {
        "url": "https://balajibestkabadiwala.in/",
        "page_type": "Homepage",
        "primary_keyword": "Best Kabadi Wala in Jaipur",
        "secondary_keywords": "Kabadiwala in Jaipur, Scrap Pickup Jaipur, Scrap Dealer Jaipur, Doorstep Kabadiwala Jaipur",
        "template": "app/page.jsx"
    },
    {
        "url": "https://balajibestkabadiwala.in/about",
        "page_type": "About Us",
        "primary_keyword": "Balaji Kabadi Wala Jaipur Story",
        "secondary_keywords": "20 Years Legacy, Eco Recycling Jaipur, Digital Scale Guarantee",
        "template": "app/about/page.jsx"
    },
    {
        "url": "https://balajibestkabadiwala.in/blog",
        "page_type": "Blog Index",
        "primary_keyword": "Jaipur Scrap Recycling Guides & Daily Rates",
        "secondary_keywords": "Scrap Prices Jaipur, Battery Rates, Copper Brass Guide",
        "template": "app/blog/page.jsx"
    }
]

for name, slug in zip(loc_names, loc_slugs):
    inventory.append({
        "url": f"https://balajibestkabadiwala.in/{slug}",
        "page_type": "Jaipur Locality Landing Page",
        "primary_keyword": f"Kabadiwala {name} Jaipur",
        "secondary_keywords": f"Scrap Pickup {name} Jaipur, Scrap Dealer {name} Jaipur, Doorstep Kabadiwala {name}",
        "template": "app/[slug]/page.jsx"
    })

for name, slug in zip(city_names, city_slugs):
    inventory.append({
        "url": f"https://balajibestkabadiwala.in/{slug}",
        "page_type": "Rajasthan City Landing Page",
        "primary_keyword": f"Scrap Dealer in {name}",
        "secondary_keywords": f"Scrap Buyer in {name}, Kabadiwala in {name}, Scrap Collection {name}",
        "template": "app/[slug]/page.jsx"
    })

for slug in blog_slugs:
    inventory.append({
        "url": f"https://balajibestkabadiwala.in/blog/{slug}",
        "page_type": "Educational Blog Article",
        "primary_keyword": slug.replace('blog-', '').replace('-', ' ').title(),
        "secondary_keywords": f"Scrap Recycling Jaipur, {slug}",
        "template": "app/blog/[slug]/page.jsx"
    })

print(f"Total Indexable Pages Audited: {len(inventory)}")
print("\nSample Inventory Breakdown:")
for item in inventory[:5]:
    print(f"- [{item['page_type']}] {item['url']} -> Primary KW: '{item['primary_keyword']}'")

print(f"... and {len(inventory) - 5} more routes.")
