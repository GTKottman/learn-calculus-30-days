"""Shared numerical helpers for lesson demo scripts (stdlib only)."""

from __future__ import annotations

import math
from collections.abc import Callable


def trapezoid(f: Callable[[float], float], a: float, b: float, n: int) -> float:
    """Composite trapezoidal rule for ∫_a^b f(x) dx."""
    if n < 1:
        raise ValueError("n must be >= 1")
    h = (b - a) / n
    s = 0.5 * (f(a) + f(b))
    for i in range(1, n):
        s += f(a + i * h)
    return h * s


def riemann_sum(
    f: Callable[[float], float],
    a: float,
    b: float,
    n: int,
    *,
    rule: str = "midpoint",
) -> float:
    """Equal partition Riemann sum: left | right | midpoint."""
    if n < 1:
        raise ValueError("n must be >= 1")
    dx = (b - a) / n
    total = 0.0
    for i in range(n):
        left = a + i * dx
        if rule == "left":
            x = left
        elif rule == "right":
            x = left + dx
        elif rule == "midpoint":
            x = left + 0.5 * dx
        else:
            raise ValueError("rule must be left, right, or midpoint")
        total += f(x) * dx
    return total
