"""
Day 21 — Checkpoint 3: mixed micro-checks (MVT, L'Hôpital, Taylor, optimization).
"""

from __future__ import annotations

import math

import sys
from pathlib import Path

_SCRIPTS = Path(__file__).resolve().parent
if str(_SCRIPTS) not in sys.path:
    sys.path.insert(0, str(_SCRIPTS))

from numeric_utils import trapezoid


def main() -> None:
    print("Day 21 - Checkpoint 3 drill (automated samples)\n")

    # MVT: ln x on [1, e]
    a, b = 1.0, math.e
    avg = (math.log(b) - math.log(a)) / (b - a)
    c = 1.0 / avg  # 1/c = avg for f(x)=ln x => f'(c)=1/c
    print(f"MVT: f(x)=ln x on [1,e]; average slope = {avg:.6f}")
    print(f"     f'(c)=1/c => c = {c:.6f} in (1,e)? {1 < c < b}\n")

    # L'Hôpital: (1-cos x)/x^2 -> 1/2
    x = 1e-4
    lh = (1 - math.cos(x)) / (x * x)
    print(f"L'Hopital-style: (1-cos x)/x^2 at x={x:.1e} ~ {lh:.9f} (-> 1/2)\n")

    # Taylor: degree-2 Maclaurin for cos x
    cos_approx = 1 - x**2 / 2
    print(f"Taylor: cos({x}) ~ {math.cos(x):.12f}; 1 - x^2/2 ~ {cos_approx:.12f}\n")

    # Optimization: f(x)=x^3-12x on [0,3]; compare endpoints and critical x=2
    def f(x: float) -> float:
        return x**3 - 12 * x

    candidates = [0.0, 2.0, 3.0]
    vals = [(x, f(x)) for x in candidates]
    best = min(vals, key=lambda t: t[1])
    print("Optimization: min of x^3-12x on [0,3] at sample points:")
    for x, v in vals:
        print(f"   f({x}) = {v:.6f}")
    print(f"   smallest listed: x = {best[0]}\n")

    # Integral warm-up
    print(f"int_0^1 x^2 dx ~ {trapezoid(lambda t: t * t, 0, 1, 4000):.9f}")


if __name__ == "__main__":
    main()
