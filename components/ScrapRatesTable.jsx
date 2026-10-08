'use client';

import { useState } from 'react';
import { scrapCategories, scrapRates } from '../data/scrapRates';
import { Search, Phone } from 'lucide-react';

export default function ScrapRatesTable() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRates = scrapRates.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#142c17] border border-[#25b05a]/30 rounded-3xl p-6 sm:p-8 shadow-2xl">
      
      {/* Category Pills & Search */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          {scrapCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#25b05a] text-[#0d1f0f] shadow-lg shadow-[#25b05a]/30'
                  : 'bg-[#0d1f0f] text-[#b3cbb6] hover:text-white border border-[#25b05a]/20'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 text-[#b3cbb6] absolute left-3.5 top-3.5" />
          <input
            type="text"
            placeholder="Search material..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-[#0d1f0f] border border-[#25b05a]/20 rounded-xl text-sm text-white placeholder-[#b3cbb6]/60 focus:outline-none focus:border-[#25b05a]"
          />
        </div>

      </div>

      {/* Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-[#25b05a]/20 text-xs font-bold text-[#25b05a] uppercase tracking-wider">
              <th className="py-4 px-4">Material Name</th>
              <th className="py-4 px-4">Description</th>
              <th className="py-4 px-4 text-right">Scrap Rate</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#25b05a]/10 text-sm">
            {filteredRates.length > 0 ? (
              filteredRates.map((item) => (
                <tr key={item.id} className="hover:bg-[#25b05a]/5 transition-colors">
                  <td className="py-4 px-4 font-bold text-white flex items-center gap-2">
                    {item.name}
                  </td>
                  <td className="py-4 px-4 text-[#b3cbb6] text-xs sm:text-sm">
                    {item.description}
                  </td>
                  <td className="py-4 px-4 text-right font-extrabold text-[#f5c842] whitespace-nowrap">
                    {item.price} <span className="text-xs font-normal text-[#b3cbb6]">/ {item.unit}</span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="py-8 text-center text-[#b3cbb6]">
                  No scrap material found matching &quot;{searchQuery}&quot;. Call us directly for custom quotes!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Disclaimer & Date Note */}
      <div className="mt-8 pt-6 border-t border-[#25b05a]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#b3cbb6]">
        <div className="space-y-1 text-center sm:text-left">
          <p className="font-semibold text-white">📅 Last Updated: August 2026</p>
          <p className="text-[11px] text-gray-400">
            * Rates are indicative Jaipur market benchmarks. Final payouts vary based on material purity, grade, quantity, and daily commodity movement. Confirm the applicable rate before collection.
          </p>
        </div>
        <a
          href="tel:9509752549"
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25b05a] text-[#081509] font-bold shrink-0 hover:bg-[#16a34a] transition-all shadow-md"
        >
          <Phone className="w-4 h-4" />
          <span>Confirm Rate: 95097 52549</span>
        </a>
      </div>
    </div>
  );
}
