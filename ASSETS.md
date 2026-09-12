# Rainforest assets

Generated with the built-in Imagegen tool, one request per asset, no retries. Original size: 1672 × 941. WebP compression preserves composition; the foreground retains alpha transparency. These are decorative environments, not photographs of a claimed location or event.

- Morning: `public/images/morning.webp` and `morning-mobile.webp`
- Night: `public/images/night.webp` and `night-mobile.webp`
- Foreground: `public/images/leaves.webp` and `leaves-mobile.webp`
- Real profile image: `public/images/profile.png`, extracted unchanged from the supplied Resume PDF.
- Navigation avatar: `public/images/avatar.webp`, an 80 × 80 optimized copy of the supplied profile image.
- Original PDF: `public/resume/jareyatham-masong-en.pdf`
- Rendered PDF preview: `public/resume/preview-en.webp`

## Exact generation prompts

### Morning

Use case: photorealistic-natural.
Asset type: cinematic rainforest background for a professional developer portfolio.
Primary request: a wide 16:9 tropical rainforest in the morning with layered mist, rich emerald foliage, tree ferns, and realistic botanical depth.
Style/medium: sophisticated film photography, natural photorealism with fine leaf texture.
Composition/framing: a wide forest view. Foliage and tree ferns frame the right edge and lower corners. Keep the left and central region calm, darker, open misty space suitable for a white headline overlay, without placing any text.
Lighting/mood: diffused morning sunbeams originate from the upper right; atmospheric, serene, cinematic.
Constraints: standalone raster landscape asset only. No UI, no text, no humans, no buildings, no logos, no watermark. Not illustration, no fantasy.

### Night

Use case: photorealistic-natural.
Asset type: cinematic rainforest background for a professional developer portfolio.
Primary request: a wide 16:9 tropical rainforest at night with layered gentle mist, rich deep forest-green foliage, tree ferns, and realistic botanical depth.
Style/medium: sophisticated film photography, natural photorealism with fine leaf texture.
Composition/framing: a wide forest view. Foliage and tree ferns frame the right edge and lower corners. Keep the left and central region calm, darker, open misty space suitable for a white headline overlay, without placing any text.
Lighting/mood: soft moonlight originates from the upper right, with gentle mist. Deep forest greens must remain visible, never a nearly black image; atmospheric, serene, cinematic.
Constraints: standalone raster landscape asset only. No UI, no text, no humans, no buildings, no logos, no watermark. No neon, no fantasy, not illustration.

### Foreground

Use case: photorealistic-natural.
Asset type: transparent botanical foreground overlay for a professional developer portfolio.
Primary request: one restrained spray of tropical fern fronds and monstera leaves entering from the bottom right corner.
Style/medium: photorealistic botanical detail with fine leaf veins and realistic rich dark emerald textures.
Composition/framing: wide 16:9 canvas; all foliage anchored to and cropped by the bottom right corner, occupying only the bottom-right quarter to third of the canvas. Most of the image, including all of the top and left, must be completely transparent with genuine alpha transparency. Leaves remain restrained and graceful.
Lighting/mood: soft natural light, deep emerald leaves suitable as a foreground overlay on a cinematic rainforest.
Constraints: genuinely transparent background, preserve alpha channel. No background scene, no solid color backdrop, no checkerboard texture baked into the image, no UI, no text, no humans, no buildings, no logo, no watermark. Not illustration.

## Third-party libraries

- Technology logos: Simple Icons (CC0 collection; individual marks retain their owners’ rights).
- UI icons: Lucide (ISC license).
- Fonts: Noto Sans Thai and Manrope (SIL Open Font License).
- Animation integration references: [GSAP matchMedia](https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/) and [Lenis / ScrollTrigger integration](https://github.com/darkroomengineering/lenis#gsap-scrolltrigger).
