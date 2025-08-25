export function getAfterExplore(command: string) {
  const match = command.match(/\bexplore\b\s*(.*)/i);
  return match ? match[1].trim() : "";
}
