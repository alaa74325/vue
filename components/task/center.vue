<template>
    <div class="center-content">
        <div class="center-head">
                <h4>Hi Zevanya Casey!</h4>
                <div class="welcome-box div-flex-sp">
                    <h2>Welcome Back <img src="../../assets/images/hello.png" /></h2>
                    <div class="aselect" :data-value="value" :data-list="list">
                        <div class="selector" @click="visible = !visible">
                            <div class="label">
                                    <span>{{ value }}</span>
                            </div>
                            <i class="uil uil-angle-down arrow" v-show="!visible"></i>
                            <i class="uil uil-angle-up arrow"  v-show="visible"></i>
                            <div :class="{ hidden : !visible, visible }">
                                <ul>
                                    <li v-for="item in list" :key="item" @click="select(item)" :class="{ current : item === value }">{{ item }}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content-activity div-flex-sp">
                    <div class="activity-chart chart">
                        <div class="chart-div">
                            <p>Activity <br> <span><strong>50</strong>  hours, <strong>50</strong> min on this week</span></p>
                            <TaskLineChart  :chartData="chartData"
                            :options="chartOptions"
                            class="line-charts" 
                            :width="300"
                            :height="270"
                            />
                        </div>
                    </div>
                    <div class="tasks-data">
                        <h5>Task Summary</h5>
                        <div class="projects">
                            <div class="container-m">
                                <h6><i class="uil uil-clipboard-notes"></i>Project estimate</h6>
                                <div class="div-flex-sp">
                                    <p><i class="uil uil-desktop"></i><br>projects<br><span>23</span></p>
                                    <p class="two"><i class="uil uil-create-dashboard"></i><br>Assigned<br><span>70</span></p>
                                    <p class="last"><i class="uil uil-check"></i><br>Completed<br><span>40</span></p>
                                </div>
                                <div class="footer div-flex-sp">
                                    <p>On time compeltion rate</p>
                                    <span>94%</span>
                                    <span class="last"><i class="uil uil-arrow-up-right"></i>2.3%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        <div class="tasks-content">
                <div class="div-flex-sp">
                    <h4>Tasks</h4>
                    <n-link to="">See All Tasks<i class="uil uil-angle-right"></i></n-link>
                </div>
                <TaskBox></TaskBox>
                <TaskBox></TaskBox>
                <TaskBox></TaskBox>
                <TaskBox></TaskBox>
        </div>
    </div>
