---
title:
  zh-CN: Button 按钮
  en-US: Button
desc:
  zh-CN: 基础组件，触发业务逻辑时使用。
  en-US: Basic component that is used to trigger bussiness logic.
---


# zh-CN

## API

### Upload props
| 属性        | 说明    |  类型  | 默认值|
| --------   | ----- | ---- | ---- |
|	action	|	上传的地址，必填	|	String	|	-	|
|	headers	|	设置上传的请求头部	|	Object	|	{}	|
|	multiple	|	是否支持多选文件	|	Boolean	|	FALSE	|
|	data	|	上传时附带的额外参数	|	Object	|	-	|
|	name	|	上传的文件字段名	|	String	|	file	|
|	with-credentials	|	支持发送 cookie 凭证信息	|	Boolean	|	FALSE	|
|	show-upload-list	|	是否显示已上传文件列表	|	Boolean	|	TRUE	|
|	type	|	上传控件的类型，可选值为 select（点击选择），drag（支持拖拽）	|	String	|	select	|
|	accept	|	接受上传的文件类型	|	String	|	-	|
|	format	|	支持的文件类型，与 accept 不同的是，format 是识别文件的后缀名，accept 为 input 标签原生的 accept 属性，会在选择文件时过滤，可以两者结合使用	|	Array	|	[]	|
|	max-size	|	文件大小限制，单位 kb	|	Number	|	-	|
|	before-upload	|	上传文件之前的钩子，参数为上传的文件，若返回 false 或者 Promise 则停止上传	|	Function	|	-	|
|	on-progress	|	文件上传时的钩子，返回字段为 event, file, fileList	|	Function	|	-	|
|	on-success	|	文件上传成功时的钩子，返回字段为 response, file, fileList	|	Function	|	-	|
|	on-error	|	文件上传失败时的钩子，返回字段为 error, file, fileList	|	Function	|	-	|
|	on-preview	|	点击已上传的文件链接时的钩子，返回字段为 file， 可以通过 file.response 拿到服务端返回数据	|	Function	|	-	|
|	on-remove	|	文件列表移除文件时的钩子，返回字段为 file, fileList	|	Function	|	-	|
|	on-format-error	|	文件格式验证失败时的钩子，返回字段为 file, fileList	|	Function	|	-	|
|	on-exceeded-size	|	文件超出指定大小限制时的钩子，返回字段为 file, fileList	|	Function	|	-	|
|	default-file-list	|	默认已上传的文件列表，例如：	|	Array	|	[]	|

```
默认已上传的文件列表，例如：

[
    {
        name: 'img1.jpg',
        url: 'http://www.xxx.com/img1.jpg'
    },
    {
        name: 'img2.jpg',
        url: 'http://www.xxx.com/img2.jpg'
    }
]

```

### Upload methods
|	方法名	|	说明	|	参数 |
| --------   | ----- | ---- | ---- |
|	clearFiles	|	清空已上传的文件列表	|	无


### Upload slot

|	名称	|	说明	|
| --------   | ----- |
|	无	|	触发上传组件的控件	|
|	tip	|	辅助提示内容	|



# en-US

## API
| Attribute        | Explanation    |  Type  | Default|
| --------   | -----:   | ---- | ---- |
| type        | Button type, options include primary、ghost、dashed、text、info、success、warning、error, optional      |   String   | -|
