# Day 16 — Mean Value Theorem (MVT)

## Day objectives

- State the **MVT**: if \(f\) is continuous on \([a,b]\) and differentiable on \((a,b)\), then \(\exists c\in(a,b)\) with \(f'(c)=\dfrac{f(b)-f(a)}{b-a}\).
- Solve for **\(c\)** in explicit examples (quadratics, cubics).
- Interpret MVT as “average slope equals some instantaneous slope.”

### Khan Academy

<div class="lesson-video" role="region" aria-label="Khan Academy lesson video">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/6hri9k_2R8o" title="Khan Academy: Mean value theorem" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Prime recall (answer before reading on)

1. What is the average rate of change of \(f\) on \([a,b]\)?
2. If you drive 120 miles in 2 hours, can your speedometer ever read exactly 60 mph during the trip—under what hypotheses?

---

## Runnable Python demo

Executable model script: [`../../models/python/day_16_mvt.py`](../../models/python/day_16_mvt.py) (finds \(c\) for \(f(x)=x^2\) on \([1,3]\)). From the project root:

```text
python models/python/day_16_mvt.py
```

---

## Core concepts

**MVT (existence):** Under hypotheses, there is at least one tangent parallel to the secant joining \((a,f(a))\) and \((b,f(b))\).

**Rolle’s theorem (special case):** If \(f(a)=f(b)\), then some \(c\) has \(f'(c)=0\).

**Finding \(c\):** Set \(f'(c)=\dfrac{f(b)-f(a)}{b-a}\) and solve for \(c\) in \((a,b)\).

**Contrapositives/consequences (later uses):** If \(f'=0\) on an interval, \(f\) is constant on that interval (needs connectivity).

<!-- FUTURE: secant and parallel tangent on graph -->

## Figure 16 — MVT geometry

**Takeaway:** The theorem turns a **global average** into a **local derivative** somewhere inside.

### Visual

| Object | Expression |
|--------|------------|
| Secant slope | \(\dfrac{f(b)-f(a)}{b-a}\) |
| Tangent slope | \(f'(c)\) |

---

## Mini-challenge

**Prompt:** For \(f(x)=x^2\) on \([1,3]\), find all \(c\in(1,3)\) satisfying MVT.

<details>
<summary>Show one possible solution path</summary>

Average slope: \((9-1)/(3-1)=4\). \(f'(c)=2c=4\Rightarrow c=2\in(1,3)\).

</details>

---

## Active recall

1. Why must differentiability be assumed on **open** \((a,b)\) rather than only at endpoints?
2. Can MVT apply to \(f(x)=|x|\) on \([-1,2]\)? Explain.
3. If \(f'(x)>0\) on \((a,b)\), what does MVT imply about \(f(b)\) vs \(f(a)\)?

---

## Practice problems

### Problem 1

Find \(c\) for \(f(x)=\ln x\) on \([1,e]\) per MVT.

*Your work:*



<details>
<summary>Show solution</summary>

Average slope: \((\ln e-\ln 1)/(e-1)=1/(e-1)\). \(f'(c)=1/c\). So \(1/c=1/(e-1)\Rightarrow c=e-1\). Check \(c\in(1,e)\): yes since \(e\approx 2.718\).

</details>

### Problem 2

Show \(f(x)=x^3-6x^2+9x\) has a point in \((1,3)\) where \(f'\) equals the secant slope from \(1\) to \(3\)—then compute \(c\).

*Your work:*



<details>
<summary>Show solution</summary>

\(f(1)=4\), \(f(3)=0\). Average slope \((0-4)/2=-2\).

\(f'(x)=3x^2-12x+9\). Solve \(3c^2-12c+9=-2\Rightarrow 3c^2-12c+11=0\). Roots \(c=\dfrac{12\pm\sqrt{144-132}}{6}=\dfrac{12\pm\sqrt{12}}{6}=2\pm \dfrac{\sqrt{3}}{3}\). Both lie in \((1,3)\) (two solutions possible—MVT guarantees at least one).

</details>

---

## Cumulative review

- **Day 15:** EVT-style optimization candidates.
- **Day 16:** MVT existence and solving for \(c\).

---

## Spaced repetition (today’s queue)

1. **(Day 15)** List candidates for absolute max of continuous \(f\) on \([0,4]\).
2. **(Day 12)** Second derivative test conditions.
3. **(Day 8)** Product rule for \(x^2 e^x\).
