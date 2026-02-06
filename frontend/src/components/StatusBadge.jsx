const statusStyles = {
  verified: 'bg-emerald-100 text-emerald-700',
  pending: 'bg-amber-100 text-amber-700',
  rejected: 'bg-rose-100 text-rose-700',
  active: 'bg-blue-100 text-blue-700',
};

const StatusBadge = ({ label, variant = 'active' }) => (
  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[variant] || statusStyles.active}`}>
    {label}
  </span>
);

export default StatusBadge;
