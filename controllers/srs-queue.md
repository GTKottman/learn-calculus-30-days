# Spaced repetition queue (static Markdown rules)

This project simulates spaced repetition without an app: each [`views/days/day-NN.md`](../views/days/) file ends with **Spaced repetition (today’s queue)**—micro-prompts drawn from **previous** days.

## Default schedule (by day number \(n\))

When \(n \ge 2\), each day’s queue **should** include prompts that revisit:

| Offset | Role |
|--------|------|
| \(n-1\) | Yesterday’s definitions and a standard exercise pattern |
| \(n-3\) | Reinforce a skill that is still “fresh” but starting to fade |
| \(n-7\) | Weekly spiral (if \(n > 7\)) |
| \(n-14\) | Biweekly spiral (if \(n > 14\)) |

**After a checkpoint day:** Add **two extra** prompts from any topic marked “shaky” on that checkpoint.

## Micro-prompt format

Each item should be answerable in **under 90 seconds** on paper:

- “State the precise definition of …”
- “What hypothesis fails in this counterexample?”
- “Set up, but do not evaluate, …”
- “Identify the inner function for the chain rule in …”

## Machine-readable tags (optional, Phase 2)

Authors may embed HTML comments in day files:

```html
<!-- srs:derivative-limit-definition -->
```

A future app can index these IDs for real scheduling.

## Integration with cumulative review

**Cumulative review** (end of each day) names topics explicitly. **SRS queue** pulls overlapping but shorter items so both sections stay valuable: cumulative = connections; SRS = fast recall.

## Implementation status (this repo)

Each [`views/days/day-NN.md`](../views/days/day-01.md) file includes **Spaced repetition (today’s queue)** with micro-prompts referencing prior days by number/topic. Typical offsets used in authoring:

- **Yesterday-style:** immediate prior skill (often labeled “Day \(n-1\)” implicitly)
- **\(n-3\) and \(n-7\) spirals:** embedded starting when enough history exists (see Days 4+)
- **Checkpoint follow-ups:** Days 7, 14, 21, 28, and Day 30 prompt card-writing from weak areas

If you add new days, keep prompts **short** (under 90 seconds) and tag repeats with `<!-- srs:... -->` when you want Phase-2 tooling.
