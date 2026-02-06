const BookingFlow = () => (
  <main className="mx-auto max-w-5xl px-4 py-10">
    <div className="rounded-3xl bg-white p-8 shadow-sm">
      <h1 className="text-2xl font-semibold">Book a service</h1>
      <p className="text-sm text-slate-500">Tell us what you need, pick a time, and confirm your booking.</p>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <div>
            <label className="text-sm font-semibold text-slate-600">Service category</label>
            <select className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3">
              <option>Plumbing</option>
              <option>Electrical</option>
              <option>Cleaning</option>
              <option>Carpentry</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-semibold text-slate-600">Preferred provider</label>
            <input className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3" placeholder="Search by name" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm font-semibold text-slate-600">Date</label>
              <input type="date" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3" />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-600">Time slot</label>
              <select className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3">
                <option>9:00 AM - 11:00 AM</option>
                <option>12:00 PM - 2:00 PM</option>
                <option>3:00 PM - 5:00 PM</option>
              </select>
            </div>
          </div>
          <div>
            <label className="text-sm font-semibold text-slate-600">Notes for provider</label>
            <textarea className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3" rows="4" placeholder="Share details about the service" />
          </div>
        </div>
        <div className="rounded-2xl border border-slate-100 p-6">
          <h2 className="text-lg font-semibold">Estimated price</h2>
          <p className="mt-2 text-3xl font-bold text-primary">$120</p>
          <p className="text-sm text-slate-500">Based on average provider pricing in your area.</p>

          <div className="mt-6 space-y-3 text-sm">
            <div className="flex items-center justify-between">
              <span>Service duration</span>
              <span className="font-semibold">2 hours</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Service fee</span>
              <span className="font-semibold">$20</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Taxes</span>
              <span className="font-semibold">$8</span>
            </div>
          </div>

          <button className="mt-6 w-full rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white">Confirm booking</button>
          <p className="mt-4 text-xs text-slate-400">You can cancel for free up to 2 hours before the service.</p>
        </div>
      </div>
    </div>
  </main>
);

export default BookingFlow;
