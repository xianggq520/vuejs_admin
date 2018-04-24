<template>
    <div class="content-wrap">
        <el-row :gutter="30" class="row-bg">
            <el-col :span="6">
                <el-input v-model="input1" placeholder="请输入内容"></el-input>
                <p>输入内容：{{input1}}</p>
            </el-col>
            <el-col :span="6">
                <el-input v-model="input2" placeholder="请输入内容" clearable></el-input>
                <p>输入内容：{{input2}}</p>
            </el-col>
            <el-col :span="6">
                <el-input v-model="input3" placeholder="请输入内容" clearable></el-input>
                <p>输入内容：{{input3}}</p>
            </el-col>
            <el-col :span="6">
                <el-input v-model="input4" placeholder="请输入内容" clearable></el-input>
                <p>输入内容：{{input4}}</p>
            </el-col>
        </el-row>

        <el-row :gutter="30" class="row-bg">
            <el-col :span="3" tag="label">
                属性方式：
            </el-col>
            <el-col :span="10">
                <el-input placeholder="请选择日期" suffix-icon="el-icon-date" v-model="input2">
                </el-input>
            </el-col>
            <el-col :span="11">
                <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input2">
                </el-input>
            </el-col>
        </el-row>
        <el-row :gutter="30" class="row-bg">
            <el-col :span="3" tag="label">
                slot 方式：
            </el-col>
            <el-col :span="10">
                <el-input placeholder="请选择日期" v-model="input3">
                    <i slot="suffix" class="el-input__icon el-icon-date"></i>
                </el-input>
            </el-col>
            <el-col :span="11">
                <el-input placeholder="请输入内容" v-model="input4">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
            </el-col>
        </el-row>

        <el-row :gutter="30" class="row-bg">
            <el-col :span="3" tag="label">
                textarea
            </el-col>
            <el-col :span="7">
                <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea1">
                </el-input>
            </el-col>
            <el-col :span="7">
                <el-input type="textarea" autosize placeholder="请输入内容" v-model="textarea2">
                </el-input>
            </el-col>
            <el-col :span="7">
                <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" v-model="textarea3">
                </el-input>
            </el-col>
        </el-row>

        <el-row :gutter="30" class="row-bg">
            <el-col :span="6">
                <el-input placeholder="请输入内容" v-model="input3">
                    <template slot="prepend">Http://</template>
                </el-input>
            </el-col>
            <el-col :span="6">
                <el-input placeholder="请输入内容" v-model="input4">
                    <template slot="append">.com</template>
                </el-input>
            </el-col>
            <el-col :span="12">
                <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
                    <el-select class="input-select" v-model="select" slot="prepend" placeholder="请选择">
                        <el-option label="餐厅名" value="1"></el-option>
                        <el-option label="订单号" value="2"></el-option>
                        <el-option label="用户电话" value="3"></el-option>
                    </el-select>
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </el-col>
        </el-row>  

    </div>
</template>
<script>
    export default {
      data() {
        return {
          input1: "",
          input2: "",
          input3: "",
          input4: "",
          input5: "",
          textarea1: "",
          textarea2: "",
          textarea3: "",
          select:""
        };
      }
    };
</script>
<style lang="scss" scoped>
    .content-wrap {
      padding: 15px;
    }
    .el-row {
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    .el-select {
        width: 150px;
    }
</style>
