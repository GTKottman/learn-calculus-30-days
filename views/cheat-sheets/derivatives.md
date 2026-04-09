# Cheat sheet — Differentiation

## Linearity

\((cf)'=cf'\), \((f\pm g)'=f'\pm g'\).

## Product and quotient

\((fg)'=f'g+fg'\)

\(\displaystyle\left(\frac{f}{g}\right)'=\frac{f'g-fg'}{g^2}\)

## Chain rule

If \(y=f(u)\) and \(u=g(x)\), then \(\dfrac{dy}{dx}=f'(g(x))\,g'(x)\).

## Core derivatives

| Function | Derivative |
|----------|------------|
| \(x^n\) | \(nx^{n-1}\) |
| \(e^x\) | \(e^x\) |
| \(a^x\) | \(a^x\ln a\) |
| \(\ln|x|\) | \(1/x\) |
| \(\sin x\) | \(\cos x\) |
| \(\cos x\) | \(-\sin x\) |
| \(\tan x\) | \(\sec^2 x\) |
| \(\sec x\) | \(\sec x\tan x\) |

## Inverse trig (common)

\(\dfrac{d}{dx}\arcsin x=\dfrac{1}{\sqrt{1-x^2}}\) (on \((-1,1)\))

\(\dfrac{d}{dx}\arctan x=\dfrac{1}{1+x^2}\)

## Implicit differentiation

Differentiate both sides w.r.t. \(x\); every \(y\) yields a \(\dfrac{dy}{dx}\) via chain rule.
