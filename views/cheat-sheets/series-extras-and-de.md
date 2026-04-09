# Cheat sheet — Taylor, DE, Newton, complex (extension tier)

Use this sheet after core integration; depth varies by instructor.

## Taylor polynomial (center \(a\))

\[
P_n(x)=\sum_{k=0}^n \frac{f^{(k)}(a)}{k!}(x-a)^k.
\]

## Separable differential equation

If \(\dfrac{dy}{dt}=ky\), then \(y=Ce^{kt}\) (constants from initial data).

**Half-life** \(t_{1/2}\) (decay \(k<0\)): \(t_{1/2}=\dfrac{\ln 2}{|k|}\).

## Newton’s method

\[
x_{n+1}=x_n-\frac{f(x_n)}{f'(x_n)}.
\]

Watch for \(f'(x_n)\approx 0\) and bad starting points.

## Hyperbolic basics

\(\cosh x=\dfrac{e^x+e^{-x}}{2}\), \(\sinh x=\dfrac{e^x-e^{-x}}{2}\), identity \(\cosh^2 x-\sinh^2 x=1\).

## Euler’s formula (extension)

\(e^{i\theta}=\cos\theta+i\sin\theta\).
