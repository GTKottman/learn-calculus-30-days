"""
Day 22 — Riemann sums converging to ∫_a^b f(x) dx (example: x^2 on [0,1] = 1/3).
"""

from __future__ import annotations

import sys
from pathlib import Path

_SCRIPTS = Path(__file__).resolve().parent
if str(_SCRIPTS) not in sys.path:
    sys.path.insert(0, str(_SCRIPTS))

from numeric_utils import riemann_sum


def f(x: float) -> float:
    return x * x


def main() -> None:
    a, b = 0.0, 1.0
    exact = 1.0 / 3.0
    print("Day 22 - Riemann sums for int_0^1 x^2 dx (exact 1/3)")
    for n in (4, 8, 32, 128, 512):
        left = riemann_sum(f, a, b, n, rule="left")
        right = riemann_sum(f, a, b, n, rule="right")
        mid = riemann_sum(f, a, b, n, rule="midpoint")
        print(f"  n={n:4d}  left={left:.8f}  mid={mid:.8f}  right={right:.8f}  err(mid)={abs(mid-exact):.2e}")
    print(f"  exact = {exact:.12f}")


if __name__ == "__main__":
    main()
