
<high_level_design>
## 1. Brand & Art Direction Overview

Osklen presents a **premium minimalist Brazilian fashion aesthetic** with a strong emphasis on:
- **Clean, airy whitespace** dominating the layout
- **High-quality editorial photography** with natural lighting and soft, muted tones
- **Sophisticated coastal/resort lifestyle** imagery featuring relaxed, elegant styling
- **Subtle interactions** with glassmorphism effects (frosted glass/blur treatments)
- **Modern, refined UI elements** with rounded corners throughout
- **Typography-forward design** using clean sans-serif fonts
- **Monochromatic color palette** with occasional accent colors from product imagery
- **Fixed, floating navigation elements** with translucent backgrounds
- **Product-focused grid layouts** with generous spacing
- **Video hero sections** for immersive brand storytelling

The overall aesthetic is **luxurious yet understated**, emphasizing natural materials, craftsmanship, and a connection to Brazilian coastal culture. The design language is contemporary with soft edges, subtle shadows, and a focus on breathing room between elements.

---

## 2. Color Palette (Light Theme)

| Token | HEX / RGB | Usage | Notes |
|-------|-----------|-------|-------|
| **Primary Background** | `#FFFFFF` / `rgb(255, 255, 255)` | Main page background | Pure white |
| **Secondary Background** | `#F8F8F8` / `rgb(248, 248, 248)` | Section backgrounds, cards | Soft off-white |
| **Tertiary Background** | `#E5E5E5` / `rgb(229, 229, 229)` | Subtle dividers, disabled states | Light gray |
| **Text Primary** | `#000000` / `rgb(0, 0, 0)` | Headlines, primary text | Pure black |
| **Text Secondary** | `#222222` / `rgb(34, 34, 34)` | Body text, descriptions | Near black |
| **Text Tertiary** | `#555555` / `rgb(85, 85, 85)` | Metadata, captions | Medium gray |
| **Text Muted** | `#868686` / `rgb(134, 134, 134)` | Placeholders, disabled | Light gray text |
| **Text Light** | `#7A7A7A` / `rgb(122, 122, 122)` | Secondary info | Gray text |
| **Overlay Dark** | `rgba(85, 85, 85, 0.4)` | Modal/drawer overlays | Semi-transparent gray |
| **Overlay Blur** | `rgba(255, 255, 255, 0.5)` | Glassmorphism backgrounds | 50% white with blur |
| **Border Light** | `#DBDBDB` / `rgb(219, 219, 219)` | Subtle borders, dividers | Light gray border |
| **Accent Button** | `#2A2826` / `rgb(42, 40, 38)` | CTA text, active states | Dark charcoal |
| **Notification Dot** | Various | Status indicators | Context-dependent colors |

---

## 3. Typography Scale

**Primary Font Family:** `"Suisse"` (custom brand font)
**Fallback Stack:** `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`

| Element | Size | Weight | Line Height | Letter Spacing | Usage |
|---------|------|--------|-------------|----------------|-------|
| **H1 / Hero Title** | `48px` (desktop) / `32px` (mobile) | `500 (Medium)` | `110%` | `-0.02em` | Main hero headlines |
| **H2 / Section Title** | `32px` (desktop) / `24px` (mobile) | `500 (Medium)` | `110%` | `-0.02em` | Section headings |
| **H3 / Card Title** | `18px` | `500 (Medium)` | `110%` | `-0.02em` | Product titles, subheadings |
| **Body Large** | `15px` | `400 (Regular)` | `110%` | `-0.02em` | Navigation items, primary UI text |
| **Body Regular** | `14px` | `400 (Regular)` | `110%` | `-0.02em` | Standard body text |
| **Body Small** | `13px` | `400 (Regular)` | `110%` | `-0.02em` | Secondary text, labels |
| **Caption** | `12px` | `400 (Regular)` | `110%` | `-0.02em` | Metadata, small labels |
| **Micro** | `10px` | `400 (Regular)` | `110%` | `-0.02em` | Tiny labels, badges |
| **Button Text** | `13px-15px` | `500 (Medium)` | `110%` | `-0.02em` | CTA buttons |

