import React, { useEffect, useState, useTransition } from 'react';
import { api } from '../../lib/api';

export function MessagingSection1({ data }: { data?: any }) {
  return (
    <section className="messaging-section-1">
      <header>
        <h2>Messaging — Panel 1</h2>
        <p>Operational controls and metrics for messaging workflow stage 1.</p>
      </header>
      <div className="grid">
        <article>
          <h3>Summary</h3>
          <p>{data?.summary1 ?? 'Awaiting live data from the NestJS API.'}</p>
        </article>
        <article>
          <h3>Actions</h3>
          <ul>
            <li>Refresh messaging dataset 1</li>
            <li>Export CSV for panel 1</li>
            <li>Notify stakeholders about panel 1</li>
            <li>Open audit trail for stage 1</li>
          </ul>
        </article>
        <article>
          <h3>Status</h3>
          <pre>{JSON.stringify(data?.status1 ?? { ready: false, panel: 1 }, null, 2)}</pre>
        </article>
      </div>
    </section>
  );
}

export function MessagingSection2({ data }: { data?: any }) {
  return (
    <section className="messaging-section-2">
      <header>
        <h2>Messaging — Panel 2</h2>
        <p>Operational controls and metrics for messaging workflow stage 2.</p>
      </header>
      <div className="grid">
        <article>
          <h3>Summary</h3>
          <p>{data?.summary2 ?? 'Awaiting live data from the NestJS API.'}</p>
        </article>
        <article>
          <h3>Actions</h3>
          <ul>
            <li>Refresh messaging dataset 2</li>
            <li>Export CSV for panel 2</li>
            <li>Notify stakeholders about panel 2</li>
            <li>Open audit trail for stage 2</li>
          </ul>
        </article>
        <article>
          <h3>Status</h3>
          <pre>{JSON.stringify(data?.status2 ?? { ready: false, panel: 2 }, null, 2)}</pre>
        </article>
      </div>
    </section>
  );
}

export function MessagingSection3({ data }: { data?: any }) {
  return (
    <section className="messaging-section-3">
      <header>
        <h2>Messaging — Panel 3</h2>
        <p>Operational controls and metrics for messaging workflow stage 3.</p>
      </header>
      <div className="grid">
        <article>
          <h3>Summary</h3>
          <p>{data?.summary3 ?? 'Awaiting live data from the NestJS API.'}</p>
        </article>
        <article>
          <h3>Actions</h3>
          <ul>
            <li>Refresh messaging dataset 3</li>
            <li>Export CSV for panel 3</li>
            <li>Notify stakeholders about panel 3</li>
            <li>Open audit trail for stage 3</li>
          </ul>
        </article>
        <article>
          <h3>Status</h3>
          <pre>{JSON.stringify(data?.status3 ?? { ready: false, panel: 3 }, null, 2)}</pre>
        </article>
      </div>
    </section>
  );
}

export function MessagingSection4({ data }: { data?: any }) {
  return (
    <section className="messaging-section-4">
      <header>
        <h2>Messaging — Panel 4</h2>
        <p>Operational controls and metrics for messaging workflow stage 4.</p>
      </header>
      <div className="grid">
        <article>
          <h3>Summary</h3>
          <p>{data?.summary4 ?? 'Awaiting live data from the NestJS API.'}</p>
        </article>
        <article>
          <h3>Actions</h3>
          <ul>
            <li>Refresh messaging dataset 4</li>
            <li>Export CSV for panel 4</li>
            <li>Notify stakeholders about panel 4</li>
            <li>Open audit trail for stage 4</li>
          </ul>
        </article>
        <article>
          <h3>Status</h3>
          <pre>{JSON.stringify(data?.status4 ?? { ready: false, panel: 4 }, null, 2)}</pre>
        </article>
      </div>
    </section>
  );
}

