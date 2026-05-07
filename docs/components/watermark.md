# Watermark

<p class="lead">为内容区域添加文本或图片水印。</p>

<div class="component-demo">
  <bn-watermark content="Bunny UI Next" :gap="[140, 110]">
    <div style="min-height: 180px; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px; background: #fff;">
      <h3 style="margin: 0 0 10px;">项目数据</h3>
      <p style="margin: 0; color: #64748b; line-height: 1.7;">这里是需要水印保护的业务内容区域，水印层不会影响鼠标点击和文本选择。</p>
    </div>
  </bn-watermark>
</div>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `content` | 水印文本。 | `string` | `Bunny UI Next` |
| `image` | 水印图片地址。 | `string` | `''` |
| `gap` | 水印重复间距。 | `number[]` | `[120, 120]` |
| `rotate` | 水印旋转角度。 | `number` | `-22` |
| `opacity` | 水印透明度。 | `number` | `0.15` |
| `zIndex` | 水印层级。 | `number` | `9` |