**Typography Notes:**
- Consistent negative letter-spacing of `-0.02em` across all text
- Tight line-height of `110%` for compact, modern feel
- Font weights limited to Regular (400) and Medium (500)
- All text uses anti-aliasing for smooth rendering

---

## 4. Spacing & Layout Grid

**Container Max Width:** `1920px` (5xl breakpoint)
**Content Max Width:** `1440px` (4xl breakpoint)

### Spacing Scale (Tailwind-based)
| Token | Value | Usage |
|-------|-------|-------|
| `0.5` | `2px` | Micro adjustments |
| `1` | `4px` | Minimum gap |
| `1.5` | `6px` | Small gaps |
| `2` | `8px` | Standard small spacing |
| `3` | `12px` | Medium gaps |
| `4` | `16px` | Standard spacing unit |
| `5` | `20px` | Section padding (mobile) |
| `6` | `24px` | Medium section padding |
| `7` | `28px` | Component height |
| `8` | `32px` | Large spacing |
| `10` | `40px` | Section padding |
| `12` | `48px` | Large section gaps |
| `15` | `60px` | Extra large gaps |
| `30` | `120px` | Section padding (desktop) |

### Layout Measurements
- **Header Height (Desktop):** `27px` (logo) + `30px` (nav bar) with `20px` vertical margin
- **Header Height (Mobile):** `43px` fixed buttons
- **Border Radius (Cards):** `14px` (medium) / `12px` (small)
- **Border Radius (Buttons):** `8px-12px` (rounded-lg)
- **Border Radius (Pills):** `9999px` (full rounded)
- **Side Margins (Mobile):** `5px` / `6px`
- **Side Margins (Desktop):** `15px` (lg) / `30px` (xll)
- **Product Grid Gap:** `8px` minimum between cards

### Breakpoints
| Name | Min Width | Usage |
|------|-----------|-------|
| `sm` | `640px` | Small tablets |
| `md` | `768px` | Tablets |
| `lg` | `1024px` | Desktop |
| `xl` | `1280px` | Large desktop |
| `xll` | `1366px` | Extra large desktop |
| `1xl` | `1440px` | Wide desktop |
| `4xl` | `1920px` | Ultra-wide |
| `5xl` | `2560px` | 4K displays |

---

## 5. Visual Effects & Treatments

### Glassmorphism / Backdrop Blur
```css
background: rgba(255, 255, 255, 0.5);
backdrop-filter: blur(12px-15px);
-webkit-backdrop-filter: blur(12px-15px);
```
- Applied to navigation elements, floating UI components
- Creates frosted glass effect over content

### Shadows
- **Navigation Shadow:** Subtle, barely visible on white backgrounds
- **Card Hover:** Minimal elevation change
- **No heavy shadows** - keeps design light and airy

### Border Radius
- **Small components:** `8px` (rounded-lg)
- **Medium cards:** `12px-14px` (rounded-xl)
- **Large sections:** `14px` (rounded-3xl on mobile hero)
- **Pills/Badges:** `9999px` (rounded-full)

### Transitions & Animations
```css
transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
transition: opacity 0.2s ease;
transition-delay: 0.3s;
```
- **Easing:** Custom cubic-bezier for smooth, natural motion
- **Duration:** 200-300ms for most interactions
- **Hover states:** Subtle background color changes
- **Opacity transitions** for overlays and modals

### Blend Modes
```css
mix-blend-mode: difference;
```
- Applied to logo for adaptive contrast over any background

### Backdrop Filters
- **Navigation blur:** `backdrop-blur-xl` (24px)
- **Popup blur:** `backdrop-blur-md` (12px)
- Creates depth and hierarchy

---

## 6. Component Styles

### Navigation Bar (Desktop)
```
Position: Fixed top
Width: calc(100vw - 30px-60px) depending on breakpoint
Height: 28px (7)
Background: rgba(255, 255, 255, 0.5) with backdrop-blur-md
Border-radius: 12px (rounded-xl)
Padding: 4px horizontal
Gap: 6px between items
Margin: 20px all sides
```

