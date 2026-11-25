import { writeFileSync, mkdirSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) throw new Error("MAKEFUN_OUTPUT_DIR is not set");
const entry = "lxgy1024";
if (entry.length < 1 || entry.length > 30 || entry.trim().length === 0) {
  throw new Error("entry must be 1-30 non-whitespace characters");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry, "utf8");
