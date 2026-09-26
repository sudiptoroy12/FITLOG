# FITLOG

> **Train with intent. Log every set.**

FitLog is a modern workout management web application designed to help users discover exercises, build a daily workout plan, and save workouts for later.

Built with **Next.js, TypeScript, and Tailwind CSS**, FitLog provides a clean dark-themed interface with a focus on simplicity, usability, and responsive design.

---

## Live Preview

**Live Website:** [(https://fitlog-pink-two.vercel.app/)]

**Repository:** [(https://github.com/sudiptoroy12/FITLOG)]

---

## Features

### Workout Library

Explore a collection of workouts covering different muscle groups and training styles.

Each workout provides:

- Workout name
- Muscle groups
- Equipment
- Difficulty
- Duration
- Calories burned
- Rating

### Workout Details

View complete information about a workout before adding it to your plan.

Includes:

- Detailed workout description
- Muscle groups
- Sets and reps
- Duration
- Calories
- Difficulty
- Step-by-step instructions
- Workout rating

### Today's Plan

Create your daily workout plan by adding exercises from the workout library.

Users can:

- Add workouts to today's plan
- Remove workouts
- View workout details
- Track total exercises
- Track total workout time
- Track estimated calories

### Saved Workouts

Save workouts that you want to come back to later.

The saved section provides a simple way to manage your favorite exercises separately from today's workout plan.

### Smart Sorting

Sort workouts based on:

- Duration
- Calories burned
- Rating

The selected sorting option dynamically updates the workout list.

### Responsive Design

FitLog is designed to work across:

- Desktop
- Tablet
- Mobile

The interface includes a responsive navigation menu and mobile-friendly workout cards.

### Modern User Experience

The application includes:

- Loading skeletons
- Custom 404 page
- Toast notifications
- Responsive navigation
- Smooth scrolling
- Empty states
- Interactive buttons
- Dark fitness-focused UI

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js** | React framework and routing |
| **React** | Building UI components |
| **TypeScript** | Type-safe development |
| **Tailwind CSS** | Styling and responsive design |
| **Lucide React** | Interface icons |
| **React Icons** | Additional icons |
| **React Toastify** | User notifications |

---

## Design

FitLog uses a dark, minimal interface designed around a fitness-focused visual system.

### Color Palette

| Color | Usage |
|------|------|
| `#0D0F12` | Main background |
| `#15181E` | Cards and sections |
| `#292D35` | Borders |
| `#9CA3AF` | Secondary text |
| `#C2F800` | Primary accent |

The lime accent color is used for important actions, active states, workout badges, and key statistics.

---

## Application Structure

```text
FITLOG
│
├── app/
│   ├── workouts/
│   │   ├── page.tsx
│   │   └── [id]/
│   │       ├── page.tsx
│   │       └── loading.tsx
│   │
│   ├── myplan/
│   │   ├── page.tsx
│   │   └── loading.tsx
│   │
│   ├── not-found.tsx
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── workouts/
│   ├── planpage/
│   └── navbar/
│
├── context/
│   └── WorkoutProvider.tsx
│
├── lib/
│   └── Datafetch.ts
│
├── types/
│   └── workout.type.ts
│
├── assets/
│   └── images
│
└── README.md
