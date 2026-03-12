# Design Review Report - Green Gecko Carpentry

**Date:** March 12, 2026
**Reviewer:** Senior Graphic Designer / Brand Strategist
**Project:** Website UI/UX Refresh

---

## Executive Summary
The current design of Green Gecko Carpentry effectively communicates professionalism and a strong brand identity. However, user feedback indicating the site is "too green" highlights a need for better color balance. To maintain the "environmentally friendly" and "family-run" feel while improving visual appeal and perceived competence, the design should shift from a **green-dominant** palette to a **green-accented** palette supported by warm, earthy, and neutral tones.

---

## 1. Color Palette Review
*   **Current State:** The primary green (`#196826`) is used in large blocks (header, section titles, card accents). This creates a monochromatic and potentially overwhelming experience. The background (`#f9fdf9`) is also tinted green, compounding the effect.
*   **Recommendation:**
    *   **Primary Green (#196826):** Keep as the primary brand color but use it more selectively. Limit it to icons, call-to-action (CTA) buttons, and section titles.
    *   **New Primary Background (#fdfbf7):** Replace the green-tinted white with a warm, off-white "Vanilla" or "Paper" color. This feels more natural, like untreated wood or recycled paper, and provides a neutral canvas for the green to pop.
    *   **Wood/Oak Accent (#d97706):** Increase the use of this "Golden Oak" color. It directly links the "Green" (eco) with "Carpentry" (wood/craft) and adds warmth, which supports the "family-run" feel.
    *   **Secondary Neutral (#94a3b8):** Use a cool "Stone" or "Slate" gray for smaller text or borders to balance the warmth and maintain a professional, modern aesthetic.

---

## 2. Header & Navigation
*   **Current State:** The semi-transparent green header (`rgba(25, 104, 38, 0.95)`) is the most prominent green element and is likely the main reason for the "too green" feedback.
*   **Recommendation:**
    *   **White/Off-white Header:** Change the header background to white or the new primary background color. This immediately "cleans up" the site and makes the brand logo stand out more.
    *   **Green Navigation Text:** Use the primary green for navigation links. Add a "Golden Oak" hover effect for a touch of warmth.
    *   **Subtle Border:** Use a very thin green or wood-colored border at the bottom of the header to define it without the visual weight of a solid color block.

---

## 3. Typography & Layout
*   **Current State:** *Montserrat* (Sans-serif) and *Zilla Slab* (Slab-serif) are excellent choices. Montserrat provides a clean, competent look, while Zilla Slab's serifs give it a traditional, hand-crafted, "family" feel.
*   **Recommendation:**
    *   **Whitespace:** Increase vertical padding between sections further. This allows the content to "breathe" and feels more premium and intentional.
    *   **Hierarchy:** Use Zilla Slab for all headings to reinforce the craft-focused identity. Ensure Montserrat is used for body text to maintain high readability.
    *   **Section Backgrounds:** Instead of light green backgrounds (`rgba(25, 104, 38, 0.03)`), try a light taupe or warm gray to provide a break between sections without adding "green fatigue."

---

## 4. "Family-Run" & "Eco-Friendly" Emotional Cues
*   **Family-Run:** To enhance this, introduce more human elements. **Replace the current hero image (`img/greengecko.jpeg`) with the team photo (`img/team-photo-1.webp`).** The current image is overly green and abstract, whereas the team photo immediately introduces the faces behind the business (Mick and Ese), building trust and reinforcing the "family-run" narrative.
*   **Eco-Friendly:** Use organic shapes (like the gecko logo and leaf icons) as subtle watermarks or background patterns rather than solid colored blocks. This communicates "green" through form and symbolism rather than just color saturation.

---

## 5. Actionable Design Changes (Implementation)

| Element | Current | Proposed |
| :--- | :--- | :--- |
| **Hero Image** | `img/greengecko.jpeg` | `img/team-photo-1.webp` |
| **Header BG** | `rgba(25, 104, 38, 0.95)` | `#ffffff` (with glassmorphism/blur) |
| **Header Text** | White | `#196826` (Primary Green) |
| **Body BG** | `#f9fdf9` | `#fdfbf7` (Warm Off-white) |
| **Card Accent** | Green borders/shadows | Subtle wood-tone border or shadows |
| **Album BG** | `rgba(25, 104, 38, 0.03)` | `#f5f5f5` (Light Stone) |

---

## Conclusion
By shifting the primary green from a "container" color to a "highlight" color and introducing warm, neutral tones, the website will feel more balanced, professional, and welcoming. This will better represent both the technical competence of Green Gecko Carpentry and its core values of being a family-run, eco-conscious business.
