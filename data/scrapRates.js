export const scrapCategories = [
  { id: 'all', name: 'All Categories' },
  { id: 'newspaper', name: '📰 Paper & Cardboard' },
  { id: 'metal', name: '🔩 Iron & Steel' },
  { id: 'nonferrous', name: '🔌 Copper, Brass & Aluminium' },
  { id: 'plastic', name: '🧴 Plastic Scrap' },
  { id: 'ewaste', name: '💻 E-Waste & Batteries' },
  { id: 'appliances', name: '❄️ Home Appliances' },
  { id: 'office', name: '🏢 Office Scrap' }
];

export const scrapRates = [
  // Paper & Cardboard
  { id: 1, category: 'newspaper', name: 'Old Newspaper (Raddi)', price: '₹18 – ₹22', unit: 'per kg', description: 'Clean Hindi and English daily newspapers.' },
  { id: 2, category: 'newspaper', name: 'Textbooks, Books & Notebooks', price: '₹14 – ₹18', unit: 'per kg', description: 'School books, office stationery, registers & notebooks.' },
  { id: 3, category: 'newspaper', name: 'Packaging Cardboard (Gatta)', price: '₹12 – ₹15', unit: 'per kg', description: 'E-commerce shipping cartons & corrugated boxes.' },
  { id: 4, category: 'office', name: 'Office White Paper / Files', price: '₹16 – ₹20', unit: 'per kg', description: 'Printed office documents and shredded paper.' },

  // Iron & Steel
  { id: 5, category: 'metal', name: 'Heavy Iron Scrap (Lohaa)', price: '₹28 – ₹38', unit: 'per kg', description: 'Iron rods, construction bars, window grills & angle frames.' },
  { id: 6, category: 'metal', name: 'Stainless Steel Scrap', price: '₹45 – ₹65', unit: 'per kg', description: 'Stainless steel utensils, railings, sinks & industrial sheets.' },
  { id: 7, category: 'metal', name: 'Cast Iron Scrap', price: '₹26 – ₹32', unit: 'per kg', description: 'Heavy cast machine parts and structural castings.' },

  // Non-Ferrous: Copper, Brass & Aluminium
  { id: 8, category: 'nonferrous', name: 'Bare Bright Copper Wire', price: '₹700 – ₹780', unit: 'per kg', description: 'Uncoated, stripped bright heavy copper electrical wire.' },
  { id: 9, category: 'nonferrous', name: 'Insulated Copper Wire', price: '₹450 – ₹580', unit: 'per kg', description: 'Standard PVC-insulated domestic electrical cables.' },
  { id: 10, category: 'nonferrous', name: 'Yellow Brass (Peetal)', price: '₹380 – ₹460', unit: 'per kg', description: 'Brass utensils, water taps, plumbing valves & decorative hardware.' },
  { id: 11, category: 'nonferrous', name: 'Aluminium Section & Window Scrap', price: '₹135 – ₹155', unit: 'per kg', description: 'Architectural window frames, sliding tracks & partition channels.' },
  { id: 12, category: 'nonferrous', name: 'Aluminium Utensils & Pots', price: '₹125 – ₹145', unit: 'per kg', description: 'Old aluminium cookware, pressure cookers & vessels.' },

  // Plastic Scrap
  { id: 13, category: 'plastic', name: 'Household Plastic (Buckets/Chairs)', price: '₹14 – ₹24', unit: 'per kg', description: 'Rigid plastic chairs, buckets, mugs & storage containers.' },
  { id: 14, category: 'plastic', name: 'PET Bottles & Mixed Plastics', price: '₹12 – ₹18', unit: 'per kg', description: 'Water bottles, oil cans & household plastic containers.' },

  // E-Waste & Batteries
  { id: 15, category: 'ewaste', name: 'Old/Dead Laptops', price: '₹300 – ₹700', unit: 'per pc', description: 'Old laptop units complete with motherboard and casing.' },
  { id: 16, category: 'ewaste', name: 'Desktop PC CPU Tower', price: '₹250 – ₹500', unit: 'per pc', description: 'Cabinet, motherboard, SMPS power supply & internal components.' },
  { id: 17, category: 'ewaste', name: 'Lead-Acid Inverter Battery (100–150AH)', price: '₹1,500 – ₹2,500', unit: 'per pc', description: 'Tubular home inverter batteries valued by capacity/weight.' },
  { id: 18, category: 'ewaste', name: 'Car Battery Scrap (32–80AH)', price: '₹500 – ₹1,100', unit: 'per pc', description: 'Automotive batteries from hatchbacks, sedans & SUVs.' },

  // Home Appliances
  { id: 19, category: 'appliances', name: 'Split / Window Air Conditioner', price: '₹1,800 – ₹3,500', unit: 'per pc', description: 'Old scrap ACs valued for copper condenser, compressor & metal.' },
  { id: 20, category: 'appliances', name: 'Refrigerator / Fridge Scrap', price: '₹800 – ₹1,600', unit: 'per pc', description: 'Single and double door refrigerators valued for compressor & metal.' },
  { id: 21, category: 'appliances', name: 'Washing Machine Scrap', price: '₹600 – ₹1,200', unit: 'per pc', description: 'Semi-automatic & automatic washing machines.' }
];
