<template>
    <div class="left-content">
        <div class="head-content">
            <div class="container-m">
                <button @click="addTask=!addTask">
                    Create new task 
                    <i class="uil uil-plus-circle"></i>
                </button>
                <n-link to="">Overview</n-link>
                <div class="task-pop" v-if="!addTask">
                    <div class="pop-body">
                        <div class="main-div">
                            <div class="main-head">
                                <p>Create Task</p>
                                <button>
                                    <span :class="{spanP: !statusP}" @click="statusToggle"></span>
                                    {{status}}
                                </button>
                                <button><i class="uil uil-link-alt"></i></button>
                            </div>
                            <div class="main-content">
                                <label>Task Name</label>
                                <input type="text" placeholder="Enter Task Title">
                                <div class="text-area">
                                    <label>Description</label>
                                    <textarea placeholder="Enter Description" wrap="off" rows="5"></textarea>
                                    <div class="text-area-footer">
                                        <span>
                                            <i class="uil uil-paperclip"></i>
                                            <input type="file">
                                        </span>
                                        <span>
                                            <i class="uil uil-image-plus"></i>
                                            <input type="file" accept="image/*" placeholder="image">
                                        </span>
                                        <span>
                                            <i class="uil uil-smile"></i>
                                        </span>
                                    </div>
                                </div>
                                <div class="sub-task">
                                    <h5>Sub Tasks</h5>
                                    <div  v-for="i in subTasks" :key="i">
                                        <i class="uil uil-list-ui-alt"></i>
                                        <input type="checkbox" :id="i">
                                        <label :for="i">{{i}}</label>
                                    </div>
                                    <div class="add-subtask">
                                        <input type="text" placeholder="Enter Sub Task" v-model="subTask">
                                        <button @click="addSubTask(subTask)">Add Sub Task</button>
                                    </div>
                                </div>
                            </div>
                            <div class="main-footer">
                                <button><i class="uil uil-paperclip"></i>Attachment</button>
                                <button><i class="uil uil-link"></i>Relationship</button>
                                <button><i class="uil uil-stopwatch"></i>Alert</button>
                                <button><i class="uil uil-ellipsis-h"></i>More</button>
                            </div>
                        </div>
                        <div class="side-div">
                            <div class="create-option">
                                <label>Status</label>
                                <div class="aselect" :data-value="value" :data-list="list">
                                    <div class="selector" @click="visible = !visible">
                                        <div class="label">
                                                <span :class="{first: value==='In Progress',second: value==='Comming Soon',third: value==='Completed'}">{{ value }}</span>
                                        </div>
                                        <div :class="{ hidden : !visible, visible }">
                                            <ul>
                                                <li v-for="item in list" :key="item" @click="select(item)" :class="{ current : item === value }">{{ item }}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="create-option">
                                <label>Priority</label>
                                <div class="aselect" :data-value="valueP" :data-list="priority">
                                    <div class="selector" @click="visibleP = !visibleP">
                                        <div class="label">
                                                <span :class="{high: valueP==='High',medium: valueP==='Medium',low: valueP==='Low'}">{{ valueP }}</span>
                                        </div>
                                        <div :class="{ hiddenP : !visibleP, visibleP }">
                                            <ul>
                                                <li v-for="i in priority" :key="i" @click="selectP(i)" :class="{ currentP : i === valueP }">{{ i }}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div  class="create-option">
                                <label>Assignee</label>
                                <div class="aselect" :data-value="valueP" :data-list="assigne">
                                    <div class="selector" @click="visibleA = !visibleA">
                                        <div class="label">
                                            <span :class="{first: valueA==='In Progress'}">{{ valueA }}</span>
                                        </div>
                                        <div :class="{ hidden : !visibleA, visible }">
                                            <ul id="myMenu">
                                                <li v-for="a in assigne" :key="a" @click="selectA(a)" :class="{ current : a === valueA }">{{ a }}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="create-option">
                                <label>Due date</label>
                                <input type="date">
                            </div>
                            <div class="footer">
                                <button><i class="uil uil-plus"></i>Create</button>
                                <button class="cancel" @click="addTask=!addTask">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="groups">
            <div class="container-m">
                <button class="categ"><i class="uil uil-calender"></i>Today</button>
                <input type="checkbox" id="categ">
                <label for="categ">Uncategorized</label>
            </div>
            <TaskGroup></TaskGroup>
            <TaskGroup></TaskGroup>
        </div>
    </div>