### Navigation Items
```
Font: Suisse 15px Regular
Padding: 6-10px horizontal, 4px vertical
Height: 25-28px
Border-radius: 8px (rounded-lg)
Hover: background: rgba(255, 255, 255, 0.7)
Letter-spacing: -0.02em
```

### Logo (Desktop)
```
Position: Fixed, centered top
Transform: translateX(-50%) translateY(-50%)
Top: calc(1.85rem + 4px)
Width: 87.49px
Height: 9.99px
Mix-blend-mode: difference (adaptive contrast)
```

### Mobile Navigation
```
Background: rgba(255, 255, 255, 0.5) with backdrop-blur-md
Border-radius: 9999px (rounded-full)
Height: 43px
Padding: 4px horizontal
Width: calc(100% - 3.625rem)
```

### Notification Popups (Left Side)
```
Position: Fixed left
Left: 5px (mobile) / 30px (desktop)
Width: fit-content
Height: 42px (mobile) / 47px (desktop)
Border-radius: 14px
Background: rgba(255, 255, 255, 0.5) with backdrop-blur-xl
Padding: 10-12px horizontal
Gap: 6px between elements
Animation: Slide in with decrease height
```

### Notification Dot
```
Width: 8px (w-2)
Height: 8px (h-2)
Border-radius: 50%
Background: Context-dependent color
```

### Buttons / CTAs
```
Font: Suisse 13-15px Medium
Padding: 4-7px horizontal, 4px vertical
Height: 25-28px
Border-radius: 8px (rounded-lg)
Background: rgba(255, 255, 255, 0.5) with backdrop-blur-md
Color: #000000 (black text)
Hover: Increased opacity/brightness
Letter-spacing: -0.02em
```

### Action Icons (Search, Account, Wishlist, Bag)
```
Width: 32px
Height: 28px
Padding: 4-7px
Border-radius: 8px
Background: rgba(255, 255, 255, 0.5) with backdrop-blur-md
Icon size: 18-20px
```

### Product Cards
```
Background: #E5E5E5 (light gray) or #FFFFFF (white)
Border-radius: 14px-16px (rounded-2xl)
Aspect-ratio: Product image maintains natural ratio
Padding: Minimal
Gap: 8px minimum between cards
Hover: Subtle scale or opacity change
```

### Product Images
```
Object-fit: Cover
Border-radius: Matches card radius
Loading: Lazy with blur-up placeholder
Alt text: Descriptive product names
```

### Hero Section
```
Background: #F8F8F8 (off-white)
Border-radius: 0 0 14px 14px (rounded bottom)
Height: 100vh or defined height
Overflow: Hidden
Video/Image: Object-fit cover, full width
```

### Overlay (Menu/Modal)
```
Background: rgba(85, 85, 85, 0.4)
Backdrop-filter: blur(12px) on desktop
Position: Fixed, full viewport
Z-index: 40-50
Transition: opacity 0.2-0.3s
```

### Search Input
```
Font: Suisse 14-15px Regular
Background: Transparent
Border: None
Placeholder color: #868686
Padding: 8px horizontal
Width: 100%
Focus: No outline, maintains clean aesthetic
```

### Footer Elements
```
Background: #F8F8F8 (light gray section)
Padding: 40-60px vertical, 15-30px horizontal
Font: Suisse 13-15px
Color: #222222 (near black)
Link hover: Underline or opacity change
```

### Breadcrumb
```
Font: Suisse 13px Regular
Color: #555555 (medium gray)
Separator: ">" or "/" symbol
Spacing: 8-12px between items
```

### Category Pills
```
Display: Inline-flex
Padding: 4-8px horizontal, 4px vertical
Height: 25-28px
Border-radius: 8px (rounded-lg)
Background: #FFFFFF or #F8F8F8
Border: 1px solid #DBDBDB (optional)
Font: Suisse 13-14px Regular
Hover: Background change
```

