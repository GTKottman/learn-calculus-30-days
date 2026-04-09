# Day 6 — Intermediate Value Theorem (IVT)

## Day objectives

- State the **Intermediate Value Theorem** for a continuous function on a **closed interval** \([a,b]\).
- Check **hypotheses** (continuity on all of \([a,b]\), not just endpoints).
- Use IVT to prove a root exists in an interval via a sign change \(f(a)f(b)<0\) (when applicable).

### Khan Academy

<div class="lesson-video" role="region" aria-label="Khan Academy lesson video">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/9xgO-EJ3sr0" title="Khan Academy: Intermediate value theorem" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Prime recall (answer before reading on)

1. If \(f\) is continuous on \([1,5]\), \(f(1)=-2\), and \(f(5)=10\), must there be some \(c\in(1,5)\) with \(f(c)=0\)?
2. Why is continuity on the **entire** closed interval essential for the standard IVT statement?

---

## Core concepts

**IVT (bridge version):** If \(f\) is continuous on \([a,b]\) and \(N\) is any number strictly between \(f(a)\) and \(f(b)\), then there exists at least one \(c\in(a,b)\) such that \(f(c)=N\).

**Root corollary:** If \(f\) is continuous on \([a,b]\) and \(f(a)\) and \(f(b)\) have **opposite signs** (and neither is 0 at endpoints in the way that blocks strict betweenness—use the sign-change formulation carefully), then there is a root in \((a,b)\). The common exam pattern: \(f(a)<0<f(b)\) or \(f(b)<0<f(a)\).

**Hypothesis failures:** If there is a discontinuity inside \([a,b]\), the graph can “jump over” intermediate values.

<!-- FUTURE: continuous curve crossing horizontal line N -->

## Figure 6 — IVT as “no teleporting”

**Takeaway:** Continuity on a **connected** interval prevents skipping output values between endpoints.

### Visual

| Requirement | Why it matters |
|-------------|----------------|
| Closed interval \([a,b]\) in domain | pins behavior across the whole stretch |
| Continuity on \([a,b]\) | unbroken graph on that stretch |
| \(N\) between endpoint values | guarantees a crossing |

**Analogy:** A hike without teleporting from elevation \(-2\) ft to \(10\) ft must pass through sea level **if** the trail is continuous—IVT formalizes that idea for graphs.

---

## Mini-challenge

**Prompt:** Show that \(p(x)=x^3-x-1\) has a root in \((1,2)\).

<details>
<summary>Show one possible solution path</summary>

Polynomials are continuous on \(\mathbb{R}\). Compute \(p(1)=-1<0\) and \(p(2)=8-2-1=5>0\). By IVT, there exists \(c\in(1,2)\) with \(p(c)=0\).

</details>

---

## Active recall

1. Does IVT tell you **where** the root is, or only that one exists?
2. Give a discontinuous function on \([0,1]\) with \(f(0)<0<f(1)\) but **no** root (sketch idea).
3. If \(f\) is continuous on \([a,b]\) and \(N\) is **not** between \(f(a)\) and \(f(b)\), can a solution to \(f(x)=N\) still exist in \((a,b)\)?

---

## Practice problems

### Problem 1

Let \(f(x)=e^x-3x\). Show \(f\) has a root in \((0,1)\).

*Your work:*



<details>
<summary>Show solution</summary>

\(e^x\) and \(3x\) are continuous, hence \(f\) is continuous on \([0,1]\). \(f(0)=1>0\). \(f(1)=e-3<0\). By IVT, there is \(c\in(0,1)\) with \(f(c)=0\).

</details>

### Problem 2

Explain why IVT does **not** apply to \(g(x)=1/x\) on \([-1,1]\) to conclude a root exists between \(-1\) and \(1\).

*Your work:*



<details>
<summary>Show solution</summary>

\(g\) is **not** continuous on the whole interval \([-1,1]\) because it is undefined at \(0\). The standard IVT hypotheses fail on that interval choice.

</details>

---

## Cumulative review

- **Days 1–5:** Rates; derivative limit; limits/one-sided limits; continuity; discontinuity types.
- **Day 6:** IVT statement, hypotheses, root existence via sign change.

---

## Spaced repetition (today’s queue)

1. **(Day 5)** Give an example where \(\lim_{x\to a}f(x)\) exists but \(f\) is not continuous at \(a\).
2. **(Day 2)** Compute \(f'(0)\) for \(f(x)=mx+b\) using the limit definition—what do you get?
