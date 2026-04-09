# Day 17 — Related rates

## Day objectives

- Translate a verbal related-rates problem into an **equation linking variables** that holds over time.
- Differentiate **with respect to time** \(t\) using the chain rule; substitute numeric values **after** differentiation unless a quantity is constant.
- Track **signs** and **units** (especially decreasing quantities).

### Khan Academy

<div class="lesson-video" role="region" aria-label="Khan Academy lesson video">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/kQF9pOqmS0U" title="Khan Academy: Related rates introduction" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Prime recall (answer before reading on)

1. If \(x\) and \(y\) are both functions of \(t\), what is \(\dfrac{d}{dt}(x^2+y^2)\)?
2. Why is it dangerous to plug in numbers **before** differentiating in related rates?

---

## Runnable Python demo

Executable model script: [`../../models/python/day_17_related_rates.py`](../../models/python/day_17_related_rates.py) (ladder problem; computes \(dy/dt\) from \(dx/dt\)). From the project root:

```text
python models/python/day_17_related_rates.py
```

---

## Core concepts

**Standard workflow**

1. Read and draw; label variables.
2. Find a relationship (Pythagorean, volume formula, similar triangles).
3. Differentiate implicitly with respect to \(t\).
4. Substitute known instantaneous values **last** (and only where variables are truly constant).

**Chain rule everywhere:** \(\dfrac{d}{dt}f(u(t))=f'(u(t))u'(t)\).

**Constants vs functions:** If a radius is fixed, \(\dfrac{dr}{dt}=0\); if it inflates, keep \(\dfrac{dr}{dt}\).

<!-- FUTURE: expanding ladder sliding along wall -->

## Figure 17 — Related rates dependency graph

**Takeaway:** Every variable depending on time adds a \(\dfrac{d}{dt}\) chain factor.

### Visual

| Classic setup | Relation | After \(\dfrac{d}{dt}\) |
|---------------|----------|-------------------------|
| Ladder sliding | \(x^2+y^2=L^2\) | \(2x x' + 2y y'=0\) |
| Expanding circle | \(A=\pi r^2\) | \(A'=2\pi r r'\) |

---

## Mini-challenge

**Prompt:** A 13-ft ladder leans against a wall. The bottom slides away from the wall at 2 ft/s. How fast is the top sliding down when the bottom is 5 ft from the wall?

<details>
<summary>Show one possible solution path</summary>

Let \(x\) be distance from wall along ground, \(y\) height. \(x^2+y^2=169\). Differentiate: \(2x x'+2y y'=0\).

When \(x=5\), \(y=\sqrt{169-25}=12\). Given \(x'=2\), solve \(y'=-(x/y)x'=-(5/12)\cdot 2=-5/6\) ft/s (downward).

</details>

---

## Active recall

1. What does a negative \(\dfrac{dy}{dt}\) mean in a “rising water” problem?
2. When do you need similar triangles instead of direct formulas?
3. Why must units match in the final answer?

---

## Practice problems

### Problem 1

A spherical balloon is inflated so its volume increases at \(3\ \text{cm}^3/\text{s}\). How fast is the radius increasing when \(r=2\) cm?

*Your work:*



<details>
<summary>Show solution</summary>

\(V=\frac{4}{3}\pi r^3\Rightarrow V'=4\pi r^2 r'\). Plug \(V'=3\), \(r=2\): \(3=4\pi(4)r'\Rightarrow r'=\dfrac{3}{16\pi}\) cm/s.

</details>

### Problem 2

A person walks away from a lamppost. Model shadow length using similar triangles; set up related rates (full numbers optional).

*Your work:*



<details>
<summary>Show solution</summary>

Typical: person height \(h\), post height \(H\), distance \(x\) from post along ground, shadow length \(s\). Similar triangles: \(\dfrac{H}{x+s}=\dfrac{h}{s}\) (form varies). Differentiate carefully; many courses provide numeric values.

</details>

---

## Cumulative review

- **Days 15–16:** Optimization; MVT.
- **Day 17:** Related rates (implicit differentiation with time).

---

## Spaced repetition (today’s queue)

1. **(Day 16)** MVT average slope for \(f(x)=\sqrt{x}\) on \([1,4]\)—set equation for \(c\).
2. **(Day 14)** Implicit differentiation on \(x^2+xy+y^2=1\).
3. **(Day 11)** \(\dfrac{d}{dt} e^{kt}\).
