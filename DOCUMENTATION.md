# Natrix CSS Documentation

**A modern, premium CSS framework with OKLCH colors, glassmorphism, and cutting-edge features.**

Version: 2.0  
Author: Natrix Team  
License: MIT

---

## Table of Contents

1. [Getting Started](#getting-started)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Layout](#layout)
5. [Components](#components)
6. [Utilities](#utilities)
7. [Effects](#effects)
8. [Dark Mode](#dark-mode)

---

## Getting Started

### Installation

Include Natrix CSS in your project:

```html
<link rel="stylesheet" href="natrix.css">
<script src="natrix.js"></script>
```

### Basic Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Natrix App</title>
    <link rel="stylesheet" href="natrix.css">
</head>
<body>
    <div class="container">
        <h1>Hello, Natrix!</h1>
        <button class="btn btn-primary">Get Started</button>
    </div>
    <script src="natrix.js"></script>
</body>
</html>
```

---

## Color System

### OKLCH Colors

Natrix uses the **OKLCH color space** for perceptually uniform, vibrant colors.

#### Color Palette

- **Primary**: Royal blue shades (50-900)
- **Secondary**: Teal/cyan shades (50-900)
- **Success**: Emerald green
- **Danger**: Rose red
- **Warning**: Amber yellow
- **Info**: Sky blue
- **Extended**: Purple, Pink, Orange, Teal

#### Usage

```html
<!-- Text colors -->
<p class="text-primary">Primary text</p>
<p class="text-success">Success text</p>
<p class="text-muted">Muted text</p>

<!-- Background colors -->
<div class="bg-primary-50">Light primary background</div>
<div class="bg-primary-500">Primary background</div>
<div class="bg-dark-900">Dark background</div>

<!-- Gradients -->
<div class="bg-gradient-primary">Gradient background</div>
<button class="btn btn-primary">Gradient button</button>
```

#### All Shades Available

```html
<div class="bg-primary-50">Lightest</div>
<div class="bg-primary-100"></div>
<div class="bg-primary-200"></div>
<div class="bg-primary-300"></div>
<div class="bg-primary-400"></div>
<div class="bg-primary-500">Base</div>
<div class="bg-primary-600"></div>
<div class="bg-primary-700"></div>
<div class="bg-primary-800"></div>
<div class="bg-primary-900">Darkest</div>
```

---

## Typography

### Fluid Typography

Natrix uses modern `clamp()` for fluid, responsive headings.

```html
<h1>Huge Heading (scales 2.5rem - 4.5rem)</h1>
<h2>Large Heading (scales 2rem - 3.5rem)</h2>
<h3>Medium Heading</h3>
<p class="lead">Lead paragraph with larger text</p>
```

### Text Utilities

```html
<p class="text-xs">Extra small</p>
<p class="text-sm">Small</p>
<p class="text-base">Base size</p>
<p class="text-lg">Large</p>
<p class="text-xl">Extra large</p>
<p class="text-2xl">2X large</p>

<!-- Alignment -->
<p class="text-left">Left aligned</p>
<p class="text-center">Centered</p>
<p class="text-right">Right aligned</p>

<!-- Transform -->
<p class="uppercase">UPPERCASE TEXT</p>
<p class="capitalize">Capitalized Text</p>

<!-- Weight -->
<p class="font-light">Light weight</p>
<p class="font-bold">Bold weight</p>
```

---

## Layout

### Container

```html
<div class="container">
    <!-- Centered, max-width container -->
</div>
```

### Grid System

```html
<div class="row">
    <div class="col-md-6">Half width on medium+</div>
    <div class="col-md-6">Half width on medium+</div>
</div>

<div class="row">
    <div class="col-lg-4">1/3 on large</div>
    <div class="col-lg-4">1/3 on large</div>
    <div class="col-lg-4">1/3 on large</div>
</div>
```

### Flexbox Utilities

```html
<div class="flex items-center justify-between">
    <div>Left</div>
    <div>Right</div>
</div>

<div class="flex flex-col gap-4">
    <div>Item 1</div>
    <div>Item 2</div>
</div>
```

### Spacing

Modern units: `ch`, `lh`, and traditional `rem`.

```html
<!-- Traditional spacing -->
<div class="p-4">Padding 1rem</div>
<div class="m-8">Margin 3rem</div>
<div class="mb-16">Bottom margin 6rem</div>

<!-- Modern units -->
<div class="my-lh">Vertical margin = 1 line-height</div>
<div class="py-lh">Vertical padding = 1 line-height</div>
<div class="gap-ch">Gap = 1 character width</div>
```

---

## Components

### Buttons

```html
<!-- Gradient buttons -->
<button class="btn btn-primary">Primary Action</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-danger">Danger</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-info">Info</button>

<!-- Outline buttons -->
<button class="btn btn-outline-primary">Outline</button>
<button class="btn btn-ghost">Ghost</button>

<!-- Sizes -->
<button class="btn btn-xs btn-primary">Extra Small</button>
<button class="btn btn-sm btn-primary">Small</button>
<button class="btn btn-lg btn-primary">Large</button>

<!-- Icon buttons -->
<button class="btn btn-icon btn-primary">★</button>
```

### Cards

```html
<!-- Basic card -->
<div class="card">
    <div class="card-header">
        <h5 class="card-title">Card Title</h5>
    </div>
    <div class="card-body">
        <p class="card-text">Card content goes here.</p>
        <button class="btn btn-primary">Action</button>
    </div>
</div>

<!-- Glass card -->
<div class="card card-glass card-hover">
    <div class="card-body">
        <h5 class="card-title">Glassmorphism Card</h5>
        <p>Beautiful blurred glass effect</p>
    </div>
</div>

<!-- Gradient border card -->
<div class="card card-gradient-border">
    <div class="card-body">
        <h5 class="card-title">Premium Border</h5>
    </div>
</div>

<!-- Colored cards -->
<div class="card card-primary">
    <div class="card-body">
        <h5 class="card-title">Primary Card</h5>
    </div>
</div>
```

### Forms

```html
<div class="form-group">
    <label>Email</label>
    <input type="email" placeholder="you@example.com">
</div>

<div class="form-group">
    <label>Password</label>
    <input type="password" placeholder="••••••••">
</div>

<!-- Select -->
<select class="form-control">
    <option>Option 1</option>
    <option>Option 2</option>
</select>

<!-- Checkbox -->
<div class="form-check">
    <input type="checkbox" id="check1">
    <label for="check1">Remember me</label>
</div>

<!-- Switch -->
<div class="form-switch">
    <input type="checkbox" id="switch1" checked>
    <label for="switch1">Enable notifications</label>
</div>
```

### Modals

```html
<!-- Trigger -->
<button class="btn btn-primary" data-toggle="modal" data-target="#myModal">
    Open Modal
</button>

<!-- Modal -->
<div class="modal modal-glass" id="myModal">
    <div class="modal-dialog">
        <div class="modal-header">
            <h5 class="modal-title">Modal Title</h5>
            <button class="modal-close" data-dismiss="modal">&times;</button>
        </div>
        <div class="modal-body">
            <p>Modal content goes here.</p>
        </div>
        <div class="modal-footer">
            <button class="btn btn-ghost" data-dismiss="modal">Close</button>
            <button class="btn btn-primary">Save</button>
        </div>
    </div>
</div>
```

### Alerts

```html
<div class="alert alert-primary">
    <strong>Info!</strong> This is a primary alert.
</div>

<div class="alert alert-success">
    <strong>Success!</strong> Operation completed.
</div>

<div class="alert alert-danger alert-dismissible">
    <strong>Error!</strong> Something went wrong.
    <button class="alert-close" data-dismiss="alert">&times;</button>
</div>

<!-- Bordered alert -->
<div class="alert alert-warning alert-border-left">
    <strong>Warning!</strong> Please check your input.
</div>
```

### Badges

```html
<span class="badge badge-primary">Primary</span>
<span class="badge badge-success">Success</span>
<span class="badge badge-pill badge-danger">Pill Badge</span>
<span class="badge badge-outline badge-info">Outline</span>
```

### Tables

```html
<table class="table-hover table-striped">
    <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>John Doe</td>
            <td>john@example.com</td>
            <td><span class="badge badge-success">Active</span></td>
        </tr>
    </tbody>
</table>
```

---

## Utilities

### Display

```html
<div class="hidden">Hidden element</div>
<div class="block">Block display</div>
<div class="flex">Flex display</div>
<div class="grid">Grid display</div>
```

### Borders

```html
<div class="rounded">Rounded corners</div>
<div class="rounded-lg">Large rounded</div>
<div class="rounded-full">Fully rounded (pill)</div>
```

### Shadows

```html
<div class="shadow">Basic shadow</div>
<div class="shadow-lg">Large shadow</div>
<div class="shadow-colored-primary">Colored shadow</div>
```

---

## Effects

### Animated Gradient Borders

**Premium feature unique to Natrix!**

```html
<!-- Standard animation -->
<div class="animated-gradient-border p-4">
    <h3>Premium Card</h3>
    <p>With rotating gradient border</p>
</div>

<!-- Vibrant & fast -->
<div class="animated-gradient-border border-vibrant p-4">
    <h3>Fast Animation</h3>
</div>

<!-- Subtle & slow -->
<div class="animated-gradient-border border-subtle p-4">
    <h3>Slow Animation</h3>
</div>
```

---

## Dark Mode

### Automatic Dark Mode

Natrix supports system preference detection:

```css
@media (prefers-color-scheme: dark) {
    /* Automatically applies dark mode */
}
```

### Manual Toggle

```html
<button onclick="document.documentElement.classList.toggle('dark')">
    Toggle Dark Mode
</button>
```

### Force Light Mode

```html
<html class="light">
    <!-- Always light mode -->
</html>
```

---

## Advanced Features

### Modern CSS Units

```html
<!-- Character-based widths -->
<div style="max-width: 65ch;">
    Perfect reading width (65 characters)
</div>

<!-- Line-height based spacing -->
<div class="my-lh">Vertical margin = 1 line-height</div>

<!-- Viewport-based fluid sizing -->
<h1>Font size scales with viewport using clamp()</h1>
```

### CSS Variables

Access all Natrix variables in your custom CSS:

```css
.custom-element {
    color: var(--primary-500);
    background: var(--bg-surface);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    padding: var(--space-4);
}
```

---

## Browser Support

- Chrome/Edge: 111+
- Firefox: 113+
- Safari: 16.4+

*(OKLCH support required)*

---

## Best Practices

1. **Use semantic colors**: `--text-color`, `--bg-surface` instead of hardcoded values
2. **Leverage modern units**: Use `ch`, `lh`, `vw` for better responsive design
3. **Dark mode first**: Test in both light and dark modes
4. **Start with components**: Use built-in components before custom CSS
5. **Glassmorphism**: Use sparingly for premium UI elements

---

## Community & Support

- GitHub: [github.com/celionatti/natrix](https://github.com/celionatti/natrix)
- Issues: Report bugs and request features
- Discussions: Share your Natrix projects!

---

**Built with ❤️ using modern CSS**
