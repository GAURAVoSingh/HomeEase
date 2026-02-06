import ProviderCard from '../components/ProviderCard.jsx';
import StatusBadge from '../components/StatusBadge.jsx';

const providers = [
  { id: 1, name: 'Alicia Torres', location: 'Brooklyn, NY', skill: 'Cleaning', rating: '4.8 (120)', price: 28, jobs: 156, verified: true },
  { id: 2, name: 'Marcus Lee', location: 'Austin, TX', skill: 'Plumbing', rating: '4.7 (98)', price: 40, jobs: 112, verified: true },
  { id: 3, name: 'Sofia Patel', location: 'San Jose, CA', skill: 'Electrical', rating: '4.9 (140)', price: 55, jobs: 180, verified: false },
];

const categories = [
  { name: 'Plumbing', description: 'Fix leaks and installations' },
  { name: 'Electrical', description: 'Lighting, wiring & safety' },
  { name: 'Cleaning', description: 'Home and office cleaning' },
  { name: 'Carpentry', description: 'Furniture & repairs' },
];

const Home = () => (
  <main className="mx-auto max-w-6xl px-4 py-12">
    <section className="grid gap-8 lg:grid-cols-2">
      <div>
        <StatusBadge label="Trusted providers" variant="verified" />
        <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-900">
          Book reliable household services in minutes with HomeEase.
        </h1>
        <p className="mt-4 text-slate-600">
          Discover verified professionals for plumbing, electrical work, cleaning, and more. Manage bookings, track
          schedules, and pay securely in one seamless platform.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white">Find a provider</button>
          <button className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700">Become a provider</button>
        </div>
      </div>
      <div className="rounded-3xl bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold">Live booking snapshot</h2>
        <div className="mt-4 space-y-4">
          {[
            { name: 'Kitchen deep clean', time: 'Today • 3:00 PM', status: 'Confirmed' },
            { name: 'Ceiling fan repair', time: 'Tomorrow • 10:00 AM', status: 'Pending' },
            { name: 'Bathroom plumbing', time: 'Friday • 1:00 PM', status: 'In progress' },
          ].map((item) => (
            <div key={item.name} className="flex items-center justify-between rounded-2xl border border-slate-100 p-4">
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-slate-500">{item.time}</p>
              </div>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">{item.status}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="mt-16">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Browse service categories</h2>
        <button className="text-sm font-semibold text-primary">View all</button>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <div key={category.name} className="rounded-2xl bg-white p-5 shadow-sm">
            <p className="text-lg font-semibold">{category.name}</p>
            <p className="mt-2 text-sm text-slate-500">{category.description}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="mt-16">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Top-rated providers</h2>
        <button className="text-sm font-semibold text-primary">Explore</button>
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        {providers.map((provider) => (
          <ProviderCard key={provider.id} provider={provider} />
        ))}
      </div>
    </section>
  </main>
);

export default Home;
