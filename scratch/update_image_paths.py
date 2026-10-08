import re
import os

files_to_update = [
    'components/Navbar.jsx',
    'components/Footer.jsx',
    'components/JsonLd.jsx',
    'app/page.jsx',
    'app/about/page.jsx',
    'app/[slug]/page.jsx',
    'data/blogs.js'
]

for relative_path in files_to_update:
    if os.path.exists(relative_path):
        with open(relative_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Replace image PNG paths with WebP, except favicons/icons
        content = content.replace('/logo.png', '/logo.webp')
        content = content.replace('/screen.png', '/screen.webp')
        content = content.replace('/balaji_kabadi_doorstep_service.png', '/balaji_kabadi_doorstep_service.webp')
        content = content.replace('/balaji_kabadi_founding_story.png', '/balaji_kabadi_founding_story.webp')
        content = content.replace('/balaji_kabadi_e_waste_recycling.png', '/balaji_kabadi_e_waste_recycling.webp')
        content = content.replace('/saurabh_kabadi_wala_hero.png', '/saurabh_kabadi_wala_hero.webp')
        content = content.replace('/saurabh_kabadi_wala_about.png', '/saurabh_kabadi_wala_about.webp')
        
        # Blog images
        content = re.sub(r'(/blog_[a-zA-Z0-9_]+)\.png', r'\1.webp', content)

        with open(relative_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated image references in {relative_path}")

print("All image references updated to WebP format!")
