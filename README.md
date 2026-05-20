# Event & Ticket Booking Platform

Full-stack event management and ticket booking system by **Biruk-ak**.

## Stack
- **Mobile App:** TypeScript + React Native
- **API:** NestJS REST API
- **Infra:** Docker Compose + Dockerfiles
- **Applications:** Organizer Dashboard, Admin Dashboard

## Features
- Event Creation
- QR Tickets
- Refunds
- Discount Codes
- Sponsors
- Notifications
- Calendar
- Analytics
- Reports
- Messaging
- Reviews

## Monorepo layout
```
apps/api                 NestJS REST API
apps/mobile              React Native (TypeScript)
apps/organizer-dashboard Organizer web dashboard
apps/admin-dashboard     Admin web dashboard
packages/shared          Shared types & utilities
packages/ui              Shared dashboard UI kit
docker/                  Dockerfiles & nginx
```

## Quick start
```bash
docker compose up --build
```

API docs: `http://localhost:3000/docs`  
Organizer: `http://localhost:8080`  
Admin: `http://localhost:8081`

## Tests
```bash
npm test
```

50+ unit and smoke tests cover services, controllers, workflows, and clients.
