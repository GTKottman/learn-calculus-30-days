# Day 4 — Continuity at a point; algebra of continuous functions

## Day objectives

- State the **three-part** continuity test at \(a\): defined, limit exists, equality.
- Use continuity theorems for sums, products, quotients (where denominator nonzero), and compositions on valid domains.
- Connect limits of “nice” elementary functions on interior domain points to evaluation.

### Khan Academy

<div class="lesson-video" role="region" aria-label="Khan Academy lesson video">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/jzn4rTPajT0" title="Khan Academy: Continuity at a point (worked example)" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Prime recall (answer before reading on)

1. If \(\lim_{x\to a}f(x)=7\) but \(f(a)=2\), is \(f\) continuous at \(a\)?
2. If \(f\) is continuous at \(a\), what is \(\lim_{x\to a}f(x)\) in terms of \(f(a)\)?

---

## Core concepts

**Continuity at \(a\)** (in the calculus-I sense for real functions on domains containing \(a\) in an open interval around \(a\)) requires:

1. \(f(a)\) exists (in the domain sense used in your course),
2. \(\lim_{x\to a}f(x)\) exists (two-sided),
3. \(\lim_{x\to a}f(x)=f(a)\).

If any condition fails, \(f\) is **not** continuous at \(a\).

**Algebra of continuity:** If \(f\) and \(g\) are continuous at \(a\), so are \(f\pm g\), \(fg\), and \(f/g\) provided \(g(a)\neq 0\). Compositions preserve continuity under standard domain restrictions: if \(g\) is continuous at \(a\) and \(f\) is continuous at \(g(a)\), then \(f\circ g\) is continuous at \(a\).

**Practical use:** Polynomials and rational functions are continuous on their natural domains; trig functions are continuous on their domains; compositions inherit continuity where defined.

<!-- FUTURE: continuity checklist toggles -->

## Figure 4 — Continuity checklist

**Takeaway:** Continuity is a **pointwise** bridge between limits and actual output values.

### Visual

| Check | Question |
|-------|----------|
| 1 | Is \(f(a)\) defined (in the relevant domain)? |
| 2 | Does \(\lim_{x\to a}f(x)\) exist? |
| 3 | Is the limit equal to \(f(a)\)? |

---

## Mini-challenge

**Prompt:** Where is \(h(x)=\dfrac{1}{x^2-1}\) continuous? Explain using continuity facts (no epsilon–delta required).

<details>
<summary>Show one possible solution path</summary>

The numerator is continuous everywhere; the denominator is continuous everywhere. The quotient is continuous where the denominator is nonzero. Solve \(x^2-1=0\Rightarrow x=\pm 1\). So \(h\) is continuous on \((-\infty,-1)\cup(-1,1)\cup(1,\infty)\).

</details>

---

## Active recall

1. Give an example of a **removable** discontinuity and a **jump** discontinuity.
2. Why is “polynomials are continuous on \(\mathbb{R}\)” compatible with limit laws?
3. If \(f\) is continuous at \(a\) and \(f(a)>0\), is it true that \(f(x)>0\) for all \(x\) near \(a\)? (State a careful calculus-I answer.)

---

## Practice problems

### Problem 1

Let \(f(x)=\begin{cases}x^2,& x\neq 2\\ 5,& x=2\end{cases}\). Is \(f\) continuous at \(x=2\)?

*Your work:*



<details>
<summary>Show solution</summary>

\(\lim_{x\to 2}x^2=4\), but \(f(2)=5\). The limit exists but does not equal the point value—**not** continuous at 2 (removable discontinuity).

</details>

### Problem 2

Find \(k\) so that \(g(x)=\begin{cases}2x+k,& x<1\\ x^2,& x\ge 1\end{cases}\) is continuous at \(x=1\).

*Your work:*



<details>
<summary>Show solution</summary>

Left limit: \(2(1)+k=2+k\). Right value/limit: \(1\). Need \(2+k=1\Rightarrow k=-1\).

</details>

---

## Cumulative review

- **Days 1–3:** Rates; derivative limit; limits and one-sided limits.
- **Day 4:** Continuity definition; combining continuous functions.

---

## Spaced repetition (today’s queue)

1. **(Day 3)** Evaluate \(\lim_{x\to 2}\dfrac{x^2-5x+6}{x-2}\) by factoring and canceling.
2. **(Day 2)** Difference quotient for \(f(x)=x^3\) at general \(x\): simplify \(\dfrac{(x+h)^3-x^3}{h}\) for \(h\neq 0\).
