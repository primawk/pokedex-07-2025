export function cleanInput(str: string) {
  return str.trim().toLowerCase().split(/\s+/);
}
