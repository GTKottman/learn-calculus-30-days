"""
Day 27 — Arc length: L = ∫_a^b √(1 + (f'(x))^2) dx.

Example: f(x) = x^{3/2}, f'(x) = (3/2)√x on [0,1].
"""

from __future__ import annotations

import math
import sys
from pathlib import Path

_SCRIPTS = Path(__file__).resolve().parent
if str(_SCRIPTS) not in sys.path:
    sys.path.insert(0, str(_SCRIPTS))

from numeric_utils import trapezoid


def fp(x: float) -> float:
    return 1.5 * math.sqrt(x)


def integrand(x: float) -> float:
    return math.sqrt(1.0 + fp(x) ** 2)


def main() -> None:
    L = trapezoid(integrand, 0.0, 1.0, 50_000)
    # Exact: ∫_0^1 √(1 + 9x/4) dx = (8/27)[(1+9x/4)^{3/2}]_0^1
    exact = (8.0 / 27.0) * ((1 + 9.0 / 4.0) ** 1.5 - 1.0)
    print("Day 27 - Arc length of y = x^(3/2) from 0 to 1")
    print(f"  Numeric int_0^1 sqrt(1+(f')^2) dx ~ {L:.12f}")
    print(f"  Exact formula value          = {exact:.12f}")


if __name__ == "__main__":
    main()
