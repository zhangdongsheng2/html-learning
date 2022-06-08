
## attribute与property

1. 什么是attribute，什么是property
   * html标签的预定义和自定义属性我们统称为attribute
   * js原生对象的直接属性，我们统称为property

2. 什么是布尔值属性，什么是非布尔值属性
   * property的属性值为布尔类型的  我们统称为布尔值属性
   * property的属性值为非布尔类型的  我们统称为非布尔值属性
3. attribute和property的同步关系
   * 非布尔值属性：实时同步
   * 布尔值属性：
     * property永远都不会同步attribute
     * 在没有动过property的情况下: attribute会同步property
     * 在动过property的情况下: attribute不会同步property
4. 用户操作的是property, 浏览器认的是property
5. 总结
   * 布尔值属性最好使用prop方法
   * 非布尔值属性attr方法
## width
1. width：100%
   * 100%表示子元素的宽度和父元素的宽度相等，其中并不包括子元素内外边距以及边框的值，为子元素真正的宽度
2. width：auto
   * auto表示子元素的 宽度+内边距+外边距+边框 才等于父元素的宽度

## html5有关
1. 有关的属性
   * classlist：相对于class的property(className)
     * add
     * remove
     * toggle: 存在就删除不存在就添加
     * dataset:自定义属性（限制 data-x-y）的property
				
2. html5导学
   * html5的意义，到底什么是html5，html5的优势
   * h4与h5的对比
     * 编码
     * 渲染模式
     * mine类型
   * 语义化标签
     * header
     * footer
     * section
     * nav
			
		