export function MessagingSection5({ data }: { data?: any }) {
  return (
    <section className="messaging-section-5">
      <header>
        <h2>Messaging — Panel 5</h2>
        <p>Operational controls and metrics for messaging workflow stage 5.</p>
      </header>
      <div className="grid">
        <article>
          <h3>Summary</h3>
          <p>{data?.summary5 ?? 'Awaiting live data from the NestJS API.'}</p>
        </article>
        <article>
          <h3>Actions</h3>
          <ul>
            <li>Refresh messaging dataset 5</li>
            <li>Export CSV for panel 5</li>
            <li>Notify stakeholders about panel 5</li>
            <li>Open audit trail for stage 5</li>
          </ul>
        </article>
        <article>
          <h3>Status</h3>
          <pre>{JSON.stringify(data?.status5 ?? { ready: false, panel: 5 }, null, 2)}</pre>
        </article>
      </div>
    </section>
  );
}

export function MessagingSection6({ data }: { data?: any }) {
  return (
    <section className="messaging-section-6">
      <header>
        <h2>Messaging — Panel 6</h2>
        <p>Operational controls and metrics for messaging workflow stage 6.</p>
      </header>
      <div className="grid">
        <article>
          <h3>Summary</h3>
          <p>{data?.summary6 ?? 'Awaiting live data from the NestJS API.'}</p>
        </article>
        <article>
          <h3>Actions</h3>
          <ul>
            <li>Refresh messaging dataset 6</li>
            <li>Export CSV for panel 6</li>
            <li>Notify stakeholders about panel 6</li>
            <li>Open audit trail for stage 6</li>
          </ul>
        </article>
        <article>
          <h3>Status</h3>
          <pre>{JSON.stringify(data?.status6 ?? { ready: false, panel: 6 }, null, 2)}</pre>
        </article>
      </div>
    </section>
  );
}

export function MessagingSection7({ data }: { data?: any }) {
  return (
    <section className="messaging-section-7">
      <header>
        <h2>Messaging — Panel 7</h2>
        <p>Operational controls and metrics for messaging workflow stage 7.</p>
      </header>
      <div className="grid">
        <article>
          <h3>Summary</h3>
          <p>{data?.summary7 ?? 'Awaiting live data from the NestJS API.'}</p>
        </article>
        <article>
          <h3>Actions</h3>
          <ul>
            <li>Refresh messaging dataset 7</li>
            <li>Export CSV for panel 7</li>
            <li>Notify stakeholders about panel 7</li>
            <li>Open audit trail for stage 7</li>
          </ul>
        </article>
        <article>
          <h3>Status</h3>
          <pre>{JSON.stringify(data?.status7 ?? { ready: false, panel: 7 }, null, 2)}</pre>
        </article>
      </div>
    </section>
  );
}

export function MessagingSection8({ data }: { data?: any }) {
  return (
    <section className="messaging-section-8">
      <header>
        <h2>Messaging — Panel 8</h2>
        <p>Operational controls and metrics for messaging workflow stage 8.</p>
      </header>
      <div className="grid">
        <article>
          <h3>Summary</h3>
          <p>{data?.summary8 ?? 'Awaiting live data from the NestJS API.'}</p>
        </article>
        <article>
          <h3>Actions</h3>
          <ul>
            <li>Refresh messaging dataset 8</li>
            <li>Export CSV for panel 8</li>
            <li>Notify stakeholders about panel 8</li>
            <li>Open audit trail for stage 8</li>
          </ul>
        </article>
        <article>
          <h3>Status</h3>
          <pre>{JSON.stringify(data?.status8 ?? { ready: false, panel: 8 }, null, 2)}</pre>
        </article>
      </div>
    </section>
  );
}

export function MessagingSection9({ data }: { data?: any }) {
  return (
    <section className="messaging-section-9">
      <header>
        <h2>Messaging — Panel 9</h2>
        <p>Operational controls and metrics for messaging workflow stage 9.</p>
      </header>
      <div className="grid">
        <article>
          <h3>Summary</h3>
          <p>{data?.summary9 ?? 'Awaiting live data from the NestJS API.'}</p>
        </article>
        <article>
          <h3>Actions</h3>
          <ul>
            <li>Refresh messaging dataset 9</li>
            <li>Export CSV for panel 9</li>
            <li>Notify stakeholders about panel 9</li>
            <li>Open audit trail for stage 9</li>
          </ul>
        </article>
        <article>
          <h3>Status</h3>
          <pre>{JSON.stringify(data?.status9 ?? { ready: false, panel: 9 }, null, 2)}</pre>
        </article>
      </div>
    </section>
  );
}

