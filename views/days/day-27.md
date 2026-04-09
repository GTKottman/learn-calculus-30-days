# Day 27 — Arc length; surface area of revolution

## Day objectives

- Set up arc length for \(y=f(x)\): \(L=\int_a^b \sqrt{1+(f'(x))^2}\,dx\).
- Set up **surface area** for revolution: integrate \(2\pi(\text{radius})\,ds\) where \(ds=\sqrt{1+(dy/dx)^2}\,dx\) (or \(dy\) form).
- Simplify \(\sqrt{1+(f')^2}\) when it becomes a perfect square (common in curated problems).

### Khan Academy

<div class="lesson-video" role="region" aria-label="Khan Academy lesson video">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/WAPZihVUmzE" title="Khan Academy: Washer method — solids of revolution" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Prime recall (answer before reading on)

1. What is the intuitive meaning of \(ds=\sqrt{dx^2+dy^2}\)?
2. Why does surface area include a \(2\pi r\) factor?

---

## Runnable Python demo

Executable model script: [`../../models/python/day_27_arc_length.py`](../../models/python/day_27_arc_length.py) (arc length of \(y=x^{3/2}\) on \([0,1]\) vs closed form). From the project root:

```text
python models/python/day_27_arc_length.py
```

---

## Core concepts

**Arc length:** Sum of hypotenuse lengths of infinitesimal right triangles along the curve.

**Surface area of revolution:** Revolving \(y=f(x)\) about an axis: radius is distance from axis to curve; \(ds\) tracks arc length along the profile.

**\(x=g(y)\) form:** If \(x=g(y)\) is easier, use \(ds=\sqrt{1+(dx/dy)^2}\,dy\).

**Calculator reality:** Many integrals are nonelementary; setup is the course goal.

<!-- FUTURE: small hypotenuse on curve zoom -->

## Figure 27 — From \(dx,dy\) to \(ds\)

**Takeaway:** \(\sqrt{1+(dy/dx)^2}\,dx\) is the length element for a graph \(y=f(x)\).

### Visual

| Quantity | Formula |
|----------|---------|
| Arc element | \(ds=\sqrt{1+(y')^2}\,dx\) |
| Surface strip | \(dS=2\pi r\,ds\) |

---

## Mini-challenge

**Prompt:** Set up the arc length of \(y=x^{3/2}\) from \(x=0\) to \(x=1\).

<details>
<summary>Show one possible solution path</summary>

\(y'=\frac{3}{2}x^{1/2}\). Then

\[
L=\int_0^1 \sqrt{1+\left(\frac{3}{2}x^{1/2}\right)^2}\,dx
=\int_0^1 \sqrt{1+\frac{9}{4}x}\,dx.
\]

Substitute \(u=1+\frac{9}{4}x\) to evaluate (optional).

</details>

---

## Active recall

1. Why is arc length always \(\ge |b-a|\) for a graph from \(x=a\) to \(x=b\)?
2. If you revolve about \(y=4\), how does radius change in the integrand?
3. What goes wrong if you confuse \(ds\) with \(dx\) in length integrals?

---

## Practice problems

### Problem 1

Find the length of \(y=\dfrac{2}{3}x^{3/2}\) from \(x=0\) to \(x=1\) if the integral simplifies nicely.

*Your work:*



<details>
<summary>Show solution</summary>

\(y'=x^{1/2}\). Then \(\sqrt{1+(y')^2}=\sqrt{1+x}\).

\[
L=\int_0^1 \sqrt{1+x}\,dx=\left[\frac{2}{3}(1+x)^{3/2}\right]_0^1=\frac{2}{3}(2^{3/2}-1).
\]

</details>

### Problem 2

Set up the surface area when \(y=\sqrt{x}\), \(1\le x\le 4\), is revolved about the \(x\)-axis.

*Your work:*



<details>
<summary>Show solution</summary>

\(y'=\dfrac{1}{2\sqrt{x}}\). Radius \(y=\sqrt{x}\).

\[
S=2\pi\int_1^4 \sqrt{x}\sqrt{1+\frac{1}{4x}}\,dx
=2\pi\int_1^4 \sqrt{x+\frac{1}{4}}\,dx.
\]

(Algebra may simplify further.)

</details>

### Problem 3

Explain in words why a very “wiggly” curve can have large length even if endpoints are close.

*Your work:*



<details>
<summary>Show solution</summary>

Arc length accumulates local oscillation; it is not the straight distance between endpoints unless the graph is a line segment.

</details>

---

## Cumulative review

- **Day 26:** Area and volume setups.
- **Day 27:** Arc length and surface area setups.

---

## Spaced repetition (today’s queue)

1. **(Day 26)** Area between \(y=0\) and \(y=4-x^2\) from \(x=-2\) to \(2\).
2. **(Day 24)** \(\int \sec^2 x\, e^{\tan x}\,dx\).
3. **(Day 19)** Taylor \(P_1\) for \(\ln(1+x)\) at \(0\).