</template>
<script>
export default{
data(){
		return{
            value: 'This Week',
			list: ["Today","This Week","This month"],
            visible: false,
            chartData:{
                labels:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],
                datasets:[{
                    data:[1.9,2,2.8,2,2.8,2,2.8,2,2.8,6],
                    axis:{y:10},
                    start:'0',
                    end:'10',
                    borderColor: '#fff',
                    borderWidth:2,
                    color:'#FFF',
                    pointBackgroundColor: '#6A3CFA',
                    pointRadius: 6,
                    pointborderColor:'#fff',
                    pointHoverBackgroundColor: '#6A3CFA',
                    pointHoverRadius: 0,
                    fill: true,
                    backgroundColor:'#7D56FA',
                }
                ]
            },
            chartOptions: {
                maintainAspectRatio: false,
                responsive: true,
                tooltips: {
                    backgroundColor: '#fff',
                    titleFontColor: '#6A3CFA',
                    bodyFontColor: '#6A3CFA',
                    position: 'nearest',
                    mode: 'nearest',
                    intersect: 0,
                    bodySpacing: 4,
                    xPadding: 20,
                },
            }
        }
		},
		methods: {
			toggle() {
                console.log("hi");
				return visible = !visible;
			},
			select(option) {
			    this.value = option;
			}
		}
}
</script>
<style lang="scss" scoped>
$h3Color:#1b2232;
$pColor:#484e5a;
$hColor:#474748;
$spanColor:#9ba3b5;
$fancyColor:#945dff;
$bodyColor:#f3f5f7;
$blueColor:#45bbfe;
$activeColor:#0061ff;
$backColor:#F6F8F9;
.container-m{
    display: block !important;
    width: 91% !important;
}
.div-flex-sp{
    display: flex;
    justify-content: space-between;
}
.center-content{
    .center-head{
        padding: 10px 0;
        border-radius: 15px;
        width: 100%;
        h4{
            color:$hColor;
            font-size: 16px;
        }
        .welcome-box{
            margin-bottom: 15px;
            h2{
                font-size: 23px;
                font-weight: 700;
                line-height: 40px;
                img{
                    width: 20px !important;
                    margin-left:4px;
                }
            } 
            select{
                padding: 6px 10px;
                border-radius: 10px;
                background:  $bodyColor;
                color:$h3Color;
                font-size: 14px;
                font-weight: 700 !important;
                position: relative;
                outline: 0;
                i{
                    position: absolute;
                    top:10px;
                    right: 10px;
                    color:$spanColor;
                }
            }
        }
        .content-activity{
            >div{
                width:49%;
            }
            .activity-chart{
                border-radius: 13px;
                position: relative;
                p{
                    position: absolute;
                    top:20px;
                    left: 40px;
                    color:$h3Color;
                    font-size: 20px;
                    font-weight: 700;
                    span{
                        color:$spanColor;
                        font-size: 15px;
                        font-weight: 400;
                        strong{
                            color:$h3Color
                        }
                        
                    }

                }
            }
            .tasks-data{
                h5{
                    color:$pColor;
                    font-size: 15px;
                    margin: 7px 0 15px;
                }
                .projects{
                    background: #fff;
                    border-radius:10px;

                    h6{
                        color:$pColor;
                        font-size: 13px;
                        margin: 7px 0 12px;
                        font-weight: 600;
                        i{
                            font-size: 16px;
                            margin-right: 6px;
                        }
                    }
                    p{
                        width: 31%;
                        font-size: 11px;
                        text-align: center;
                        color: $bodyColor;
                        background: black;
                        border-radius: 10px;
                        padding: 17px 0;
                        margin-bottom: 7px;
                        line-height: 20px;
                        font-weight: 600;
                        i{
                            width: 33px;
                            line-height: 33px;
                            border-radius: 50%;
                            border:0.5px solid $bodyColor;
                            font-size: 18px;
                            display: inline-block;
                            margin-bottom: 8px;
                        }
                        span{
                            font-weight: 700;
                            font-size: 16px;
                            color: #fff;
                        }
                    }
                    p.two{
                        background: $blueColor;
                    }
                    p.last{
                        background: none;
                        color: $spanColor;
                        box-shadow: 2px 2px 4px 5px $bodyColor;
                        span{
                            color:$fancyColor;
                        }
                        i{
                            border:0.5px solid $spanColor;
                        }    
                    }
                    .footer{
                        margin: 12px 0 0px;
                        p{
                            background: none;
                            font-size: 12px;
                            color:$spanColor;
                            width:60%;
                            font-weight: 700;
                            padding: 0;
                            margin: 0;
                            text-align:left;
                        }
                        span{
                            font-weight: 700;
                            color:$h3Color;
                        }
                        span.last{
                            background: $fancyColor;
                            color:#fff;
                            padding: 1px 3px;
                            border-radius: 5px;
                            font-weight: 100;
                            font-size: 11px;
                            i{
                                font-size: 13px;
                            }
                            
                        }
                    }
                }
            }
        }
        
    }
    .tasks-content{
        padding-top: 6px;
        h4{
            font-size: 17px;
            font-weight: 700;
        }
        a{
            text-decoration: none;
            color: $spanColor;
            font-weight: 500;
            font-size: 14px;
        }
    }
}
@media (max-width:1024px) {
    .col-6-m{
        width: 65%;
    }
    .col-3-m{
        width: 32%;
    }
    .container-m{
        width: 93%;
    }
    .left-side{
        display: none;
    }
    
}
@media (max-width:900px) {
    .posts-content{
        width: 100%;
    }
    .right-side,.left-side{
        display: none;
    }
}
@media (max-width:550px) {
    .content-activity{
        display: block !important;
        >div{
            width: 90% !important;
            margin: 0 auto;
        }
    }
    .container-m{
        width: 95% !important;
    }
}

.aselect {
		.selector {
			background:#fff;
			position: relative;
            z-index: 1;
            border-radius: 16px;
            width: 150px;
			.arrow {
				position: absolute;
				right: 8px;
				top: 4px;
                transition-duration: 0.3s;
                font-size: 26px;
            }
			.label {
				display: block;
				padding: 14px 8px;
				font-size: 15px;
				color: $hColor;
                font-weight: 600;
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
            background: #fff;
		}
		li {
			padding: 12px;
			color: $hColor;
			&:hover {
				color:$fancyColor;
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
	}
</style>
