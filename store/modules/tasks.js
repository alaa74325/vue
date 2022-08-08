import axios from 'axios'
export default {
    state: {
        tasks: []
    },
    getters: {
        gettodos: (state) => state.tasks
    },
    actions: {
        async gettasks({ commit }) {
            const tasks= await axios.post('https://gp.maleskndrany.com/api/student/tasks')
            return tasks;
        }
    },
    mutations: {
        SET_TODOS(state, tasks) {
            state.tasks = tasks
        }
    }
}