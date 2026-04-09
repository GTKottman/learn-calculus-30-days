"""Run all lesson demo scripts for Days 16-30 (stdlib only)."""

from __future__ import annotations

import importlib.util
import sys
from pathlib import Path

_SCRIPTS = Path(__file__).resolve().parent
MODULES = [
    "day_16_mvt",
    "day_17_related_rates",
    "day_18_lhopital",
    "day_19_taylor",
    "day_20_synthesis",
    "day_21_checkpoint3",
    "day_22_riemann",
    "day_23_ftc",
    "day_24_usub",
    "day_25_parts",
    "day_26_area_volume",
    "day_27_arc_length",
    "day_28_improper_avg",
    "day_29_techniques",
    "day_30_review",
]


def _load_run(name: str) -> None:
    path = _SCRIPTS / f"{name}.py"
    spec = importlib.util.spec_from_file_location(name, path)
    if spec is None or spec.loader is None:
        raise RuntimeError(f"Cannot load {path}")
    mod = importlib.util.module_from_spec(spec)
    sys.modules[name] = mod
    spec.loader.exec_module(mod)
    main = getattr(mod, "main")
    main()
    print()


def main() -> None:
    for name in MODULES:
        print("=" * 60)
        print(f"Running {name}.py")
        print("=" * 60)
        _load_run(name)


if __name__ == "__main__":
    main()
