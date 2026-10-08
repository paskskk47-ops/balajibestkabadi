import re

with open('data/blogs.js', 'r', encoding='utf-8') as f:
    text = f.read()

posts = re.findall(r'\{\s*"slug":\s*"([^"]+)",.*?"content":\s*"(.*?)(?="\s*,\s*"|"\s*\})', text, re.DOTALL)

for slug, content in posts:
    clean = re.sub(r'<[^>]+>', ' ', content)
    words = clean.split()
    links = re.findall(r'href=\\"([^"\\]+)\\"', content)
    print(f"Slug: {slug}")
    print(f"  Word count: {len(words)}")
    print(f"  Links found ({len(links)}): {links}")
    print()
