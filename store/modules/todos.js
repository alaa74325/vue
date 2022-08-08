import axios from 'axios'
export default {
    state: {
        todos: []
    },
    getters: {
      gettodos: (state) => state.todos
    },
    actions: {
      async fetchTodos({ commit }) {
          try {
            const data = await axios.get('https://gp.maleskndrany.com/api/student/todos')
              commit('SET_TODOS', data.data)
            }
            catch (error) {
                alert(error)
                console.log(error)
            }
        }
    },
    mutations: {
        SET_TODOS(state, users) {
          state.todos = todos
      }
    }
}