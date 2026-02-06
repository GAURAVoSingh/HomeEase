import StatusBadge from '../components/StatusBadge.jsx';

const ProviderDashboard = () => (
  <main className="mx-auto max-w-6xl px-4 py-10">
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl font-semibold">Welcome back, Marcus</h1>
        <p className="text-sm text-slate-500">Verification status: <StatusBadge label="Verified" variant="verified" /></p>
      </div>
      <button className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white">Update availability</button>
    </div>

    <div className="mt-8 grid gap-6 lg:grid-cols-3">
      {[
        { label: 'Pending requests', value: 4 },
        { label: 'Monthly earnings', value: '$2,140' },
        { label: 'Rating', value: '4.8 / 5' },
      ].map((card) => (
        <div key={card.label} className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">{card.label}</p>
          <p className="mt-2 text-3xl font-bold">{card.value}</p>
        </div>
      ))}
    </div>

    <section className="mt-10 rounded-2xl bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">Incoming bookings</h2>
          <p className="text-sm text-slate-500">Accept or decline service requests</p>
        </div>
        <StatusBadge label="4 new" variant="pending" />
      </div>
      <div className="mt-6 space-y-4">
        {[
          { service: 'Pipe repair', customer: 'Nina Lopez', date: 'Today · 2:00 PM', status: 'pending' },
          { service: 'Emergency leak', customer: 'John Kim', date: 'Today · 4:30 PM', status: 'pending' },
        ].map((booking) => (
          <div key={booking.customer} className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-slate-100 p-4">
            <div>
              <p className="font-semibold">{booking.service}</p>
              <p className="text-sm text-slate-500">{booking.customer} · {booking.date}</p>
            </div>
            <div className="flex gap-2">
              <button className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold">Decline</button>
              <button className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white">Accept</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  </main>
);

export default ProviderDashboard;
