import StatusBadge from './StatusBadge.jsx';

const ProviderCard = ({ provider }) => (
  <div className="rounded-2xl bg-white p-5 shadow-sm">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-lg font-semibold">{provider.name}</p>
        <p className="text-sm text-slate-500">{provider.location} • {provider.skill}</p>
      </div>
      <StatusBadge label={provider.verified ? 'Verified' : 'Pending'} variant={provider.verified ? 'verified' : 'pending'} />
    </div>
    <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
      <div>
        <p className="text-slate-500">Rating</p>
        <p className="font-semibold">{provider.rating}</p>
      </div>
      <div>
        <p className="text-slate-500">Pricing</p>
        <p className="font-semibold">${provider.price}/hr</p>
      </div>
      <div>
        <p className="text-slate-500">Jobs</p>
        <p className="font-semibold">{provider.jobs}</p>
      </div>
    </div>
    <button className="mt-4 w-full rounded-xl border border-primary px-4 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-white">
      View profile
    </button>
  </div>
);

export default ProviderCard;
