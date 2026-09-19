# Kalavya reference-style website

## Build
- Recreate the supplied composition as a fixed, no-scroll desktop showcase: pill navigation, oversized Kalavya title at left, centered phone, project summary at right, and artisan-product stickers around the canvas.
- Replace the reference branding with “Team Daredevil presents KALAVYA” and generate original pottery, vase, shawl, murti, and artifact illustrations in a cohesive cutout style.
- Put a YouTube-ready video area inside the phone. Until a link is supplied, show a polished “Video coming soon” state without inventing a URL.
- Add a separate fixed-screen About page listing Ishita Babbar (Team Leader), Kirti Singhal, Harshit Singhal, Jatin Singhal, Vidit Chauhan, and Venkata.
- Keep only Explore and About in the top navigation; About opens the separate team page.

## Technical details
- Implement the two pages at `/` and `/about` using TanStack Router.
- Build all styling from semantic tokens in the global design system, with responsive sizing that preserves the single-screen layout and prevents page scrolling.
- Add unique metadata for both pages and verify the desktop and mobile layouts in the live preview.
