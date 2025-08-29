# Tooltip Icon Demo

A minimal React + TypeScript + Vite project demonstrating custom tooltips for icons using [`IconTooltip`](src/component/TooltipModel.tsx) and [`react-tooltip`](https://www.npmjs.com/package/react-tooltip).

## Features

- Modern React (v19) with TypeScript
- Vite for fast development
- Custom-styled tooltips for icons
- Uses [`react-icons`](https://react-icons.github.io/react-icons/) for SVG icons

## Getting Started

### Install dependencies

```sh
npm install
```

### Run in development

```sh
npm run dev
```

### Build for production

```sh
npm run build
```

### Preview production build

```sh
npm run preview
```

## File Structure

- [`src/App.tsx`](src/App.tsx): Main app, renders icons with tooltips
- [`src/component/TooltipModel.tsx`](src/component/TooltipModel.tsx): Tooltip component
- [`src/component/Tooltip.module.css`](src/component/Tooltip.module.css): Icon styles

## Usage

Add an icon with a tooltip:

```tsx
<IconTooltip id="home-icon" icon={<FaHome />} tooltip="Go to Homepage" />
```

##
