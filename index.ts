import fs from "fs";
import yaml from "js-yaml";

type Friend = {
  name: string;
  url: string;
  img: string;
  desc: string;
};

(() => {
  try {
    const filePath = "./src/links.yml";
    const outputPath = "./dist/links.json";

    const file: Friend[] = yaml.load(
      fs.readFileSync(filePath, "utf-8")
    ) as Friend[];

    const newFile = file.map((user) => ({
      ...user,
      img: `https://static.stslb.com/souta/img/friend/${user.img}`,
    }));

    fs.mkdirSync("./dist", { recursive: true });
    fs.writeFileSync(outputPath, JSON.stringify(newFile));

    console.log(`File successfully written to ${outputPath}`);
  } catch (err) {
    console.error("Error processing file:", err);
  }
})();
