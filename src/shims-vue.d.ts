/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
 
// 对vue进行类型补充说明
import { ComponentCustomProperties } from 'vue'
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $message: any // 这里可以用$message具体的类型代替any
  }
}