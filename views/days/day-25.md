# Day 25 — Integration by parts

## Day objectives

- Apply \(\int u\,dv = uv - \int v\,du\) for products.
- Choose \(u\) and \(dv\) using **LIATE** as a heuristic (Logs, Inverse trig, Algebraic, Trig, Exponential—guidance, not law).
- Handle **repeated** integration by parts and **definite** integration by parts with boundary terms.

### Khan Academy

<div class="lesson-video" role="region" aria-label="Khan Academy lesson video">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/dh__n9FVKA0" title="Khan Academy: Integration by parts introduction" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Prime recall (answer before reading on)

1. What product rule identity motivates integration by parts?
2. Why do we want \(dv\) easy to integrate and \(du\) simpler than \(u\)?

---

## Runnable Python demo

Executable model script: [`../../models/python/day_25_parts.py`](../../models/python/day_25_parts.py) (numeric \(\int_0^2 x e^{-x}\,dx\) vs \(1-3e^{-2}\)). From the project root:

```text
python models/python/day_25_parts.py
```

---

## Core concepts

**Formula:** \(\int u\,dv = uv - \int v\,du\).

**Definite form:** \(\int_a^b u\,dv = uv\Big|_a^b - \int_a^b v\,du\).

**Classic loop:** \(\int e^x\sin x\,dx\) needs two applications and algebra.

**Tabular integration:** optional speed tool for repeated derivatives of one factor.

<!-- FUTURE: choose u dv interactive -->

## Figure 25 — LIATE as a decision aid

**Takeaway:** Pick \(u\) so that differentiating reduces complexity; pick \(dv\) so integrating is feasible.

### Visual

| Prefer as \(u\) (often) | Prefer as \(dv\) (often) |
|-------------------------|---------------------------|
| \(\ln x\), inverse trig | polynomials, exponentials |

---

## Mini-challenge

**Prompt:** Evaluate \(\int x e^x\,dx\).

<details>
<summary>Show one possible solution path</summary>

Let \(u=x\), \(dv=e^x\,dx\Rightarrow du=dx\), \(v=e^x\).

\[
\int x e^x\,dx = x e^x-\int e^x\,dx = x e^x-e^x+C.
\]

</details>

---

## Active recall

1. How does integration by parts relate to the product rule for derivatives?
2. What happens if you pick \(u\) and \(dv\) poorly?
3. Evaluate \(\int \ln x\,dx\) by parts (treat \(dv=dx\)).

---

## Practice problems

### Problem 1

Evaluate \(\int x\cos x\,dx\).

*Your work:*



<details>
<summary>Show solution</summary>

\(u=x\), \(dv=\cos x\,dx\Rightarrow du=dx\), \(v=\sin x\).

\[
x\sin x-\int \sin x\,dx = x\sin x+\cos x+C.
\]

</details>

### Problem 2

Evaluate \(\int_1^e \ln x\,dx\).

*Your work:*



<details>
<summary>Show solution</summary>

\(u=\ln x\), \(dv=dx\Rightarrow du=\dfrac{1}{x}dx\), \(v=x\).

\[
x\ln x\Big|_1^e-\int_1^e 1\,dx = (e-0)-(e-1)=1.
\]

</details>

### Problem 3

Evaluate \(\int x^2 e^x\,dx\).

*Your work:*



<details>
<summary>Show solution</summary>

Two applications: first \(u=x^2\), \(dv=e^xdx\):

\[
x^2 e^x-2\int x e^x\,dx.
\]

Use \(\int x e^x\) from mini-challenge: \(x^2 e^x-2(xe^x-e^x)+C=e^x(x^2-2x+2)+C\).

</details>

---

## Cumulative review

- **Day 24:** Substitution.
- **Day 25:** Integration by parts.

---

## Spaced repetition (today’s queue)

1. **(Day 24)** \(\int \dfrac{2x}{x^2+1}\,dx\).
2. **(Day 23)** \(\dfrac{d}{dx}\int_0^{x^3}\cos(t^2)\,dt\).
3. **(Day 20)** Mixed-tool identification drill: name the tool for “limit \(0/0\) of rational.”