### Video Player
```
Width: 100%
Height: Auto or 100vh
Object-fit: Cover
Controls: Custom or hidden
Autoplay: Yes, muted
Loop: Yes
Border-radius: Matches section (14px bottom)
```

---

## 7. Site Sections (In Order)

### 1. **Accessibility Widget (VLibras)**
- Fixed position Brazilian sign language accessibility tool
- Top layer (z-index highest)

### 2. **Notification Popups (Left Side)**
- Fixed left position
- Stacked vertically
- Examples: "Shop Online +5% off PIX", "Frete Grátis acima de R$1000"
- Dismissible with close buttons
- Collapse/expand animation

### 3. **Newsletter Popup** (on load/exit intent)
- Modal overlay
- Newsletter signup form
- "10% off na 1ª compra" incentive

### 4. **Header Navigation**
   - **Logo** (center, fixed, desktop only)
   - **Navigation Bar** (fixed top, full width)
     - Mobile: Hamburger menu + search + bag
     - Desktop: Category links (Réveillon, Men, Women, Shoes, Gifts, Outlet)
   - **Action Icons** (right side): Search, Account, Wishlist, Bag
   - **Transparent/Glassmorphism background** with backdrop blur

### 5. **Hero Banner Section**
- Full viewport height video or image carousel
- Background: #F8F8F8
- Rounded bottom corners (14px)
- Overlay text: "Resort 26" + "Shop The Collection"
- CTA button
- Navigation dots for carousel

### 6. **Category Grid (Two-Column)**
- Split screen layout
- Left: "Men" with editorial image
- Right: "Gifts" with solid background or image
- Minimal text labels
- Full-height sections
- Hover effects

### 7. **Product Showcase Section**
- Breadcrumb: "Home > Shop All"
- Headline: "Uma manifestação estética e cultural..." (brand story)
- Category filter pills: "Ver Tudo", "Camiseta", "Chapéu", "Acessórios", "Tênis", etc.
- Horizontal scrolling product grid
- Product cards with:
  - Image (2 views on hover)
  - Product name
  - Price (R$ format)
  - Wishlist icon
- Scroll indicator/pagination

### 8. **Video Section (White Mood Campaign)**
- Full-width video embed
- Autoplay, loop, muted
- Title overlay or adjacent
- Rounded corners

### 9. **Product Grid (Continued/Featured)**
- Multi-row grid layout
- Consistent card styling
- Lazy loading images
- Filter/sort options

### 10. **Store Locator Section**
- Title: "Nossas lojas"
- CEP input field with search
- Store count: "82 lojas, 41 Cidades"
- City filter pills: "São Paulo", "Rio de Janeiro", "Belo Horizonte", "Ver todas"
- Store image/map on right side
- Background: White or light gray split

### 11. **Collection Highlight Section**
- "Fibras Nobres - SS26" title
- Video or image background
- Full-width or contained
- Rounded corners

### 12. **Footer**
    - **Column 1: Brand**
      - Logo
      - Social media icons
    - **Column 2: Políticas**
      - Links: Trocas e devoluções, Ajuda, etc.
    - **Column 3: Minha conta**
      - Account links
    - **Column 4: Fale conosco**
      - Customer service links: Personal Shopper, SAC, Status do Pedido
    - **Column 5: Community**
      - Newsletter signup: "Cadastre-se e receba 10% off"
      - Email input + submit button
    - Background: #F8F8F8 (light gray)
    - Padding: 40-60px top/bottom

### 13. **Sub-Footer / Legal**
- Copyright
- Payment methods icons
- Security badges
- Minimal height
- Background: #FFFFFF or #F8F8F8
</high_level_design>

<theme>
light
</theme>

