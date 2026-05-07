# Button

<p class="lead">常用操作按钮，支持类型、尺寸、禁用、加载和图标。</p>

<div class="component-demo">
  <div class="component-demo__row">
    <bn-button>默认按钮</bn-button>
    <bn-button type="primary">主要按钮</bn-button>
    <bn-button type="success">成功按钮</bn-button>
    <bn-button type="warning">警告按钮</bn-button>
    <bn-button type="danger">危险按钮</bn-button>
    <bn-button icon="search">带图标</bn-button>
    <bn-button loading>加载中</bn-button>
    <bn-button disabled>禁用按钮</bn-button>
  </div>
</div>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `type` | 按钮类型。 | `default \| primary \| success \| warning \| danger` | `default` |
| `size` | 按钮尺寸。 | `small \| medium \| large` | `medium` |
| `disabled` | 是否禁用。 | `boolean` | `false` |
| `loading` | 是否加载中。 | `boolean` | `false` |
| `icon` | 前置图标名称。 | `string` | `''` |

## 事件

| 事件名 | 说明 |
| --- | --- |
| `click` | 点击按钮时触发，禁用或加载中不会触发。 |
