# Icon

<p class="lead">内置轻量 SVG 图标，支持尺寸、颜色和旋转。</p>

<div class="component-demo">
  <div class="component-demo__row">
    <bn-icon name="search" :size="24"></bn-icon>
    <bn-icon name="check" :size="24" color="#16a34a"></bn-icon>
    <bn-icon name="warning" :size="24" color="#d97706"></bn-icon>
    <bn-icon name="close" :size="24" color="#dc2626"></bn-icon>
    <bn-icon name="info" :size="24" spin></bn-icon>
  </div>
</div>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `name` | 图标名称。 | `string` | 必填 |
| `size` | 图标尺寸。 | `string \| number` | `16` |
| `color` | 图标颜色。 | `string` | `currentColor` |
| `spin` | 是否旋转。 | `boolean` | `false` |
