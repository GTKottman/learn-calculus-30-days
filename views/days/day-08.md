# Day 8 — Computing derivatives: sums, constant multiples, powers, product rule

## Day objectives

- Apply **linearity**: \(\dfrac{d}{dx}(cf)=cf'\) and \(\dfrac{d}{dx}(f\pm g)=f'\pm g'\).
- Use the **power rule** \(\dfrac{d}{dx}x^n=nx^{n-1}\) for integer \(n\) (extend to rationals when your course permits).
- Use the **product rule** \((fg)'=f'g+fg'\) and recognize when it is needed.

### Khan Academy

<div class="lesson-video" role="region" aria-label="Khan Academy lesson video">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/H-v4oraDjuM" title="Khan Academy: Power rule (with rewriting)" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Prime recall (answer before reading on)

1. If \(f(x)=x^{10}\), what should \(f'(x)\) look like—without yet quoting the rule—based on patterns from the limit definition on \(x^n\)?
2. Is the derivative of a product \(f\cdot g\) equal to \(f'\cdot g'\)?

---

## Core concepts

**Power rule (Calculus I standard):** \(\dfrac{d}{dx}x^n=nx^{n-1}\).

**Linearity:** derivatives respect addition and scalar multiplication.

**Product rule:** \((fg)'=f'g+fg'\). Mnemonic: “first times derivative of second plus second times derivative of first.”

**Quotient rule (often paired here):** \(\left(\dfrac{f}{g}\right)'=\dfrac{f'g-fg'}{g^2}\).

**Polynomials:** differentiate term-by-term.

<!-- FUTURE: product rule term-by-term highlighting -->

## Figure 8 — When you need the product rule

**Takeaway:** Any product of **non-constant** factors generally needs product rule (unless you expand first into a polynomial).

### Visual

| Expression | Tool |
|------------|------|
| \(x^3\cdot x^2\) | Expand to \(x^5\) **or** product rule |
| \(x\cdot \sin x\) | Product rule (unless rewrite impossible) |
| \((2x+1)^{10}\) | Chain rule (coming soon), not “power rule alone” on the outer \(x\) |

---

## Mini-challenge

**Prompt:** Differentiate \(h(x)=(3x^2+1)(x^3-x)\) **two ways**: expand then differentiate, and product rule. Confirm agreement.

<details>
<summary>Show one possible solution path</summary>

**Product rule:** With \(f=3x^2+1\), \(g=x^3-x\), \(f'=6x\), \(g'=3x^2-1\),

\[
h'=(6x)(x^3-x)+(3x^2+1)(3x^2-1).
\]

**Expand:** \(h=3x^5-3x^3+x^3-x=3x^5-2x^3-x\), so \(h'=15x^4-6x^2-1\). Algebraically expand the product-rule expression to match.

</details>

---

## Active recall

1. Why is \((x^2)^3\) not a place where you “multiply derivatives” incorrectly?
2. State the quotient rule and identify the minus sign placement.
3. If \(f(x)=x^n\), what is \(f^{(n)}(x)\) for a positive integer \(n\)?

---

## Practice problems

### Problem 1

Find \(\dfrac{d}{dx}\left(4x^3-7x^2+x^{-2}\right)\) (assume \(x\neq 0\) where needed).

*Your work:*



<details>
<summary>Show solution</summary>

Term-by-term: \(\dfrac{d}{dx}(4x^3)=12x^2\), \(\dfrac{d}{dx}(-7x^2)=-14x\), \(\dfrac{d}{dx}(x^{-2})=-2x^{-3}\). So \(12x^2-14x-2x^{-3}\) (for \(x\neq 0\)).

</details>

### Problem 2

Differentiate \(y=x^2\sin x\).

*Your work:*



<details>
<summary>Show solution</summary>

\(y'=2x\sin x + x^2\cos x\).

</details>

### Problem 3

Differentiate \(\dfrac{2x+1}{x^2+1}\).

*Your work:*



<details>
<summary>Show solution</summary>

Quotient rule: \(\dfrac{(2)(x^2+1)-(2x+1)(2x)}{(x^2+1)^2}=\dfrac{2x^2+2-4x^2-2x}{(x^2+1)^2}=\dfrac{-2x^2-2x+2}{(x^2+1)^2}\).

</details>

---

## Cumulative review

- **Days 1–7:** Limits, continuity, IVT; checkpoint on those ideas.
- **Day 8:** Derivative computation rules begin (shortcut rules after limit definition).

---

## Spaced repetition (today’s queue)

1. **(Day 7 / Checkpoint)** Recompute \(\lim_{x\to 3}\dfrac{x^2-9}{x-3}\) mentally.
2. **(Day 6)** IVT hypotheses: what must be true about \(f\) on \([a,b]\)?
3. **(Day 2)** Limit definition of derivative at \(a\) for \(f(x)=x^2\): what limit equals \(f'(a)\)?
