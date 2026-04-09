"""
Day 26 — Area between curves and volume of revolution.

Area between y=x and y=x^2 on [0,1]: ∫_0^1 (x - x^2) dx = 1/6.
Volume: region under y=√x on [0,1] revolved about x-axis: π ∫_0^1 x dx = π/2.
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
    def between(x: float) -> float:
        return x - x * x

    area = trapezoid(between, 0.0, 1.0, 20_000)
    print("Day 26 - Area between y=x and y=x^2 on [0,1]")
    print(f"  int_0^1 (x - x^2) dx ~ {area:.12f} (exact 1/6 = {1/6:.12f})\n")

    def integrand_disk(x: float) -> float:
        # pi f(x)^2 with f(x)=sqrt(x) => pi * x
        return math.pi * x

    vol = trapezoid(integrand_disk, 0.0, 1.0, 20_000)
    print("Volume: y = sqrt(x) on [0,1] revolved about x-axis (disk method)")
    print(f"  pi * int_0^1 x dx ~ {vol:.12f} (exact pi/2 = {math.pi/2:.12f})")


if __name__ == "__main__":
    main()
