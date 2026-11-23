// Six Words, One Story — entry program.
// Writes the complete six-word story to /output/entry.txt.
// Story: "She buried him. He kept knocking."
//   Setup: a burial (she buried him) — a whole relationship, a death, a goodbye.
//   Turn: he kept knocking — he is not gone; the ending inverts the burial.
//   Unsaid: alive? ghost? buried alive? The reader fills it in.
import { mkdirSync, writeFileSync } from "node:fs";

const STORY = "She buried him. He kept knocking.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY, "utf8");
console.log("Wrote /output/entry.txt:", JSON.stringify(STORY));
