# Natrix CSS

A lightweight, plug-and-play CSS framework with beautiful defaults and utility classes.

## Quick Start

```html
<link rel="stylesheet" href="natrix.css">
```

## Features

- **Zero JavaScript** - Pure CSS
- **Modern Defaults** - Elements look great out of the box
- **12 Color Palettes** - Primary, Secondary, Success, Danger, Warning, Info, Dark, Light, Purple, Pink, Orange, Teal
- **Responsive Grid** - 12-column system with breakpoints
- **Utility Classes** - Flexbox, spacing, colors, and more

## Components

### Buttons
```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-outline-success">Outline</button>
<button class="btn btn-lg btn-danger">Large</button>
```

### Forms
```html
<input type="text" placeholder="Styled by default">
<select><option>Styled select</option></select>
<div class="form-switch">
  <input type="checkbox">
  <label>Toggle switch</label>
</div>
```

### Grid
```html
<div class="row">
  <div class="col-md-6">Half width on medium+</div>
  <div class="col-md-6">Half width on medium+</div>
</div>
```

### Cards
```html
<div class="card">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Title</h5>
    <p class="card-text">Content</p>
  </div>
</div>
```

### Alerts
```html
<div class="alert alert-success">Success message!</div>
<div class="alert alert-danger">Error message!</div>
```

### Tables
```html
<table class="table-striped table-hover">
  <thead><tr><th>Name</th><th>Email</th></tr></thead>
  <tbody><tr><td>John</td><td>john@example.com</td></tr></tbody>
</table>
```

## Utilities

- **Spacing**: `.m-4`, `.p-2`, `.mx-auto`, `.py-5`
- **Flexbox**: `.flex`, `.justify-center`, `.items-center`, `.gap-4`
- **Colors**: `.text-primary`, `.bg-success`, `.border-danger`
- **Display**: `.d-none`, `.d-flex`, `.d-md-block`
- **Borders**: `.border`, `.rounded-lg`, `.shadow-md`

## Breakpoints

| Prefix | Min Width |
|--------|-----------|
| sm     | 576px     |
| md     | 768px     |
| lg     | 992px     |
| xl     | 1200px    |
| xxl    | 1400px    |

## License

MIT
