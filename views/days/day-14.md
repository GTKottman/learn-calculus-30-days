# Day 14 — Implicit differentiation; Checkpoint 2 (derivative toolkit and graph behavior)

## Day objectives

- Differentiate relations \(F(x,y)=0\) by **implicit differentiation**: treat \(y=y(x)\), apply \(\dfrac{d}{dx}\) everywhere, solve for \(\dfrac{dy}{dx}\).
- Handle **products**, **quotients**, and **chain rule** within implicit steps (especially terms like \(y^2\), \(xy\), \(\sin y\)).
- Sit for **Checkpoint 2** covering differentiation through graph behavior (Days 8–13).

### Khan Academy

<div class="lesson-video" role="region" aria-label="Khan Academy lesson video">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/mSVrqKZDRF4" title="Khan Academy: Implicit differentiation" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Prime recall (answer before reading on)

1. Why can’t you always solve \(x^2+y^2=1\) for a global function \(y=f(x)\) without restricting branches?
2. Differentiate \(y^2\) with respect to \(x\) assuming \(y\) depends on \(x\).

---

## Core concepts

**Implicit differentiation:** Differentiate both sides with respect to \(x\). Whenever you differentiate a \(y\)-expression, multiply by \(\dfrac{dy}{dx}\) (chain rule).

**Tangent lines:** After finding \(\dfrac{dy}{dx}\) at \((x_0,y_0)\) on the curve, line is \(y-y_0=m(x-x_0)\) where \(m=\dfrac{dy}{dx}\big|_{(x_0,y_0)}\).

**Related rates preview:** Same calculus discipline as implicit differentiation—coming Day 17.

<!-- FUTURE: implicit curve with moving tangent -->

## Figure 14 — Implicit chain rule on \(y\)

**Takeaway:** Every \(y\) is an inner function of \(x\); never treat \(y\) as constant unless proven.

### Visual

| Term | \(\dfrac{d}{dx}(\cdot)\) |
|------|---------------------------|
| \(x^2\) | \(2x\) |
| \(y^2\) | \(2y\dfrac{dy}{dx}\) |
| \(xy\) | \(y + x\dfrac{dy}{dx}\) (product rule) |

---

## Mini-challenge

**Prompt:** For \(x^2+xy+y^2=3\), find \(\dfrac{dy}{dx}\) and the tangent slope at \((1,1)\).

<details>
<summary>Show one possible solution path</summary>

Differentiate: \(2x + y + x y' + 2y y'=0\). Solve:

\[
y'(x+2y)=-(2x+y)\Rightarrow y'=-\frac{2x+y}{x+2y}.
\]

At \((1,1)\): \(y'=-(2+1)/(1+2)=-1\).

</details>

---

## Active recall

1. What algebra mistake commonly breaks implicit differentiation?
2. How do you find \(\dfrac{d^2y}{dx^2}\) implicitly (outline steps)?
3. When is explicit solving \(y=f(x)\) preferable?

---

## Practice problems (implicit differentiation)

### Problem 1

Find \(\dfrac{dy}{dx}\) if \(x^3+y^3=6xy\) (folium of Descartes setup).

*Your work:*



<details>
<summary>Show solution</summary>

\(3x^2+3y^2y'=6y+6xy'\Rightarrow 3y^2y'-6xy'=6y-3x^2\Rightarrow y'=\dfrac{6y-3x^2}{3y^2-6x}=\dfrac{2y-x^2}{y^2-2x}\).

</details>

### Problem 2

Find the derivative of \(\ln y = x\sin y\) with respect to \(x\) (implicit).

*Your work:*



<details>
<summary>Show solution</summary>

Differentiate: \(\dfrac{y'}{y}=\sin y + x\cos y\cdot y'\). Multiply by \(y\): \(y'=y\sin y + xy\cos y\cdot y'\). Solve:

\[
y'(1-xy\cos y)=y\sin y\Rightarrow y'=\frac{y\sin y}{1-xy\cos y}.
\]

</details>

---

## Checkpoint test (Checkpoint 2 — Days 8–13)

**Instructions:** No notes first. Mixed differentiation and graph/limit skills.

### C1

Find \(\dfrac{d}{dx}\left(x^3\sin(2x)\right)\).

*Your work:*



### C2

Find \(\dfrac{d}{dx}\ln(x^2+4x+5)\).

*Your work:*



### C3

Find \(\dfrac{d}{dx}\left(\dfrac{e^x}{x^2+1}\right)\).

*Your work:*



### C4

Find all horizontal asymptotes of \(\dfrac{2x^2+3}{x^2+5}\).

*Your work:*



### C5

For \(f(x)=x^3-12x+1\), find critical points and classify local extrema using the second derivative test where applicable.

*Your work:*



### C6

Implicit: find \(\dfrac{dy}{dx}\) if \(x\cos y + y\cos x = 1\).

*Your work:*



---

## Cumulative review

- **Days 8–13:** Differentiation rules, trig, chain, exp/log, graph tests, asymptotes.
- **Day 14:** Implicit differentiation + checkpoint on that entire derivative/graph block.

---

## Spaced repetition (today’s queue)

1. **(Day 10)** Chain rule for \((\sin x)^{10}\).
2. **(Day 13)** Hole vs vertical asymptote for a rational with canceling factor.
3. **(Day 11)** \(\dfrac{d}{dx}5^x\).

---

## Checkpoint solutions (hidden)

<details>
<summary>Show solutions C1–C6</summary>

**C1.** Product rule: \(3x^2\sin(2x)+x^3\cos(2x)\cdot 2=3x^2\sin(2x)+2x^3\cos(2x)\).

**C2.** \(\dfrac{2x+4}{x^2+4x+5}\).

**C3.** Quotient: \(\dfrac{e^x(x^2+1)-e^x(2x)}{(x^2+1)^2}=\dfrac{e^x(x^2-2x+1)}{(x^2+1)^2}\).

**C4.** \(\lim_{x\to\pm\infty}=2\). Horizontal asymptote \(y=2\).

**C5.** \(f'(x)=3x^2-12=3(x-2)(x+2)\). Critical points \(x=\pm 2\). \(f''(x)=6x\). \(f''(-2)<0\) local max; \(f''(2)>0\) local min.

**C6.** Differentiate: \(\cos y - x\sin y\cdot y' + y'\cos x - y\sin x=0\). Solve for \(y'\):

\[
y'(\cos x - x\sin y)=y\sin x - \cos y\Rightarrow y'=\frac{y\sin x-\cos y}{\cos x - x\sin y}.
\]

</details>
