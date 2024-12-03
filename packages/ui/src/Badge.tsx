import React from 'react';

export function Badge({ children, tone = 'neutral' }: { children: React.ReactNode; tone?: 'neutral' | 'success' | 'warn' | 'danger' }) {
  return <span className={`etbp-badge etbp-badge-${tone}`}>{children}</span>;
}
