# 🎨 Design Document - Venue Booking & Event Layout System

## 🧠 Overview
This document defines the UI/UX design direction for the Venue Booking & Event Layout Management System.

The goal is to create a **simple, fast, mobile-first experience** for users to:
- Browse venues
- Book venues easily
- View confirmations

And for admins to:
- Manage bookings efficiently
- Control venue layouts
- Assign vendors/slots for events

---

# 🎯 Design Principles

- **Simplicity first** → No clutter, minimal cognitive load
- **Mobile-first design** → Most users operate via phone
- **Fast booking flow** → Max 3–4 steps to complete booking
- **Clarity over aesthetics** → Function > decoration
- **Consistency** → Reusable components and predictable UI patterns
- **Operational efficiency** → Admin dashboard optimized for speed

---

# 🎨 Visual Style Guide

## Color Palette
- Primary: #2563EB (Blue)
- Secondary: #10B981 (Green)
- Warning: #F59E0B (Amber)
- Danger: #EF4444 (Red)
- Background: #F9FAFB
- Text: #111827
- Muted Text: #6B7280

---

## Typography
- Font: Inter / system-ui
- Headings: Bold, compact spacing
- Body: Regular, highly readable
- UI emphasis: medium weight

---

## UI Style
- Border radius: 10–14px
- Shadows: soft, minimal elevation
- Buttons: large, touch-friendly
- Inputs: clearly labeled, validation visible
- Cards: clean, spaced, grid-based

---

# 📱 Pages & Layouts

---

## 1. Landing Page

### Goal
Convert visitors into venue browsers/bookers

### Layout
- Hero section (value proposition + CTA)
- “Browse Venues” button (primary CTA)
- Featured venues grid
- Benefits section (why use system)
- Footer

### Key UX Focus
- Clear CTA above fold
- Minimal distractions

---

## 2. Venue Listing Page

### Layout
- Grid view (desktop: 3 columns, mobile: 1 column)
- Optional filter bar:
  - Location
  - Capacity
  - Price

### Venue Card
- Image preview
- Venue name
- Location
- Capacity badge
- “View Details” button

---

## 3. Venue Details Page

### Layout
Two-column layout (desktop), stacked (mobile):

**Left:**
- Image gallery
- Venue description
- Facilities list

**Right:**
- Booking panel

### Booking Panel
- Date picker
- Time slot selection:
  - Morning
  - Afternoon
  - Full Day
- “Book Now” CTA

---

## 4. Booking Flow (Core UX)

### Step-based flow (recommended)

#### Step 1: Select Date
- Calendar UI
- Disabled past dates

#### Step 2: Select Time Slot
- Button-based selection
- Visual active state

#### Step 3: User Details
- Name
- Phone number
- Event type
- Notes (optional)

#### Step 4: Review & Submit
- Summary card
- Confirm button

---

## 5. Booking Confirmation Page

### UI Elements
- Success icon
- Booking ID (important for tracking)
- Booking summary card
- Status badge: “Pending”
- Back to home CTA

---

## 6. Admin Login Page

### Layout
- Centered login card
- Email input
- Password input
- Login button

### UX Focus
- Minimal distractions
- Fast login experience

---

## 7. Admin Dashboard

### Layout
- Sidebar navigation
- Top bar (admin info + logout)
- Main content area

---

### Booking Management Table

Columns:
- Booking ID
- Customer name
- Venue
- Date
- Time slot
- Status
- Actions

### Actions
- Approve (green button)
- Reject (red button)
- View details

---

## 8. Event Layout Management (NEW FEATURE)

### Layout Page Concept
- Select venue
- Select layout template
- View slots in list/grid

---

### Slot UI (MVP version)
Each slot shows:
- Slot code (A1, A2, B1)
- Type (booth / seat / VIP)
- Status (available / occupied)
- Assigned vendor

---

### Actions
- Assign vendor
- Remove vendor
- Edit slot info

---

### Future UI Upgrade (not MVP)
- Drag-and-drop grid layout
- Floor plan visual editor
- Color-coded zones

---

# 📊 Component Library

## Buttons
- Primary (blue)
- Success (green)
- Danger (red)
- Secondary (gray)
- Disabled state

---

## Status Badges
- Pending (yellow)
- Approved (green)
- Rejected (red)
- Available (gray)
- Occupied (blue)

---

## Cards
- Venue card
- Booking summary card
- Slot card

---

## Inputs
- Text input
- Phone input
- Date picker
- Dropdown select
- Textarea

---

# 📱 Responsive Strategy

## Breakpoints
- Mobile: < 768px
- Tablet: 768px – 1024px
- Desktop: > 1024px

---

## Mobile Adjustments
- Stack all layouts vertically
- Full-width buttons
- Simplified admin table (card view instead of table)

---

# ⚡ UX Enhancements

- Instant validation feedback
- Loading states on all API calls
- Toast notifications (success/error)
- Disabled unavailable slots
- Quick actions in admin dashboard

---

# 🧠 Design Philosophy

- Reduce friction in booking process
- Optimize admin for speed, not aesthetics
- Make system usable within 1–2 minutes of first use
- Prioritize real-world operational workflow (not just UI beauty)

---

# 🚀 Future Enhancements

- Drag-and-drop layout builder
- AI-powered auto slot assignment
- WhatsApp integration UI
- Calendar heatmap view
- Real-time booking updates (WebSockets)
- Dark mode support