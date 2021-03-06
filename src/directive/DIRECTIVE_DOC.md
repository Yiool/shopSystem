# 全局自定义指令文档说明

## v-permission
> 基本描述：权限验证指令  根据不同角色权限，前端做权限控制（前端只能做到视觉上的可见与不可见，本质还是需要后端做验证，后端实现另做说明）

> 实现思路：1.用户登录后后端判断该用户是何种角色，再根据角色查找对应何种权限，最终返回该用户的权限列表。前端使用vuex存储该权限列表。在需要控制的Dom元素上使用 `v-permission`指令并添加其权限值，在指令的钩子函数`bind`中获取到该值，再拿这个值去权限列表中比对，如果权限列表中含有该值则让该dom元素显示，反之则隐藏（display属性控制）

> 用法示例
```
<button v-permission:customerDelete>删除会员</button>
//如果该员工没有删除员工的权限，则该按钮会被隐藏
```