<sections>
<clone_section>
    <file_path>src/components/sections/accessibility-widget.tsx</file_path>
    <design_instructions>
    Clone the VLibras accessibility widget that appears as a floating button in the bottom-left corner. The widget should include a circular button with the VLibras icon (accessibility icon), positioned fixed at bottom-left with appropriate z-index (z-40). When activated, it should display popup information. Background: white/translucent with backdrop blur effect, border-radius: 50% for button, size: approximately 60px diameter on desktop, 50px on mobile. The button should include alt text "Conteúdo acessível em Libras usando o VLibras Widget com opções dos Avatares Ícaro, Hosana ou Guga." Include hover states with subtle scale transform (1.05). Position: fixed bottom-left at 20px from edges. Use the VLibras SVG icon provided.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b560228b-ad03-4100-8449-603f81169220-osklen-com-br/assets/svgs/access_icon-1.svg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b560228b-ad03-4100-8449-603f81169220-osklen-com-br/assets/images/access_popup-1.jpg"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/notification-popups.tsx</file_path>
    <design_instructions>
    Clone the notification popup system that appears in the left side of the screen showing promotional offers. Create stacked notification cards with backdrop-blur-xl effect, rounded corners (14px), positioned fixed left at 5px on mobile and 30px on desktop. Each popup card should have: min-height 42px (mobile) to 47px (desktop), white/translucent background with backdrop blur, padding: 10px 12px, gap between text elements: 5-6px. Include a colored dot indicator (8px diameter, rounded-full) on the left. Text styling: upper text 9px (0.5625rem) tracking -0.02em, lower text 12px tracking -0.02em font-normal. Implement stacking animation with decrease-height class, animation-delay-300ms, duration-100ms. Include close buttons (18px, white bg, rounded-full) positioned absolute top-right with translate transforms. Bottom button showing notification count: white bg, rounded-lg, text 10px, padding y:5px/1 x:6px/2, with icon (15px desktop, 18px mobile) and text "2 Notificação". Notifications: "Shop Online: +5% off no pagamento via PIX" and "Frete Grátis: Em compras acima de R$1000". Z-index: 40.
    </design_instructions>
    <assets>[]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/header.tsx</file_path>
    <design_instructions>
    Clone the sophisticated floating header navigation system with glassmorphism effects. Header should be fixed, full-width, z-index 50. Center logo: fixed position, z-index 9990, centered horizontally (left-50% -translate-x-50%), top position calc(1.85rem + 4px), scale 1.2, mix-blend-difference, hidden on mobile (display on lg+). Logo dimensions: 87.49px x 9.99px. Mobile logo: positioned absolute top-0 left-0, margin: mt-5 mb-5 ml-1, size 43x43px, white bg with 50% opacity, backdrop-blur-md, rounded-full, includes OSKLEN SVG. Navigation container: absolute right-0 (mobile) or left-0 (desktop), width calc(100%-1.9rem) on lg, height 43px (4xl:30px), margins: mx-3.75 my-5, backdrop-blur-15px, rounded-full (mobile) or rounded-xl (desktop), white bg 50% opacity. Desktop navigation items in rounded-lg container with backdrop-blur-12px: "Réveillon", "Men", "Women", "Shoes", "Gifts", "Outlet" - each with hover:bg-white/70, height 25px (4xl:26px), padding 1.5-2.5, font-size 15px, tracking -0.02em. Action buttons group (right-aligned): Search button (16px icon), Account link (18px icon), Wishlist link (18px icon), Bag button (with "Bag" text on desktop) - all with white/50% bg, backdrop-blur-xl, rounded-lg, height 28-30px. Include submenu overlay system with rounded-3xl container, backdrop-blur-20, max-height transitions, opacity animations. Font: Suisse family throughout.
    </design_instructions>
    <assets>[]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/hero-banner.tsx</file_path>
    <design_instructions>
    Clone the full-screen hero banner section with video background. Container: relative z-0, full-width, background #F8F8F8, rounded-b-14px. Include overlay div: absolute, full-width, full-height (h-screen). The hero should support video playback with the banner video as background. Layout should accommodate split-screen design showing fashion photography. Text overlay positioning: centered or positioned according to the Resort 26 campaign design with "Resort 26" heading and "Shop The Collection" subheading. Typography: large heading font (likely 48-72px), centered alignment, tracking tight, with CTA button below. Ensure proper aspect ratios for desktop vs mobile viewing. Include navigation dots/indicators at bottom for carousel functionality (small dots, horizontal layout, centered). Responsive behavior: full-height on desktop, adjusted height on mobile/tablet. Z-index layering: video background (z-0), overlay gradient if needed (z-1), content (z-10). Round bottom corners to match the site's design language (14px border-radius).
    </design_instructions>
    <assets>["https://assets.decocache.com/osklenbr/893f7aed-c873-46c4-b445-0a36122cae1a/banner_ss26_white_mood_desktop.mp4"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/category-showcase.tsx</file_path>
    <design_instructions>
    Clone the dual category showcase section featuring "Men" and "Gifts" categories. Layout: two-column grid on desktop (50/50 split), stacked on mobile. Each section: full-height viewport or min-height, with large lifestyle photography as background. Left section: light gray/beige background (#E8E8E8 or similar), featuring male model in white linen outfit with accessories. Right section: pure white background with centered "Gifts" text. Category labels: large text (32-48px), positioned in lower-left or center of each section, font-weight medium/semibold, black text color, font-family: Suisse or similar sans-serif. Images should be full-bleed within their containers. Hover states: subtle opacity or scale transforms. Sections should be clickable/linkable to respective category pages. Responsive: maintain aspect ratios, stack vertically on mobile with appropriate min-heights (400-600px). Padding: minimal to none for edge-to-edge imagery. Text positioning: absolute or flexbox-centered depending on layout requirements.
    </design_instructions>
    <assets>[]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/product-carousel.tsx</file_path>
    <design_instructions>
    Clone the horizontal scrolling product carousel section with filter tabs. Section container: background light gray (#F5F5F5), full-width, padding: top/bottom 40-60px. Header area: includes breadcrumb navigation (Home > Shop All), main heading "Uma manifestação estética e cultural que celebra o legado dos povos litorâneos e a relação intrínseca entre o homem e o mar." (font-size: 24-32px, max-width: 900px, margin-bottom: 32px), and filter tabs. Filter tabs: horizontal scrollable row with pills - "Ver Tudo" (active with dark background), "Camiseta", "Chapéu", "Acessórios", "Tênis", "Calça", "Vestido", "Camisa", "Bata", "Bijoux", "Sandália", "Lenço", "Vestuário" - each with rounded-lg, padding: 8px 16px, text-sm, hover states, active state: dark bg with white text. Product grid: horizontal scroll with gap-4-6, each product card: rounded-xl, light gray background, aspect-ratio 3:4 for image, product image with hover effect showing secondary image, product title (font-size: 14-16px), price "R$ XXX" (font-size: 16-18px, font-weight: 600). Cards width: ~320px on desktop, ~280px on mobile. Implement smooth horizontal scroll with scroll-snap. Show 10+ products: T-shirt Palm Tree, Chapéu Algodao, Pirarucu Mini Box Bag, Sandália Soho, T-shirt Slim Stone Coqueiro (2x), Calça Rustic, Tênis Creeper, Calça Atoalhada, T-shirt Vintage Leaf, Vestido Nadador, etc.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b560228b-ad03-4100-8449-603f81169220-osklen-com-br/assets/images/7542601310_TSHIRT_1-4.jpg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b560228b-ad03-4100-8449-603f81169220-osklen-com-br/assets/images/7542601310_TSHIRT_2-5.jpg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b560228b-ad03-4100-8449-603f81169220-osklen-com-br/assets/images/7527825_CHAPEU_1-6.jpg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b560228b-ad03-4100-8449-603f81169220-osklen-com-br/assets/images/7527825_CHAPEU_2-7.jpg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b560228b-ad03-4100-8449-603f81169220-osklen-com-br/assets/images/7041117824_PIRARUCU-MINI-BOX-BAG_1-8.jpg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b560228b-ad03-4100-8449-603f81169220-osklen-com-br/assets/images/7041117824_PIRARUCU-MINI-BOX-BAG_2-9.jpg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b560228b-ad03-4100-8449-603f81169220-osklen-com-br/assets/images/7492451_SANDALIA_1-10.jpg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b560228b-ad03-4100-8449-603f81169220-osklen-com-br/assets/images/7492451_SANDALIA_2-11.jpg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b560228b-ad03-4100-8449-603f81169220-osklen-com-br/assets/images/7467114238_TSHIRT-SLIM-STONE-COQUEIRO-GAZE-MC_1-12.jpg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b560228b-ad03-4100-8449-603f81169220-osklen-com-br/assets/images/7467114238_TSHIRT-SLIM-STONE-COQUEIRO-GAZE-MC_2-13.jpg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b560228b-ad03-4100-8449-603f81169220-osklen-com-br/assets/images/7467104_TSHIRT_1-14.jpg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b560228b-ad03-4100-8449-603f81169220-osklen-com-br/assets/images/7467104_TSHIRT_2-15.jpg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b560228b-ad03-4100-8449-603f81169220-osklen-com-br/assets/images/5525325_CALCA_1-16.jpg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b560228b-ad03-4100-8449-603f81169220-osklen-com-br/assets/images/5525325_CALCA_2-17.jpg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b560228b-ad03-4100-8449-603f81169220-osklen-com-br/assets/images/7268951_TENIS_1-18.jpg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b560228b-ad03-4100-8449-603f81169220-osklen-com-br/assets/images/7268951_TENIS-MADE-IN-BRAZIL-JUTA_2-19.jpg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b560228b-ad03-4100-8449-603f81169220-osklen-com-br/assets/images/7528218_CALCA_1-20.jpg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b560228b-ad03-4100-8449-603f81169220-osklen-com-br/assets/images/7528218_CALCA_2-21.jpg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b560228b-ad03-4100-8449-603f81169220-osklen-com-br/assets/images/7551104_TSHIRT-VINTAGE-LEAF-MC_1-22.jpg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b560228b-ad03-4100-8449-603f81169220-osklen-com-br/assets/images/7551104_TSHIRT-VINTAGE-LEAF-MC_2-23.jpg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b560228b-ad03-4100-8449-603f81169220-osklen-com-br/assets/images/7531418_VESTIDO_1-24.jpg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b560228b-ad03-4100-8449-603f81169220-osklen-com-br/assets/images/7531418_VESTIDO_2-25.jpg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b560228b-ad03-4100-8449-603f81169220-osklen-com-br/assets/images/7540151_TENIS_1-26.jpg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b560228b-ad03-4100-8449-603f81169220-osklen-com-br/assets/images/7540151_TENIS_3-27.jpg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b560228b-ad03-4100-8449-603f81169220-osklen-com-br/assets/images/75273263_ANDIROBA-MINI-BAG_1-28.jpg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b560228b-ad03-4100-8449-603f81169220-osklen-com-br/assets/images/75273263_ANDIROBA-MINI-BAG_2-29.jpg", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b560228b-ad03-4100-8449-603f81169220-osklen-com-br/assets/images/7547551_CAMISA_1-30.jpg"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/store-locator.tsx</file_path>
    <design_instructions>
    Clone the store locator section with split layout. Container: two-column grid on desktop (40/60 or 50/50 split), stacked on mobile, background: white, padding: 60-80px on desktop, 40px on mobile. Left column: white/light background with form area. Heading: "Nossas lojas" (font-size: 36-48px, font-weight: 500-600, margin-bottom: 24px). Subheading: "Digite seu CEP e descubra a loja Osklen mais próxima de você:" (font-size: 16-18px, margin-bottom: 16px). Input field: CEP input with placeholder "CEP 22271-...", rounded-lg border, padding: 12-16px, with arrow/submit icon on right. Store count text: "82 lojas, 41 Cidades" (font-size: 14-16px, margin-top: 24px). City filter buttons: "São paulo", "Rio de janeiro", "Belo horizonte", "Ver todas" - rounded-lg pills, padding: 8px 16px, last button ("Ver todas") with dark background. Right column: large photograph of Osklen retail store interior showing modern minimalist design with concrete walls, wooden elements, white clothing display, screen, and stone furniture. Image should be full-bleed with object-fit cover. Rounded corners: 16-24px on outer container edges.
    </design_instructions>
    <assets>[]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/video-banner.tsx</file_path>
    <design_instructions>
    Clone the full-width video banner section with "Shop Now" overlay. Container: full-width, aspect-ratio 16:9 or 21:9 depending on video, relative positioning for overlay. Video element: autoplay, muted, loop, playsInline attributes, object-fit cover, width 100%, height 100%. Overlay: absolute positioned, centered both horizontally and vertically using flexbox or absolute centering. "Shop Now" text: white color, font-size: 16-20px, font-weight: 500-600, potentially with background pill (white bg, black text, padding: 12px 32px, rounded-full) or just plain text depending on visibility needs. Hover state: subtle opacity or scale transform. Z-index layering: video (z-0), optional gradient overlay for text legibility (z-1), text/button (z-10). Ensure video loads efficiently with appropriate poster frame. Responsive: maintain aspect ratio, adjust text size on mobile.
    </design_instructions>
    <assets>["https://assets.decocache.com/osklenbr/05584bb1-461d-44e8-ac00-08bb8e300020/shop_gifts_av26_geral-(3).mp4"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/fibras-nobres-banner.tsx</file_path>
    <design_instructions>
    Clone the "Fibras Nobres - SS26" promotional video banner. Container: full-width, background: likely white or light gray, padding: 40-60px vertical. Video should autoplay, loop, muted. Aspect ratio: maintain 16:9 or similar cinematic ratio. Overlay text "Fibras Nobres - SS26" should appear either on the video itself or below it as a caption (font-size: 24-32px, font-weight: 500-600, centered or left-aligned). Rounded corners on video container: 16-24px. Responsive: full-width on all devices, adjust padding on mobile to 20-30px. Include subtle shadow or border if needed for separation from other sections. Video quality should be optimized for web (max 5MB as suggested in filename).
    </design_instructions>
    <assets>["https://assets.decocache.com/osklenbr/88e14a28-2a6c-4427-8297-13524d976118/05_Banner_fibras_nobres_desktop_Ate5MB.mp4"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/footer.tsx</file_path>
    <design_instructions>
    Clone the comprehensive footer section with multiple columns and newsletter signup. Container: full-width, background: dark gray/charcoal (#2A2826 or similar), text color: white/light gray, padding: 60-80px vertical, 20-40px horizontal. Layout: 4-5 column grid on desktop, stacked on mobile. Columns: "osklen" (brand info/links), "políticas" (policies), "minha conta" (my account), "fale conosco" (contact us), "Community" (social/newsletter). Each column heading: font-size 14-16px, font-weight 600, margin-bottom 16-24px, text-transform: lowercase. Column links: font-size 13-15px, line-height 1.8-2, color: #B3B3B3 or similar light gray, hover: white. Newsletter section: heading "Assine nossa Newsletter", subheading "Cadastre-se e receba 10% off na 1ª compra online", email input field (white border, transparent bg, rounded-lg, padding 12-16px), submit button (white bg, dark text, rounded-lg). Bottom area: copyright text, payment icons, social media icons - all in single row or stacked on mobile. Font-family: Suisse throughout. Spacing between sections: 40-60px. Links should include: White Mood, Personal Shopper, SAC, Acessibilidade, Status do Pedido, Trocas e devoluções, Ajuda.
    </design_instructions>
    <assets>[]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/cookie-banner.tsx</file_path>
    <design_instructions>
    Clone the cookie consent banner that appears at the bottom of the page. Container: fixed position bottom-0, full-width, z-index 9999, background: white or light gray with subtle shadow/border-top. Layout: horizontal flex on desktop (space-between), stacked on mobile. Content: "Cookies" heading (font-weight 600, font-size 14-16px), explanatory text, "Continuar sem aceitar" link (underlined, font-size 13-15px). Padding: 16-24px horizontal, 12-20px vertical. Text color: dark gray/black. Should be dismissible with close button or by clicking the link. Subtle box-shadow for elevation. Should slide up from bottom with CSS animation on page load. Responsive: full-width on all devices, adjust padding on mobile.
    </design_instructions>
    <assets>[]</assets>
  </clone_section>
</sections>
