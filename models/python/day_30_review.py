"""
Day 30 — Capstone: quick numeric echoes of limits, derivative, integral themes.
"""

from __future__ import annotations

import math
import sys
from pathlib import Path

_SCRIPTS = Path(__file__).resolve().parent
if str(_SCRIPTS) not in sys.path:
    sys.path.insert(0, str(_SCRIPTS))

from numeric_utils import riemann_sum, trapezoid


def main() -> None:
    print("Day 30 - Final review (numeric spine)\n")
    x = 1e-10
    print(f"Limit theme: sin({x:.1e})/{x:.1e} ~ {math.sin(x)/x:.12f}")
    h = 1e-6
    d_approx = ((2 + h) ** 3 - 8) / h
    print(f"Derivative theme: d/dx x^3 at 2 via difference quotient ~ {d_approx:.9f} (exact 12)\n")
    rsum = riemann_sum(lambda t: t * t, 0, 1, 2000, rule="midpoint")
    trap = trapezoid(lambda t: math.cos(t), 0, math.pi / 2, 5000)
    print(f"Integral theme: int_0^1 x^2 dx ~ {rsum:.9f}; int_0^(pi/2) cos x dx ~ {trap:.9f}")


if __name__ == "__main__":
    main()
