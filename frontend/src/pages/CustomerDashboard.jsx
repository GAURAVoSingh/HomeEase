import StatusBadge from '../components/StatusBadge.jsx';

const CustomerDashboard = () => (
  <main className="mx-auto max-w-6xl px-4 py-10">
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <p className="text-sm text-slate-500">Upcoming bookings</p>
        <p className="mt-2 text-3xl font-bold">3</p>
        <p className="text-xs text-slate-400">2 confirmed · 1 pending</p>
      </div>
      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <p className="text-sm text-slate-500">Total spend</p>
        <p className="mt-2 text-3xl font-bold">$620</p>
        <p className="text-xs text-slate-400">Last 30 days</p>
      </div>
      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <p className="text-sm text-slate-500">Saved providers</p>
        <p className="mt-2 text-3xl font-bold">5</p>
        <p className="text-xs text-slate-400">Verified profiles</p>
      </div>
    </div>

    <section className="mt-10 rounded-2xl bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">My bookings</h2>
          <p className="text-sm text-slate-500">Track status or cancel bookings</p>
        </div>
        <button className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white">New booking</button>
      </div>
      <div className="mt-6 space-y-4">
        {[
          { service: 'Deep cleaning', provider: 'Alicia Torres', date: 'Today, 3:00 PM', status: 'confirmed' },
          { service: 'Pipe repair', provider: 'Marcus Lee', date: 'Tomorrow, 10:00 AM', status: 'pending' },
          { service: 'Light fixture install', provider: 'Sofia Patel', date: 'Friday, 1:00 PM', status: 'in progress' },
        ].map((booking) => (
          <div key={booking.service} className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-slate-100 p-4">
            <div>
              <p className="font-semibold">{booking.service}</p>
              <p className="text-sm text-slate-500">{booking.provider} · {booking.date}</p>
            </div>
            <StatusBadge label={booking.status} variant={booking.status === 'confirmed' ? 'verified' : 'pending'} />
          </div>
        ))}
      </div>
    </section>
  </main>
);

export default CustomerDashboard;
