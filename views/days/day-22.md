# Day 22 — Riemann sums; definite integral as a limit; net signed area

## Day objectives

- Set up **left, right, midpoint** Riemann sums for \(\int_a^b f(x)\,dx\) using \(\Delta x=(b-a)/n\) and appropriate sample points.
- Interpret the definite integral as a **limit of sums** (for integrable functions) and as **net signed area** between graph and \(x\)-axis.
- Handle **piecewise** and negative-height regions conceptually.

### Khan Academy

<div class="lesson-video" role="region" aria-label="Khan Academy lesson video">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/dEAk0BHBYCM" title="Khan Academy: Riemann sums introduction" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Prime recall (answer before reading on)

1. If \(f(x)\ge 0\) on \([a,b]\), what geometric quantity does \(\int_a^b f(x)\,dx\) represent?
2. What does \(\Delta x\) become as \(n\to\infty\) in a standard equal partition?

---

## Runnable Python demo

Executable model script: [`../../models/python/day_22_riemann.py`](../../models/python/day_22_riemann.py) (left/mid/right sums for \(\int_0^1 x^2\,dx\)). Shared helpers: [`../../models/python/numeric_utils.py`](../../models/python/numeric_utils.py). From the project root:

```text
python models/python/day_22_riemann.py
```

---

## Core concepts

**Partition:** Split \([a,b]\) into \(n\) subintervals of width \(\Delta x=(b-a)/n\).

**Sample points:** Left endpoints \(x_i=a+i\Delta x\) (for right endpoints adjust indexing consistently with your text).

**Riemann sum:** \(\sum_{i=1}^n f(x_i^*)\,\Delta x\).

**Definite integral:** \(\int_a^b f(x)\,dx=\lim_{n\to\infty}\sum f(x_i^*)\Delta x\) (Riemann integrable functions; continuous on \([a,b]\) suffices here).

**Signed area:** Regions below the \(x\)-axis contribute **negatively** to the integral.

<!-- FUTURE: rectangle stack under curve -->

## Figure 22 — Net signed area

**Takeaway:** Integration aggregates **local contributions**; sign tracks above/below axis.

### Visual

| Region | Contribution |
|--------|----------------|
| \(f>0\) | positive area |
| \(f<0\) | negative area |

---

## Mini-challenge

**Prompt:** Write the **right** Riemann sum for \(f(x)=x^2\) on \([0,2]\) with \(n\) equal subintervals (leave as a sum).

<details>
<summary>Show one possible solution path</summary>

\(\Delta x=2/n\). Right endpoints \(x_i=i\Delta x=2i/n\), \(i=1..n\).

\[
\sum_{i=1}^n \left(\frac{2i}{n}\right)^2\frac{2}{n}
=\sum_{i=1}^n \frac{8i^2}{n^3}.
\]

(Optional: evaluate limit using \(\sum i^2=n(n+1)(2n+1)/6\) to get \(8/3\).)

</details>

---

## Active recall

1. Why is midpoint sum often more accurate than left/right for the same \(n\)?
2. What does \(\int_a^b f = -\int_b^a f\) mean in terms of orientation?
3. If \(f\) is odd on \([-a,a]\), what is \(\int_{-a}^a f\)?

---

## Practice problems

### Problem 1

Compute \(\int_0^2 x^2\,dx\) using an antiderivative (preview FTC).

*Your work:*



<details>
<summary>Show solution</summary>

\(\dfrac{x^3}{3}\Big|_0^2=\dfrac{8}{3}\).

</details>

### Problem 2

Estimate \(\int_0^1 e^{-x^2}\,dx\) using a **midpoint** sum with \(n=2\) (compute numerically).

*Your work:*



<details>
<summary>Show solution</summary>

\(\Delta x=1/2\). Subintervals \([0,0.5]\), \([0.5,1]\). Midpoints \(0.25,0.75\).

Sum \(=\frac12 e^{-0.25^2}+\frac12 e^{-0.75^2}\approx 0.5(0.9394+0.5698)\approx 0.7546\).

</details>

---

## Cumulative review

- **Days 1–21:** Differential calculus + checkpoint.
- **Day 22:** Riemann sums and integral meaning.

---

## Spaced repetition (today’s queue)

1. **(Day 19)** Taylor \(P_2\) for \(e^x\) at \(0\).
2. **(Day 16)** MVT: average slope of \(\ln x\) on \([1,e]\).
3. **(Day 7)** Continuity three-part definition.
