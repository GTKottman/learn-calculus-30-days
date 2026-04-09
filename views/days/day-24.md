# Day 24 — Integration by substitution (\(u\)-substitution)

## Day objectives

- Recognize **chain rule in reverse**: \(\int f(g(x))g'(x)\,dx=\int f(u)\,du\) with \(u=g(x)\).
- Change **differentials** consistently: \(du=g'(x)\,dx\).
- For definite integrals, either **change limits** to \(u\)-values or substitute back to \(x\) before evaluating.

### Khan Academy

<div class="lesson-video" role="region" aria-label="Khan Academy lesson video">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/ShpI3gPgLBA" title="Khan Academy: Doing u-substitution twice (second variable)" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Prime recall (answer before reading on)

1. What derivative pattern signals a good \(u\)-substitution?
2. Why must you express \(dx\) in terms of \(du\) (or vice versa) before integrating?

---

## Runnable Python demo

Executable model script: [`../../models/python/day_24_usub.py`](../../models/python/day_24_usub.py) (definite integral \(\int_0^{\sqrt{\pi/2}} 2x\cos(x^2)\,dx\) vs analytic \(\sin(x^2)\) evaluation). From the project root:

```text
python models/python/day_24_usub.py
```

---

## Core concepts

**Template:** Look for an inner function \(u=g(x)\) whose derivative \(g'(x)\) appears (up to a constant factor).

**Definite integrals:** \(\int_a^b f(g(x))g'(x)\,dx=\int_{u(a)}^{u(b)} f(u)\,du\).

**Common patterns:** \(\int g'(x)e^{g(x)}\,dx\), \(\int \dfrac{g'(x)}{g(x)}\,dx=\ln|g(x)|+C\).

<!-- FUTURE: side-by-side x and u limits -->

## Figure 24 — Substitution as reversing the chain rule

**Takeaway:** \(du\) tracks how a small change in \(x\) scales into \(u\)-space.

### Visual

| Step | Action |
|------|--------|
| Pick \(u\) | Identify inner function |
| Compute \(du\) | Multiply derivatives |
| Rewrite integral | All in \(u\) |
| Integrate | Antiderivative in \(u\) |
| Back-substitute | If indefinite; or use new limits |

---

## Mini-challenge

**Prompt:** Evaluate \(\int x e^{x^2}\,dx\).

<details>
<summary>Show one possible solution path</summary>

Let \(u=x^2\), \(du=2x\,dx\Rightarrow x\,dx=du/2\).

\[
\int e^u\frac{du}{2}=\frac12 e^u+C=\frac12 e^{x^2}+C.
\]

</details>

---

## Active recall

1. What goes wrong if you leave an \(x\) in the integrand after substituting \(u\)?
2. When is trig substitution *not* \(u\)-sub (preview later courses)?
3. How does substitution interact with definite integral endpoints?

---

## Practice problems

### Problem 1

Evaluate \(\int \dfrac{\ln x}{x}\,dx\) for \(x>0\).

*Your work:*



<details>
<summary>Show solution</summary>

Let \(u=\ln x\), \(du=\dfrac{1}{x}dx\). Integral \(\int u\,du=\dfrac{u^2}{2}+C=\dfrac{(\ln x)^2}{2}+C\).

</details>

### Problem 2

Evaluate \(\int_0^{\pi/4}\tan x\,dx\).

*Your work:*



<details>
<summary>Show solution</summary>

\(\tan x=\sin x/\cos x\). Let \(u=\cos x\), \(du=-\sin x\,dx\).

\[
\int -\frac{du}{u}=-\ln|u|+C.
\]

Definite: from \(x=0\to \pi/4\), \(u\) goes \(1\to 1/\sqrt{2}\).

\[
-\ln(1/\sqrt{2})+\ln 1=\ln(\sqrt{2})=\tfrac12\ln 2.
\]

</details>

### Problem 3

Evaluate \(\int \dfrac{e^x}{e^x+3}\,dx\).

*Your work:*



<details>
<summary>Show solution</summary>

Let \(u=e^x+3\), \(du=e^x\,dx\Rightarrow \int \dfrac{du}{u}=\ln|u|+C=\ln(e^x+3)+C\).

</details>

---

## Cumulative review

- **Days 22–23:** Riemann meaning; FTC.
- **Day 24:** Substitution technique.

---

## Spaced repetition (today’s queue)

1. **(Day 23)** FTC I: \(\dfrac{d}{dx}\int_1^x \sqrt{t}\,dt\).
2. **(Day 10)** Chain rule for \(\sin(x^3)\).
3. **(Day 21)** Taylor \(P_2\) for \(\cos x\) at \(0\).
