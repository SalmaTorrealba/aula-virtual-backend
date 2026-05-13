// src/components/student/ProgressBar.tsx
export default function ProgressBar({ value }: { value: number }) {
  const safe = Math.max(0, Math.min(100, value));
  return (
    <div className="progress-wrap" aria-valuenow={safe}>
      <div className="progress-fill" style={{ width: `${safe}%` }} />
    </div>
  );
}
