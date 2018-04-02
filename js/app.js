(function () {
	const todos = [
		{
			id: 1,
			title: '看电影',
			done: true 
		},
		{
			id: 2,
			title: '写作业',
			done: false 
		},
		{
			id: 3,
			title: '看书',
			done: true 
		},
		{
			id: 4,
			title: '放风筝',
			done: false 
		}
	]
	new Vue({
		el: '#todoapp',
		data: {
			todos,
			inputText: '',
			currentEdit: null,
			backTitle: null //取消编辑的时候，备份一下原始的内容
		},
		methods: {
			addTodo: function (e){
				const {inputText,todos} = this;
				//拿到文本框数据
				//非空较验
				//添加到数组中
				//清空文本框
				if (inputText.trim().length === 0) {
					return;
				};
				const lastItem = todos[todos.length-1];
				const id = lastItem ? lastItem.id + 1 : 1;
				todos.push({
					//处理id
					id: id,
					title: inputText,
					done: false
				})
				this.inputText = '';
			},
			//删除某项
			removeTodo: function (index){
				this.todos.splice(index,1);
			},
			//获取编辑的当前项的样式
			getEditing: function (item){
				//console.log(item);
				this.currentEdit = item;
				this.backTitle = item.title;
			},
			//编辑后的保存
			saveEdit: function (item,index){
				//判断被编辑的任务项是否为空，空删除，不空保存，去除编辑样式
				if (item.title.trim().length === 0) {
					this.todos.splice(index,1);
				}else {
					//双向绑定，所以回车就自动保存编辑了
					this.currentEdit = null
				};
			},
			//取消编辑
			//取消编辑的时候同时触发了失去焦点的事件
			cancelEdit: function(){
				this.currentEdit = this.backTitle;
				this.currentEdit = null;
			}

		}
	})
})();
