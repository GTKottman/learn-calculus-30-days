# Cheat sheet — Limits and continuity

## Limit laws (finite limits, “nice” hypotheses)

If \(\lim_{x\to a}f(x)=L\) and \(\lim_{x\to a}g(x)=M\) (finite), then:

| Operation | Limit |
|-----------|--------|
| Sum | \(\lim(f+g)=L+M\) |
| Product | \(\lim(fg)=LM\) |
| Quotient | \(\lim(f/g)=L/M\) if \(M\neq 0\) |
| Powers | \(\lim(f^n)=L^n\) (extend with care for roots) |

## One-sided limits

\(\lim_{x\to a}f(x)\) exists **iff** \(\lim_{x\to a^-}f(x)=\lim_{x\to a^+}f(x)\).

## Continuity at \(a\)

\(f\) continuous at \(a\) means:

1. \(f(a)\) is defined  
2. \(\lim_{x\to a}f(x)\) exists  
3. \(\lim_{x\to a}f(x)=f(a)\)

## IVT (bridge form)

If \(f\) is continuous on \([a,b]\) and \(N\) is between \(f(a)\) and \(f(b)\), then \(\exists c\in(a,b)\) with \(f(c)=N\).

## Derivative at \(a\) (two common forms)

\[
f'(a)=\lim_{h\to 0}\frac{f(a+h)-f(a)}{h}
=\lim_{x\to a}\frac{f(x)-f(a)}{x-a}
\]

## Average rate of change on \([a,b]\)

\[
\frac{f(b)-f(a)}{b-a}
\]
