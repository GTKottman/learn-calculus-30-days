# Cheat sheet — Applications (geometry and modeling)

## Area between curves (vertical slices)

On an interval where \(f(x)\ge g(x)\):

\[
A=\int_a^b \bigl(f(x)-g(x)\bigr)\,dx.
\]

If curves cross, **split** at intersections and sum pieces.

## Volume — disk / washer (revolution about horizontal axis)

Disk: \(\displaystyle V=\pi\int_a^b [R(x)]^2\,dx\)

Washer: \(\displaystyle V=\pi\int_a^b \left([R_{\text{out}}(x)]^2-[R_{\text{in}}(x)]^2\right)\,dx\)

## Shell method (often for “cylinder height” setups)

About vertical axis: \(\displaystyle V=2\pi\int_a^b (\text{radius})(\text{height})\,dx\) (or \(dy\) if slicing the other way).

## Arc length (graph \(y=f(x)\))

\[
L=\int_a^b \sqrt{1+\bigl(f'(x)\bigr)^2}\,dx.
\]

## Surface area (revolution; syllabus-dependent form)

About an axis: integrate \(2\pi(\text{radius})\,ds\) where \(ds=\sqrt{1+(dy/dx)^2}\,dx\) (or \(dy\) form if \(x=g(y)\)).

## Related rates (discipline)

1. Draw and label.  
2. Relate quantities with an equation **true for all time in the model**.  
3. Differentiate **with respect to time** \(t\).  
4. Substitute known instantaneous values **last**.

## Optimization on \([a,b]\)

Candidates: endpoints, critical points in \((a,b)\), and points where \(f'\) is undefined in \((a,b)\).
