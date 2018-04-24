<template>
    <div class="form-wrap">
        <el-form ref="form" :model="formData" :rules="validateRules" label-width="120px" :label-position="labelPosition">
            <el-row>
                <el-col :span="12">
                    <el-form-item label="课程名称" prop="courseName" ><!-- :inline-message="true" -->
                        <el-input v-model="formData.courseName"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="12">
                    <el-form-item label="课程简介" prop="courseIntroduction">
                        <el-input type="textarea" v-model="formData.courseIntroduction"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="12">
                    <el-form-item label="课程积分" prop="eCurrency">
                        <el-input v-model.number="formData.eCurrency"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="12">
                    <el-form-item label="课程类型" prop="courseOnline">
                        <el-radio-group v-model="formData.courseOnline">
                            <el-radio label="Y">线上课程</el-radio>
                            <el-radio label="N">线下课程</el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-col>
            </el-row>

            {{formData}}
        </el-form>
    </div>

</template>
<script>
    export default {
      data() {
        return {
          labelPosition: "top",
          formData: {
            courseName: "",
            courseIntroduction: "",
            eCurrency: "",
            courseOnline: "Y"
          },
          validateRules: {
            courseName: [
              { required: true, message: "请输入课程名称", trigger: "blur" },
              { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
            ],
            courseIntroduction: [
              { required: true, message: "请输入课程简介", trigger: "blur" },
              { min: 1, max: 100, message: "长度在 1 到 100 个字符", trigger: "blur" }
            ],
            eCurrency: [
              { required: true, message: "请输入课程积分", trigger: "blur" },
              { type:"number", min: 3, max: 5, message: "课程积分为 3  到 5 的数字", trigger: "blur" }
            ]
          }
        };
      }
    };
</script>
<style lang="scss" scoped>
    .form-wrap {
      padding: 15px 15px 15px 30px;
    }
</style>


