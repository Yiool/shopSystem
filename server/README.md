## 文档
***
### 会员模块

#### 新增会员
* 接口地址(url):

    *api/v1/customers*

* 请求类型(method)：

    *POST*

* 请求参数(request body)

  | 字段      | 类型      | 必填  | 说明
  | ----     |----       |----       |----
  | username | string    | true      |用户名
  | password | string    | true      |密码
  |


* 响应结果(response result)

  | 字段      | 类型      | 必填      | 说明
  | ----     |----       |----       |----
  | status   | string    | true      | 返回状态  '0' 成功 '1' 失败
  | data     | string    | true      | 返回数据
  |

#### 会员列表
