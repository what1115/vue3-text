<template>
  <div class="todo-container">
    <h1>📝 待办事项</h1>
    
    <!-- 输入区域 -->
    <div class="input-section">
      <input 
        v-model="newTodo" 
        @keyup.enter="addTodo" 
        placeholder="添加新的待办事项..."
        class="todo-input"
      />
      <button @click="addTodo" class="add-btn">添加</button>
    </div>

    <!-- 过滤选项 -->
    <div class="filter-section">
      <button 
        :class="{ active: filter === 'all' }" 
        @click="filter = 'all'"
      >
        全部
      </button>
      <button 
        :class="{ active: filter === 'active' }" 
        @click="filter = 'active'"
      >
        未完成
      </button>
      <button 
        :class="{ active: filter === 'completed' }" 
        @click="filter = 'completed'"
      >
        已完成
      </button>
    </div>

    <!-- 待办列表 -->
    <ul class="todo-list">
      <li 
        v-for="todo in filteredTodos" 
        :key="todo.id" 
        class="todo-item"
        :class="{ completed: todo.completed }"
      >
        <input 
          type="checkbox" 
          v-model="todo.completed" 
          class="checkbox"
        />
        <span class="todo-text">{{ todo.text }}</span>
        <button @click="deleteTodo(todo.id)" class="delete-btn">删除</button>
      </li>
    </ul>

    <!-- 空状态提示 -->
    <div v-if="filteredTodos.length === 0" class="empty-state">
      <p>暂无待办事项</p>
    </div>

    <!-- 底部统计 -->
    <div class="footer">
      <span>{{ activeCount }} 项未完成</span>
      <button @click="clearCompleted" class="clear-btn" v-if="completedCount > 0">
        清除已完成
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

// 响应式数据
const newTodo = ref('')
const todos = ref([])
const filter = ref('all') // 'all', 'active', 'completed'

// 从 localStorage 加载数据
onMounted(() => {
  const saved = localStorage.getItem('todos')
  if (saved) {
    todos.value = JSON.parse(saved)
  }
})

// 监听变化并保存到 localStorage
const saveToLocalStorage = () => {
  localStorage.setItem('todos', JSON.stringify(todos.value))
}

// 计算属性：过滤后的列表
const filteredTodos = computed(() => {
  switch (filter.value) {
    case 'active':
      return todos.value.filter(todo => !todo.completed)
    case 'completed':
      return todos.value.filter(todo => todo.completed)
    default:
      return todos.value
  }
})

// 计算属性：未完成的数量
const activeCount = computed(() => {
  return todos.value.filter(todo => !todo.completed).length
})

// 计算属性：已完成的数量
const completedCount = computed(() => {
  return todos.value.filter(todo => todo.completed).length
})

// 方法：添加待办
const addTodo = () => {
  if (newTodo.value.trim() === '') return
  
  todos.value.push({
    id: Date.now(),
    text: newTodo.value.trim(),
    completed: false
  })
  
  newTodo.value = ''
  saveToLocalStorage()
}

// 方法：删除待办
const deleteTodo = (id) => {
  todos.value = todos.value.filter(todo => todo.id !== id)
  saveToLocalStorage()
}

// 方法：清除已完成
const clearCompleted = () => {
  todos.value = todos.value.filter(todo => !todo.completed)
  saveToLocalStorage()
}
</script>

<style scoped>
.todo-container {
  max-width: 500px;
  margin: 40px auto;
  padding: 30px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 30px;
  font-size: 28px;
}

.input-section {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.todo-input {
  flex: 1;
  padding: 12px 16px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s;
}

.todo-input:focus {
  outline: none;
  border-color: #42b983;
}

.add-btn {
  padding: 12px 24px;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;
}

.add-btn:hover {
  background: #369970;
}

.filter-section {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.filter-section button {
  padding: 8px 16px;
  border: 1px solid #e0e0e0;
  background: white;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s;
}

.filter-section button.active {
  background: #42b983;
  color: white;
  border-color: #42b983;
}

.filter-section button:hover:not(.active) {
  background: #f5f5f5;
}

.todo-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.todo-item {
  display: flex;
  align-items: center;
  padding: 12px;
  border-bottom: 1px solid #f0f0f0;
  transition: background 0.3s;
}

.todo-item:last-child {
  border-bottom: none;
}

.todo-item:hover {
  background: #f9f9f9;
}

.todo-item.completed .todo-text {
  text-decoration: line-through;
  color: #999;
}

.checkbox {
  margin-right: 12px;
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.todo-text {
  flex: 1;
  font-size: 16px;
  color: #333;
}

.delete-btn {
  padding: 6px 12px;
  background: #ff6b6b;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.3s;
}

.delete-btn:hover {
  background: #ee5a5a;
}

.empty-state {
  text-align: center;
  padding: 40px 0;
  color: #999;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #f0f0f0;
  color: #666;
  font-size: 14px;
}

.clear-btn {
  padding: 6px 12px;
  background: transparent;
  color: #666;
  border: 1px solid #ddd;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s;
}

.clear-btn:hover {
  background: #f5f5f5;
  color: #333;
}
</style>
