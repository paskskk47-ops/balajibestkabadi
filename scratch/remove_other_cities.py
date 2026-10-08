import os
import re

cities_slugs = [
    "jodhpur", "udaipur", "kota", "ajmer", "bikaner", "alwar", "bhilwara", 
    "sikar", "bharatpur", "ganganagar", "hanumangarh", "chittorgarh", 
    "jaisalmer", "jhunjhunu", "pali", "tonk"
]

root_dir = r"d:\kabadi & kik\balajibestkabadi-main"

# 1. Clean HTML files
for root, dirs, files in os.walk(root_dir):
    # skip ponytails / node_modules / .git if any
    if "node_modules" in root or ".git" in root or ".next" in root:
        continue
    for file in files:
        if file.endswith(".html"):
            filepath = os.path.join(root, file)
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read()

            # Remove Rajasthan Cities Section block if present
            # Match <!-- Rajasthan Cities Section --> ... until closing </div>
            new_content = re.sub(
                r'<!--\s*Rajasthan Cities Section\s*-->.*?(?=<!--|\s*</div>\s*</div>|\s*</footer>)',
                '',
                content,
                flags=re.DOTALL
            )

            # Also remove individual city links if left in any footer or dropdown lists
            for city in cities_slugs:
                # Remove link pattern like: <a href="ajmer.html"...>Ajmer</a> (and optional separator)
                pattern = rf'<a\s+href="{city}\.html"[^>]*>.*?</a>\s*(<span[^>]*>\|</span>)?'
                new_content = re.sub(pattern, '', new_content, flags=re.IGNORECASE | re.DOTALL)
                pattern_slash = rf'<a\s+href="/{city}"[^>]*>.*?</a>\s*(<span[^>]*>\|</span>)?'
                new_content = re.sub(pattern_slash, '', new_content, flags=re.IGNORECASE | re.DOTALL)

            if new_content != content:
                with open(filepath, "w", encoding="utf-8") as f:
                    f.write(new_content)
                print(f"Updated HTML file: {file}")

# 2. Update sitemap.xml & public/sitemap.xml
sitemap_paths = [
    os.path.join(root_dir, "sitemap.xml"),
    os.path.join(root_dir, "public", "sitemap.xml")
]

for s_path in sitemap_paths:
    if os.path.exists(s_path):
        with open(s_path, "r", encoding="utf-8") as f:
            content = f.read()

        for city in cities_slugs:
            # remove <url>...city...</url>
            pattern = rf'\s*<url>\s*<loc>[^<]*/{city}</loc>.*?</url>'
            content = re.sub(pattern, '', content, flags=re.DOTALL)

        with open(s_path, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Updated sitemap: {s_path}")

# 3. Update data/cities.js
cities_js_path = os.path.join(root_dir, "data", "cities.js")
if os.path.exists(cities_js_path):
    with open(cities_js_path, "w", encoding="utf-8") as f:
        f.write("export const cities = [];\n")
    print("Updated data/cities.js")

print("Cleanup completed successfully!")
