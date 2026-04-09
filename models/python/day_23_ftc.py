"""
Day 23 — Fundamental Theorem of Calculus: if F(x) = ∫_a^x f(t) dt then F'(x) = f(x).

Numerical check: F(x) ≈ trapezoid sum for f(t)=t^2 on [0,x]; compare difference quotient of F to f(x).
"""

from __future__ import annotations

import sys
from pathlib import Path

_SCRIPTS = Path(__file__).resolve().parent
if str(_SCRIPTS) not in sys.path:
    sys.path.insert(0, str(_SCRIPTS))

from numeric_utils import trapezoid


def f(t: float) -> float:
    return t * t


def F(x: float) -> float:
    """∫_0^x t^2 dt (numeric)"""
    if x == 0:
        return 0.0
    n = max(200, int(500 * abs(x)))
    return trapezoid(f, 0.0, x, n)


def main() -> None:
    x0 = 1.25
    h = 1e-5
    ftc_num = (F(x0 + h) - F(x0)) / h
    print("Day 23 - FTC numerical check: F(x)=int_0^x t^2 dt, expect F'(x)=x^2")
    print(f"  x = {x0}")
    print(f"  [F(x+h)-F(x)]/h ~ {ftc_num:.9f}")
    print(f"  f(x) = x^2       = {f(x0):.9f}")


if __name__ == "__main__":
    main()
