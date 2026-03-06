# Ortho-Spine Pain Clinic

## Current State
The ServicesSection displays all 22 services in a flat 4-column grid with individual service cards (image + icon + name + description + "Learn more" hover). A Dialog modal opens when a card is clicked. The section has no grouping or filtering -- all cards are visible at once, making the section feel overwhelming.

## Requested Changes (Diff)

### Add
- Category tabs to group services (e.g. "Spinal & Pain", "Rehab & Recovery", "Specialized Therapies", "Specialty Services")
- Featured hero cards for Chiropractic and Osteopathy shown prominently above the tabs
- "View All" expand/collapse toggle to show more services per tab (default: show 6, expand to show all)

### Modify
- ServicesSection layout: replace the flat grid with tabbed category layout
- Card design: cleaner, more premium with better visual hierarchy

### Remove
- Flat unfiltered full grid display

## Implementation Plan
1. Define service categories mapping each of the 22 services into 4 groups
2. Add two featured "hero" cards at the top (Chiropractic, Osteopathy) -- wider, taller, more prominent
3. Add tab bar below featured section for the 4 categories
4. Each tab shows up to 6 service cards in a 3-column grid with a "Show More" button if there are more
5. Keep the existing Dialog modal behavior unchanged
6. Preserve all existing image mappings, iconMap, and serviceDetails
