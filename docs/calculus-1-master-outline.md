# Calculus 1 — Master lesson outline

This document follows the **MATH 2471 Calculus I (Spring 2020)**-style schedule captured in [`../Dates-and-outlines.md`](../Dates-and-outlines.md) (dates, topics, and **Guichard** / **Stewart 8e** section references). Lessons are listed **in course order**, not the “limits-first” textbook order.

**How to read each lesson block**

- **Syllabus alignment** — calendar date(s) and book pointers.
- **Learning objective** — what “good enough to move on” looks like.
- **Core ideas** — the calculus content.
- **Gap risks** — rusty algebra or notation that trips people up here.
- **Bridge tips** — short fixes and habits.
- **Interactive visualization (build spec)** — inputs, what updates on screen, and the insight it teaches (for a future MVC-style app).

---

## Course calendar (from Dates-and-outlines.md)

| Date | Topic | Guichard | Stewart (8e) |
|------|--------|----------|----------------|
| Jan 22 | Rates of change as slope | 4.1 | 1.4 |
| Jan 24 | Instantaneous rates, difference quotients, definition of derivative | 4.1, 4.2 | 1.4 |
| Jan 27 | Definition of derivative, introduction to limits | 4.1–4.2, 3.1–3.2 | 1.5, 2.1 |
| Jan 29 | Limits defined; left and right limits; limit laws | 3.1–3.4 | 1.5, 1.6 |
| Jan 31 | Examples of limits; continuity; continuous functions | 3.1–3.4 | 1.5–1.8 |
| Feb 3 | Continuity and Intermediate Value Theorem | 3.7 | 1.8 |
| Feb 5 | Computing derivatives: product rule, sums, polynomials | 4.2, 4.3 | 2.1–2.3 |
| Feb 7 | Derivatives of sine and cosine; squeeze theorem for limits | 4.3, 4.4, 3.6 | 2.4, 1.6 |
| Feb 10 | Chain rule | 4.5 | 2.5 |
| Feb 12 | Exponentials and logarithms | 4.6 | 6.2, 6.3 |
| Feb 14 | Sketching curves: first and second derivatives, concavity, monotonicity | 5.6 | 3.3 |
| Feb 17 | Sketching curves II: asymptotes and limits at infinity | 5.6 | 3.3, 3.4 |
| Feb 19 | Implicit differentiation | 4.7 | 2.6 |
| Feb 21 | Continuity and extrema / min / max; optimization | 5.2 | 3.1, 3.7 |
| Feb 24 | Mean Value Theorem | 5.3 | 3.2 |
| Feb 26 | Related rates | 5.1 | 2.8 |
| Feb 28 | L’Hôpital’s Rule | 5.5 | 6.8 |
| Mar 2 | Taylor polynomials | 5.4 | — |
| Mar 4 | Exam review or catch-up | — | — |
| **Mar 5** | **Exam** | — | — |
| Mar 6 | Integration and area; Riemann sums | 6.1 | 4.1, 4.2 |
| Mar 9 | Riemann sums and Fundamental Theorem of Calculus | 6.1, 6.2 | 3.9, 4.3 |
| Mar 11 | Integration techniques: \(u\)-substitution | 7.1 | 4.5 |
| Mar 13 | Integration techniques: integration by parts | 7.4 | — |
| Mar 16–20 | Spring break | — | — |
| Mar 23 | Applications: area between curves | 8.5 | 5.1 |
| Mar 25 | Applications: volume | 8.3 | — |
| Mar 27 | Applications: surface area | 8.8 | — |
| Mar 30 | Applications: arc length | 8.7 | — |
| Apr 1 | Applications: averages | 8.4 | 5.5 |
| Apr 3, Apr 6 | Improper integrals and limits at infinity | 7.7, 3.5 | 4.4 |
| Apr 8 | Exam review or catch-up | — | — |
| **Apr 9** | **Exam** | — | — |
| Apr 10, Apr 13 | Trig functions and their powers (integration) | 7.2, 7.3 | — |
| Apr 15 | Rational functions (integration) | 7.5 | — |
| Apr 17 | Differential equations; exponential growth/decay; isotope dating | 10.1 | 6.4, 6.5 |
| Apr 20 | Newton’s Method | 5.4 | 3.8 |
| Apr 22 | Extra applications day | — | — |
| Apr 24 | Hyperbolic sines and cosines | 2.7 | 6.7 |
| Apr 27 | Inverse trigonometric functions | 2.6 | 6.6 |
| Apr 29 | Taylor series; sine and cosine | — | — |
| May 1 | Complex numbers; Euler’s formula | — | — |
| May 4 | Last day; exam review or catch-up | — | — |
| **May 8** | **Final exam** | — | — |

---

## Part 1 — Lessons in syllabus order

### Jan 22 — Rates of change as slope

**Syllabus alignment:** Jan 22 · Guichard §4.1 · Stewart §1.4

**Learning objective:** You interpret average rate of change as the slope of a secant line and connect “rate” language to graph steepness and units.

**Core ideas**

- \(\dfrac{\Delta y}{\Delta x}\) over an interval; units as output per input.
- Secant line between two points on the graph of \(y=f(x)\).

**Gap risks**

- Treating “slope” as a formula without attaching meaning to \(\Delta x,\Delta y\).
- Sign: negative slope means decreasing quantity.

**Bridge tips**

- Always name what \(x\) and \(y\) represent in context (time, position, cost, etc.).
- Compute \(\dfrac{f(b)-f(a)}{b-a}\) in the correct order in the numerator.

**Interactive visualization (build spec)**

- **Inputs:** Two draggable points on a curve or sliders for \(a,b\).
- **View:** Secant line; slope readout; optional unit labels on axes.
- **Insight:** Average rate is global over \([a,b]\); prepares for shrinking the interval.

---

### Jan 24 — Instantaneous rates and difference quotients; definition of the derivative

**Syllabus alignment:** Jan 24 · Guichard §§4.1–4.2 · Stewart §1.4