export function MessagingSection10({ data }: { data?: any }) {
  return (
    <section className="messaging-section-10">
      <header>
        <h2>Messaging — Panel 10</h2>
        <p>Operational controls and metrics for messaging workflow stage 10.</p>
      </header>
      <div className="grid">
        <article>
          <h3>Summary</h3>
          <p>{data?.summary10 ?? 'Awaiting live data from the NestJS API.'}</p>
        </article>
        <article>
          <h3>Actions</h3>
          <ul>
            <li>Refresh messaging dataset 10</li>
            <li>Export CSV for panel 10</li>
            <li>Notify stakeholders about panel 10</li>
            <li>Open audit trail for stage 10</li>
          </ul>
        </article>
        <article>
          <h3>Status</h3>
          <pre>{JSON.stringify(data?.status10 ?? { ready: false, panel: 10 }, null, 2)}</pre>
        </article>
      </div>
    </section>
  );
}

export function MessagingSection11({ data }: { data?: any }) {
  return (
    <section className="messaging-section-11">
      <header>
        <h2>Messaging — Panel 11</h2>
        <p>Operational controls and metrics for messaging workflow stage 11.</p>
      </header>
      <div className="grid">
        <article>
          <h3>Summary</h3>
          <p>{data?.summary11 ?? 'Awaiting live data from the NestJS API.'}</p>
        </article>
        <article>
          <h3>Actions</h3>
          <ul>
            <li>Refresh messaging dataset 11</li>
            <li>Export CSV for panel 11</li>
            <li>Notify stakeholders about panel 11</li>
            <li>Open audit trail for stage 11</li>
          </ul>
        </article>
        <article>
          <h3>Status</h3>
          <pre>{JSON.stringify(data?.status11 ?? { ready: false, panel: 11 }, null, 2)}</pre>
        </article>
      </div>
    </section>
  );
}

export function MessagingSection12({ data }: { data?: any }) {
  return (
    <section className="messaging-section-12">
      <header>
        <h2>Messaging — Panel 12</h2>
        <p>Operational controls and metrics for messaging workflow stage 12.</p>
      </header>
      <div className="grid">
        <article>
          <h3>Summary</h3>
          <p>{data?.summary12 ?? 'Awaiting live data from the NestJS API.'}</p>
        </article>
        <article>
          <h3>Actions</h3>
          <ul>
            <li>Refresh messaging dataset 12</li>
            <li>Export CSV for panel 12</li>
            <li>Notify stakeholders about panel 12</li>
            <li>Open audit trail for stage 12</li>
          </ul>
        </article>
        <article>
          <h3>Status</h3>
          <pre>{JSON.stringify(data?.status12 ?? { ready: false, panel: 12 }, null, 2)}</pre>
        </article>
      </div>
    </section>
  );
}


export default function MessagingPage() {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      api
        .get('/messagings')
        .then((res) => setData(res.data))
        .catch((e) => setError(e.message));
    });
  }, []);

  return (
    <main className="organizer-messaging-page">
      <h1>Messaging</h1>
      <p>
        Messaging management for the Event & Ticket Booking Platform. Data is served by the NestJS REST API
        and rendered in the organizer dashboard.
      </p>
      {isPending ? <p>Loading…</p> : null}
      {error ? <p className="error">{error}</p> : null}
            <MessagingSection1 data={data} />
      <MessagingSection2 data={data} />
      <MessagingSection3 data={data} />
      <MessagingSection4 data={data} />
      <MessagingSection5 data={data} />
      <MessagingSection6 data={data} />
      <MessagingSection7 data={data} />
      <MessagingSection8 data={data} />
      <MessagingSection9 data={data} />
      <MessagingSection10 data={data} />
      <MessagingSection11 data={data} />
      <MessagingSection12 data={data} />
    </main>
  );
}
