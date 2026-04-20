# Event Web 2

Event Web 2 is an MVP project for a venue booking and event layout management system.

This repository currently contains:
- `frontend/`: React + Vite web app
- `stitch-exports/`: static HTML exports from the PRD/design artifacts
- project docs: `prd.md`, `design.md`, `tech_stack.md`, `dbml.md`

## Quick Start

### 1) Install dependencies

```bash
cd frontend
npm install
```

### 2) Run development server

```bash
npm run dev
```

The app will start on the Vite local URL shown in your terminal (usually `http://localhost:5173`).

### 3) Run tests

```bash
npm test
```

## Notes

- The frontend is currently the runnable part of this repository.
- Backend (Laravel) is part of the target architecture in `tech_stack.md` and can be added in the next phase.
- `stitch-exports/` is useful as UI reference and alignment with product/design docs.
