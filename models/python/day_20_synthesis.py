"""
Day 20 — Applications synthesis: tiny samples from optimization, MVT, related rates, L'Hôpital, Taylor.
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
    print("Day 20 - Applications synthesis (one step each tool)\n")

    # Optimization: f(x)=x^3-3x on [-2,2]; f'(x)=3x^2-3=0 => x=±1
    print("1) Optimization: critical points of f(x)=x^3-3x")
    print("   f'(x)=3(x^2-1)=0 => x = +/-1\n")

    # MVT: same as day 16 quick
    print("2) MVT: f(x)=x^2 on [1,3] => c = 2 (see day_16_mvt.py)\n")

    # Related rates: sphere V=(4/3)π r^3, dr/dt given
    print("3) Related rates: V = (4/3)*pi*r^3, dV/dt = 4*pi*r^2*dr/dt")
    r, dr_dt = 2.0, 0.1
    dV_dt = 4 * math.pi * r**2 * dr_dt
    print(f"   r={r}, dr/dt={dr_dt} => dV/dt ~ {dV_dt:.6f}\n")

    # L'Hôpital: (e^x-1)/x at 0
    x = 1e-6
    print(f"4) L'Hopital check: (e^x-1)/x at x={x:.1e} ~ {(math.exp(x)-1)/x:.9f}\n")

    # Taylor: sin(x) ~ x
    print(f"5) Taylor: sin({x}) ~ {math.sin(x):.12f}, x = {x:.12f}\n")

    # Numeric integral tie-in
    area = trapezoid(lambda t: t * t, 0, 1, 2000)
    print(f"6) Bonus: int_0^1 x^2 dx ~ {area:.9f} (exact 1/3)")


if __name__ == "__main__":
    main()
