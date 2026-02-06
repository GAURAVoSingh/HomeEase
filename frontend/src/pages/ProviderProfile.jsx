import StatusBadge from '../components/StatusBadge.jsx';

const ProviderProfile = () => (
  <main className="mx-auto max-w-5xl px-4 py-10">
    <div className="rounded-3xl bg-white p-8 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Marcus Lee</h1>
          <p className="text-sm text-slate-500">Plumbing specialist · Austin, TX</p>
        </div>
        <StatusBadge label="Verified" variant="verified" />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-100 p-4">
          <p className="text-sm text-slate-500">Rating</p>
          <p className="text-xl font-semibold">4.8 (98 reviews)</p>
        </div>
        <div className="rounded-2xl border border-slate-100 p-4">
          <p className="text-sm text-slate-500">Pricing</p>
          <p className="text-xl font-semibold">$40/hr</p>
        </div>
        <div className="rounded-2xl border border-slate-100 p-4">
          <p className="text-sm text-slate-500">Availability</p>
          <p className="text-xl font-semibold">Mon - Sat</p>
        </div>
      </div>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">Skills & services</h2>
        <div className="mt-3 flex flex-wrap gap-3">
          {['Leak detection', 'Pipe repair', 'Fixture installation', 'Emergency support'].map((skill) => (
            <span key={skill} className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600">{skill}</span>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">Reviews</h2>
        <div className="mt-4 space-y-4">
          {[
            { name: 'Samantha', rating: '5.0', comment: 'Quick response and fixed everything perfectly.' },
            { name: 'Luis', rating: '4.5', comment: 'Professional and punctual.' },
          ].map((review) => (
            <div key={review.name} className="rounded-2xl border border-slate-100 p-4">
              <div className="flex items-center justify-between">
                <p className="font-semibold">{review.name}</p>
                <span className="text-sm text-primary">{review.rating}</span>
              </div>
              <p className="mt-2 text-sm text-slate-500">{review.comment}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  </main>
);

export default ProviderProfile;
