# Mistake bank (seed list for Day 30)

Aggregated “high-leverage” errors in Calculus I. Each item pairs a **symptom** with a **fix**. Day 30 links here; individual days call out topic-local mistakes in context.

| Symptom | Fix |
|--------|-----|
| Plugging \(h=0\) before algebra cancels a factor of \(h\) in the derivative limit | Factor \(h\), simplify for \(h\neq 0\), **then** take \(h\to 0\) |
| Using \(\lim_{x\to a} f(x)\) by substituting \(x=a\) when the expression is indeterminate or wrong branch | Use limit laws only when hypotheses hold; simplify, factor, or use one-sided limits |
| Declaring “continuous” from “limit exists” alone | Check three things: \(f(a)\) defined, \(\lim_{x\to a}f(x)\) exists, and equality |
| Chain rule: forgetting inner derivative | Write \(u=\text{inner}\) explicitly until automatic |
| \(\ln(ab)\) split wrong | \(\ln(ab)=\ln a+\ln b\); **not** \(\ln(a+b)\) |
| Related rates: differentiating before fixing what is constant | Assign variables; differentiate **after** geometric relation is fixed |
| L’Hôpital on non-\(0/0\) or non-\(\infty/\infty\) without algebra | Rewrite to an indeterminate form first, or use another tool |
| \(\int_a^b f(x)\,dx\) with wrong sign when curves cross | Split at intersections; integrate top minus bottom on each piece |
| FTC I with \(\frac{d}{dx}\int_a^{u(x)} f(t)\,dt\): missing \(u'(x)\) | Multiply by \(u'(x)\) per chain rule |
| Improper integral: integrating across a singularity without splitting | Split at the blow-up; evaluate limits from each side |
