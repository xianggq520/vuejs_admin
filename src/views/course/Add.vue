<template>
    <div class="form-wrap">
        <el-form ref="form" :model="formData" :rules="validateRules" label-width="120px" :label-position="labelPosition" :status-icon="false">
            <el-row>
                <el-col :span="12">
                    <el-form-item label="课程名称" prop="courseName">
                        <!-- :inline-message="true" -->
                        <el-input v-model="formData.courseName" autofocus></el-input>
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

            <el-row>
                <el-col :span="12">
                    <el-form-item label="课程分类" prop="type">
                        <el-checkbox-group v-model="formData.type">
                            <el-checkbox v-for="classify in classifies" :label="classify.id" name="type" :key="classify.id">{{classify.label}}</el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="12">
                    <el-form-item label="课程封面" prop="fileList">
                        <el-upload class="upload-demo" ref="upload" action="http://admin.test.moxueyuan.net/enterpriseuniversity/services/file/upload/courseImg" multiple :auto-upload="true" :on-change="handleChange" :limit="10" :on-exceed="handleExceed" :before-upload="beforeUpload" :on-success="handleSuccess" :on-error="handleError" :on-progress="handleProgress" :on-preview="handlePreview" :before-remove="beforeRemove" :on-remove="handleRemove" :file-list="formData.fileList">
                            <!-- picture-card -->
                            <el-button size="small" type="primary">点击上传</el-button>
                            <!-- <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                            <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button> -->
                            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                        </el-upload>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="12">
                    <el-form-item>
                        <el-button type="primary" @click="submit('form')">保存</el-button>
                        <el-button @click="reset('form')">重置</el-button>
                    </el-form-item>
                </el-col>
            </el-row>

        </el-form>
    </div>

</template>
<script>
    export default {
      data() {
        return {
          startVal1: 0,
          endVal1: 2017,
          labelPosition: "top",
          classifies: [
            { id: "110", label: "分类1" },
            { id: "111", label: "分类2" },
            { id: "112", label: "分类3" },
            { id: "113", label: "分类4" }
          ],
          formData: {
            courseName: "",
            courseIntroduction: "",
            eCurrency: "",
            courseOnline: "Y",
            type: [],
            fileList: [
              {
                name: "food2.jpeg",
                url:
                  "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
              },
              {
                name: "food.jpeg",
                url:
                  "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
              },
              {
                name: "food2.jpeg",
                url:
                  "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
              }
            ]
          },
          validateRules: {
            courseName: [
              { required: true, message: "请输入课程名称", trigger: "blur" },
              {
                min: 3,
                max: 5,
                message: "长度在 3 到 5 个字符",
                trigger: ["blur", "change"]
              }
            ],
            courseIntroduction: [
              { required: true, message: "请输入课程简介", trigger: "blur" },
              {
                min: 1,
                max: 100,
                message: "长度在 1 到 100 个字符",
                trigger: ["blur", "change"]
              }
            ],
            eCurrency: [
              { required: true, message: "请输入课程积分", trigger: "blur" },
              {
                type: "number",
                message: "课程积分为数字",
                trigger: ["blur", "change"]
              },
              {
                type: "number",
                min: 3,
                max: 5,
                message: "课程积分为 3  到 5 的数字",
                trigger: ["blur", "change"]
              }
            ],
            type: [
              // 自定义校验器
              {
                validator: function(rule, value, callback) {
                  if (!value) {
                    return callback(new Error("缺少分类字段"));
                  } else {
                    if (value.length < 1) {
                      return callback(new Error("至少选择1个分类"));
                    }
                    callback();
                  }
                }
              }
            ],
            fileList: [
              {
                validator: function(rule, value, callback) {
                  if (!value) {
                    return callback(new Error("缺少字段"));
                  } else {
                    if (value.length < 1) {
                      return callback(new Error("至少上传一个文件"));
                    }
                    callback();
                  }
                }
              }
            ]
          }
        };
      },
      methods: {
        submitUpload() {
          this.$refs.upload.submit();
        },
        handleChange(file, fileList) {
          console.log("handleChange", file, fileList);
          //this.formData.fileList.push(file);
        },
        beforeUpload(file) {
          console.log("beforeUpload", file);
          if (file.type != "image/png") {
            this.$message.error(
              `当前文件格式为${file.type},只能上传image/png格式的图片`
            );
            return false;
          }
        },
        handleSuccess(res, file, fileList) {
          console.log("handleSuccess", res, file, fileList);
        },
        handleError(error, file, fileList) {
          console.log("handleError", error, file, fileList);
        },
        handleProgress(event, file, fileList) {
          console.log("handleProgress", event, file, fileList);
        },
        handleRemove(file, fileList) {
          console.log("handleRemove", file, fileList);
          //this.formData.fileList = fileList;
        },
        handlePreview(file) {
          console.log(file, file.response);
        },
        handleExceed(files, fileList) {
          this.$message.warning(
            `当前限制选择 3 个文件，本次选择了 ${
              files.length
            } 个文件，共选择了 ${files.length + fileList.length} 个文件`
          );
          //this.$message.error(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        beforeRemove(file, fileList) {
          console.log("beforeRemove", file, fileList);
          return this.$confirm(`确定移除 ${file.name}？`);
        },
        submit: function(formName) {
          this.$refs[formName].validate(valid => {
            if (valid) {
              console.log("submit");
            } else {
              console.log("not submit");
              return false;
            }
          });
        },
        reset: function(formName) {
          this.$refs[formName].resetFields();
        }
      }
    }
</script>
<style lang="scss" scoped>
    .form-wrap {
      padding: 15px 15px 15px 30px;
    }
</style>


