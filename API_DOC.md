## 后端api文档
> 后端api接口基本遵循Restful API 设计原则

    例：
    get     /user        获取会员列表
    get     /user/:id    获取某个会员详情
    post    /user        新增一个会员
    put     /user/:id    更新某个会员信息
    delete  /user/:id    删除某个会员

> 返回的基本数据结构

    {
        status: 0,
        message: "success",
        data: { key1: value1, key2: value2, ... }
        ...
    }

    code: 返回码，0表示成功，非0表示各种不同的错误
    message: 描述信息，成功时为"success"，错误时则是错误信息
    data: 成功时返回的数据，类型为对象或数组

    不同错误需要定义不同的返回码，属于客户端的错误和服务端的错误也要区分，比如1XX表示客户端的错误，2XX表示服务端的错误。这里举几个例子：

    0：成功
    100：请求错误
    101：缺少appKey
    102：缺少签名
    103：缺少参数
    200：服务器出错
    201：服务不可用
    202：服务器正在重启

    错误信息一般有两种用途：一是客户端开发人员调试时看具体是什么错误；二是作为App错误提示直接展示给用户看。主要还是作为App错误提示，直接展示给用户看的。所以，大部分都是简短的提示信息。

    data字段只在请求成功时才会有数据返回的。数据类型限定为对象或数组，当请求需要的数据为单个对象时则传回对象，当请求需要的数据是列表时，则为某个对象的数组.

### 会员模块

#### 新增会员
* 接口地址(url):

    *api/v1/customers*

* 请求类型(method)：

    *POST*

* 请求参数(request body)

  | 字段      | 类型      | 必填      | 说明
  |----       |----      |----       |----
  | name      | string   | true      | 会员姓名
  | mobile    | string   | true      | 会员电话
  | profession| string   | false     | 职业
  | pd        | string   | false     |
  | add       | string   | false     |
  | mirrorBracket | string | false   | 镜片
  | optic     | string   | false     | 镜架
  | remark    | string   | false     | 备注信息
  | staff     | string   | false     | 经办人



* 响应结果(response result)

  | 字段      | 类型      | 必填      | 说明
  | ----     |----       |----       |----
  | status   | string    | true      | 返回状态  '0' 成功 '1' 失败
  | message  | string    | true      | 描述信息，成功则为success 失败则对应相应描述文字
  | data     | object    | true      | 返回数据 会员唯一id

* 响应数据(data)

  | 字段     | 类型      | 必填      | 说明
  | ----    | ----      | ----      | ----
  | userid  | number    | true      | 会员唯一id
  |


#### 会员列表
* 接口地址(url):

    *api/v1/customers*

* 请求类型(method)：

    *GET*

* 请求参数(request body)

  | 字段      | 类型      | 必填  | 说明
  | ----     |----       |----       |----
  | page     | string    | true      | 页码，第几页
  | pagesize | string    | true      | 每页多少条数据
  | grade    | string    | false     | 会员等级
  |

* 响应结果(response result)

  | 字段      | 类型      | 必填      | 说明
  | ----     |----       |----       |----
  | status   | string    | true      | 返回状态  '0' 成功 '1' 失败
  | data     | array     | true      | 返回数据  所有会员信息
  | totalCount | number  | true      | 数据总条数
  |

* 响应数据(data)

  | 字段      | 类型      | 必填      | 说明
  |----       |----      |----       |----
  | name      | string   | true      | 会员姓名
  | userid    | number   | true      | 会员唯一id
  | mobile    | string   | true      | 会员电话
  | profession| string   | false     | 职业
  | pd        | string   | false     |
  | add       | string   | false     |
  | mirrorBracket | string | false   | 镜片
  | optic     | string   | false     | 镜架
  | remark    | string   | false     | 备注信息
  | grade     | string   | false     | 会员等级
  | staff     | string   | false     | 经办人
  |



#### 编辑某个会员信息
* 接口地址(url):

    *api/v1/customers/:userid*

* 请求类型(method)：

    *PUT*

* 请求参数(request body)

