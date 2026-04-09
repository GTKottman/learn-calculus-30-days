"""
Day 29 — Newton's method for √2; separable DE y'=y with y(0)=1 => y=e^x.
"""

from __future__ import annotations

import math


def newton_sqrt2(steps: int = 6) -> None:
    """Solve x^2 - 2 = 0 with Newton: x_{n+1} = x_n - f/f' = x_n - (x_n^2-2)/(2x_n)."""

    x = 1.0
    print("Newton's method: x^2 - 2 = 0, starting at x=1")
    for i in range(steps):
        fx = x * x - 2.0
        fpx = 2.0 * x
        x_new = x - fx / fpx
        print(f"  step {i}: x ~ {x_new:.15f}  (error vs sqrt(2): {abs(x_new - math.sqrt(2)):.2e})")
        x = x_new


def separable_de() -> None:
    print("\nSeparable DE: dy/dx = y, y(0)=1  =>  y(x) = e^x")
    for x in (0.0, 0.5, 1.0, 1.5):
        print(f"  y({x}) = e^{x} ~ {math.exp(x):.9f}")


def main() -> None:
    print("Day 29 - Techniques and extensions\n")
    newton_sqrt2()
    separable_de()


if __name__ == "__main__":
    main()
