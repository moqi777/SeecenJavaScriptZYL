<template>
    <h1>产品</h1>
    <p>
        <el-button type="primary" @click="showAddDialog = true">增加</el-button>
    </p>
    <el-table border :data="goods">
        <el-table-column fixes="left" type="selection" width="50px"></el-table-column>
        <el-table-column width="100" label="产品ID" prop="id"></el-table-column>
        <el-table-column width="100" label="产品名" prop="name"></el-table-column>
        <el-table-column width="100" label="价格" prop="price"></el-table-column>
        <el-table-column width="100" label="库存" prop="stock"></el-table-column>
        <el-table-column width="120" label="操作">
            <template #default="scope">
                <el-button type="success" size="small" circle icon="edit"></el-button>
                <el-button type="danger" @click="del(scope.row.id)" size="small" circle icon="delete"></el-button>
            </template>
        </el-table-column>
    </el-table>

    <el-dialog style="width: 40%;height:350px;" v-model="showAddDialog">
        <el-form label-width="auto" style="max-width: 80%;">
            <el-form-item label="产品名称：">
                <!-- 在组件中会自动加载ref，所以不需要.value -->
                <el-input v-model="addForm.name"></el-input>
            </el-form-item>
            <el-form-item label="产品价格：">
                <el-input-number v-model="addForm.price"></el-input-number>
            </el-form-item>
            <el-form-item label="库存：">
                <el-input-number v-model="addForm.stock"></el-input-number>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" style="margin: auto;" @click="doAdd()">增加</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>
</template>

<!-- setup 组合式API 的标识 -->
<!-- 原先的是选项式API -->
<script setup>
    /*
    ref 是vue中的一个响应式函数
    响应式：即类似于双向绑定，一起动作
    在选项式API中的数据默认是响应式的，组合式API是非响应式的
    所以需要使用ref函数使其变成响应式的
    */
    import { ref } from 'vue'   

    let showAddDialog = ref(false);

    let addForm = ref({name:'',price:'',stock:10}); 

    let goods = ref([
        {id:1,name:"手机",price:7000,stock:300},
        {id:3,name:"电脑",price:8000,stock:200},
        {id:4,name:"U盘",price:80,stock:500},
        {id:6,name:"显卡",price:1200,stock:250},
        {id:7,name:"金士顿内存",price:500,stock:300},
        {id:8,name:"SSD",price:500,stock:600}
    ]);

    const del = id =>{
        //使用了ref后goods不单单只是个数组了，所以需要.value
        goods.value.forEach((item,i) => {
            if(item.id == id){
                //删除i位置开始的1个数据
                goods.value.splice(i,1);
            }
        })
    }

    const doAdd = ()=>{
        //会自动增加id字段，动态增加
        addForm.value.id = goods.value[goods.value.length-1].id +1;
        goods.value.push(addForm.value);
        showAddDialog.value = false;
        //删除原来的数组
        addForm.value = {id:'',name:'',price:'',stock:10};
    }
</script>