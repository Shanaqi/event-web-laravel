import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { publicMockData } from "../services/publicData";
import {
  approveBooking,
  rejectBooking,
  useAdminBookings,
  useAdminLayouts,
} from "../services/adminData";
import { Badge, Button, Card } from "../components/ui";

export function LandingPage() {
  const heroVenue = publicMockData.venues[0];
  return (
    <section className="pb-24">
      <header className="sticky top-0 z-40 flex items-center justify-between bg-page/90 px-6 py-4 backdrop-blur">
        <h1 className="bg-gradient-to-br from-[#00236f] to-[#1e3a8a] bg-clip-text text-xl font-bold text-transparent">
          Luxe Venue
        </h1>
        <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-primary shadow-sm">
          Concierge
        </span>
      </header>

      <section className="relative overflow-hidden px-6 pb-16 pt-12">
        <div className="absolute right-0 top-0 h-56 w-56 -translate-y-1/3 translate-x-1/3 rounded-full bg-indigo-200/40 blur-3xl" />
        <div className="mx-auto max-w-4xl">
          <span className="inline-flex rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-indigo-700">
            The Digital Concierge
          </span>
          <h2 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight md:text-6xl">
            Host Unforgettable Events
          </h2>
          <p className="mt-5 max-w-xl text-lg font-medium text-textMuted">
            Book premium venues and manage your layout in one place. Curated spaces for high-performance outcomes.
          </p>
          <Link
            className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-br from-primary to-[#1e3a8a] px-8 py-4 text-lg font-bold text-white shadow-lg md:w-auto"
            to="/venues"
          >
            Browse Venues
          </Link>
          <div className="mt-10 overflow-hidden rounded-xl bg-white shadow-sm md:max-w-md">
            <div className="h-44 bg-gradient-to-br from-slate-200 to-slate-100" />
            <div className="p-4">
              <h3 className="text-lg font-bold">{heroVenue.name}</h3>
              <p className="text-sm text-textMuted">{heroVenue.location}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="mb-6 flex items-end justify-between px-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-indigo-600">Curation</p>
            <h3 className="text-2xl font-bold">Featured Venues</h3>
          </div>
          <Link className="text-sm font-bold text-primary" to="/venues">
            View all
          </Link>
        </div>
        <div className="flex gap-4 overflow-x-auto px-6 pb-2">
          {publicMockData.venues.map((venue) => (
            <Card key={venue.id} className="min-w-[280px] overflow-hidden p-0">
              <div className="h-40 bg-gradient-to-br from-slate-200 to-slate-100" />
              <div className="space-y-3 p-5">
                <div>
                  <h4 className="text-lg font-bold text-primary">{venue.name}</h4>
                  <p className="text-sm text-textMuted">{venue.location}</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-primary">${venue.pricePerHour}/hour</span>
                  <span className="text-xs font-bold uppercase text-slate-500">{venue.capacity} Capacity</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16 px-6">
        <h3 className="mb-8 text-2xl font-bold">Why Luxe Venue?</h3>
        <div className="grid grid-cols-6 gap-4">
          <div className="col-span-6 rounded-xl bg-white p-6">
            <h4 className="text-lg font-bold">Smart Layout Tools</h4>
            <p className="mt-2 text-sm text-textMuted">
              Drag-and-drop seating charts and stage designs. Visualize your event before arrival.
            </p>
          </div>
          <div className="col-span-3 aspect-square rounded-xl bg-[#004752] p-4 text-white">
            <p className="text-xs font-bold uppercase tracking-wider">Live Sync</p>
            <p className="mt-2 text-xs opacity-80">Real-time availability</p>
          </div>
          <div className="col-span-3 aspect-square rounded-xl bg-[#eaddff] p-4 text-[#25005a]">
            <p className="text-xs font-bold uppercase tracking-wider">Concierge</p>
            <p className="mt-2 text-xs opacity-80">Dedicated event support</p>
          </div>
        </div>
      </section>

      <section className="mb-16 px-6">
        <div className="relative overflow-hidden rounded-xl bg-[#1e3a8a] p-8 text-white">
          <p className="text-4xl font-bold">12k+</p>
          <p className="text-xs font-bold uppercase tracking-widest text-white/70">Events Hosted</p>
          <p className="mt-6 text-4xl font-bold">4.9</p>
          <p className="text-xs font-bold uppercase tracking-widest text-white/70">Satisfaction Rate</p>
        </div>
      </section>

      <footer className="border-t border-slate-200 px-6 py-10">
        <h4 className="bg-gradient-to-br from-[#00236f] to-[#1e3a8a] bg-clip-text text-xl font-bold text-transparent">
          Luxe Venue
        </h4>
        <p className="mt-2 text-sm text-textMuted">Elevating event management for the modern enterprise.</p>
      </footer>
    </section>
  );
}

export function VenueListingPage() {
  return (
    <section className="pb-24">
      <header className="sticky top-0 z-40 flex items-center justify-between bg-page/90 px-6 py-4 backdrop-blur">
        <h2 className="text-lg font-bold text-primary">Event Venues</h2>
        <span className="text-sm text-primary">Search</span>
      </header>

      <section className="mt-4 px-6">
        <div className="flex gap-3 overflow-x-auto pb-2 text-sm">
          <Badge className="bg-primary text-white">All</Badge>
          <Badge className="bg-white text-textMuted">Grand Hall</Badge>
          <Badge className="bg-white text-textMuted">Meeting Room</Badge>
          <Badge className="bg-white text-textMuted">Roof Terrace</Badge>
        </div>
      </section>

      <section className="mt-8 px-6">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-500">Available Venues (12)</p>
          <button className="text-xs font-semibold text-indigo-600">Refine</button>
        </div>
        <div className="space-y-6">
          {publicMockData.venues.map((venue) => (
            <Card key={venue.id} className="overflow-hidden p-0 shadow-sm">
              <div className="h-52 bg-gradient-to-br from-slate-200 to-slate-100" />
              <div className="space-y-4 p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-primary">{venue.name}</h3>
                    <p className="mt-1 text-sm text-textMuted">{venue.location}</p>
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500">
                    Premium
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-slate-50 p-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Capacity</p>
                    <p className="text-sm font-bold">{venue.capacity} pax</p>
                  </div>
                  <Link className="rounded-lg border border-slate-300 px-5 py-2 text-sm font-bold" to={`/venues/${venue.id}`}>
                    View Details
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </section>
  );
}

export function VenueDetailPage() {
  const { id } = useParams();
  const [selectedSlot, setSelectedSlot] = useState("Full Day");
  const venue = useMemo(
    () => publicMockData.venues.find((item) => item.id === id) ?? publicMockData.venues[0],
    [id],
  );
  return (
    <section className="pb-28">
      <header className="sticky top-0 z-40 flex items-center justify-between bg-page/90 px-6 py-4 backdrop-blur">
        <h2 className="text-lg font-bold uppercase tracking-wider text-primary">Venue Details</h2>
        <span className="text-sm text-primary">Share</span>
      </header>

      <section className="relative h-80 bg-gradient-to-br from-slate-300 to-slate-100" />

      <section className="-mt-10 px-6">
        <Card className="space-y-6 p-8">
          <div>
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-600">MallConnect Premium</p>
            <h3 className="text-3xl font-extrabold text-primary">{venue.name}</h3>
            <p className="mt-2 text-sm text-textMuted">{venue.capacity} pax - Level 4, North Wing</p>
          </div>
          <p className="text-sm leading-relaxed text-textMuted">{venue.description}</p>
          <div className="grid grid-cols-2 gap-3 text-xs font-semibold uppercase tracking-wider">
            <div className="rounded-lg bg-slate-50 p-3">High-speed Wi-Fi</div>
            <div className="rounded-lg bg-slate-50 p-3">AV System</div>
            <div className="rounded-lg bg-slate-50 p-3">Catering</div>
            <div className="rounded-lg bg-slate-50 p-3">VIP Lounge</div>
          </div>
        </Card>
      </section>

      <section className="space-y-6 px-6 pt-8">
        <div>
          <h4 className="mb-3 px-2 text-xs font-bold uppercase tracking-[0.15em] text-slate-500">Select Date</h4>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {["Mon 24", "Tue 25", "Wed 26", "Thu 27", "Fri 28"].map((date, idx) => (
              <button
                className={`h-20 w-16 shrink-0 rounded-xl text-xs font-bold ${
                  idx === 0 ? "bg-gradient-to-br from-primary to-[#1e3a8a] text-white" : "bg-white text-textMain"
                }`}
                key={date}
                type="button"
              >
                {date}
              </button>
            ))}
          </div>
        </div>
        <div>
          <h4 className="mb-3 px-2 text-xs font-bold uppercase tracking-[0.15em] text-slate-500">Select Time Slot</h4>
          <div className="space-y-3">
            {publicMockData.timeSlots.map((slot) => (
              <button
                className={`flex w-full items-center justify-between rounded-xl border-2 p-5 text-left ${
                  selectedSlot === slot ? "border-primary bg-white" : "border-transparent bg-white"
                }`}
                key={slot}
                onClick={() => setSelectedSlot(slot)}
                type="button"
              >
                <div>
                  <p className="text-sm font-bold text-primary">{slot}</p>
                  <p className="text-xs text-textMuted">
                    {slot === "Morning" ? "8AM - 12PM" : slot === "Afternoon" ? "1PM - 5PM" : "8AM - 10PM"}
                  </p>
                </div>
                <span className="text-xs font-bold uppercase text-slate-500">
                  {selectedSlot === slot ? "Selected" : "Choose"}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <footer className="fixed bottom-0 left-0 right-0 z-40 flex items-center gap-2 rounded-t-3xl bg-white/95 px-4 py-4 shadow-[0_-8px_30px_rgba(0,0,0,0.04)] backdrop-blur">
        <Button className="flex-1 border border-slate-300 bg-white text-textMain">Add to Favorites</Button>
        <Link className="flex-[1.5] rounded-2xl bg-gradient-to-br from-primary to-[#1e3a8a] px-4 py-3 text-center text-sm font-semibold text-white" to={`/book/${id ?? "v1"}`}>
          Book Now
        </Link>
      </footer>
    </section>
  );
}

export function BookingFlowPage() {
  const { venueId } = useParams();
  const venue = useMemo(
    () => publicMockData.venues.find((item) => item.id === venueId) ?? publicMockData.venues[0],
    [venueId],
  );

  return (
    <section className="mx-auto max-w-md pb-24 pt-10">
      <div className="flex items-center justify-between px-6">
        <h2 className="text-lg font-bold uppercase tracking-wider text-primary">Book Event</h2>
        <span className="rounded-full border border-indigo-200 px-3 py-1 text-xs text-indigo-600">Profile</span>
      </div>
      <div className="mt-8 flex items-center justify-between px-6 text-[10px] font-bold uppercase tracking-[0.1em] text-slate-500">
        <span>Date</span>
        <span>Time</span>
        <span>Details</span>
        <span className="text-primary">Review</span>
      </div>

      <section className="mt-8 px-6">
        <Card className="overflow-hidden p-0 shadow-sm">
          <div className="h-32 bg-gradient-to-br from-slate-300 to-slate-100" />
          <div className="space-y-3 p-6">
            <h3 className="text-xl font-bold">Booking Summary</h3>
            <p className="text-sm text-textMuted">{venue.name} - Product Launch</p>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-lg bg-slate-50 p-3">Date: Oct 24, 2024</div>
              <div className="rounded-lg bg-slate-50 p-3">Time: 2:00 PM - 4:00 PM</div>
            </div>
            <div className="rounded-lg bg-slate-50 p-3 text-sm">Location: Grand Atrium, Level 1</div>
          </div>
        </Card>
      </section>

      <section className="mt-6 space-y-3 px-6">
        {[
          ["Full Name", "Julian Vance"],
          ["Phone", "+1 (555) 012-3456"],
          ["Event Type", "Corporate"],
          ["Notes", "Need AV support and HDMI connectivity."],
        ].map(([label, value]) => (
          <div className="rounded-xl bg-slate-100 p-4" key={label}>
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">{label}</p>
            <p className="mt-1 text-sm font-medium">{value}</p>
          </div>
        ))}
      </section>

      <section className="mt-6 space-y-3 px-6">
        <Link className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-primary to-[#1e3a8a] px-4 py-4 text-sm font-bold text-white" to="/booking/confirmation/BK-1001">
          Confirm Booking
        </Link>
        <button className="w-full rounded-xl px-4 py-4 text-sm font-semibold text-textMuted" type="button">
          Back to Details
        </button>
      </section>
    </section>
  );
}

export function BookingConfirmationPage() {
  const { id } = useParams();
  return (
    <section className="mx-auto flex min-h-screen w-full max-w-md flex-col items-center px-6 pb-32 pt-24">
      <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary to-[#1e3a8a] text-4xl text-white">
        ✓
      </div>
      <h2 className="text-3xl font-bold tracking-tight">Booking Confirmed</h2>
      <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-1.5">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Booking ID:</span>
        <span className="text-sm font-bold text-primary">{id}</span>
      </div>
      <Card className="relative mt-8 w-full overflow-hidden p-0 shadow-sm">
        <div className="h-32 bg-gradient-to-br from-slate-300 to-slate-100" />
        <div className="space-y-5 p-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-bold">The Grand Atrium</h3>
              <p className="text-sm text-textMuted">Main Wing, Level 4</p>
            </div>
            <Badge className="bg-warning/10 text-warning">Pending Verification</Badge>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-lg bg-slate-50 p-3">Date: Oct 24, 2024</div>
            <div className="rounded-lg bg-slate-50 p-3">Time: 8AM - 10PM</div>
          </div>
        </div>
      </Card>
      <div className="mt-8 w-full space-y-3">
        <Link className="flex h-14 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-[#1e3a8a] text-sm font-bold text-white" to="/">
          Return to Home
        </Link>
        <Link className="flex h-14 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white text-sm font-bold" to="/venues">
          View My Bookings
        </Link>
      </div>
    </section>
  );
}

export function AdminLoginPage() {
  return (
    <section className="mx-auto flex min-h-screen w-full max-w-md flex-col justify-center px-6 py-12">
      <header className="mb-10 text-center">
        <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-[#1e3a8a] text-2xl text-white">
          ◈
        </div>
        <h1 className="text-3xl font-extrabold uppercase tracking-tight text-primary">VenueAdmin</h1>
        <p className="mt-2 text-sm font-medium text-textMuted">The Digital Concierge</p>
      </header>
      <Card className="p-8 shadow-sm">
        <h2 className="text-xl font-bold">Welcome Back</h2>
        <p className="mt-1 text-sm text-textMuted">Please sign in to manage your venue</p>
        <form className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-500" htmlFor="admin-email">
              Email Address
            </label>
            <input className="w-full rounded-xl bg-slate-100 px-4 py-4 text-sm outline-none focus:ring-2 focus:ring-primary/30" id="admin-email" placeholder="name@venue.com" type="email" />
          </div>
          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-500" htmlFor="admin-password">
              Password
            </label>
            <input className="w-full rounded-xl bg-slate-100 px-4 py-4 text-sm outline-none focus:ring-2 focus:ring-primary/30" id="admin-password" placeholder="••••••••" type="password" />
          </div>
          <Button className="w-full rounded-xl bg-gradient-to-br from-primary to-[#1e3a8a] py-4 text-white">Sign In</Button>
        </form>
      </Card>
    </section>
  );
}

function statusBadgeClass(status) {
  if (status === "approved") return "bg-emerald-100 text-emerald-700";
  if (status === "rejected") return "bg-rose-100 text-rose-700";
  return "bg-amber-100 text-amber-700";
}

export function AdminDashboardPage() {
  const { data, loading, error } = useAdminBookings();
  const bookings = data.length
    ? data
    : [
        {
          id: "BK-8821",
          customer_name: "Sarah Jenkins",
          status: "pending",
          venue_name: "Grand Atrium",
          date: "Oct 24, 2024",
          time: "09:00 AM - 01:00 PM",
        },
        {
          id: "BK-8822",
          customer_name: "Marcus Thorne",
          status: "approved",
          venue_name: "North Wing",
          date: "Oct 25, 2024",
          time: "02:00 PM - 06:00 PM",
        },
      ];

  const onApprove = async (id) => {
    try {
      await approveBooking(id);
    } catch {
      // keep MVP error handling lightweight for now
    }
  };

  const onReject = async (id) => {
    try {
      await rejectBooking(id);
    } catch {
      // keep MVP error handling lightweight for now
    }
  };

  return (
    <section className="mx-auto max-w-lg pb-24">
      <header className="sticky top-0 z-40 bg-page/90 px-6 py-4 backdrop-blur">
        <h2 className="text-3xl font-extrabold tracking-tight">Booking Requests</h2>
        <input className="mt-6 h-14 w-full rounded-xl bg-slate-100 px-4 text-sm outline-none focus:ring-2 focus:ring-primary/30" placeholder="Search ID or Customer" type="text" />
        <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
          <Badge className="bg-primary text-white">All</Badge>
          <Badge className="bg-white text-textMuted">Pending</Badge>
          <Badge className="bg-white text-textMuted">Approved</Badge>
        </div>
      </header>
      <main className="space-y-6 px-6 pt-6">
        {loading && <p className="text-sm text-textMuted">Loading...</p>}
        {error && <p className="text-sm text-danger">{error}</p>}
        {bookings.map((booking) => (
          <Card className="space-y-4 p-6 shadow-sm" key={booking.id}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500">#{booking.id}</p>
                <h3 className="text-xl font-bold tracking-tight">{booking.customer_name}</h3>
              </div>
              <Badge className={statusBadgeClass(booking.status)}>{booking.status}</Badge>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-lg bg-slate-50 p-3">{booking.venue_name}</div>
              <div className="rounded-lg bg-slate-50 p-3">{booking.date}</div>
            </div>
            <div className="rounded-lg bg-slate-50 p-3 text-sm">{booking.time}</div>
            <div className="flex gap-2">
              <Button className="flex-1 bg-gradient-to-br from-primary to-[#1e3a8a] text-white" onClick={() => onApprove(booking.id)} type="button">
                Approve
              </Button>
              <Button className="flex-1 bg-slate-100 text-textMain" onClick={() => onReject(booking.id)} type="button">
                Reject
              </Button>
              <Button className="bg-[#eaddff] text-[#25005a]" type="button">
                View
              </Button>
            </div>
          </Card>
        ))}
      </main>
    </section>
  );
}

export function AdminLayoutPage() {
  const { data, loading, error } = useAdminLayouts();
  const layouts = data.length
    ? data
    : [{ id: "L-01", name: "Trade Show", venue_name: "Grand Atrium" }];
  const slots = [
    { id: "A-101", type: "Premium Booth", status: "occupied", vendor: "Lumina Apparel Co." },
    { id: "V-002", type: "VIP Lounge", status: "available", vendor: "None" },
    { id: "S-142", type: "Standard Seat", status: "occupied", vendor: "John Doe" },
  ];
  return (
    <section className="mx-auto max-w-2xl pb-24">
      <header className="sticky top-0 z-40 bg-page/90 px-6 py-4 backdrop-blur">
        <h2 className="text-xl font-bold tracking-tight text-primary">Layout Manager</h2>
      </header>
      <main className="space-y-8 px-4 pt-6">
        {loading && <p className="text-sm text-textMuted">Loading...</p>}
        {error && <p className="text-sm text-danger">{error}</p>}
        <section>
          <div className="mb-4 flex items-center justify-between px-1">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Selected Venue</h3>
            <button className="text-xs font-semibold text-primary" type="button">View All</button>
          </div>
          <Card className="flex items-center justify-between bg-slate-50">
            <div>
              <p className="font-bold">Grand Atrium</p>
              <p className="text-xs text-textMuted">Level 1, Central Plaza</p>
            </div>
            <span className="text-slate-500">▾</span>
          </Card>
        </section>
        <section>
          <h3 className="mb-4 px-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">Layout Template</h3>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {layouts.concat([
              { id: "L-02", name: "Gala Dinner", venue_name: "Grand Atrium" },
              { id: "L-03", name: "Live Concert", venue_name: "Grand Atrium" },
            ]).map((layout, idx) => (
              <Card className={`w-36 shrink-0 ${idx === 0 ? "border-2 border-primary" : ""}`} key={layout.id}>
                <div className="mb-3 h-24 rounded-lg bg-slate-100" />
                <p className="text-sm font-bold">{layout.name}</p>
                <p className="text-[10px] text-slate-500">{idx === 0 ? "48 Booths" : idx === 1 ? "24 Tables" : "500 Seats"}</p>
              </Card>
            ))}
          </div>
        </section>
        <section>
          <h3 className="mb-4 px-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">Slot Management</h3>
          <div className="space-y-3">
            {slots.map((slot) => (
              <Card className="space-y-3 p-4" key={slot.id}>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-lg font-bold text-primary">{slot.id}</p>
                      <Badge className={slot.status === "occupied" ? "bg-rose-100 text-rose-700" : "bg-emerald-100 text-emerald-700"}>
                        {slot.status}
                      </Badge>
                    </div>
                    <p className="text-xs text-textMuted">{slot.type}</p>
                  </div>
                  <button className="text-xs text-slate-500" type="button">More</button>
                </div>
                <div className="rounded-lg bg-slate-50 p-3 text-sm">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Assigned</p>
                  <p className="font-semibold">{slot.vendor}</p>
                </div>
                <div className="flex gap-2">
                  <Button className="flex-1 bg-primary text-white">Assign Vendor</Button>
                  <Button className="bg-slate-100 text-textMain">Edit Slot</Button>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </section>
  );
}
