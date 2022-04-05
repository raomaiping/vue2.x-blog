<template>
  <div class="details">
    <v-md-preview :text="text" class="left-side" ref="preview"></v-md-preview>

    <div class="right-side">
      <nav-list
        @handleAnchorClick="handleAnchorClick"
        :titles="titles"
        :active="active"
      ></nav-list>
    </div>
  </div>
</template>

<script>
import NavList from '@components/NavList.vue'
export default {
  components: { NavList },
  name: 'detail',
  data() {
    return {
      text: `
## 栈
### 什么是栈？
栈是一个后进先出的数据结构，类似于生活中在炉子里烧蜂窝煤，后进的蜂窝煤是最先被拿出来的。
### 使用Javascript模拟栈
\`\`\`js
# use npm
npm i @kangc/v-md-editor -S

# use yarn
yarn add @kangc/v-md-editor
\`\`\`
\`\`\`js
// 模拟一个栈
const stack = []
// 入栈
stack.push(1)
// 出栈
stack.pop()
\`\`\`
### 案例 (20.有效的括号)

利用栈后进先出的思路解题，最后一个左括号与第一个右括号匹配，匹配成功出栈，依次类推...
\`\`\`js
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length % 2 === 1){return false}
    const stack = [];
    for(let i = 0,leng = s.length; i < leng; i++){
        const c = s[i]
        if(c === "(" || c === '{' || c === "["){
            stack.push(c)
        }else{
            const t = stack[stack.length - 1]
            const result = t + c
            if(result === '{}' || result === '[]' || result === '()'){
                stack.pop()
            }else{
                return false;
            }
        }
    }
    return stack.length === 0
};
\`\`\`
## 队列
### 什么是队列
队列是一个先进先出的数据结构，类似于生活中去食堂排队打饭，先打完饭离开食堂的同学总是队列前面的。
### 使用Javascript模拟队列
\`\`\`js
// 模拟一个队列
const queue = []
// 入队
queue.push(1)
// 出队
queue.shift()
\`\`\`
### 案例(933. 最近的请求次数)
利用队列先进先出的特性，循环队头是否在3000毫秒内，不在的话把队头踢出去，循环往复，最后返回队列的长度就是请求的次数
\`\`\`js
var RecentCounter = function() {
    this.arr = []
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.arr.push(t)
    while(this.arr[0] < t -3000){
        this.arr.shift()
    }
    return this.arr.length
};
\`\`\`
## 链表
### 什么是链表
1. 多个元素组成的列表。
2. 元素存储不连续，用next指针连在一起。
3. 数组增删非首尾元素时往往需要移动元素，链表增删非首尾元素不需要移动元素，只需要更改next指向即可。
4. JavaScript中没有链表,可以用Object来模拟链表。

### 使用Javascript模拟链表

\`\`\`js
// 模拟一个链表
const a = { val: 'a' };
const b = { val: 'b' };
const c = { val: 'c' };
const d = { val: 'd' };
a.next = b;
b.next = c;
c.next = d;

// 遍历链表
let p = a;
while(p){
    console.log(p.val);
    p = p.next;
}

// 插入
const e = { val: 'e' };
c.next = e;
e.next = d;

// 删除
c.next = d;
\`\`\`
### 案例(237.删除链表中的节点)
思路：从链表里删除一个节点 \`node\` 的最常见方法是修改*之前*节点的 \`next\` 指针，使其指向*之后*的节点。

![3579a496897df5321c110bf1301872b6e10c342f5e400ce45d2db0348d00d715-file_1555866623326.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/aa81c021b54949f2b5387fda16674198~tplv-k3u1fbpfcp-watermark.image?)
因为，我们无法访问我们想要删除的节点 之前 的节点，我们始终不能修改该节点的 next 指针。相反，我们必须将想要删除的节点的值替换为它后面节点中的值，然后删除它之后的节点。

![858fae01d89c2080eb7e45a1f9d9a2b2f76e1a5c87815b324fd946e0bd8da495-file_1555866651920.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b325db45da264fdb88395c5667d54760~tplv-k3u1fbpfcp-watermark.image?)

![902dc5d3f8c44d3cbc0b6e837711cad2eefc021fd2b9de8dfabc6d478bc779b1-file_1555866680932.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ad58207279c9445aaab8e873c86efb46~tplv-k3u1fbpfcp-watermark.image?)

![2a6409b98dd73d6649fdc6fb984c88690547127467104c3923367be6f8fbc916-file_1555866773685.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ba908820d53b4157bf90447cf5b1c255~tplv-k3u1fbpfcp-watermark.image?)

因为我们知道要删除的节点不是列表的末尾，所以我们可以保证这种方法是可行的。[参考文档。](https://leetcode-cn.com/problems/delete-node-in-a-linked-list/solution/shan-chu-lian-biao-zhong-de-jie-dian-by-leetcode/)
\`\`\`js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};
\`\`\`
### 案例(206.反转链表)
在遍历链表时，将当前节点的 next 指针改为指向前一个节点。由于节点没有引用其前一个节点，因此必须事先存储其前一个节点。在更改引用之前，还需要存储后一个节点。最后返回新的头引用。
\`\`\`js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let cur = head, pre = null;
    while(cur){
        const next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    return pre
};
\`\`\`
`,
      titles: [],
      active: 0, // 当前激活的导航索引
      anchors: [],
    }
  },
  mounted() {
    this.init()
    // 监听滚动事件
    window.addEventListener('scroll', this.onScroll, false)
  },
  destroy() {
    // 必须移除监听器，不然当该vue组件被销毁了，监听器还在就会出错
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    init() {
      this.anchors =
        this.$refs.preview.$el.querySelectorAll('h1,h2,h3,h4,h5,h6')
      const titles = Array.from(this.anchors).filter(
        (title) => !!title.innerText.trim()
      )
      if (!titles.length) {
        this.titles = []
        return
      }
      const hTags = Array.from(
        new Set(titles.map((title) => title.tagName))
      ).sort()
      this.titles = titles.map((el) => ({
        title: el.innerText,
        lineIndex: el.getAttribute('data-v-md-line'),
        indent: hTags.indexOf(el.tagName),
      }))
    },
    handleAnchorClick(anchor) {
      const { preview } = this.$refs
      const { lineIndex } = anchor

      const heading = preview.$el.querySelector(
        `[data-v-md-line="${lineIndex}"]`
      )

      if (heading) {
        preview.scrollToTarget({
          target: heading,
          scrollContainer: window,
          top: 10,
        })
      }
    },
    // 滚动监听器
    onScroll() {
      // 获取所有锚点元素
      const navContents = this.anchors
      // 所有锚点元素的 offsetTop
      const offsetTopArr = []
      navContents.forEach((item) => {
        offsetTopArr.push(item.offsetTop)
      })
      // 获取当前文档流的 scrollTop
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop
      // 定义当前点亮的导航下标
      let navIndex = 0
      for (let n = 0; n < offsetTopArr.length; n++) {
        // 如果 scrollTop 大于等于第n个元素的 offsetTop 则说明 n-1 的内容已经完全不可见
        // 那么此时导航索引就应该是n了
        if (
          scrollTop >=
          offsetTopArr[n] + (420 - navContents[n].clientHeight - 10)
        ) {
          navIndex = n
        }
        // 如果滚动条已经到底则直接激活最后一个导航
        if (
          scrollTop + document.documentElement.clientHeight ===
          document.documentElement.scrollHeight
        ) {
          navIndex = offsetTopArr.length - 1
        }
      }
      this.active = navIndex
    },
  },
}
</script>

<style lang="scss" scoped>
.details {
  width: 1000px;
  display: flex;
  justify-content: space-between;
  .left-side {
    width: 800px;
  }
  .right-side {
    width: 240px;
  }
}
</style>
