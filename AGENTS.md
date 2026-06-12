# AGENTS

## Purpose
This repository is a Laravel application with an Inertia.js + React frontend and Tailwind CSS theme styling.
This file helps AI coding agents understand the theme and UI stack so they can make safe, consistent changes.

## Project architecture
- Backend: Laravel PHP application under `app/`, `routes/`, and `resources/views/`
- Frontend: React + Inertia under `resources/js/`
- Styling: Tailwind CSS using `resources/css/app.css` and `tailwind.config.js`
- Inertia shell: `resources/views/app.blade.php`

## Theme / styling conventions
- CSS entrypoint: `resources/css/app.css`
- Tailwind config: `tailwind.config.js`
- Tailwind plugins: `@tailwindcss/forms`
- Prefer updating theme values in `tailwind.config.js` instead of adding raw CSS in `app.css`
- Use Tailwind utility classes and React component composition for UI and theme changes
- Keep theme state and layout logic in React/Inertia components, not in Laravel Blade templates

## Relevant files for theme work
- `tailwind.config.js`
- `postcss.config.js`
- `resources/css/app.css`
- `resources/js/app.jsx`
- `resources/js/Layouts/AuthenticatedLayout.jsx`
- `resources/js/Layouts/GuestLayout.jsx`
- `resources/js/Components/**/*.jsx`
- `resources/js/Pages/**/*.jsx`
- `resources/views/app.blade.php`
- `routes/web.php`

## Build and run commands
- `npm install`
- `npm run dev`
- `npm run build`
- `php artisan serve` (if a Laravel development server is needed)

## Agent guidance
- Focus theme changes on the React/Tailwind layer.
- Avoid modifying vendor files or Laravel framework internals.
- Preserve Inertia page structure and layout wrappers when changing styling.
- When proposing new theme utilities, prefer extending `tailwind.config.js`.

## Notes
This repository currently uses a default Tailwind setup with React pages under `resources/js/Pages`.
Theme and UI updates should be implemented in the frontend stack unless a backend data change is explicitly required.
