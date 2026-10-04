# Match the homepage heading exactly

## Scope
- Change only the homepage’s main heading.
- Preserve the navbar, logo, character artwork, subtitle, buttons, floating controls, hero dimensions, and background.

## Implementation
- Rebuild the heading as three explicit rows: “Indie Game”, “and Animation”, and “Studio”.
- Use Inter throughout, with weight 700 for the main words and weight 300 for “and”.
- Apply the specified responsive sizes, compact 0.95 line height, tight tracking, shared baseline, and existing gold color.
- Keep “and Animation” together by responsively scaling the heading before allowing overflow.
- Load Inter 300 so the thin word renders accurately.

## Verification
- Compare the heading at desktop and mobile sizes against the supplied structure.
- Confirm no surrounding homepage element changed and the page remains error-free.
