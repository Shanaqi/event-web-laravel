export function Card({ children, className = "" }) {
  return <div className={`rounded-xl border bg-white p-4 ${className}`}>{children}</div>;
}

export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`rounded-lg px-4 py-2 text-sm font-medium transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function Badge({ children, className = "" }) {
  return (
    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${className}`}>
      {children}
    </span>
  );
}
