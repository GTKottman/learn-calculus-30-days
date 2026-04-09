# Day 13 — Asymptotes; limits at infinity; end behavior

## Day objectives

- Find **vertical asymptotes** of rational functions where denominators vanish (one-sided infinite limits).
- Compute **limits at \(\pm\infty\)** for rational functions by comparing leading terms.
- Identify **horizontal asymptotes** (and oblique/slant asymptotes for rational functions when degree rules apply in your course).

### Khan Academy

<div class="lesson-video" role="region" aria-label="Khan Academy lesson video">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/oAQnDsmu41E" title="Khan Academy: Limits at infinity (quotients with trig)" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Prime recall (answer before reading on)

1. What happens to \(\dfrac{1}{x}\) as \(x\to 0^+\)? As \(x\to +\infty\)?
2. For \(\dfrac{3x^2+1}{x^2-4}\), what limit as \(x\to\infty\) do you expect?

---

## Core concepts

**Vertical asymptote (rational case):** If denominator is 0 at \(x=a\) but numerator nonzero after cancellation, typically vertical asymptote at \(x=a\) with infinite one-sided limits (sign depends on factors).

**Limits at infinity (rationals):** Compare degrees:

- If \(\deg P<\deg Q\), then \(P/Q\to 0\) as \(x\to\pm\infty\) (often).
- If \(\deg P=\deg Q\), limit is ratio of leading coefficients.
- If \(\deg P>\deg Q\), typically \(\pm\infty\) (or oblique asymptote after polynomial division if exactly one degree higher).

**Horizontal asymptote:** If \(\lim_{x\to\infty}f(x)=L\) (finite), then \(y=L\) is a horizontal asymptote (similarly for \(-\infty\)).

<!-- FUTURE: rational function with factor cancellation animation -->

## Figure 13 — Rational “degree radar”

**Takeaway:** End behavior is dominated by **highest-degree terms** after cancellation.

### Visual

| Compare degrees of num/den | Typical \(\lim_{x\to\infty}\) |
|-----------------------------|-------------------------------|
| top < bottom | \(0\) |
| top = bottom | leading/leading |
| top > bottom | often \(\pm\infty\) or slant asymptote |

---

## Mini-challenge

**Prompt:** Find all vertical asymptotes and horizontal asymptotes of \(f(x)=\dfrac{2x^2}{x^2-1}\).

<details>
<summary>Show one possible solution path</summary>

Factor denominator: \(x=\pm 1\) vertical asymptotes (numerator not zero there).

End behavior: degrees equal ⇒ \(\lim_{x\to\pm\infty} f(x)=2\). Horizontal asymptote \(y=2\).

</details>

---

## Active recall

1. Why can a function cross its horizontal asymptote?
2. What does “slant asymptote” mean for a rational function?
3. Evaluate \(\lim_{x\to\infty}\left(\sqrt{x^2+x}-x\right)\) using algebraic manipulation (multiply by conjugate)—try it.

---

## Practice problems

### Problem 1

Find \(\lim_{x\to\infty}\dfrac{5x^3+2x}{7x^3-x^2+1}\).

*Your work:*



<details>
<summary>Show solution</summary>

Divide numerator and denominator by \(x^3\): \(\dfrac{5+2/x^2}{7-1/x+1/x^3}\to \dfrac{5}{7}\).

</details>

### Problem 2

Find the vertical asymptotes of \(\dfrac{x-2}{x^2-4}\) after simplifying.

*Your work:*



<details>
<summary>Show solution</summary>

Factor: \(\dfrac{x-2}{(x-2)(x+2)}=\dfrac{1}{x+2}\) for \(x\neq 2\). Hole at \(x=2\); vertical asymptote at \(x=-2\).

</details>

### Problem 3

Find \(\lim_{x\to -\infty}\dfrac{x}{\sqrt{x^2+1}}\) (careful with square roots: \(\sqrt{x^2}=|x|\)).

*Your work:*



<details>
<summary>Show solution</summary>

For large negative \(x\), \(|x|=-x\). Divide inside sqrt: \(\dfrac{x}{|x|\sqrt{1+1/x^2}}=\dfrac{x}{(-x)\sqrt{1+1/x^2}}\to -1\).

</details>

---

## Cumulative review

- **Day 12:** \(f'\), \(f''\) sketch analysis.
- **Day 13:** Infinite limits and limits at infinity; asymptotes.

---

## Spaced repetition (today’s queue)

1. **(Day 12)** Find \(f'\) and \(f''\) for \(f(x)=\ln(x^2+1)\).
2. **(Day 9)** \(\lim_{x\to 0}\dfrac{\sin(7x)}{7x}\).
3. **(Day 4)** Three-part continuity definition.
