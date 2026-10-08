import urllib.request
import re
import json

def audit_url(url):
    try:
        req = urllib.request.Request(
            url,
            headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0 Safari/537.36'}
        )
        with urllib.request.urlopen(req, timeout=10) as res:
            status = res.status
            html = res.read().decode('utf-8')
            
            # Extract basic tags
            title_m = re.search(r'<title>(.*?)</title>', html, re.IGNORECASE | re.DOTALL)
            title = title_m.group(1).strip() if title_m else 'NO_TITLE'
            
            desc_m = re.search(r'<meta[^>]*name=["\']description["\'][^>]*content=["\'](.*?)["\']', html, re.IGNORECASE)
            desc = desc_m.group(1).strip() if desc_m else 'NO_DESC'
            
            h1s = re.findall(r'<h1[^>]*>(.*?)</h1>', html, re.IGNORECASE | re.DOTALL)
            h1_clean = [re.sub(r'<[^>]+>', '', h).strip() for h in h1s]
            
            canon_m = re.search(r'<link[^>]*rel=["\']canonical["\'][^>]*href=["\'](.*?)["\']', html, re.IGNORECASE)
            canonical = canon_m.group(1).strip() if canon_m else 'NO_CANONICAL'
            
            # Count clean words
            text_body = re.sub(r'<script[^>]*>.*?</script>', ' ', html, flags=re.DOTALL | re.IGNORECASE)
            text_body = re.sub(r'<style[^>]*>.*?</style>', ' ', text_body, flags=re.DOTALL | re.IGNORECASE)
            text_body = re.sub(r'<[^>]+>', ' ', text_body)
            words = text_body.split()
            word_count = len(words)
            
            # Schema
            schema_scripts = re.findall(r'<script[^>]*type=["\']application/ld\+json["\'][^>]*>(.*?)</script>', html, re.DOTALL | re.IGNORECASE)
            schema_types = []
            for sc in schema_scripts:
                try:
                    data = json.loads(sc)
                    if '@graph' in data:
                        for item in data['@graph']:
                            if '@type' in item:
                                schema_types.append(item['@type'])
                    elif '@type' in data:
                        schema_types.append(data['@type'])
                except Exception as e:
                    pass
            
            # OG & Twitter tags
            og_type_m = re.search(r'<meta[^>]*property=["\']og:type["\'][^>]*content=["\'](.*?)["\']', html, re.IGNORECASE)
            og_type = og_type_m.group(1) if og_type_m else 'NONE'
            
            tw_card_m = re.search(r'<meta[^>]*name=["\']twitter:card["\'][^>]*content=["\'](.*?)["\']', html, re.IGNORECASE)
            tw_card = tw_card_m.group(1) if tw_card_m else 'NONE'
            
            return {
                'url': url,
                'status': status,
                'canonical': canonical,
                'title': title,
                'h1_count': len(h1s),
                'h1': h1_clean[0] if h1_clean else 'NONE',
                'word_count': word_count,
                'schema_types': schema_types,
                'og_type': og_type,
                'twitter_card': tw_card
            }
    except Exception as e:
        return {
            'url': url,
            'status': str(e),
            'canonical': 'ERR',
            'title': 'ERR',
            'h1_count': 0,
            'h1': 'ERR',
            'word_count': 0,
            'schema_types': [],
            'og_type': 'ERR',
            'twitter_card': 'ERR'
        }

if __name__ == '__main__':
    # Fetch sitemap
    req = urllib.request.Request('https://balajibestkabadiwala.in/sitemap.xml', headers={'User-Agent': 'Mozilla/5.0'})
    xml = urllib.request.urlopen(req).read().decode('utf-8')
    urls = re.findall(r'<loc>(.*?)</loc>', xml)
    print(f"Total URLs in Sitemap: {len(urls)}")
    
    samples = [
        'https://balajibestkabadiwala.in/',
        'https://balajibestkabadiwala.in/about',
        'https://balajibestkabadiwala.in/blog',
        'https://balajibestkabadiwala.in/mansarovar',
        'https://balajibestkabadiwala.in/blog/blog-battery-scrap-prices-jaipur'
    ]
    
    for u in samples:
        res = audit_url(u)
        print(f"\n--- URL: {res['url']} ---")
        print(f"Status: {res['status']}")
        print(f"Canonical: {res['canonical']}")
        print(f"Title: {res['title']}")
        print(f"H1 ({res['h1_count']}): {res['h1']}")
        print(f"Word Count: {res['word_count']}")
        print(f"Schema Types: {res['schema_types']}")
        print(f"OG Type: {res['og_type']}, Twitter: {res['twitter_card']}")
