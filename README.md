# Remotion Video Studio

按项目分支管理的视频工作室。`main` 仅保存导航与状态说明，各项目代码、素材和导出文件保存在对应分支。

## 项目导航

### [pelican-motorcycle：鹈鹕骑摩托车](https://github.com/zljie/remotion-video-studio/tree/pelican-motorcycle)

- 已提交原创 React/SVG 动画源码、依赖锁文件、离线导出脚本、预览图片和 MP4。
- 成片：8 秒、1280×720、30 fps、H.264、无声循环。
- [观看／下载 MP4](https://github.com/zljie/remotion-video-studio/blob/pelican-motorcycle/out/pelican-motorcycle.mp4) · [预览图](https://github.com/zljie/remotion-video-studio/blob/pelican-motorcycle/out/poster.png)
- TypeScript 检查通过；MP4 规格已验证。当前交付采用相同 React/SVG 场景的离线导出，不表示 Remotion Studio 已在线部署。运行与导出方法见项目分支 README。

### [jlsh-monthly-report：智能月报宣传视频](https://github.com/zljie/remotion-video-studio/tree/jlsh-monthly-report)

- 已建立独立项目分支与素材需求说明。
- 目标：结合汇报 PPT 展示月报前端与专业后台配置。
- 状态：等待可读取且适合公开的 PPT/画面素材；视频尚未制作完成，未发布企业内部资料。

## 管理约定

1. 每个项目独立分支；项目源码不合并到 `main`。
2. 项目 README 说明运行方式、导出方式、素材来源及验证状态。
3. 完成新项目或更新交付时，同步本导航中的链接和状态。
4. 不提交 `node_modules`、账号凭据、密钥或未经确认的内部资料。
5. Remotion 等第三方依赖适用各自许可；商业或团队使用前请核对其条款。
