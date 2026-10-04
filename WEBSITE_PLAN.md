# PrimeDesk Smart POS — Official Website Architecture & Delivery Plan

**Project:** PrimeDesk Smart POS Marketing & Product Website  
**Date:** 2026-10-04  
**Target Folder:** `/Website`  
**Branding Core:** Azure Electric (`#1e90f2` / `#2da8ff`), Royal Blue (`#0f6fe8`), Deep Navy (`#0a3d91`), Emerald Success (`#16a34a`), Slate & Obsidian Dark Surfaces (`#070a0f`, `#0b1220`, `#111827`)  
**Typography:** Manrope & Plus Jakarta Sans  

---

## 1. Executive Summary & Objective

The PrimeDesk Smart POS website is designed to showcase the complete point-of-sale and retail business management suite. The website explicitly presents and contrasts the two available editions:
1. **PrimeDesk Desktop Edition** — A 100% offline-first Windows standalone desktop software (`.exe`), built with an encrypted SQLite database tied to machine identity, supporting multi-terminal local LAN networks, fast thermal receipt printing, barcode scanners, and automated daily backups.
2. **PrimeDesk Online Edition** — A flexible cloud-enabled spreadsheet & web application shell (Google Sheets + Apps Script + owner-managed backend) offering worldwide access from any browser, automatic cloud backup, and digital WhatsApp invoice dispatch.

Both editions feature **On-Demand Free Trials**, allowing prospective retail business owners, supermarkets, pharmacies, wholesalers, and restaurants to test-drive the full system before purchasing a permanent lifetime license.

---

## 2. Brand Identity & Design System

The visual design is directly extracted from the PrimeDesk repository design tokens (`customer-app/Styles.html` and `desktop-app/src/renderer/styles.css`):

### Color Tokens
- **Primary Brand Color:** `#1e90f2` (Vibrant Azure) / `#2da8ff`
- **Primary Strong:** `#0f6fe8` (Royal Blue)
- **Title & Primary Contrast:** `#0a3d91` (Deep Executive Navy)
- **Primary Soft Tint:** `#d9efff` / Light Surface Tint `#eaf4ff`
- **Success Accent:** `#16a34a` (Emerald Green)
- **Warning Accent:** `#d97706` (Warm Amber)
- **Danger / Alert Accent:** `#dc2626` (Crimson)
- **Dark Mode Surfaces:**
  - Base Background: `#070a0f`
  - Card & Container Surface: `#0b1220`
  - Elevated Popups / Menus: `#111827`
  - Subtle Borders: `#1f293d` / `#2a3648`
- **Light Mode Surfaces:**
  - Base Background: `#f8fafc`
  - Card & Container Surface: `#ffffff`
  - Border Soft: `#d9e3ef`

### Typography & Aesthetics
- **Headings & Accents:** `Plus Jakarta Sans` (Font weight 600, 700, 800)
- **Body & Data:** `Manrope` (Font weight 400, 500, 600)
- **Styling Elements:**
  - Modern Glassmorphism (subtle backdrop blur, gradient borders)
  - Interactive Micro-interactions (card tilt/hover, glowing borders)
  - Responsive Theme Switcher (instant seamless toggle between Dark Mode and Light Mode)
  - Real Product Visuals (actual screenshot artifacts from the repository)

---

## 3. Edition Comparison Architecture

| Feature / Attribute | PrimeDesk Desktop Edition | PrimeDesk Online Edition |
| :--- | :--- | :--- |
| **Architecture** | Standalone Windows 64-bit Desktop App (Electron) | Cloud Spreadsheet & Web Application Shell |
| **Database** | Encrypted SQLite tied to hardware/machine ID | Private Google Sheet + Owner Backend Bridge |
| **Internet Dependency** | **100% Offline-First** (Zero internet required for sales) | Requires active internet connection |
| **Multi-Terminal** | Local LAN Client Add-on (Up to 5 counter workstations on shop Wi-Fi) | Multi-device browser access simultaneously |
| **Hardware Support** | 58mm/80mm Thermal Receipt Printers, A4 Printers, USB Barcode Scanners, Cash Drawers | Any browser-connected printer, WhatsApp PDF share |
| **Data Privacy** | All business data resides strictly on your local PC | Data saved to customer's own Google Drive |
| **Backup System** | Automated daily encrypted local backups + manual export | Automatic Google Drive cloud revisions |
| **Trial Availability** | **2-Day Full Feature Trial on Demand** (Owner Approved) | **On-Demand Trial Provided on Request** |
| **Licensing Model** | Lifetime one-time purchase per machine | Lifetime or subscription license |

