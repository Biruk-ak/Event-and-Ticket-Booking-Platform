import React from 'react';

export type Column<T> = { key: keyof T | string; header: string; render?: (row: T) => React.ReactNode };

export function DataTable<T extends { id: string }>({ columns, rows }: { columns: Column<T>[]; rows: T[] }) {
  return (
    <table className="etbp-table">
      <thead>
        <tr>
          {columns.map((c) => (
            <th key={String(c.key)}>{c.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.id}>
            {columns.map((c) => (
              <td key={String(c.key)}>{c.render ? c.render(row) : (row as any)[c.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
