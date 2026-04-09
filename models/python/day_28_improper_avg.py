"""
Day 28 — Average value and improper integrals.

Average of sin(x) on [0, π]: (1/π) ∫_0^π sin x dx = 2/π.
p-integral: ∫_1^R x^{-2} dx -> 1 as R -> ∞; ∫_1^R x^{-1} dx diverges.
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
    avg_sin = (1.0 / math.pi) * trapezoid(math.sin, 0.0, math.pi, 20_000)
    print("Day 28 - Average value of sin(x) on [0, pi]")
    print(f"  (1/pi) int_0^pi sin x dx ~ {avg_sin:.9f} (exact 2/pi ~ {2/math.pi:.9f})\n")

    print("  p-integrals (closed forms; trapezoid is a poor fit on huge intervals):")
    for R in (10, 100, 1000, 100_000):
        tail_p2 = 1.0 - 1.0 / R
        print(f"  int_1^{R} x^(-2) dx = {tail_p2:.9f} (-> 1 as R->inf)")

    print()
    for R in (10, 1000, 100_000):
        tail_p1 = math.log(R)
        print(f"  int_1^{R} x^(-1) dx = {tail_p1:.6f} (-> inf as R->inf)")


if __name__ == "__main__":
    main()
