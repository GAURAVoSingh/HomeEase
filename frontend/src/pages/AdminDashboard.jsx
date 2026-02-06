import StatusBadge from '../components/StatusBadge.jsx';

const AdminDashboard = () => (
  <main className="mx-auto max-w-6xl px-4 py-10">
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl font-semibold">Admin dashboard</h1>
        <p className="text-sm text-slate-500">Verify providers, monitor bookings, and keep the community safe.</p>
      </div>
      <button className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white">Create category</button>
    </div>

    <div className="mt-8 grid gap-6 lg:grid-cols-3">
      {[
        { label: 'Total users', value: 1240 },
        { label: 'Active providers', value: 320 },
        { label: 'Bookings this week', value: 86 },
      ].map((card) => (
        <div key={card.label} className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">{card.label}</p>
          <p className="mt-2 text-3xl font-bold">{card.value}</p>
        </div>
      ))}
    </div>

    <section className="mt-10 rounded-2xl bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Provider verifications</h2>
        <StatusBadge label="5 pending" variant="pending" />
      </div>
      <div className="mt-6 space-y-4">
        {[
          { name: 'Sofia Patel', service: 'Electrical', status: 'pending' },
          { name: 'Jordan Miles', service: 'Carpentry', status: 'pending' },
        ].map((provider) => (
          <div key={provider.name} className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-slate-100 p-4">
            <div>
              <p className="font-semibold">{provider.name}</p>
              <p className="text-sm text-slate-500">{provider.service}</p>
            </div>
            <div className="flex gap-2">
              <button className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold">Reject</button>
              <button className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white">Verify</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  </main>
);

export default AdminDashboard;