**Learning objective:** You write the difference quotient \(\dfrac{f(x+h)-f(x)}{h}\) and describe the derivative as the limit of average rates as \(h\to 0\).

**Core ideas**

- Difference quotient; interpreting \(h\) as a small step in \(x\).
- Derivative at a point: instantaneous rate of change = limit of secant slopes.

**Gap risks**

- Reversing \(f(x+h)-f(x)\); algebra mistakes when \(f\) is not a polynomial.
- Confusing “derivative at a point” with “derivative function.”

**Bridge tips**

- Keep \(h\) symbolic until you take the limit; expand numerators before canceling \(h\).

**Interactive visualization (build spec)**

- **Inputs:** Slider \(h\) from moderate down toward \(0\); slider for base point \(x\) or \(a\).
- **View:** Secant through \((x,f(x))\) and \((x+h,f(x+h))\); slope readout trending toward tangent slope.
- **Insight:** Instantaneous rate is the limiting case of average rates.

---

### Jan 27 — Definition of the derivative and introduction to limits

**Syllabus alignment:** Jan 27 · Guichard §§4.1–4.2, 3.1–3.2 · Stewart §§1.5, 2.1

**Learning objective:** You compute \(f'(a)\) from the limit definition and recognize when evaluating \(\lim_{x\to a} f(x)\) is needed before differentiation shortcuts.

**Core ideas**

- \(f'(a)=\lim_{h\to 0}\dfrac{f(a+h)-f(a)}{h}=\lim_{x\to a}\dfrac{f(x)-f(a)}{x-a}\).
- Limits describe **near-\(a\)** behavior; connection to continuity (preview).

**Gap risks**

- Substituting \(h=0\) before algebraically canceling \(h\).
- Binomial expansion errors for \((x+h)^n\) in limit exercises.

**Bridge tips**

- Factor \(h\) from the numerator, simplify, **then** let \(h\to 0\).
- If the limit definition looks messy, try the symmetric or alternate limit form.

**Interactive visualization (build spec)**

- **Inputs:** Toggle between “derivative limit” and “function limit at \(a\)” demos; slider \(h\) or \(x\).
- **View:** Split: secant slope stabilizing vs \(y\)-value approaching a hole on the same function family.
- **Insight:** Derivative limits and function limits share the same “don’t plug in too early” discipline.

---

### Jan 29 — Limits defined; one-sided limits; limit laws

**Syllabus alignment:** Jan 29 · Guichard §§3.1–3.4 · Stewart §§1.5, 1.6

**Learning objective:** You evaluate limits using laws when functions are “nice,” and you use one-sided limits when the formula changes or involves absolute value.

**Core ideas**

- Informal limit; \(\lim_{x\to a} f(x)\) vs \(f(a)\).
- One-sided limits; two-sided limit exists iff both sides agree.
- Limit laws: sums, products, quotients (denominator \(\neq 0\)), powers.

**Gap risks**

- Plugging \(x=a\) into expressions undefined at \(a\).
- Wrong branch of piecewise definitions for \(x\) slightly left vs right of \(a\).

**Bridge tips**

- For rationals with \(0/0\), factor and cancel \((x-a)\) **for \(x\neq a\)** before taking the limit.
- Draw a number line for piecewise boundaries.

**Interactive visualization (build spec)**

- **Inputs:** Slider \(x\) approaching \(a\) from left/right; toggle piecewise branch colors.
- **View:** Readouts \(\lim_{x\to a^-}f\), \(\lim_{x\to a^+}f\), and \(f(a)\) if defined.
- **Insight:** Two-sided limit needs matching one-sided limits.

---

### Jan 31 — Examples of limits and continuity; continuous functions

**Syllabus alignment:** Jan 31 · Guichard §§3.1–3.4 · Stewart §§1.5–1.8

**Learning objective:** You connect limit computations to continuity: \(f\) is continuous at \(a\) when \(\lim_{x\to a}f(x)=f(a)\), and you recognize removable, jump, and infinite discontinuities.

**Core ideas**

- Continuity at a point: defined, limit exists, equality.
- Algebra of continuous functions; compositions of continuous functions on valid domains.

**Gap risks**

- Stopping after “limit exists” without checking \(f(a)\).
- Assuming “limit exists” means “continuous” without the third condition.

**Bridge tips**

- Name which of the three conditions fails when discontinuous.
- Canceling common factors can **remove** discontinuities (removable holes).

**Interactive visualization (build spec)**

- **Inputs:** Draggable hole vs filled point; parameter for jump size.
- **View:** Graph with checklist: defined? limit exists? equal?
- **Insight:** Continuity is a pointwise **alignment** of limit and value.

---

### Feb 3 — Continuity and the Intermediate Value Theorem

**Syllabus alignment:** Feb 3 · Guichard §3.7 · Stewart §1.8

**Learning objective:** You state IVT hypotheses (continuous on \([a,b]\), value \(N\) between \(f(a)\) and \(f(b)\)) and use IVT to justify a root exists in an interval.

**Core ideas**

- IVT: hit every intermediate height; existence, not uniqueness.
- Bisection / sign-change intuition for roots.

**Gap risks**

- Applying IVT without continuity on the **entire** closed interval.
- Vertical asymptotes between \(a\) and \(b\) breaking sign-change arguments.

**Bridge tips**

- Verify continuity before citing IVT; split intervals at asymptotes or discontinuities.

**Interactive visualization (build spec)**

- **Inputs:** Slider for target height \(N\) between \(f(a)\) and \(f(b)\); drag guess \(c\).
- **View:** Horizontal line \(y=N\) intersecting the graph; show at least one \(c\).
- **Insight:** Intermediate values are guaranteed for continuous curves on closed intervals.

---

### Feb 5 — Derivative rules: sums, polynomials, product rule

**Syllabus alignment:** Feb 5 · Guichard §§4.2–4.3 · Stewart §§2.1–2.3

**Learning objective:** You differentiate polynomials and products using \(\dfrac{d}{dx}(x^n)=nx^{n-1}\), linearity, and \((uv)'=u'v+uv'\).

**Core ideas**

- Constant, constant multiple, sum/difference rules; power rule.
- Product rule pattern (not \(u'v'\)).

**Gap risks**

- Off-by-one on powers; forgetting to use product rule on products of non-monomials.

**Bridge tips**

- Rewrite \(\sqrt{x}\), \(1/x\) as powers before differentiating.
- For products, write \(u,v,u',v'\) in a mini table first.

**Interactive visualization (build spec)**

- **Inputs:** Sliders for polynomial coefficients; slider \(x\).
- **View:** \(f(x)\) and tangent line; numeric \(f'(x)\); color tangent by slope sign.
- **Insight:** Local slope from rules matches secant limit intuition.

---

### Feb 7 — Derivatives of \(\sin x\) and \(\cos x\); squeeze theorem

**Syllabus alignment:** Feb 7 · Guichard §§4.3–4.4, 3.6 · Stewart §§2.4, 1.6

**Learning objective:** You use \(\dfrac{d}{dx}\sin x=\cos x\), \(\dfrac{d}{dx}\cos x=-\sin x\) (with chain awareness later), and you evaluate limits like \(\lim_{x\to 0}\dfrac{\sin x}{x}\) using the squeeze theorem.

**Core ideas**

- Trig derivatives from first principles or standard formulas; chain on \(\sin(u(x))\) later.
- Squeeze: if \(g\le f\le h\) near \(a\) and \(\lim g=\lim h=L\), then \(\lim f=L\).

**Gap risks**

- Sign errors; radians vs degrees in limits and derivatives.
- Using squeeze without bounding the oscillating factor.

**Bridge tips**

- Default to radians in calculus.
- Bound \(|\sin(\cdot)|\le 1\) and shrink the amplitude (e.g., \(x^2\sin(1/x)\)).

**Interactive visualization (build spec)**

- **Inputs:** Slider \(x\) on unit circle for derivatives; separate panel: \(x\to 0\) with squeeze band \(g,f,h\).
- **View:** Tangent slope on sine wave; shaded band for squeeze.
- **Insight:** Derivatives of sine/cosine as phase shift; squeeze kills bounded oscillations with vanishing amplitude.

---

### Feb 10 — Chain rule

**Syllabus alignment:** Feb 10 · Guichard §4.5 · Stewart §2.5

**Learning objective:** You differentiate \(f(g(x))\) as \(f'(g(x))g'(x)\) and peel multilayer compositions.

**Core ideas**

- Outside–inside; one chain factor per layer.
- Related preview: implicit and related-rates problems chain every dependent quantity.

**Gap risks**

- Missing \(g'(x)\); evaluating \(f'\) at the wrong input.

**Bridge tips**

- Set \(u=g(x)\); compute \(\dfrac{dy}{du}\dfrac{du}{dx}\).
- Count layers aloud.

**Interactive visualization (build spec)**

- **Inputs:** Outer \(f\), inner \(g\); slider \(x\); marker at \(u=g(x)\).
- **View:** Numeric “outer slope × inner slope” vs slope of \(f(g(x))\).
- **Insight:** Rates multiply along a composition chain.

---

### Feb 12 — Exponential and logarithmic functions (derivatives)

**Syllabus alignment:** Feb 12 · Guichard §4.6 · Stewart §§6.2, 6.3

**Learning objective:** You differentiate \(e^x\), \(\ln x\), and \(a^x\) using \(\dfrac{d}{dx}e^x=e^x\), \(\dfrac{d}{dx}\ln x=\dfrac{1}{x}\), and chain-rule versions \(e^{u(x)}\), \(\ln(u(x))\).

**Core ideas**

- Inverse relationship between \(\ln\) and \(\exp\); logarithmic differentiation (optional tool).
- Domain of \(\ln x\) is \(x>0\); careful with \(\ln|x|\) in integration later.

**Gap risks**

- \(\ln(a+b)\neq \ln a+\ln b\); chain: \(e^u\) needs \(u'\).

**Bridge tips**

- Identify \(u\) in \(e^{u}\) first; multiply by \(u'\) every time.

**Interactive visualization (build spec)**

- **Inputs:** Slider \(x\); toggles \(e^x\), \(\ln x\), \(a^x\).
- **View:** Tangent to \(e^x\) (slope equals height); \(\ln x\) slope \(1/x\).
- **Insight:** Exp/log are inverses; slopes reflect that duality.

---

### Feb 14 — Curve sketching I: first and second derivatives, monotonicity, concavity

**Syllabus alignment:** Feb 14 · Guichard §5.6 · Stewart §3.3

**Learning objective:** You use \(f'\) for intervals of increase/decrease and local extrema (first derivative test) and \(f''\) for concavity and inflection candidates.

**Core ideas**

- Sign of \(f'\) vs slope of \(f\); sign of \(f''\) vs concavity.
- First derivative test at critical numbers; inflection where concavity changes (check candidates).

**Gap risks**

- Using \(f\) values in a \(f'\) sign chart; ignoring points where \(f'\) is undefined.

**Bridge tips**

- Cut the axis at critical numbers **and** places where \(f'\) fails to exist.

**Interactive visualization (build spec)**

- **Inputs:** Stacked toggles for \(f\), \(f'\), \(f''\); slider \(x\).
- **View:** Color regions of increase/decrease; concavity shading; markers at critical points.
- **Insight:** \(f'\) controls slope; \(f''\) controls how slope bends.

---

### Feb 17 — Curve sketching II: asymptotes and limits at infinity

**Syllabus alignment:** Feb 17 · Guichard §5.6 · Stewart §§3.3, 3.4

**Learning objective:** You find vertical asymptotes via infinite limits, horizontal asymptotes via \(\lim_{x\to\pm\infty} f(x)\), and incorporate end behavior into sketches.

**Core ideas**

- Infinite limits and sign charts near vertical asymptotes.
- Limits at infinity: compare degrees in rationals; \(\sqrt{x^2}=|x|\) care for \(x\to-\infty\).

**Gap risks**

- \(\sqrt{x^2}\) sign for negative \(x\); confusing horizontal vs oblique asymptotes (oblique is often Calc II).

**Bridge tips**

- Divide rationals by the highest power of \(x\) in the denominator; take \(x\to\infty\) limits termwise.

**Interactive visualization (build spec)**

- **Inputs:** Large \(|x|\) window slider; rational coefficient sliders.
- **View:** Graph with dashed horizontal/vertical asymptotes; end-behavior readouts.
- **Insight:** Long-run behavior is driven by dominant terms.

---

### Feb 19 — Implicit differentiation

**Syllabus alignment:** Feb 19 · Guichard §4.7 · Stewart §2.6

**Learning objective:** You differentiate both sides with respect to \(x\), treat \(y=y(x)\), and solve for \(\dfrac{dy}{dx}\) on a level curve.

**Core ideas**

- \(\dfrac{d}{dx}(y^n)=ny^{n-1}\dfrac{dy}{dx}\); product rule on terms like \(xy\).

**Gap risks**

- Forgetting \(\dfrac{dy}{dx}\) on \(y\)-terms.

**Bridge tips**

- Every \(y\)-term gets a chain factor \(y'\) (or \(\dfrac{dy}{dx}\)).

**Interactive visualization (build spec)**

- **Inputs:** Implicit curve (circle, ellipse); draggable point on curve.
- **View:** Tangent line from implicit slope; normal vector optional.
- **Insight:** Tangents without solving for \(y=f(x)\).

---

### Feb 21 — Extrema, min/max, and optimization

**Syllabus alignment:** Feb 21 · Guichard §5.2 · Stewart §§3.1, 3.7

**Learning objective:** On a closed interval you list critical points and endpoints (Extreme Value Theorem setup) and solve constrained optimization word problems.

**Core ideas**

- Critical numbers: \(f'(c)=0\) or \(f'(c)\) undefined in domain.
- Absolute max/min on \([a,b]\): test endpoints and critical points.
- Optimization: constraint eliminates a variable; check domain from context.

**Gap risks**

- Dropping endpoints; wrong constraint equation.

**Bridge tips**

- Table: candidate \(x\) → value \(f(x)\) (not \(f'\)).
- After solving, verify units and that the answer lies in the feasible domain.

**Interactive visualization (build spec)**

- **Inputs:** One parameter slider with constraint built in (e.g., rectangle width).
- **View:** Objective (area/cost) vs parameter; mark maximum.
- **Insight:** Constraints reduce degrees of freedom to a single-variable problem.

---

### Feb 24 — Mean Value Theorem

**Syllabus alignment:** Feb 24 · Guichard §5.3 · Stewart §3.2

**Learning objective:** You verify MVT hypotheses (continuous on \([a,b]\), differentiable on \((a,b)\)) and interpret: \(\exists c\) with \(f'(c)=\dfrac{f(b)-f(a)}{b-a}\).

**Core ideas**

- Rolle’s theorem as special case; existence not construction.

**Gap risks**

- Mixing up which interval is open vs closed in hypotheses.

**Bridge tips**

- Sketch secant; imagine a tangent parallel to it somewhere in \((a,b)\).

**Interactive visualization (build spec)**

- **Inputs:** Draggable \(a,b\); draggable \(c\) with “parallel” check to secant.
- **View:** Secant and tangent at \(c\); slope equality readout.
- **Insight:** Average rate equals instantaneous rate somewhere inside.

---

### Feb 26 — Related rates

**Syllabus alignment:** Feb 26 · Guichard §5.1 · Stewart §2.8

**Learning objective:** You relate time-varying quantities by differentiating a constraint equation with respect to \(t\) and substitute known rates/values at an instant.

**Core ideas**

- Chain rule everywhere: \(\dfrac{d}{dt}(x^2)=2x\dfrac{dx}{dt}\).
- Substitute numeric values **after** differentiating (usually).

**Gap risks**

- Early substitution that hides dependencies; sign of decreasing quantities.

**Bridge tips**

- Diagram + label every changing length/angle; list “given” and “find” rates.

**Interactive visualization (build spec)**

- **Inputs:** Time slider; geometry sliders (ladder, cone, etc.).
- **View:** Animated figure; \(\dfrac{dx}{dt}\), \(\dfrac{dy}{dt}\) live.
- **Insight:** Coupled motion from a single geometric constraint.

---

### Feb 28 — L’Hôpital’s Rule

**Syllabus alignment:** Feb 28 · Guichard §5.5 · Stewart §6.8

**Learning objective:** You apply L’Hôpital’s rule to indeterminate forms \(\dfrac{0}{0}\) and \(\dfrac{\infty}{\infty}\) after verifying hypotheses, and rewrite other indeterminate forms (\(0\cdot\infty\), \(\infty-\infty\), \(1^\infty\), etc.) into quotients when needed.

**Core ideas**

- \(\lim \dfrac{f}{g}\) may equal \(\lim \dfrac{f'}{g'}\) when hypotheses hold.
- May require repeated differentiation; still indeterminate if limit of ratios fails.

**Gap risks**

- Applying without \(\dfrac{0}{0}\) or \(\dfrac{\infty}{\infty}\); differentiating the wrong “top/bottom” in a product arrangement.

**Bridge tips**

- **Before** L’Hôpital: simplify algebraically, factor, cancel when possible.
- Check that numerator and denominator both go to \(0\) or both to \(\infty\).

**Interactive visualization (build spec)**

- **Inputs:** Slider moving \(x\) toward limit point; toggle “show \(f/g\)” vs “show \(f'/g'\)”.
- **View:** Table of values for \(f\), \(g\), \(f'\), \(g'\); convergence of ratio.
- **Insight:** Local linear approximation ratio can stabilize when original ratio is indeterminate.

---

### Mar 2 — Taylor polynomials

**Syllabus alignment:** Mar 2 · Guichard §5.4 · Stewart — (often §11.10 or similar in later chapters; align with your text)

**Learning objective:** You build \(P_n(x)\) matching derivatives of \(f\) at a center \(a\) up to order \(n\), and use low-degree polynomials to approximate \(f\) near \(a\) (includes **linear approximation** as degree 1).

**Core ideas**

- Coefficients from \(f^{(k)}(a)/k!\); error decreases near \(a\) for smooth \(f\).
- Connection: \(P_1(x)=f(a)+f'(a)(x-a)\) is the tangent line (differentials / local linearization).

**Gap risks**

- Factorial and derivative order mismatch; evaluating derivatives at **center** \(a\), not \(x\).

**Bridge tips**

- Build a small table: \(k\), \(f^{(k)}(a)\), term \(\dfrac{f^{(k)}(a)}{k!}(x-a)^k\).

**Interactive visualization (build spec)**

- **Inputs:** Slider for degree \(n\); slider for \(x\) near \(a\); choose \(f\) (e.g., \(e^x\), \(\sin x\), \(\ln(1+x)\)).
- **View:** \(f\) and \(P_n\) overlaid; error \(|f-P_n|\) readout.
- **Insight:** Higher degree tracks the graph more closely near the expansion point.

---

### Mar 6 — Integration and area; Riemann sums

**Syllabus alignment:** Mar 6 · Guichard §6.1 · Stewart §§4.1, 4.2

**Learning objective:** You approximate net area under a curve with left/right/midpoint sums and express \(\Delta x\) and sample points for \(n\) rectangles.

**Core ideas**

- \(\Delta x=(b-a)/n\); endpoint choice (left, right, midpoint).
- Signed area: below the \(x\)-axis counts negative in net area.

**Gap risks**

- Off-by-one in indexing \(x_i\); mixing \(\Delta x\) with \(1/n\).

**Bridge tips**

- Write \(x_i=a+i\Delta x\) (right endpoints) explicitly until it is automatic.

**Interactive visualization (build spec)**

- **Inputs:** Slider \(n\); left/mid/right; \(a,b\).
- **View:** Rectangles under \(f\); running sum vs exact value if known.
- **Insight:** Refining partitions reduces error (for nice functions).

---

### Mar 9 — Riemann sums and the Fundamental Theorem of Calculus

**Syllabus alignment:** Mar 9 · Guichard §§6.1, 6.2 · Stewart §§3.9, 4.3

**Learning objective:** You interpret \(\int_a^b f(x)\,dx\) as a limit of sums and use FTC I–II: if \(F'=f\), then \(\int_a^b f(x)\,dx=F(b)-F(a)\); and \(\dfrac{d}{dx}\int_a^x f(t)\,dt=f(x)\).

**Core ideas**

- Antiderivatives and definite integrals linked by FTC.
- Net signed area; \(\int_a^b=-\int_b^a\).

**Gap risks**

- FTC I with variable upper limit \(u(x)\): include \(f(u(x))u'(x)\).

**Bridge tips**

- Differentiate accumulated area: “rate of change of area under \(f\)” equals current height \(f(x)\).

**Interactive visualization (build spec)**

- **Inputs:** Slider \(x\) for \(F(x)=\int_a^x f(t)\,dt\); choose \(f\) with positive/negative regions.
- **View:** \(F'(x)\) readout matches \(f(x)\); shaded signed area for \(\int_a^b f\).
- **Insight:** FTC unifies area and antiderivatives.

---

### Mar 11 — Integration: \(u\)-substitution

**Syllabus alignment:** Mar 11 · Guichard §7.1 · Stewart §4.5

**Learning objective:** You reverse the chain rule: \(\int f(g(x))g'(x)\,dx=\int f(u)\,du\) with \(u=g(x)\), and change limits in definite integrals.

**Core ideas**

- \(du=g'(x)\,dx\); substitute back or change \(a,b\) to \(u(a),u(b)\).

**Gap risks**

- Leaving an \(x\) in the integrand; forgetting \(dx\to du\) scaling.

**Bridge tips**

- Look for \(g'(x)\,dx\) up to a constant factor.

**Interactive visualization (build spec)**

- **Inputs:** Highlight \(u\) and \(du\); show \(x\)-limits vs \(u\)-limits side by side.
- **View:** Before/after integrand; animate inner function.
- **Insight:** Substitution is chain rule in reverse.

---

### Mar 13 — Integration by parts

**Syllabus alignment:** Mar 13 · Guichard §7.4 · Stewart — (often §7.1)

**Learning objective:** You apply \(\int u\,dv = uv - \int v\,du\) and choose \(u\)/\(dv\) to simplify the remaining integral (LIATE heuristic as a guide, not a law).

**Core ideas**

- Product rule rearrangement; tabular integration for repeated patterns (optional).

**Gap risks**

- Wrong sign on \(\int v\,du\); differentiating the wrong factor when choosing \(u\).

**Bridge tips**

- Pick \(dv\) as something you can integrate; \(u\) should simplify when differentiated (often).

**Interactive visualization (build spec)**

- **Inputs:** Choose \(u\) and \(dv\) from a product integrand; show \(du\), \(v\).
- **View:** Tree or step list: \(uv\) term minus new integral.
- **Insight:** Trading one integral for a simpler one.

---

### Mar 23 — Area between curves

**Syllabus alignment:** Mar 23 · Guichard §8.5 · Stewart §5.1

**Learning objective:** You set up \(\int_a^b \bigl(f(x)-g(x)\bigr)\,dx\) where \(f\ge g\) on \([a,b]\), or split intervals where the top/bottom curves switch.

**Core ideas**

- Vertical strips vs horizontal strips (\(x\) as function of \(y\)) for setup.
- Intersection points as limits of integration.

**Gap risks**

- Integrating \(f-g\) when \(g>f\) on part of the interval (negative “area” strip).

**Bridge tips**

- Sketch curves; find intersections; split at crossings.

**Interactive visualization (build spec)**

- **Inputs:** Sliders for curve parameters; draggable vertical slice at \(x\).
- **View:** Shaded region between curves; height \(|f(x)-g(x)|\) segment.
- **Insight:** Area as integral of **top minus bottom** (with care on intervals).

---

### Mar 25 — Volume (solids of revolution / known cross-sections)

**Syllabus alignment:** Mar 25 · Guichard §8.3 · Stewart — (disk/washer/shell methods)

**Learning objective:** You set up volume integrals using disks/washers or cylindrical shells, choosing \(dx\) vs \(dy\) by how you slice.

**Core ideas**

- Disk: \(\pi\int [R(x)]^2\,dx\); washer: outer minus inner radius squared.
- Shell method: \(2\pi\int (\text{radius})(\text{height})\,dx\) or \(dy\).

**Gap risks**

- Mixing up radius vs height in shell formula; wrong axis of revolution.

**Bridge tips**

- Draw one representative slice and label radius and thickness; check units (volume \(\sim\) length\(^3\)).

**Interactive visualization (build spec)**

- **Inputs:** Axis of revolution toggle; slider for slice position; \(dx\) thickness control.
- **View:** 3D or “2.5D” stack of disks/shells; approximate vs integral volume.
- **Insight:** Riemann-style sum of slice volumes becomes one integral.

---

### Mar 27 — Surface area

**Syllabus alignment:** Mar 27 · Guichard §8.8 · Stewart — (surface of revolution)

**Learning objective:** You set up \(2\pi\int (\text{radius})(\text{arc length element})\,ds\) for surfaces of revolution and relate \(ds\) to \(dx\) or \(dy\).

**Core ideas**

- \(ds=\sqrt{1+(dy/dx)^2}\,dx\) or \(ds=\sqrt{1+(dx/dy)^2}\,dy\).
- Radius from axis of revolution to the curve.

**Gap risks**

- Forgetting the \(2\pi r\) factor; algebra with \(ds\).

**Bridge tips**

- Same geometry discipline as arc length, multiplied by circumference of the sweep.

**Interactive visualization (build spec)**

- **Inputs:** Rotate profile curve about axis; show frustum band at one \(x\).
- **View:** Strip area \(2\pi r\,ds\) accumulating; compare to full surface integral.
- **Insight:** Surface area as “circumference times arc length element” along the profile.

---

### Mar 30 — Arc length

**Syllabus alignment:** Mar 30 · Guichard §8.7 · Stewart — (§8.1 typical)

**Learning objective:** You use \(L=\int_a^b \sqrt{1+(f'(x))^2}\,dx\) for \(y=f(x)\), or the \(y\)-parametrized form when \(x=g(y)\).

**Core ideas**

- Pythagorean view: \(\sqrt{(dx)^2+(dy)^2}\); parametric forms in later courses.

**Gap risks**

- Squaring \(f'(x)\) incorrectly; integrating without simplifying \(\sqrt{\cdot}\) when possible.

**Bridge tips**

- If \(1+(f')^2\) is a perfect square, simplify before integrating.

**Interactive visualization (build spec)**

- **Inputs:** Slider along curve; show small hypotenuse \(\sqrt{dx^2+dy^2}\).
- **View:** Polyline length vs integral arc length as mesh refines.
- **Insight:** Arc length is integral of infinitesimal segment length.

---

### Apr 1 — Averages (of a function on an interval)

**Syllabus alignment:** Apr 1 · Guichard §8.4 · Stewart §5.5

**Learning objective:** You compute average value \(\dfrac{1}{b-a}\int_a^b f(x)\,dx\) and connect it to the Mean Value Theorem for integrals (existence of \(c\) with \(f(c)=\) average).

**Core ideas**

- Average value vs average rate of change (different ideas).

**Gap risks**

- Forgetting to divide by \((b-a)\).

**Bridge tips**

- Think: height of a constant function with the same area over \([a,b]\).

**Interactive visualization (build spec)**

- **Inputs:** Slider for horizontal line \(k\); match \(k\) to average value of \(f\).
- **View:** Rectangle area \(k(b-a)\) vs \(\int_a^b f\).
- **Insight:** Average value balances signed area against interval length.

---

### Apr 3 & Apr 6 — Improper integrals and limits at infinity

**Syllabus alignment:** Apr 3, Apr 6 · Guichard §§7.7, 3.5 · Stewart §4.4

**Learning objective:** You evaluate \(\int_a^\infty f(x)\,dx\) as \(\lim_{R\to\infty}\int_a^R f(x)\,dx\), handle unbounded integrands at endpoints, and use comparison tests for convergence (basics).

**Core ideas**

- Replace \(\infty\) with \(R\), integrate, then take \(R\to\infty\); split at singularities.
- \(p\)-integrals \(\int_1^\infty x^{-p}\,dx\) and \(\int_0^1 x^{-p}\,dx\) benchmarks.

**Gap risks**

- Treating improper integrals like proper ones without limits; wrong split point at discontinuities.

**Bridge tips**

- If \(f\) blows up at \(c\in[a,b]\), split \(\int_a^b=\int_a^c+\int_c^b\) as limits from each side.

**Interactive visualization (build spec)**

- **Inputs:** Slider \(R\to\infty\) or \(\varepsilon\to 0^+\) near singularity; \(p\) in \(1/x^p\).
- **View:** Partial integral value vs \(R\) or \(\varepsilon\); convergence/divergence indicator.
- **Insight:** Tail areas may stay finite or grow without bound.

---

### Apr 10 & Apr 13 — Trigonometric integrals (powers and identities)

**Syllabus alignment:** Apr 10, Apr 13 · Guichard §§7.2, 7.3 · Stewart — (trig integrals / techniques)

**Learning objective:** You integrate \(\int \sin^m x\cos^n x\,dx\) and related forms using identities (Pythagorean, double-angle), splitting odd powers, and reduction patterns.

**Core ideas**

- \(\sin^2 x=\frac{1}{2}(1-\cos 2x)\), \(\cos^2 x=\frac{1}{2}(1+\cos 2x)\); \(\tan^2 x=\sec^2 x-1\).
- For products, peel one factor and substitute, or convert to multiple angles.

**Gap risks**

- Mixing integration with differentiation formulas; sign errors over long reductions.

**Bridge tips**

- If one power is odd, factor one \(\sin x\) or \(\cos x\) and substitute \(u\) for the other trig.

**Interactive visualization (build spec)**

- **Inputs:** Exponents \(m,n\); show identity toggle.
- **View:** Graph integrand; numeric antiderivative check (derivative of candidate).
- **Insight:** Identities reduce powers to integrable building blocks.

---

### Apr 15 — Rational functions (integration)

**Syllabus alignment:** Apr 15 · Guichard §7.5 · Stewart — (partial fractions)

**Learning objective:** You decompose proper rational functions into partial fractions and integrate \(\int \dfrac{P(x)}{Q(x)}\,dx\) with linear and irreducible quadratic factors (at syllabus depth).

**Core ideas**

- Long division first if improper degree; cover coefficients \(A,B,\ldots\) for repeated linear factors.
- \(\int \dfrac{1}{x^2+a^2}\,dx\) style arctangent forms.

**Gap risks**

- Algebra in solving for partial fraction coefficients; missing repeated-factor terms.

**Bridge tips**

- Clear denominators and plug in convenient \(x\) values; equate coefficients for leftovers.

**Interactive visualization (build spec)**

- **Inputs:** Step through decomposition terms; show unknown coefficients solved stepwise.
- **View:** Original vs sum of simpler fractions; integral of each term.
- **Insight:** Breaking rational functions mirrors breaking real numbers into simpler pieces.

---

### Apr 17 — Differential equations; exponential growth/decay; applications

**Syllabus alignment:** Apr 17 · Guichard §10.1 · Stewart §§6.4, 6.5

**Learning objective:** You solve \(\dfrac{dy}{dt}=ky\) with initial value, interpret half-life and doubling time, and set up simple modeling problems (population, radioactive decay).

**Core ideas**

- General solution \(y=Ce^{kt}\); determine \(C,k\) from conditions.
- Logarithms for solving \(e^{kt}=\cdots\).

**Gap risks**

- Sign of \(k\) for growth vs decay; unit consistency in time constants.

**Bridge tips**

- Separate variables: \(\dfrac{dy}{y}=k\,dt\), integrate, exponentiate.

**Interactive visualization (build spec)**

- **Inputs:** Sliders for \(k\), \(y(0)\); time \(t\).
- **View:** Exponential curve; markers for half-life/doubling time.
- **Insight:** Proportional rate of change leads to exponential solutions.

---

### Apr 20 — Newton’s Method

**Syllabus alignment:** Apr 20 · Guichard §5.4 · Stewart §3.8

**Learning objective:** You iterate \(x_{n+1}=x_n-\dfrac{f(x_n)}{f'(x_n)}\) to approximate roots and recognize when iteration may fail (derivative small, bad seed).

**Core ideas**

- Linear approximation at each step; quadratic convergence near simple roots (conceptual).

**Gap risks**

- Division by \(f'(x_n)\approx 0\); pushing outside domain.

**Bridge tips**

- Choose \(x_0\) using IVT or a graph sketch first.

**Interactive visualization (build spec)**

- **Inputs:** Initial \(x_0\); button “step”; show tangent intersection with \(x\)-axis.
- **View:** Cobweb or sequence \(x_n\) converging to root; \(f(x_n)\) small.
- **Insight:** Tangents refine root guesses quickly when conditions are good.

---

### Apr 24 — Hyperbolic sine and cosine

**Syllabus alignment:** Apr 24 · Guichard §2.7 · Stewart §6.7

**Learning objective:** You use \(\cosh x=\dfrac{e^x+e^{-x}}{2}\), \(\sinh x=\dfrac{e^x-e^{-x}}{2}\), basic identities \(\cosh^2 x-\sinh^2 x=1\), and derivatives \(\dfrac{d}{dx}\sinh x=\cosh x\), \(\dfrac{d}{dx}\cosh x=\sinh x\).

**Core ideas**

- Analogies to circular trig; graphs and inverses \(\text{arsinh}\), \(\text{arcosh}\) (domain care).

**Gap risks**

- Sign differences from regular trig; confusing \(\cosh\) with \(\cos\).

**Bridge tips**

- Express everything in exponentials first if identities feel unfamiliar.

**Interactive visualization (build spec)**

- **Inputs:** Slider \(x\); toggle \(\cosh,\sinh\) and unit hyperbola \(x=\cosh t\), \(y=\sinh t\).
- **View:** Compare to circular parametrization; slope relationships.
- **Insight:** Same calculus machinery as exponentials with structured identities.

---

### Apr 27 — Inverse trigonometric functions

**Syllabus alignment:** Apr 27 · Guichard §2.6 · Stewart §6.6

**Learning objective:** You know domains/ranges of \(\arcsin,\arccos,\arctan\) and differentiate inverse trig functions (e.g., \(\dfrac{d}{dx}\arctan x=\dfrac{1}{1+x^2}\)).

**Core ideas**

- Restrict domains of \(\sin,\cos,\tan\) to define inverses; compose carefully.
- Integrals yielding \(\arctan\) or \(\arcsin\) forms.

**Gap risks**

- Using \(\arcsin(\sin x)=x\) without checking \(x\) is in the correct range.

**Bridge tips**

- Draw restricted graphs; remember \(\arctan\) has horizontal asymptotes \(\pm\pi/2\).

**Interactive visualization (build spec)**

- **Inputs:** Slider on restricted sine branch; show reflection across \(y=x\).
- **View:** \(\arcsin x\) graph with domain \([-1,1]\); derivative peaks at endpoints (vertical tangents).
- **Insight:** Inverse function theorem visually: slope reciprocal relationship.

---

### Apr 29 — Taylor series; sine and cosine series

**Syllabus alignment:** Apr 29 · Stewart — (series chapter; align with your text)

**Learning objective:** You write Maclaurin/Taylor **series** as infinite polynomials with coefficients \(f^{(k)}(a)/k!\), know \(\sin x\), \(\cos x\), \(e^x\) series, and relate to convergence radius (conceptual).

**Core ideas**

- From polynomials (Mar 2) to infinite series; partial sums \(P_n\) approximate globally within interval of convergence.

**Gap risks**

- Confusing Taylor **polynomial** (finite) with full series; factorial growth in denominators.

**Bridge tips**

- Compare to geometric series tests mentally for simple patterns.

**Interactive visualization (build spec)**

- **Inputs:** Degree \(n\) for partial sum; \(x\) slider; \(f\) preset \(\sin,\cos,e^x\).
- **View:** \(f\) vs \(P_n(x)\); error outside radius blowing up (if you demo divergence).
- **Insight:** Series extend local polynomial approximation to controlled intervals.

---

### May 1 — Complex numbers and Euler’s formula

**Syllabus alignment:** May 1 · (topic listed in calendar)

**Learning objective:** You represent complex numbers as \(a+bi\), use \(e^{i\theta}=\cos\theta+i\sin\theta\), and connect polar form to multiplication/roots (De Moivre at instructor depth).

**Core ideas**

- Complex plane; modulus and argument; Euler links exponentials to trig.

**Gap risks**

- \(\sqrt{-1}\) algebra mistakes; confusing argument with angle in wrong quadrant.

**Bridge tips**

- Convert \(a+bi\) to \(re^{i\theta}\) before multiplying/dividing large products.

**Interactive visualization (build spec)**

- **Inputs:** Drag point in complex plane; slider \(\theta\) for \(e^{i\theta}\) on unit circle.
- **View:** Real/imaginary parts vs \(\cos\theta,\sin\theta\); sum of series partials for \(e^{i\theta}\) optional.
- **Insight:** Oscillation (cos/sin) as imaginary part of uniform circular motion in \(\mathbb{C}\).

---

## Part 2 — Appendix: prerequisite topics (not tied to a single calendar day)

These skills support multiple weeks; review alongside Part 1 as needed. *(Content condensed from the original unit-0 spine.)*

### A.1 — Functions, domain, range, graphs

**Learning objective:** You read function notation, state domains, and interpret graphs (intercepts, increase/decrease).

**Core ideas:** Vertical line test; domains of roots, logs, rationals.

**Gap risks:** Confusing \(f(x)\) with multiplication; wrong interval for piecewise branches.

**Bridge tips:** Denominator zero, square root of negative, log of non-positive—collect restrictions.

**Interactive visualization (build spec):** Dropdown family + parameter slider; domain/range readout on graph.

---

### A.2 — Composition \(f(g(x))\)

**Learning objective:** You compose and decompose functions for chain rule readiness.

**Core ideas:** Order matters; domain of composition.

**Gap risks:** \(\sqrt{x^2}=|x|\).

**Bridge tips:** Name inner \(u=g(x)\) explicitly.

**Interactive visualization (build spec):** \(x\to g(x)\to f(g(x))\) pipeline with numeric table.

---

### A.3 — Exponentials and logarithms (algebra)

**Learning objective:** Apply exp/log laws before calculus rules.

**Core ideas:** \(\ln(ab)=\ln a+\ln b\); \(\ln(a^b)=b\ln a\).

**Gap risks:** \(\ln(a+b)\neq \ln a+\ln b\).

**Bridge tips:** Isolate exp/log, then apply inverse.

**Interactive visualization (build spec):** \(a^x\) vs \(\log_a x\) with reflection across \(y=x\).

---

### A.4 — Trigonometry for calculus

**Learning objective:** Unit circle, radians, Pythagorean identity.

**Gap risks:** Degrees vs radians.

**Bridge tips:** Default to radians.

**Interactive visualization (build spec):** Angle slider; projections to \(\cos,\sin\).

---

### A.5 — Absolute value and inequalities

**Learning objective:** \(|x-a|<\delta\) as interval; prep for rigorous limits.

**Gap risks:** And vs or in compound inequalities.

**Bridge tips:** Sketch number line first.

**Interactive visualization (build spec):** \(a\), \(\delta\) sliders; test \(x\) in band.

---

### A.6 — Optional: epsilon–delta definition of limit

**Learning objective:** Read \(\forall\varepsilon\,\exists\delta\) and verify linear examples.

**Interactive visualization (build spec):** \(\varepsilon\) tube around \(L\), \(\delta\) window around \(a\), success/fail shading.

---

## Quick reference — recurring algebra themes

| Theme | Where it bites | Mini tip |
|--------|----------------|----------|
| Factoring / canceling | Limits, simplifying derivatives | Factor \((x-a)\) before substituting \(x=a\) |
| Conjugates / rationalizing | Limits with roots | Multiply by conjugate; simplify before limit |
| Piecewise branches | One-sided limits, continuity | Trace which rule applies left vs right of break |
| Inequalities / absolute value | Continuity, \(\varepsilon\)–\(\delta\) | Turn \(|x-a|<\delta\) into an interval |
| Trig identities | Trig integrals, derivatives | Pythagorean identity; power-reduction |
| Log / exp laws | Derivatives of \(\ln\), \(e^u\) | \(\ln\) turns products into sums; chain on \(e^u\) |
| Units | Related rates | Consistent length/time; signs for decreasing quantities |
| Sign charts | \(f'\), \(f''\) tests | Cut axis at critical points and where \(f'\) undefined |

---

*Interactive specs are written for a future MVC implementation: **Model** (parameters \(h,n,a,u,\ldots\)), **View** (graphs/readouts), **Controller** (sliders and toggles).*
