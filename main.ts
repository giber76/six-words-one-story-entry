// Six Words, One Story — entry program.
// Writes the complete six-word story to /output/entry.txt.
// Story: "She buried him. He kept knocking."
//   Setup: a burial (she buried him) — a whole relationship, a death, a goodbye.
//   Turn: he kept knocking — he is not gone; the ending inverts the burial.
//   Unsaid: alive? ghost? buried alive? The reader fills it in.
// The program self-checks the brief before writing: exactly six words,
// 1-60 characters, so a typo can never ship an invalid entry.
import { mkdirSync, writeFileSync } from "node:fs";

const STORY = "She buried him. He kept knocking.";

const words = STORY.trim().split(/\s+/);
if (words.length !== 6) {
  throw new Error(`Story must be exactly six words, got ${words.length}`);
}
if (STORY.length < 1 || STORY.length > 60) {
  throw new Error(`Story must be 1-60 characters, got ${STORY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY, "utf8");
console.log("Wrote /output/entry.txt:", JSON.stringify(STORY));