</template>
<style scoped lang="scss">
$h3Color:#1b2232;
$hColor:#484e5a;
$pColor:#5a5f6a;
$spanColor:#9ba3b5;
$fancyColor:#945dff;
$bodyColor:#f3f5f7;
$activeColor:#0061ff;
.container-m{
    display: block !important;
}
.left-content{
    background:#fff;
    padding: 10px 0;
    border-radius: 13px;
}
.head-content{
    button{
        color: $h3Color;
        font-size: 17px;
        font-weight: 600;
        background: #f3f5f7;
        border-radius: 12px;
        padding: 8px 10px;
        display: block;
        i{
            color:$activeColor;
            font-size: 21px;
        }
    }
    a{
        text-decoration: none;
        background: $activeColor;
        color: #fff;
        border-radius: 12px;
        padding: 8px 0;
        display: block;
        margin: 10px auto;
        text-align: center;
    }
}
.categ{
    display: block;
    background: $bodyColor;
    padding: 6px 5px;
    width: 100%;
    border-radius: 10px;
    text-align: left;
    color: $activeColor;
    font-weight: 500;
    font-size: 15px;
    margin-bottom: 10px;
    i{
        font-size: 17px;
        margin-right: 5px;
    }
}
input#categ{
    color: $spanColor;
    margin-left: 5px;

}
label{
    color: $spanColor;
    font-size: 15px;
    font-weight: 500;
}
/* pop styling */
.task-pop{
    position: fixed;
    width: 100%;
    height: 100vh;
    background: rgba(15,22,38,0.92157);
    top: 0;
    left: 0;
    z-index: 100;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    justify-content: center;
    transition: all 1s ease-in-out;
    .pop-body{
        width:70%;
        margin: 0 auto;
        background: #fff;
        display: flex;
        justify-content: space-between;
        border-radius: 15px;
        overflow: hidden;
        .main-div{
            width: 68%;
            background: $bodyColor;
            padding: 15px 20px;
            .main-head{
                display: flex;
                margin: auto;
                margin-bottom: 15px;
                width: 97%;
                p{
                    width: 75%;
                    font-size: 16px;
                    font-weight: 700;
                    line-height: 30px;
                    color:$hColor;
                }
                button{
                    width: 17%;
                    font-size: 15px;
                    line-height: 15px;
                    align-content: center;
                    display: flex;
                    flex-direction: inherit;
                    transition: all 1s ease-in-out;
                    span{
                        width: 45px;
                        height: 20px;
                        background: #00b1ff;
                        border-radius: 10px;
                        position: relative;
                        display: inline-block;
                        margin-right: 5px;
                    }
                    span::before{
                        width: 15px;
                        height: 15px;
                        border-radius: 50%;
                        background: #f3f5f7;
                        content: "";
                        position: absolute;
                        top: 2.5px;
                        right: 2px;
                        z-index: 1;
                        transition: all 1s ease-in-out;
                    }
                    .spanP{
                        background:#c94054;
                    }
                    .spanP::before{
                        left:2px
                    }
                }
                button:last-of-type{
                    width: 8%;
                    i{
                        color:$spanColor;
                        font-weight: 600;
                    }
                }
            }
            .main-content{
                width:92%;
                margin:15px auto;
                input{
                    width: 100%;
                    display: block;
                    background: #fff;
                    outline: none;
                    border-radius: 6px;
                    line-height: 20px;
                    font-size: 14px;
                    color:$hColor;
                    padding:6px ;
                    font-weight: 500;
                }
                label{
                    font-size: 15px;
                    font-weight: 500;
                    display: inline-block;
                    margin-bottom: 8px;
                    color:$hColor
                }
                .text-area{
                    position: relative;
                    margin: 15px auto;
                    overflow: hidden;
                    textarea{
                        height: 100px ;
                        resize: none;
                        width: 100%;
                        background: #fff;
                        border-radius:6px  ;
                        padding: 5px;
                        margin-bottom: 25px;
                        outline: none;
                        overflow: hidden;
                        padding-bottom: 10px;
                    }
                    .text-area-footer{
                        border-top: 1px solid $bodyColor;
                        width: 100%;
                        line-height: 25px;
                        background: #fff;
                        position: absolute;
                        left:0;
                        right: 0;
                        bottom: 8px;
                        border-radius: 6px;
                        padding: 4px;
                        span{
                            margin-right: 6px;
                            position: relative;
                            display: inline-block;
                            cursor: pointer;
                            i{
                                color:$spanColor;
                                font-size: 19px;
                            }
                            input{
                                opacity: 0;
                                outline: 0;
                                position: absolute;
                                top: -7px;
                                cursor: pointer;
                            }
                        }
                    }
                }
                .sub-task{
                    overflow: hidden;
                    border-left: 2px solid rgb(214, 210, 210);
                    padding-left: 15px;
                    h5{
                        color:$hColor;
                        font-size: 15px;
                        margin-bottom: 15px;
                    }
                    >div{
                        display: flex;
                        input{
                            display: inline-block;
                            width: auto;
                            height: 25px;
                            width: 14px;
                            margin: 0 8px;
                        }
                        label{
                            font-size: 14px;
                            color:$spanColor;
                            font-weight: 600;
                        }
                        i{
                            color:$spanColor;
                            font-size: 20px;
                            line-height: 20px;
                        }
                    }
                    .add-subtask{
                        display: block;
                        margin: 10px 0;
                        input{
                            width: 100%;
                            padding: 7px;
                            font-size: 12px;
                            margin: 0;
                            display: block;
                            height: auto;
                        }
                        input:focus{
                            border: 2px solid #17d2f0;
                        }
                        button{
                            position: relative;
                            padding: 4px;
                            background: #00b1ff;
                            border: 0;
                            color: #fff;
                            border-radius: 6px;
                            font-size: 14px;
                            margin-top: 10px;
                            display: inline-block;
                            right: -84%;
                        }
                }
                }
            }
            .main-footer{
                display: flex;
                width: 97%;
                margin:15px  auto;
                button{
                    outline:none;
                    background: #fff;
                    border: 1px solid #eee;
                    border-radius: 6px;
                    line-height: 15px;
                    text-align: center;
                    font-size: 15px;
                    font-weight: 500;
                    margin-right: 15px;
                    color: $pColor;
                    i{
                        margin-right: 5px ;
                        font-size: 19px;
                        color: $spanColor;
                    }
                }
            }
        }
        .side-div{
            width: 32%;
            margin-top: 30px;
            position: relative;
            .create-option{
                width: 90%;
                margin: 18px auto;
                display: flex;
                label{
                    font-size: 15px;
                    width: 30%;
                    color: $hColor;
                }
                select{
                    outline: none;
                    color:red;
                    font-size: 14px;
                    font-weight: 600;
                    option{
                        font-size: 14px;
                        font-weight: 600;
                        padding: 5px 6px;
                    }
                }
            }
            .footer{
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                display: flex;
                justify-content: flex-end;
                button{
                    line-height: 30px;
                    color: #fff;
                    font-size: 15px;
                    font-weight: 600;
                    border-radius: 12px;
                    padding: 6px 9px;
                    width: 30%;
                    margin: 12px;
                    background: #00b1ff;
                    i{
                        line-height: 30px;
                        font-size: 17px;
                        color: #fff;
                        margin-right: 5px;
                    }
                }
                button:last-of-type{
                    background: #e02e2e;
                }
            }
        }
    }
}
/* End Pop up */
/* Starting dropdown menu */
.aselect {
		.selector {
			background:#fff;
			position: relative;
            border-radius: 16px;
            width: 150px;
			cursor: pointer;
			.label {
				display: block;
				font-size: 14px;
				color: $hColor;
                font-weight: 600;
                span{
                    width: 100%;
                    display: inline-block;
                    padding: 5px 21px;
                    border-radius: 9px;
                    position: relative;
                }
                span::before{
                    position: absolute;
                    content: "";
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    top: 42%;
                    left: 9px;
                }
                $colors: #E74C3C, #0072B5, #2C3E50;
                @for $i from 1 through length($colors) {
                span:nth-child(#{$i}) {
                    border-left: 0px solid nth($colors, $i);
                }
                }
			}
		}
		ul {
			width: 100%;
			list-style-type: none;
            border-radius: 8px;
            overflow: hidden;
            padding: 0;
            margin: 0;
			font-size: 15px;
            color: $hColor;
            font-weight: 600;
			position: absolute;
			z-index: 1;
            background:$bodyColor;
		}
		li {
			padding: 12px;
			color: $hColor;
			&:hover {
				color:$activeColor;
			}
		}
		.current {
			background: #eaeaea;
		}
		.hidden {
			visibility: hidden;
		}
		.visible {
			visibility: visible;
		}
        .currentP {
			background: #eaeaea;
		}
		.hiddenP {
			visibility: hidden;
		}
		.visibleP {
			visibility: visible;
		}
	}
