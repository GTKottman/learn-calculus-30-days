"""
Day 16 — Mean Value Theorem: find c in (a,b) with f'(c) = (f(b)-f(a))/(b-a).

Example: f(x) = x^2 on [1, 3].
"""

from __future__ import annotations


def f(x: float) -> float:
    return x * x


def fp(x: float) -> float:
    return 2.0 * x


def main() -> None:
    a, b = 1.0, 3.0
    avg = (f(b) - f(a)) / (b - a)
    # f'(c) = 2c = avg  =>  c = avg / 2
    c = avg / 2.0
    print("Day 16 - Mean Value Theorem demo")
    print(f"  f(x) = x^2 on [{a}, {b}]")
    print(f"  Average rate of change (secant slope): {avg:.6f}")
    print(f"  Solve f'(c) = {avg:.6f}  with f'(c) = 2c  =>  c = {c:.6f}")
    print(f"  Check: f'({c:.6f}) = {fp(c):.6f}")
    assert a < c < b


if __name__ == "__main__":
    main()
