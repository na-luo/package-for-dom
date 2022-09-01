// const div = dom.create("<div>newDiv</div>");
// console.log(div);
// dom.before(test, div);
// const div3 = dom.create("<div>div3333</div>")
// dom.wrap(div2,div3)
// const nodes = dom.empty(window.empty)
// console.log(nodes);

// dom.attr(test, 'title', 'hello');
// const title = dom.attr(test,'title')
// console.log(`title: ${title}`)

// dom.text(test, '你好，7头')

// dom.style(test, {border: '1px solid red', color:'red'})
// dom.style(test, 'color','green')

// dom.class.add(test, 'red')
// dom.class.add(test, 'blue')
// dom.class.remove(test, 'blue')
// console.log(dom.class.has(test,'blue'));



// dom.on(test, 'click',()=>{
//     console.log("点击了");
// })

// const testDiv = dom.find('#test')[0]
// console.log(testDiv)

// const test2 = dom.find('#test2')[0]

// const s2 = dom.find('#s2')[0]

// console.log(s2)
// console.log(dom.siblings(s2));
// console.log(dom.next(s2));
// console.log(dom.previous(s2));

// const t = dom.find('#travel')[0]
// dom.each(dom.children(t),(n)=>dom.style(n,'color','red'))

// console.log(dom.index(s2))

const div = dom.find('#test>.red')[0] // 获取对应的元素
dom.style(div, 'color', 'green') // 设置 div.style.color

const divList = dom.find('.red') // 获取多个 div.red 元素
dom.each(divList, (n)=> console.log(n)) // 遍历 divList 里的所有元素