.high{
    background:#fed1d8;
}
.high::before{
    background: #c94054;
} 
/*
.medium{
    background:#fed1d8;
}
.medium::before{
    background: #c94054;
}
.low{
    background:#fed1d8;
}
.low::before{
    background: #c94054;
}*/   
.first,.medium{
    background: #fdf0d0;
}
.first::before,.medium::before{
    background:#cea73e;
} 
.second,.low{
    background: #8de5f3;
    padding: 5px 5px 5px 21px !important;
} 
.second::before,.low::before{
    background: #17d2f0;
} 
.third{
    background:#a5eed0;
} 
.third::before{
    background: #19f096;
} 
/* End styling dorpdown */
/* Start assigned with */
</style>
<script>
export default{
    data(){
		return{
            value: 'In Progress',
			list: ["In Progress","Comming Soon","Completed"],
            visible: false, 
            addTask:false,
            priority: ["High","Medium","Low"],
            valueP:'High',
            visibleP: false,
            assigne:["Alaa","Ali","Ahmed"],
            valueA:'Alaa',
            visibleA: false,
            statusP:true,
            status:'Public',
            subTask:'',
            subTasks:['Suggest a Discussion of statistics','Design create task page']
        }
		},
    methods: {
        select(option) {
            this.value = option;
        },
        selectP(p) {
            this.valueP = p;
        },
        selectA(a) {
            this.valueA = a;
        },
        statusToggle(){
            this.statusP=!this.statusP;
            if(this.status=='Public'){
                return this.status='Private';
            }else{
                return this.status='Public';
            }
        },
        myFunction() {
            let input, filter, ul, li, a, i;
            input = document.getElementById("mySearch");
            filter = input.value.toUpperCase();
            ul = document.getElementById("myMenu");
            li = ul.getElementsByTagName("li");
            for (i = 0; i < li.length; i++) {
                a=li[i];
                if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
                } else {
                li[i].style.display = "none";
                }
            }
            },
        addSubTask(v){
            return this.subTasks.push(v);
        }    
    }
}
</script>
