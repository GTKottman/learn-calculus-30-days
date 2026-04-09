"""
Day 17 — Related rates: ladder sliding (Pythagorean constraint).

13-ft ladder: x^2 + y^2 = 169. Given dx/dt at an instant, find dy/dt.
Differentiate: x x' + y y' = 0  =>  y' = -(x/y) x'
"""

from __future__ import annotations

import math


def main() -> None:
    ladder = 13.0
    x = 5.0
    y = math.sqrt(ladder**2 - x**2)  # 12
    dx_dt = 1.5  # ft/s away from wall (example)
    dy_dt = -(x / y) * dx_dt
    print("Day 17 - Related rates (ladder)")
    print(f"  Ladder length: {ladder} ft; at instant x = {x} ft, y = {y:.6f} ft")
    print(f"  Bottom slides at dx/dt = {dx_dt} ft/s")
    print(f"  Top of ladder: dy/dt = {dy_dt:.6f} ft/s (negative => sliding down)")


if __name__ == "__main__":
    main()
