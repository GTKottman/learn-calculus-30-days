# Day 11 — Exponential and logarithmic derivatives

## Day objectives

- Differentiate \(e^{kx}\), \(a^x\), \(\ln x\), and \(\log_a x\) (up to your course’s base conventions).
- Use **logarithmic differentiation** for products/quotients/powers when helpful.
- Combine exponentials/logs with **chain** and **product** rules.

### Khan Academy

<div class="lesson-video" role="region" aria-label="Khan Academy lesson video">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/3nQejB-XPoY" title="Khan Academy: Derivatives of e^x and ln x" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Prime recall (answer before reading on)

1. What is the slope of \(y=e^x\) at \(x=0\)?
2. Why is \(\dfrac{d}{dx}\ln x\) positive for \(x>0\)?

---

## Core concepts

**Core facts (standard):**

\[
\frac{d}{dx}e^x=e^x,\qquad \frac{d}{dx}\ln x=\frac{1}{x}\quad (x>0).
\]

**Bases:** \(a^x=e^{x\ln a}\Rightarrow \dfrac{d}{dx}a^x=a^x\ln a\).

**Log bases:** \(\log_a x=\dfrac{\ln x}{\ln a}\Rightarrow \dfrac{d}{dx}\log_a x=\dfrac{1}{x\ln a}\).

**Chain forms:**

\[
\frac{d}{dx}e^{u(x)}=e^{u(x)}u'(x),\qquad \frac{d}{dx}\ln|x|=\frac{1}{x}\quad (x\neq 0)
\]

(in many treatments \(\ln|x|\) antiderivative spans both sides).

**Logarithmic differentiation:** take \(\ln\) of \(|y|\), differentiate implicitly, solve for \(y'\)—great for \(y=x^x\) style expressions (where valid).

<!-- FUTURE: plot e^x and ln x as inverses -->

## Figure 11 — Inverse pair slopes

**Takeaway:** Exponential growth’s derivative scales with current value; log’s derivative decays like \(1/x\).

### Visual

| Function | Derivative | Domain note |
|--------|------------|-------------|
| \(e^{u}\) | \(e^u u'\) | chain |
| \(\ln u\) | \(\dfrac{u'}{u}\) | \(u>0\) (or use \(|u|\) carefully) |

---

## Mini-challenge

**Prompt:** Differentiate \(y=x^x\) for \(x>0\) using logarithmic differentiation.

<details>
<summary>Show one possible solution path</summary>

\(\ln y = x\ln x\). Differentiate: \(\dfrac{y'}{y}=\ln x + 1\). Thus \(y'=x^x(\ln x+1)\).

</details>

---

## Active recall

1. Explain why \(\dfrac{d}{dx}\ln(3x)=\dfrac{1}{x}\) (chain rule).
2. What is \(\dfrac{d}{dx}\ln(\cos x)\) and where is it valid?
3. Compare \(\dfrac{d}{dx}2^x\) vs \(\dfrac{d}{dx}x^2\).

---

## Practice problems

### Problem 1

Find \(\dfrac{d}{dx}e^{x^2+3x}\).

*Your work:*



<details>
<summary>Show solution</summary>

\(e^{x^2+3x}(2x+3)\).

</details>

### Problem 2

Find \(\dfrac{d}{dx}\ln(x^2+9)\).

*Your work:*



<details>
<summary>Show solution</summary>

\(\dfrac{2x}{x^2+9}\).

</details>

### Problem 3

Find \(\dfrac{d}{dx}\left(2^x\cdot \sin x\right)\).

*Your work:*



<details>
<summary>Show solution</summary>

Product rule: derivative of \(2^x\) is \(2^x\ln 2\). So

\[
2^x\ln 2\cdot \sin x + 2^x\cos x = 2^x(\ln 2\cdot \sin x+\cos x).
\]

</details>

---

## Cumulative review

- **Days 8–10:** Rules + chain.
- **Day 11:** Exponential and logarithmic derivatives.

---

## Spaced repetition (today’s queue)

1. **(Day 10)** Chain rule for \((3x+1)^{100}\).
2. **(Day 9)** Limit \(\lim_{x\to 0}\dfrac{\tan x}{x}\) (rewrite in terms of \(\sin/\cos\)).
3. **(Day 6)** Use IVT to show a root exists for a continuous function with a sign change on \([0,1]\).
