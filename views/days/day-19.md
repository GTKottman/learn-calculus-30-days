# Day 19 — Taylor polynomials

## Day objectives

- Write the **Taylor polynomial of degree \(n\)** about center \(a\):

\[
P_n(x)=\sum_{k=0}^n \frac{f^{(k)}(a)}{k!}(x-a)^k.
\]

- Compute coefficients by **differentiating** \(f\) at \(a\) (watch factorials).
- Interpret \(P_n\) as a local polynomial approximation matching derivatives up to order \(n\) at \(a\).

### Khan Academy

<div class="lesson-video" role="region" aria-label="Khan Academy lesson video">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/epgwuzzDHsQ" title="Khan Academy: Taylor and Maclaurin polynomials intro" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Prime recall (answer before reading on)

1. What linear function matches \(f(a)\) and \(f'(a)\) at \(x=a\)?
2. Why do factorials appear in Taylor coefficients?

---

## Runnable Python demo

Executable model script: [`../../models/python/day_19_taylor.py`](../../models/python/day_19_taylor.py) (Maclaurin partial sum for \(e^x\) vs `math.exp`). From the project root:

```text
python models/python/day_19_taylor.py
```

---

## Core concepts

**Maclaurin:** Taylor centered at \(a=0\).

**Coefficient pattern:** The \(k\)-th coefficient is \(\dfrac{f^{(k)}(a)}{k!}\).

**Examples (common Maclaurin snippets):**

\[
e^x \approx 1+x+\frac{x^2}{2}+\cdots,\quad
\cos x \approx 1-\frac{x^2}{2}+\cdots,\quad
\sin x \approx x-\frac{x^3}{6}+\cdots
\]

**Remainder:** courses vary—know that higher degree typically improves local approximation near \(a\).

<!-- FUTURE: overlay P_n and f near a -->

## Figure 19 — Coefficient construction

**Takeaway:** Each derivative at \(a\) pins one coefficient; factorials normalize repeated differentiation of \((x-a)^k\).

### Visual

| \(k\) | Term | Reason factorial |
|------|------|-------------------|
| 0 | \(f(a)\) | constant |
| 1 | \(f'(a)(x-a)\) | first derivative of \((x-a)\) is 1 |
| 2 | \(\dfrac{f''(a)}{2}(x-a)^2\) | second derivative of \((x-a)^2\) is \(2\) |

---

## Mini-challenge

**Prompt:** Find \(P_3(x)\) for \(f(x)=\ln(1+x)\) centered at \(0\).

<details>
<summary>Show one possible solution path</summary>

Derivatives at 0:

- \(f(0)=0\)
- \(f'(x)=\dfrac{1}{1+x}\Rightarrow f'(0)=1\)
- \(f''(x)=-(1+x)^{-2}\Rightarrow f''(0)=-1\)
- \(f'''(x)=2(1+x)^{-3}\Rightarrow f'''(0)=2\)

So

\[
P_3(x)=0 + x - \frac{1}{2}x^2 + \frac{2}{6}x^3 = x-\frac{x^2}{2}+\frac{x^3}{3}.
\]

</details>

---

## Active recall

1. How does Taylor degree 1 relate to linearization?
2. If \(f\) is a polynomial of degree \(\le n\), what is \(P_n\) for that \(f\)?
3. Why must you evaluate derivatives at the **center** \(a\), not at \(x\)?

---

## Practice problems

### Problem 1

Find \(P_2(x)\) for \(f(x)=e^{2x}\) at \(a=0\).

*Your work:*



<details>
<summary>Show solution</summary>

\(f(0)=1\), \(f'(x)=2e^{2x}\Rightarrow f'(0)=2\), \(f''(x)=4e^{2x}\Rightarrow f''(0)=4\).

\[
P_2(x)=1+2x+\frac{4}{2}x^2=1+2x+2x^2.
\]

</details>

### Problem 2

Find \(P_3(x)\) for \(f(x)=\sqrt{x}\) centered at \(a=1\) (write \(f(x)=(1+(x-1))^{1/2}\) and differentiate).

*Your work:*



<details>
<summary>Show solution</summary>

Let \(x=1+h\). Or compute derivatives:

\(f(1)=1\).

\(f'(x)=\frac{1}{2}x^{-1/2}\Rightarrow f'(1)=\frac12\).

\(f''(x)=-\frac14 x^{-3/2}\Rightarrow f''(1)=-\frac14\).

\(f'''(x)=\frac{3}{8}x^{-5/2}\Rightarrow f'''(1)=\frac{3}{8}\).

\[
P_3(x)=1+\frac12(x-1)-\frac{1}{8}(x-1)^2+\frac{1}{16}(x-1)^3.
\]

(Since \(f'''(1)/3!= (3/8)/6=1/16\).)


</details>

---

## Cumulative review

- **Days 15–18:** Applications and limits (L’Hôpital).
- **Day 19:** Local polynomial approximation via Taylor.

---

## Spaced repetition (today’s queue)

1. **(Day 18)** Evaluate \(\lim_{x\to 0}\dfrac{x-\sin x}{x^3}\) with L’Hôpital (carefully).
2. **(Day 16)** State MVT hypotheses.
3. **(Day 11)** Derivative of \(\ln(1+x)\).
