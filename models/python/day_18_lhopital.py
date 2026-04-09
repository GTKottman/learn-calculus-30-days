"""
Day 18 — L'Hôpital's rule: indeterminate 0/0, compare f/g with f'/g' near the limit.

lim_{x->0} sin(x)/x = 1  (shown numerically; derivatives cos(x) and 1)
"""

from __future__ import annotations

import math


def main() -> None:
    print("Day 18 - L'Hopital-style limit check: lim_{x->0} sin(x)/x")
    print("  x        sin(x)/x     cos(x)/1 (f'/g')")
    for k in range(8, 0, -1):
        x = 10.0 ** (-k)
        ratio = math.sin(x) / x
        deriv_ratio = math.cos(x) / 1.0
        print(f"  {x:.1e}  {ratio:.12f}  {deriv_ratio:.12f}")
    print("  Both columns -> 1 as x -> 0+.")


if __name__ == "__main__":
    main()
