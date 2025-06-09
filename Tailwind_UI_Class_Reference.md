# Rehab Finder & Admissions Platform

**Tailwind UI Class Reference Guide**

---

## 1. **Layout & Containers**

| Element    | Suggested Classes                                                                 | Notes                            |
| ---------- | --------------------------------------------------------------------------------- | -------------------------------- |
| App Shell  | `bg-background text-foreground min-h-screen`                                      | Main wrapper, sets theme context |
| Container  | `container mx-auto px-4`                                                          | Responsive padding               |
| Card/Panel | `bg-card text-card-foreground rounded-lg shadow-minimal p-6`                      | For cards, panels, modals, etc.  |
| Sidebar    | `bg-secondary text-secondary-foreground w-64 min-h-screen border-r border-border` | For left nav/sidebar             |
| Footer     | `bg-muted text-muted-foreground py-4 border-t border-border`                      |                                  |

---

## 2. **Navigation**

| Element         | Suggested Classes                                                           | Notes                          |
| --------------- | --------------------------------------------------------------------------- | ------------------------------ |
| Navbar          | `bg-background border-b border-border flex items-center h-16 px-6`          |                                |
| Nav Link        | `text-foreground hover:text-primary px-3 py-2 rounded-md transition-colors` | Use `font-semibold` for active |
| Active Nav Link | `bg-primary text-primary-foreground`                                        |                                |
| Logo            | `font-bold text-xl text-primary`                                            |                                |

---

## 3. **Sidebar Tabs**

| Element    | Suggested Classes                                                                    | Notes |
| ---------- | ------------------------------------------------------------------------------------ | ----- |
| Tab Button | `flex items-center gap-2 px-4 py-2 rounded-md text-muted-foreground hover:bg-accent` |       |
| Active Tab | `bg-primary text-primary-foreground`                                                 |       |
| Tab Icon   | `w-5 h-5 text-accent`                                                                |       |

---

## 4. **Chat Components**

| Element        | Suggested Classes                                                                         | Notes |
| -------------- | ----------------------------------------------------------------------------------------- | ----- |
| Chat Window    | `bg-card rounded-lg shadow-minimal p-4 flex flex-col gap-2`                               |       |
| Message Bubble | `px-4 py-2 rounded-2xl max-w-[75%]`                                                       |       |
| Bot Bubble     | `bg-muted text-foreground self-start`                                                     |       |
| User Bubble    | `bg-primary text-primary-foreground self-end`                                             |       |
| Quick Reply    | `bg-accent text-accent-foreground px-3 py-1 rounded-full cursor-pointer hover:bg-primary` |       |
| Typing Dots    | `text-muted-foreground animate-pulse`                                                     |       |
| Progress Bar   | `h-2 bg-muted rounded-full overflow-hidden`                                               |       |
| Progress Step  | `bg-primary h-full rounded-full transition-all`                                           |       |

---

## 5. **Search & Filters**

| Element       | Suggested Classes                                                             | Notes |
| ------------- | ----------------------------------------------------------------------------- | ----- |
| Filter Drawer | `bg-popover text-popover-foreground rounded-lg shadow-minimal p-6`            |       |
| Checkbox      | `form-checkbox text-primary focus:ring-primary`                               |       |
| Range Slider  | `w-full accent-primary`                                                       |       |
| Dropdown      | `bg-background border border-border rounded-md px-3 py-2 focus:ring-primary`  |       |
| Apply Button  | `bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90` |       |
| Reset Button  | `bg-muted text-muted-foreground px-4 py-2 rounded-md hover:bg-accent`         |       |

---

## 6. **Results Grid & Cards**

| Element        | Suggested Classes                                                                | Notes           |
| -------------- | -------------------------------------------------------------------------------- | --------------- |
| Grid Container | `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`                           | Responsive grid |
| Card           | `bg-card text-card-foreground rounded-lg shadow-minimal p-4 flex flex-col gap-2` |                 |
| Card Image     | `rounded-t-lg object-cover w-full h-40`                                          |                 |
| Card Title     | `font-bold text-lg text-foreground`                                              |                 |
| Card Subtitle  | `text-muted-foreground text-sm`                                                  |                 |
| Tag            | `bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs`                |                 |
| Save Button    | `bg-muted text-muted-foreground rounded-full p-2 hover:bg-accent`                |                 |
| View Details   | `bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90`    |                 |

---

## 7. **Modals, Drawers, Overlays**

| Element | Suggested Classes                                                  | Notes |
| ------- | ------------------------------------------------------------------ | ----- |
| Modal   | `bg-popover text-popover-foreground rounded-lg shadow-minimal p-8` |       |
| Overlay | `fixed inset-0 bg-black/40 z-40`                                   |       |
| Drawer  | `bg-surface text-foreground w-96 h-full shadow-minimal`            |       |

---

## 8. **Typography**

| Element   | Suggested Classes                                                    | Notes                           |
| --------- | -------------------------------------------------------------------- | ------------------------------- |
| Headings  | `font-manrope font-semibold` + `text-4xl`/`text-3xl`/`text-2xl` etc. | Use `text-primary` for emphasis |
| Paragraph | `font-dm-sans leading-relaxed text-foreground`                       |                                 |
| Caption   | `text-xs text-muted-foreground`                                      |                                 |

---

## 9. **Buttons**

| Type        | Suggested Classes                                                                         | Notes |
| ----------- | ----------------------------------------------------------------------------------------- | ----- |
| Primary     | `bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90`             |       |
| Secondary   | `bg-secondary text-secondary-foreground px-4 py-2 rounded-md hover:bg-accent`             |       |
| Destructive | `bg-destructive text-destructive-foreground px-4 py-2 rounded-md hover:bg-destructive/90` |       |
| Outline     | `border border-border bg-background text-foreground px-4 py-2 rounded-md hover:bg-muted`  |       |

---

## 10. **Forms & Inputs**

| Element    | Suggested Classes                                                       | Notes |
| ---------- | ----------------------------------------------------------------------- | ----- |
| Input      | `bg-input border border-border rounded-md px-3 py-2 focus:ring-primary` |       |
| Label      | `text-muted-foreground text-sm font-medium`                             |       |
| Error Text | `text-destructive text-xs mt-1`                                         |       |

---

## 11. **Badges, Tags, Pills**

| Element | Suggested Classes                                                 | Notes |
| ------- | ----------------------------------------------------------------- | ----- |
| Badge   | `bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs` |       |
| Pill    | `bg-muted text-muted-foreground px-3 py-1 rounded-full`           |       |

---

## 12. **Miscellaneous**

| Element   | Suggested Classes                                     | Notes |
| --------- | ----------------------------------------------------- | ----- |
| Divider   | `border-t border-divider my-4`                        |       |
| Shadow    | `shadow-minimal` or `shadow-minimal-lg`               |       |
| Scrollbar | `scrollbar-thin scrollbar-thumb-accent` (with plugin) |       |

---

### **General Tips**

- Use `transition-colors` for smooth color changes on hover/focus.
- Use `focus-ring` utility for accessible focus states.
- Use `rounded-lg` for cards/panels, `rounded-md` for buttons/inputs, and `rounded-full` for pills/badges.
- Use `gap-x-4 gap-y-2` for spacing in flex/grid layouts.
- Use `text-primary`, `text-accent`, etc., for color emphasis.

---

**This guide is designed to help you quickly scaffold new components and pages with consistent, theme-aware styling.**  
If you want a printable PDF or a markdown file for your team, let me know!
