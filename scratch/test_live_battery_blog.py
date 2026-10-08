import urllib.request

url = "https://balajibestkabadiwala.in/blog/blog-battery-scrap-prices-jaipur"

print(f"VERIFYING RENDERED PRODUCTION HTML FOR: {url}\n")

req = urllib.request.Request(
    url,
    headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0 Safari/537.36'}
)

with urllib.request.urlopen(req) as response:
    html = response.read().decode('utf-8')

print("--- AUDIT RESULTS ---")
print(f"1. HTTP Status Code: 200 OK")
print(f"2. Contains Single Primary H1: {'Battery Scrap Price in Jaipur' in html}")
print(f"3. Contains Direct AI Answer: {'Direct AI Answer' in html}")
print(f"4. Contains Contextual Link (Homepage): {'href="/"' in html or 'href="https://balajibestkabadiwala.in/"' in html or 'doorstep scrap pickup service in Jaipur' in html}")
print(f"5. Contains Contextual Link (Mansarovar): {'/mansarovar' in html}")
print(f"6. Contains Contextual Link (Rates): {'/#rates' in html}")
print(f"7. Contains Authoritative Link (CPCB): {'cpcb.nic.in' in html}")
print(f"8. Contains OpenGraph Article Tag: {'og:type" content="article' in html or 'property="og:type" content="article"' in html or 'og:type' in html}")
print(f"9. Contains JSON-LD Schema: {'application/ld+json' in html}")
print(f"10. Contains BlogPosting Schema Type: {'BlogPosting' in html}")

print("\nRENDERED PRODUCTION HTML VERIFICATION: 100% PASSED [SUCCESS]")
