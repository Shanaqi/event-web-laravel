# 🗄️ Database Design (DBML)

## 📌 Overview

This DBML defines the database structure for the Venue Booking & Event Layout Management System.

---

# 🏢 Core Tables

```dbml
Table venues {
  id int [pk, increment]
  name varchar
  location varchar
  capacity int
  description text
  created_at timestamp
  updated_at timestamp
}

Table bookings {
  id int [pk, increment]
  venue_id int [ref: > venues.id]
  name varchar
  phone varchar
  event_type varchar
  date date
  time_slot varchar // morning, afternoon, full_day
  status varchar // pending, approved, rejected
  notes text
  created_at timestamp
  updated_at timestamp
}
```

---

# 🧩 Event Layout System (NEW)

```dbml
Table venue_layouts {
  id int [pk, increment]
  venue_id int [ref: > venues.id]
  name varchar // e.g. Wedding Layout, Bazaar Layout
  description text
  created_at timestamp
  updated_at timestamp
}

Table layout_slots {
  id int [pk, increment]
  layout_id int [ref: > venue_layouts.id]
  slot_code varchar // e.g. A1, A2, B1
  slot_type varchar // booth, seat, vip, table
  status varchar // available, occupied
  created_at timestamp
  updated_at timestamp
}

Table slot_assignments {
  id int [pk, increment]
  slot_id int [ref: > layout_slots.id]
  booking_id int [ref: > bookings.id, null]
  vendor_name varchar [null] // optional manual vendor name
  assigned_at timestamp
  created_at timestamp
  updated_at timestamp
}
```

---

# 👤 Admin (Optional Extension)

```dbml
Table users {
  id int [pk, increment]
  name varchar
  email varchar [unique]
  password varchar
  role varchar // admin, staff
  created_at timestamp
  updated_at timestamp
}
```

---

# 🔗 Relationships Summary

* venues → bookings (1 to many)
* venues → venue_layouts (1 to many)
* venue_layouts → layout_slots (1 to many)
* layout_slots → slot_assignments (1 to many)
* bookings → slot_assignments (optional linkage)

---

# ⚙️ Business Rules (Database Level)

* A booking must belong to one venue
* A slot belongs to only one layout
* A slot can only have one active assignment at a time
* Bookings must be unique per (venue_id + date + time_slot)
* Slots can exist without assignments (available state)

---

# 🚀 Design Notes

* Keep booking logic simple and fast
* Layout system is independent but linked to venues
* Slot assignment supports both:

  * structured booking linkage (booking_id)
  * manual vendor naming (vendor_name)

---

# 🧠 Scalability Path

Future enhancements this schema supports:

* Multi-event sessions per booking
* Drag-and-drop layout builder
* Real-time slot updates
* Analytics per slot usage
