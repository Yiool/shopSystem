<template>
	<div>
		<brand-rumb :links="navLinks"></brand-rumb>
		<div class="windowframe">
			<div class="search-input">
				<el-input placeholder="请输入单号" icon="search" v-model="input2" :on-icon-click="handleIconClick">
				</el-input>
			</div>
			<div>
				<el-table :data="tableData" border style="width: 100%">
					<el-table-column label="订单号" width="180">
						<template scope="scope">
							<span style="margin-left: 10px">{{ scope.row.date }}</span>
						</template>
					</el-table-column>
					<el-table-column label="姓名" width="180">
						<template scope="scope">
							<!--<el-popover trigger="hover" placement="top">-->
							<span> {{ scope.row.name }}</span>
							<!--<p>住址: {{ scope.row.address }}</p>
								<div slot="reference" class="name-wrapper">
									<el-tag>{{ scope.row.name }}</el-tag>
								</div>-->
							<!--</el-popover>-->
						</template>
					</el-table-column>
					<el-table-column label="地址">
						<template scope="scope">
							<!--<el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
							<el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
						-->
							<span> {{scope.row.address}}</span>
						</template>
					</el-table-column>
				</el-table>
				<div class="m-pagination f-fr">
					<el-pagination layout="prev, pager, next" :total="1000">
					</el-pagination>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import brandRumb from '../../../components/BreadCrumb.vue'
	export default {
		data() {
				return {
					input2: '',
					navLinks: [{
						title: '订单管理',
						path: '/home/order'
					}, {
						title: '订单列表',
						path: '/home/order/list'
					}],
					tableData: [{ //表单数据，后面从后台获取
						date: '2016-05-02',
						order_sn: "26689888635",
						name: '王小虎',
						address: '上海市普陀区金沙江路 1518 弄',
						mobile: '13554407111',
					}, {
						date: '2016-05-04',
						name: '王小虎',
						address: '上海市普陀区金沙江路 1517 弄'
					}, {
						date: '2016-05-01',
						name: '王小虎',
						address: '上海市普陀区金沙江路 1519 弄'
					}, {
						date: '2016-05-03',
						name: '王小虎',
						address: '上海市普陀区金沙江路 1516 弄'
					}]
				}
			},
			components: {
				brandRumb
			},
			created() {

			},
			methods: {
				handleIconClick(ev) {
					console.log(ev);
				},
				handleEdit(index, row) {
					console.log(index, row);
				},
				handleDelete(index, row) {
					console.log(index, row);
				}
			}
	}
</script>
<style scoped>
	.search-input {
		width: 300px;
		margin-bottom: 20px;
	}
	.m-pagination {
    margin:20px 20px 20px 0;
  }
</style>