import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";
const word = "Almost";

// Gate: exactly one word, 1-24 characters, not only whitespace.
const parts = word.trim().split(/\s+/);
if (parts.length !== 1 || word.length < 1 || word.length > 24) {
  throw new Error("entry must be exactly one word of 1-24 characters");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), word, "utf8");
