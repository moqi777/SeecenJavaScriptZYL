<template>
    <h1>产品</h1>
    <el-button type="primary" @click="showAddDialog = true">增加</el-button>
    <el-table border :data="goods" style="width: 100%;">
        <el-table-column fixed type="selection" width="50"/>
        <el-table-column prop="id" label="ID" width="100"/>
        <el-table-column prop="name" label="名称" width="100"/>
        <el-table-column prop="price" label="价格" width="100"/>
        <el-table-column prop="stock" label="库存" width="100"/>
        <el-table-column label="操作" width="120">
            <template #default="scope">
                <el-button type="success" icon="edit" circle size="small"/>
                <el-button type="danger" icon="delete" circle size="small" @click="del(scope.row.id)"/>
            </template>
        </el-table-column>
    </el-table>

    <el-dialog v-model="showAddDialog" title="增加产品" style="width: 40%;height:300px;">
        <el-form label-width="auto" style="max-width: 80%;">
            <el-form-item label="产品名称：">
                <el-input v-model="addFrom.name"/>
            </el-form-item>
            <el-form-item label="产品价格：">
                <el-input-number v-model="addFrom.price"/>
            </el-form-item>
            <el-form-item label="库存：">
                <el-input-number v-model="addFrom.stock"/>
            </el-form-item>
            <el-button type="primary" @click="doAdd">提交</el-button>
        </el-form>
    </el-dialog>
</template>

<script setup>
    import { ref } from 'vue';
    let showAddDialog = ref(false)
    let addFrom = ref({stock:10})
    let goods = ref([
        {id:1,name:"手机",price:7000,stock:300},
        {id:3,name:"电脑",price:8000,stock:200},
        {id:4,name:"U盘",price:80,stock:500},
        {id:6,name:"显卡",price:1200,stock:250},
        {id:7,name:"金士顿内存",price:500,stock:300},
        {id:8,name:"SSD",price:500,stock:600}
    ])

    const del = id=>{
        goods.value.forEach((item,index)=>{
            if (item.id == id) {
                goods.value.splice(index,1);
            }
        })
    }

    const doAdd =()=>{
        addFrom.value.id=goods.value[goods.value.length-1].id+1;
        goods.value.push(addFrom.value);
        showAddDialog.value = false;
        addFrom.value = {};
    }
</script>