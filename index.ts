import fs from "fs";
import path from "path";
import crypto from "crypto";
import * as yaml from "js-yaml";

interface Friend {
  name: string;
  url: string;
  img: string;
  desc: string;
}

const LINKS_PATH = path.join("src", "links.yml");
const IMAGES_DIR = path.join("src", "img");
const OUTPUT_PATH = path.join("dist", "links.json");

const CDN_BASE = "https://static.stslb.com/souta/img/friend";

const fileHash = (filePath: string): string =>
  crypto
    .createHash("sha256")
    .update(fs.readFileSync(filePath))
    .digest("hex")
    .slice(0, 12);

const build = (): void => {
  const links = yaml.load(fs.readFileSync(LINKS_PATH, "utf8")) as Friend[];

  if (!Array.isArray(links)) {
    throw new Error(
      `Expected a list of friends in ${LINKS_PATH}, got ${typeof links}`,
    );
  }

  const entries = links.map((friend) => ({
    ...friend,
    img: `${CDN_BASE}/${friend.img}?v=${fileHash(path.join(IMAGES_DIR, friend.img))}&imageMogr2/thumbnail/200x`,
  }));

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(entries));

  console.log(`Wrote ${entries.length} entries to ${OUTPUT_PATH}`);
};

try {
  build();
} catch (error) {
  console.error("Build failed:", error);
  process.exitCode = 1;
}
