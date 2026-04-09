"""
Day 25 — Integration by parts: ∫_0^2 x e^{-x} dx = [-e^{-x}(x+1)]_0^2 = 1 - 3 e^{-2}.
"""

from __future__ import annotations

import math
import sys
from pathlib import Path

_SCRIPTS = Path(__file__).resolve().parent
if str(_SCRIPTS) not in sys.path:
    sys.path.insert(0, str(_SCRIPTS))

from numeric_utils import trapezoid


def integrand(x: float) -> float:
    return x * math.exp(-x)


def main() -> None:
    a, b = 0.0, 2.0
    approx = trapezoid(integrand, a, b, 80_000)
    analytic = 1.0 - 3.0 * math.exp(-2.0)
    print("Day 25 - Integration by parts: int_0^2 x*exp(-x) dx")
    print(f"  Trapezoid approximation: {approx:.12f}")
    print(f"  Analytic 1 - 3 e^{-2}  = {analytic:.12f}")


if __name__ == "__main__":
    main()
