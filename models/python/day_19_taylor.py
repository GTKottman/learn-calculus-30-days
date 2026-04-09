"""
Day 19 — Taylor (Maclaurin) polynomial for e^x: sum_{k=0}^n x^k/k!
"""

from __future__ import annotations

import math


def maclaurin_exp(x: float, n: int) -> float:
    s = 0.0
    term = 1.0
    s += term
    for k in range(1, n + 1):
        term *= x / k
        s += term
    return s


def main() -> None:
    x = 0.7
    n = 12
    approx = maclaurin_exp(x, n)
    exact = math.exp(x)
    print("Day 19 - Taylor polynomial for e^x (Maclaurin)")
    print(f"  x = {x}, degree <= {n}")
    print(f"  P_{n}({x}) ~ {approx:.12f}")
    print(f"  e^{x}    = {exact:.12f}")
    print(f"  |error|  = {abs(approx - exact):.2e}")


if __name__ == "__main__":
    main()
