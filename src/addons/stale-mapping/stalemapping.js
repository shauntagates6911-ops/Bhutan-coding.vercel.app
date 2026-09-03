// stalemapping.js
// Tiny “knowledge map” of facts about stale bread

const staleBreadFacts = [
  {
    id: 1,
    title: "What is staling?",
    fact: "Staling is when bread loses moisture and its starches recrystallize, making it firm and dry."
  },
  {
    id: 2,
    title: "Stale ≠ moldy",
    fact: "Stale bread is dry and hard. Moldy bread is soft with fuzzy spots and should never be eaten."
  },
  {
    id: 3,
    title: "Why bread goes stale fast",
    fact: "Bread stales faster in the fridge because cold temperatures speed up starch recrystallization."
  },
  {
    id: 4,
    title: "Best way to store bread",
    fact: "Room temperature in a bread box or paper bag keeps bread fresher longer than the fridge."
  },
  {
    id: 5,
    title: "Can you revive stale bread?",
    fact: "Lightly sprinkle with water and warm in the oven to temporarily soften stale bread."
  },
  {
    id: 6,
    title: "Stale bread is useful",
    fact: "Stale bread is perfect for croutons, breadcrumbs, French toast, and bread pudding."
  },
  {
    id: 7,
    title: "Freezing vs staling",
    fact: "Freezing bread pauses staling. Thawing it later keeps it closer to fresh than fridge storage."
  },
  {
    id: 8,
    title: "Air exposure matters",
    fact: "More air contact = faster moisture loss = faster staling. Sliced bread stales faster than whole loaves."
  }
];

// Simple helper to get a random stale bread fact
export function getRandomStaleFact() {
  const index = Math.floor(Math.random() * staleBreadFacts.length);
  return staleBreadFacts[index];
}

// Get all facts
export function getAllStaleFacts() {
  return staleBreadFacts;
}
import { getRandomStaleFact } from "./stalemapping.js";

console.log(getRandomStaleFact());
