# Button Group

<p class="lead">将多个按钮组织为一组，支持统一尺寸和纵向排列。</p>

<div class="component-demo">
  <div class="component-demo__stack">
    <bn-button-group size="small">
      <bn-button type="primary">上一页</bn-button>
      <bn-button type="primary">下一页</bn-button>
    </bn-button-group>
    <bn-button-group vertical>
      <bn-button>保存</bn-button>
      <bn-button>发布</bn-button>
      <bn-button>删除</bn-button>
    </bn-button-group>
  </div>
</div>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `size` | 组内按钮尺寸。 | `small \| medium \| large` | `''` |
| `vertical` | 是否纵向排列。 | `boolean` | `false` |
