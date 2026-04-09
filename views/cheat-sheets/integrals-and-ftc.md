# Cheat sheet — Integration and FTC

## Antiderivative notation

\(\int f(x)\,dx\) denotes a **family** \(F(x)+C\) with \(F'= f\).

## Definite integral and FTC II

If \(f\) is continuous on \([a,b]\) and \(F'=f\), then

\[
\int_a^b f(x)\,dx = F(b)-F(a).
\]

## FTC I (accumulation)

If \(f\) is continuous on an interval containing \(a\), then

\[
\frac{d}{dx}\int_a^x f(t)\,dt = f(x).
\]

**Variable upper limit \(u(x)\):**

\[
\frac{d}{dx}\int_a^{u(x)} f(t)\,dt = f(u(x))\,u'(x).
\]

## \(u\)-substitution (indefinite)

\(\int f(g(x))g'(x)\,dx=\int f(u)\,du\) with \(u=g(x)\).

## Integration by parts

\(\int u\,dv = uv - \int v\,du\) (choose \(u\) and \(dv\) to simplify the remaining integral).

## Average value

\[
f_{\text{avg}}=\frac{1}{b-a}\int_a^b f(x)\,dx.
\]

## Improper integrals (templates)

- Infinite tail: \(\displaystyle \int_a^\infty f(x)\,dx=\lim_{R\to\infty}\int_a^R f(x)\,dx\)
- Singularity at endpoint: split and approach with a one-sided limit
