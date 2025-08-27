export function getAfterExplore(command: string) {
  const match = command.match(/\bexplore\b\s*(.*)/i);
  return match ? match[1].trim() : "";
}

export function getAfterCatch(command: string) {
  const match = command.match(/\bcatch\b\s*(.*)/i);
  return match ? match[1].trim() : "";
}

export function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}
