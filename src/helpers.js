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
    "decentralized",
    "digital",
    "long",
    "lazy",
    "hedging",
    "smart",
    "pure",
    "immutable",
    "hot",
    "public",
    "stable"
  ];

  const nouns = [
    "altcoin",
    "blockchain",
    "coin",
    "miner",
    "mining",
    "currency",
    "exchange",
    "distributed-ledger",
    "finance",
    "proof-of-stake",
    "proof-of-work",
    "provisioned-ledger",
    "market-order",
    "smart-contract",
    "storage",
    "seed",
    "tether",
    "token",
    "tokenless-ledgeer",
    "NFT",
    "wallet",
    "wash-trading"
  ];

  return `${rando(adjectives)}-${rando(adjectives)}-${rando(nouns)}`;
}
