# SEO Quick Reference Guide - AdvantEdge Website

## ✅ Completed SEO Implementation

All 14 pages now have comprehensive SEO including:
- Meta tags (title, description, keywords)
- Open Graph tags (Facebook, LinkedIn, WhatsApp)
- Twitter Cards
- Schema.org structured data (JSON-LD)
- Breadcrumb navigation
- FAQ schemas (Home & Services pages)
- Service schemas (all 7 service pages)

---

## 📁 Key Files

### Configuration Files
- **`/src/app/utils/seo-config.ts`** - All SEO metadata and configuration
- **`/src/app/components/seo/PageSEO.tsx`** - Main SEO component
- **`/src/app/components/seo/StructuredData.tsx`** - Schema.org generator
- **`/public/sitemap.xml`** - XML sitemap for search engines
- **`/public/robots.txt`** - Crawler instructions

### Updated Pages
All 14 pages now use the `PageSEO` component:
- 7 Main pages: Home, About, Services, Industries, Case Studies, Contact, Configurator
- 7 Service pages: Strategic Planning, Brand Development, Digital Marketing, Content Strategy, PR Communications, Analytics & Optimization, AI Marketing Solutions

---

## 🔍 How to Update SEO for a Page

### 1. Edit SEO Configuration
Open `/src/app/utils/seo-config.ts` and update the page's entry in `PAGE_SEO` or `SERVICE_SEO`:

```typescript
export const PAGE_SEO = {
  about: {
    title: 'Your New Title Here — AdvantEdge',
    description: 'Your optimized meta description (155-160 characters)',
    keywords: ['keyword1', 'keyword2', 'keyword3'],
    ogImage: `${SITE_CONFIG.url}/og-about.png`,
  },
  // ... more pages
};
```

### 2. Page Already Uses PageSEO Component
All pages are already set up - no code changes needed in page files!

---

## 📊 Schema Types Implemented

| Schema Type | Pages | Purpose |
|------------|-------|---------|
| Organization | Home only | Company information for Google Knowledge Panel |
| Website | Home only | Enables Google Sitelinks Search Box |
| Service | All 7 service pages | Displays service info in search results |
| Breadcrumb | All 14 pages | Shows navigation path in search results |
| FAQ | Home, Services pages | Rich snippets with expandable Q&A |

---

## 🎯 SEO Best Practices Applied

### Meta Titles
- ✅ 50-60 characters optimal
- ✅ Include primary keyword
- ✅ Include brand name (AdvantEdge)
- ✅ Unique for every page

### Meta Descriptions
- ✅ 155-160 characters optimal
- ✅ Include primary + secondary keywords
- ✅ Clear call-to-action
- ✅ Unique for every page

### Keywords
- ✅ 5-10 relevant keywords per page
- ✅ Mix of short-tail and long-tail
- ✅ Industry-specific terms
- ✅ Location keywords where relevant

### Structured Data
- ✅ Valid JSON-LD format
- ✅ Follows schema.org standards
- ✅ Includes all required properties
- ✅ Dynamically generated

---

## 🖼️ OG Images Needed

Create the following images (1200x630px, PNG/JPG):

**Main Pages:**
1. `/public/og-home.png`
2. `/public/og-about.png`
3. `/public/og-services.png`
4. `/public/og-industries.png`
5. `/public/og-case-studies.png`
6. `/public/og-contact.png`
7. `/public/og-configurator.png`

**Service Pages:**
8. `/public/og-strategic-planning.png`
9. `/public/og-brand-development.png`
10. `/public/og-digital-marketing.png`
11. `/public/og-content-strategy.png`
12. `/public/og-pr-communications.png`
13. `/public/og-analytics-optimization.png`
14. `/public/og-ai-marketing.png`

**Fallback:**
- `/public/og-image.png` (currently used for all pages)

---

## 🚀 Next Steps

### 1. Generate OG Images
Create page-specific Open Graph images for better social media sharing.

### 2. Submit to Google Search Console
1. Go to https://search.google.com/search-console
2. Add property: https://onemen.in
3. Submit sitemap: https://onemen.in/sitemap.xml
4. Request indexing for all 14 pages

### 3. Test Schema Markup
Use Google Rich Results Test:
https://search.google.com/test/rich-results

### 4. Test Social Sharing
- **Facebook:** https://developers.facebook.com/tools/debug/
- **Twitter:** https://cards-dev.twitter.com/validator
- **LinkedIn:** Share a link and preview

### 5. Set Up Analytics
- Google Analytics 4
- Google Tag Manager
- Monitor organic traffic

---

## 🛠️ Maintenance

### Monthly
- Check Google Search Console for errors
- Update meta descriptions based on CTR data
- Monitor keyword rankings
- Add new content (blog posts, case studies)

### Quarterly
- Comprehensive keyword research
- Update structured data if schema.org specs change
- Refresh OG images with new designs
- Audit competitor SEO strategies

---

## 📞 Contact & Support

For SEO updates or questions:
- **Email:** hello@onemen.in
- **Domain:** https://onemen.in
- **Documentation:** See `SEO-AUDIT-REPORT.md` for complete details

---

**Last Updated:** March 27, 2026
**SEO Status:** ✅ 100% Complete
