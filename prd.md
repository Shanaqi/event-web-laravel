# 📄 Product Requirements Document (PRD)

## 🏷️ Product Name
**Venue Booking & Event Layout Management System (MVP+)**

---

# 1. 🎯 Objective

Build a responsive web application that allows:

### Users:
- Browse venues
- View venue details
- Submit booking requests

### Admins:
- Manage bookings
- Approve/reject bookings
- Manage venue layouts and vendor assignments

---

# 2. 👥 Target Users

## Primary Users
- Event organizers
- Individuals booking venues (weddings, seminars, bazaar)

## Admin Users
- Venue owners
- Event management staff

---

# 3. 🧩 Scope

## ✅ In Scope
- Venue browsing
- Venue detail page
- Booking request system
- Admin dashboard
- Booking status management
- Event layout system (NEW)
- Vendor/slot assignment system (NEW)
- Responsive UI

## ❌ Out of Scope (MVP)
- Online payments
- Advanced AI automation (future)
- Multi-tenant SaaS billing
- Mobile app

---

# 4. 📱 User Flow

## User Flow


## Admin Flow


---

# 5. 📄 Functional Requirements

## 5.1 Landing Page
- Hero section
- Venue highlights
- CTA: Browse Venues

---

## 5.2 Venue Listing Page
- Grid of venues
- Filters (optional)
- Quick view cards

---

## 5.3 Venue Details Page
- Venue images
- Description
- Capacity
- Pricing
- Booking panel (date + time selection)

---

## 5.4 Booking System

### Inputs:
- Name
- Phone
- Event type
- Date
- Time slot
- Notes

### Rules:
- Prevent double booking (same venue + date + time slot)
- Default status = Pending

---

## 5.5 Booking Confirmation Page
- Booking ID
- Summary details
- Status: Pending

---

## 5.6 Admin Login
- Email + password authentication
- Secure session/JWT

---

## 5.7 Admin Dashboard
- Booking table
- Status management:
  - Pending
  - Approved
  - Rejected

---

# 6. 🧩 NEW FEATURE: Event Layout & Vendor Management

---

## 6.1 Overview
Enable admins to create custom venue layouts and assign vendors/participants to slots (e.g., booths, seats, tables).

This transforms system from booking tool → event operations platform.

---

## 6.2 Layout Templates
Each venue can have multiple layouts:
- Wedding layout
- Bazaar layout
- Conference seating

### Requirements:
- Create / edit / delete layouts
- Layout belongs to a venue

---

## 6.3 Layout Slots
Each layout contains structured slots:

Example:
- A1, A2, A3
- B1, B2, B3

### Slot Attributes:
- Slot code
- Slot type (booth, seat, VIP)
- Status (available / occupied)

---

## 6.4 Vendor Assignment
Admins can assign vendors to slots.

### Features:
- Assign vendor to slot
- Remove vendor
- Update assignment

---

## 6.5 Admin Interface (MVP)
- List-based layout view
- Each slot shows:
  - Slot code
  - Status
  - Assigned vendor

---

## 6.6 Business Rules
- One slot = one vendor only
- No duplicate assignment per slot
- Must select layout before assignment

---

## 6.7 Future Enhancement
- Drag & drop layout editor
- Visual floor plan editor
- Auto-layout generator (smart placement)
- Heatmap of high traffic zones

---

# 7. 🗄️ Data Requirements

## Venues
- id
- name
- location
- capacity
- description

## Bookings
- id
- venue_id
- name
- phone
- event_type
- date
- time_slot
- status
- notes

## Layouts
- id
- venue_id
- name

## Slots
- id
- layout_id
- code
- type
- status

## Assignments
- id
- slot_id
- booking_id / vendor_name

---

# 8. ⚙️ Business Rules

- No double booking allowed
- Bookings default to Pending
- Only admins can approve/reject
- Layout must exist before vendor assignment
- Slot can only have one assignment

---

# 9. 🎨 UX Requirements

- Mobile-first design
- Clean booking flow (max 3–4 steps)
- Simple admin dashboard
- Fast interactions
- Minimal learning curve

---

# 10. 📊 Success Metrics

- Booking completion < 2 minutes
- Admin processing < 30 seconds
- Zero double-booking incidents
- High mobile usability

---

# 11. 🚀 Future Enhancements

- Auto layout generator (AI/rule-based)
- Drag-and-drop layout builder
- WhatsApp notifications
- Payment integration
- Analytics dashboard (booking trends)
- Multi-venue SaaS platform

---

# 🧠 Product Philosophy

- Solve real operational pain (not just booking)
- Keep MVP simple but powerful
- Focus on speed + clarity
- Reduce reliance on WhatsApp & Excel