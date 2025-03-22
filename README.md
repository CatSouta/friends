# [小太的小伙伴们](https://souta.cc/friends)

原来，你也想和小太成为朋友吗？

## 友链说明

如果你的称呼、URL、头像或 Slogan 有所变动，请在此创建新的 `Pull Request`。

> 网站迁移可能会不小心遗漏伙伴的信息，若有遗漏可自行创建 `Pull Request` 进行添加

### 要求

- 先友后链，可能你还没有成为小太的熟人，可以先尝试一下刷刷存在感？
- 至少会使用 Git 和 GitHub 这样你就可以自行添加和修改你的信息啦！
- 站点域名请使用 **非免费** 域名，但不包括 `github.io` 等由 GitHub 或其他服务商提供 PasS 时免费提供的二级域名。
- 站点的内容大部分是 **原创** 内容，任何领域和类型的内容均可，不能存在 **政治敏感** 及 **违法** 内容。
- 站点没有过多影响整体观感的广告且无恶意脚本。
- 若你的站点长时间无法访问，友情链接将会被移除。

### 格式

```yml
- name: "Souta" # 你的称呼
  url: "https://souta.cc" # 你的网站 URL
  img: "souta.cc.jpg" # 你的头像文件名（请使用 domain.ext 的格式并上传至 src/img 中）
  desc: "可能是一个笨蛋" # 你的 Slogan
```

## 交换流程

- 将小太的友链添加到你的网站中：
  - 称呼：`Souta` 或 `小太`
    - 虽然我希望你这样称呼我，但是如果你有其他的爱称也可以使用。
  - 链接：`https://souta.cc`
  - 头像：`https://weavatar.com/avatar/0188909a64b2b0ca9225afd0b743cb76?s=256`
    - 可以使用其他的 Gravatar 镜像，只要能显示出来！
  - 描述：`可能是一个笨蛋`
    - 好朋友可以自行发挥，我不会在意的！
- 在 GitHub 上 `Fork` 本仓库。
- 按照 `格式` 一栏中提供的内容在 [`src/links.yml`](./src/links.yml) 文件末尾添加你的信息（请在最末尾留下一个空行）。
- 准备好你的头像文件，并将其上传至 [`src/img`](./src/img) 文件夹下。
  - 文件格式最好为 `jpg`，图片像素大小不超过 `512*512px`。
- 完成上述步骤后，请新建一个 `Pull Request`，标题格式为 `chore: 添加站点 souta.cc`（souta.cc 请更换成你的域名）。
- 当 `Pull Request` 被合并后，你的站点将会尽快显示在 [小太的小伙伴们](https://souta.cc/friends) 中。
