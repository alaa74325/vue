<template>
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-3">
                        <ul class="list-group">
                            <li class="list-group-item" @click="isPending()">Not Done</li>
                            <li class="list-group-item" @click="isCompleted()">Completed</li>
                        </ul>
                    </div>
                    <div class="col-md-9">
                        <table class="table table-striped table-sm mt-2">
                            <thead>
                                <tr>
                                    <th>Description</th>
                                    <th> </th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr v-for="task in tasks" :class="{isPending}" :key="task">
                                    <td>
                                        {{task.description}}
                                    </td>
                                    <td>
                                        <button type="button" class="btn btn-success btn-sm float-right" @click="completeTask(task.id)">Done</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
export default {
            data() {
                return {
                    tasks: [
                        {id:1,description:'Alaa task'}

                    ],
                    isPending: false,
                }
            },

            computed: {

            },

            methods: {
                isCompleted(){
                    let complete = this.tasks.find(t => t.completed !== null);

                    this.isPending = true;


                }
            },

            mounted() {

            }
        }
</script>

