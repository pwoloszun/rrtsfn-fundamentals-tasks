const multiplier = 1024 ** 4;

export default function deriveId(): number {
  return Math.random() * multiplier;
}
