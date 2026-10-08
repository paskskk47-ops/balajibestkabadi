import os
import re

baseUrl = "https://balajibestkabadiwala.in"
currentDate = "2026-08-09"

def extract_slugs(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
    slugs = re.findall(r'"slug":\s*"([^"]+)"', content)
    if not slugs:
        slugs = re.findall(r'slug:\s*["\']([^"\']+)["\']', content)
    return slugs

locality_slugs = extract_slugs("data/localities.js")
city_slugs = extract_slugs("data/cities.js")
blog_slugs = extract_slugs("data/blogs.js")

urls = [
    (f"{baseUrl}/", "1.0", "daily"),
    (f"{baseUrl}/about", "0.9", "daily"),
    (f"{baseUrl}/blog", "0.9", "daily"),
]

for slug in locality_slugs:
    urls.append((f"{baseUrl}/{slug}", "1.0", "daily"))

for slug in city_slugs:
    urls.append((f"{baseUrl}/{slug}", "0.9", "daily"))

for slug in blog_slugs:
    urls.append((f"{baseUrl}/blog/{slug}", "0.9", "daily"))

xml_lines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
]

for url, prio, freq in urls:
    xml_lines.append(f'  <url>')
    xml_lines.append(f'    <loc>{url}</loc>')
    xml_lines.append(f'    <lastmod>{currentDate}</lastmod>')
    xml_lines.append(f'    <changefreq>{freq}</changefreq>')
    xml_lines.append(f'    <priority>{prio}</priority>')
    xml_lines.append(f'  </url>')

xml_lines.append('</urlset>')

os.makedirs("public", exist_ok=True)
with open("public/sitemap.xml", "w", encoding="utf-8") as f:
    f.write("\n".join(xml_lines))

with open("sitemap.xml", "w", encoding="utf-8") as f:
    f.write("\n".join(xml_lines))

robots_txt = f"""User-agent: *
Allow: /
Disallow: /api/

User-agent: Googlebot
Allow: /

User-agent: Googlebot-Image
Allow: /

User-agent: Bingbot
Allow: /

User-agent: OAI-SearchBot
Allow: /

Sitemap: {baseUrl}/sitemap.xml
"""

with open("public/robots.txt", "w", encoding="utf-8") as f:
    f.write(robots_txt)

with open("robots.txt", "w", encoding="utf-8") as f:
    f.write(robots_txt)

print(f"Generated physical sitemap.xml with {len(urls)} URLs and robots.txt with OAI-SearchBot support!")
