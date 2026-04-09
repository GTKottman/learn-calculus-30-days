# Day 2 — Difference quotient and the derivative as a limit

## Day objectives

- Write the **difference quotient** \(\dfrac{f(x+h)-f(x)}{h}\) and interpret \(h\) as a step in \(x\).
- Explain the **derivative at a point** as the limit of secant slopes as the step shrinks: instantaneous rate of change.
- Compute \(f'(a)\) from the limit definition for simple polynomials (by algebraically removing \(h\)).

### Khan Academy

<div class="lesson-video" role="region" aria-label="Khan Academy lesson video">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/4b8YnmUUIfI" title="Khan Academy: Derivative as limit of average rate of change" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Prime recall (answer before reading on)

1. What is the average rate of change of \(f\) between \(x\) and \(x+h\)?
2. What should happen to that average rate as \(h\to 0\) if the graph has a well-defined tangent at \(x\)?

---

## Core concepts

The **difference quotient** is

\[
\frac{f(x+h)-f(x)}{h}\quad (h\neq 0).
\]

It is the slope of the secant through \((x,f(x))\) and \((x+h,f(x+h))\). The **derivative at \(x\)** is

\[
f'(x)=\lim_{h\to 0}\frac{f(x+h)-f(x)}{h},
\]

provided the limit exists. At a fixed point \(a\),

\[
f'(a)=\lim_{h\to 0}\frac{f(a+h)-f(a)}{h}
=\lim_{x\to a}\frac{f(x)-f(a)}{x-a}.
\]

**Discipline:** Do **not** plug \(h=0\) into the difference quotient before you algebraically simplify; typically you factor \(h\) from the numerator and cancel.

<!-- FUTURE: slider h shrinking; secant approaches tangent -->

## Figure 2 — Limiting secant becomes tangent

**Takeaway:** The derivative at \(a\) is the **instantaneous** rate of change—local linearization of change, not an interval average.

### Visual

| Stage | Object | Slope meaning |
|-------|--------|----------------|
| \(h\neq 0\) | Secant through \(a\) and \(a+h\) | Average rate on tiny interval |
| \(h\to 0\) | Tangent line at \(a\) (if limit exists) | Instantaneous rate at \(a\) |

---

## Mini-challenge

**Prompt:** Use the limit definition to compute \(f'(2)\) for \(f(x)=x^2\).

<details>
<summary>Show one possible solution path</summary>

\[
\frac{(2+h)^2-2^2}{h}=\frac{4+4h+h^2-4}{h}=\frac{4h+h^2}{h}=4+h \quad (h\neq 0).
\]

Thus \(\lim_{h\to 0}(4+h)=4\). So \(f'(2)=4\).

</details>

---

## Active recall

1. What is the difference between “derivative at a point” and “derivative function”?
2. Why is \(\dfrac{f(x+h)-f(x)}{h}\) undefined at \(h=0\) even though the limit as \(h\to 0\) may exist?
3. Give an example where the limit defining \(f'(a)\) fails to exist.

---

## Practice problems

### Problem 1

Let \(g(x)=3x^2\). Find \(g'(1)\) using the limit definition.

*Your work:*



<details>
<summary>Show solution</summary>

\[
\frac{3(1+h)^2-3(1)^2}{h}=\frac{3(1+2h+h^2)-3}{h}=\frac{6h+3h^2}{h}=6+3h\to 6.
\]

So \(g'(1)=6\).

</details>

### Problem 2

Let \(f(x)=\dfrac{1}{x}\). Compute \(f'(2)\) from the limit definition.

*Your work:*



<details>
<summary>Show solution</summary>

\[
\frac{\frac{1}{2+h}-\frac{1}{2}}{h}
=\frac{\frac{2-(2+h)}{2(2+h)}}{h}
=\frac{-h}{2h(2+h)}=-\frac{1}{2(2+h)}\to -\frac{1}{4}.
\]

So \(f'(2)=-\dfrac{1}{4}\).

</details>

---

## Cumulative review

- **Day 1:** Average rate on \([a,b]\) as secant slope \(\dfrac{f(b)-f(a)}{b-a}\).
- **Day 2:** Difference quotient; derivative as \(\lim_{h\to 0}\) of secant slopes.

---

## Spaced repetition (today’s queue)

1. **(Day 1)** Compute \(\dfrac{f(3)-f(1)}{3-1}\) for \(f(x)=5x-2\). What does it represent geometrically?
