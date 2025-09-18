/**
 * Merge truthy className strings without introducing extra spaces.
 */
export function cn(...classes: Array<string | undefined | null | false>) {
  return classes.filter(Boolean).join(' ');
}
