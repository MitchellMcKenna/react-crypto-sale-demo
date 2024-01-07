export function formatPrice(cents) {
  return (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}

export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function getRandomStoreName() {
  const adjectives = [
    "clean",
    "cold",
    "elegant",
    "decentralized",
    "fancy",
    "long",
    "old-fashioned",
    "lazy",
    "smart",
    "pure",
    "immutable",
    "popular",
    "hot",
    "public",
    "stable"
  ];

  const nouns = [
    "altcoin",
    "blockchain",
    "mining",
    "currency",
    "finance",
    "ledger",
    "exchange",
    "key",
    "coin",
    "storage",
    "seed",
    "tether",
    "token",
    "NFT",
    "wallet"
  ];

  return `${rando(adjectives)}-${rando(adjectives)}-${rando(nouns)}`;
}