---

## 4. Comprehensive App Modules Coverage

The website details all core modules discovered in the repository inventory:

1. **POS Register & Quick Billing:**
   - Barcode scanning & quick product catalog search
   - Fast multi-tender checkout (Cash, Credit, Bank Transfer, JazzCash, EasyPaisa, Split Payments)
   - Held receipts (Park/Resume customer transactions)
   - Real-time stock decrement and immediate thermal receipt printing (58mm/80mm) or A4 invoices
2. **Invoices & Quotations:**
   - Professional invoice designer with custom logo, tax, discounts, and payment terms
   - Quotation / estimate creation with status tracking (draft, sent, accepted, rejected, expired)
   - One-click quotation to invoice conversion
3. **Inventory & Warehouse Management:**
   - Multi-tier product categories, barcode generator, SKU management
   - Stock adjustments (+/-) with strict audit reasons (damage, correction, theft, returns)
   - Batch tracking & automated expiry date alerts
   - Bin / warehouse location tagging
4. **Purchasing & Vendor Management:**
   - Supplier ledger management with balance history
   - Purchase Orders (PO) with lifecycle tracking (pending, dispatched, received, cancelled)
   - Purchase returns and debit notes
5. **Customer Relations & Salesmen Commission:**
   - Wholesale, Retail, and Distributor customer profiles with credit limits
   - Customer payment ledgers and aging reports
   - Salesman performance and commission tracking
6. **WhatsApp Assistant:**
   - Send receipts and invoices directly to customers via WhatsApp Web in one click
   - Automated payment reminder messages
7. **Expenses, Owner Equity & Financials:**
   - Categorized operational expense logs with supervisor approvals
   - Payments made and payments received tracking
   - Owner capital investment and drawings accounts
   - Fixed business assets with depreciation schedule
8. **Reports & Real-Time Analytics:**
   - Daily/Monthly sales velocity, profit margin calculations
   - Inventory valuation & stock reorder warnings
   - Interactive visual charts (revenue trends, top products)
9. **Multi-User Security & Hardware Control:**
   - Role-based permissions (Admin, Cashier, Inventory Manager, Accountant)
   - LAN counter configuration & pairing
   - Encrypted local backup management

---

## 5. Website File Structure

```
/Website
├── WEBSITE_PLAN.md                # This strategic master plan
├── index.html                    # Main website portal (Hero, Editions, Features, Gallery, Pricing, Contact)
├── editions.html                 # Dedicated Desktop vs Online comparison breakdown
├── modules.html                  # Deep-dive module catalog & workflow illustrations
├── contact.html                  # Purchase inquiry, quote request & trial application form
├── assets/
│   ├── css/
│   │   └── style.css             # Unified modern CSS design system with CSS custom properties
│   ├── js/
│   │   └── main.js               # Dynamic interactions, trial calculator, theme switcher, WhatsApp builder
│   ├── images/
│   │   ├── logo.svg              # Vector PrimeDesk logo
│   │   └── favicon.svg           # PrimeDesk favicon
│   └── screenshots/              # High-resolution screenshots copied from repository artifacts
```

---

## 6. Lead Capture & Purchase Funnel

- **On-Demand Trial Request Form:**
  Users can select their preferred edition (`Desktop Edition (Offline)`, `Online Edition (Cloud)`, or `Both Editions`), enter their business details, and immediately generate an official request message formatted for WhatsApp or email.
- **Direct Purchase Inquiry:**
  Clear CTA buttons connecting directly to sales reps via WhatsApp and email with pre-filled order specifications.
- **No Hidden Fees & Transparency:**
  Highlighting lifetime licensing, free updates within version line, and local data security.
