"""
Day 24 — u-substitution: ∫ 2x cos(x^2) dx = sin(x^2) + C.

Definite integral from 0 to sqrt(π/2) gives sin(π/2)-sin(0)=1.
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
    return 2 * x * math.cos(x * x)


def main() -> None:
    b = math.sqrt(math.pi / 2)
    approx = trapezoid(integrand, 0.0, b, 50_000)
    analytic = math.sin(b * b) - math.sin(0.0)
    print("Day 24 - Substitution demo: int_0^sqrt(pi/2) 2x cos(x^2) dx")
    print(f"  Upper limit b = sqrt(pi/2) ~ {b:.9f}")
    print(f"  Trapezoid approximation: {approx:.9f}")
    print(f"  Analytic (sin(x^2)|_0^b): {analytic:.9f}")


if __name__ == "__main__":
    main()
