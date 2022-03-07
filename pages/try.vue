<template>
    <div class="chart">
        <div class="aselect" :data-value="value" :data-list="list">
                        <div class="selector" @click="visible = !visible">
                            <div class="label">
                                    <span>{{ value }}</span>
                            </div>
                            <div class="arrow" :class="{ expanded : visible }"></div>
                            <div :class="{ hidden : !visible, visible }">
                                <ul>
                                    <li v-for="item in list" :key="item" @click="select(item)" :class="{ current : item === value }">{{ item }}</li>
                                </ul>
                            </div>
                        </div>
        </div>
    </div>
</template>
<script>
export default{
    data(){
		return{
            value: 'This Week',
			list: ["Today","This Week","This month"],
            visible: false
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
.aselect {
		.selector {
			background: #F8F8F8;
			position: relative;
            z-index: 1;
            border-radius: 16px;
			.arrow {
				position: absolute;
				right: 10px;
				top: 40%;
				width: 0;
				height: 0;
				border-left: 7px solid transparent;
				border-right: 7px solid transparent;
				border-top: 10px solid #888;
				transform: rotateZ(0deg) translateY(0px);
				transition-duration: 0.3s;
				transition-timing-function: cubic-bezier(.59,1.39,.37,1.01);
			}
			.expanded {
				transform: rotateZ(180deg) translateY(2px);
			}
			.label {
				display: block;
				padding: 12px;
				font-size: 16px;
				color: #888;
			}
		}
		ul {
			width: 100%;
			list-style-type: none;
      padding: 0;
      margin: 0;
			font-size: 16px;
			border: 1px solid gainsboro;
			position: absolute;
			z-index: 1;
      background: #fff;
		}
		li {
			padding: 12px;
			color: #666;
			&:hover {
				color: white;
				background: seagreen;
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