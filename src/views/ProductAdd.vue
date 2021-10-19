<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-calendar"></i> 活动
        </el-breadcrumb-item>
        <el-breadcrumb-item>新增</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <div class="form-box">
        <el-form ref="formRef" :rules="rules" :model="form" label-width="80px">
          <el-form-item label="活动名称" prop="title">
            <el-input size="mini" v-model="form.title"></el-input>
          </el-form-item>
          <el-form-item label="活动地址" prop="address">
            <el-input size="mini" v-model="form.address"></el-input>
          </el-form-item>
          <el-form-item label="活动封面" prop="cover">
            <el-input size="mini" v-model="form.cover" placeholder="请输入封面图片网络地址"></el-input>
          </el-form-item>
          <el-form-item label="费用(元)" prop="amount">
            <el-input-number size="mini" v-model="form.amount" :min="1" />
          </el-form-item>
          <el-form-item label="活动环节" prop="link">
            <el-tag
              v-for="tag in form.link"
              :key="tag"
              closable
              :disable-transitions="false"
              @close="addLinkColse(tag)"
            >
              {{ tag }}
            </el-tag>
            <el-input
              v-if="addVisible"
              v-model="addVaule"
              class="input-new-tag"
              size="mini"
              @keyup.enter="addLinkConfirm"
            >
            </el-input>
            <el-button v-else class="button-new-tag" size="small" @click="showAddLink"
              >+ 新增活动环节</el-button
            >
          </el-form-item>
          <!--el-form-item label="选择器" prop="region">
                        <el-select v-model="form.region" placeholder="请选择">
                            <el-option key="bbk" label="步步高" value="bbk"></el-option>
                            <el-option key="xtc" label="小天才" value="xtc"></el-option>
                            <el-option key="imoo" label="imoo" value="imoo"></el-option>
                        </el-select>
                    </el-form-item-->
          <el-form-item label="开始时间">
            <el-col :span="11">
              <el-form-item prop="beginDate">
                <el-date-picker
                  size="mini"
                  type="datetime"
                  placeholder="选择日期"
                  v-model="form.beginDate"
                  style="width: 100%"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <!--el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-form-item prop="beginDateTime">
                <el-time-picker
                  size="mini"
                  placeholder="选择时间"
                  v-model="form.beginDateTime"
                  style="width: 100%"
                >
                </el-time-picker>
              </el-form-item>
            </el-col-->
          </el-form-item>
          <el-form-item label="结束时间">
            <el-col :span="11">
              <el-form-item prop="endDate">
                <el-date-picker
                  size="mini"
                  type="datetime"
                  placeholder="选择日期"
                  v-model="form.endDate"
                  style="width: 100%"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <!--el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-form-item prop="endDateTime">
                <el-time-picker
                  size="mini"
                  placeholder="选择时间"
                  v-model="form.endDateTime"
                  style="width: 100%"
                >
                </el-time-picker>
              </el-form-item>
            </el-col-->
          </el-form-item>
          <!--el-form-item label="城市级联" prop="options">
                        <el-cascader :options="options" v-model="form.options"></el-cascader>
                    </el-form-item>
                    <el-form-item label="选择开关" prop="delivery">
                        <el-switch v-model="form.delivery"></el-switch>
                    </el-form-item>
                    <el-form-item label="多选框" prop="type">
                        <el-checkbox-group v-model="form.type">
                            <el-checkbox label="步步高" name="type"></el-checkbox>
                            <el-checkbox label="小天才" name="type"></el-checkbox>
                            <el-checkbox label="imoo" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="单选框" prop="resource">
                        <el-radio-group v-model="form.resource">
                            <el-radio label="步步高"></el-radio>
                            <el-radio label="小天才"></el-radio>
                            <el-radio label="imoo"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="文本框" prop="desc">
                        <el-input type="textarea" rows="5" v-model="form.desc"></el-input>
                    </el-form-item-->
          <el-form-item label="活动描述">
            <div class="mgb20" ref="editor"></div>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">保存</el-button>
            <el-button @click="onReset">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref, onMounted, onBeforeUnmount } from "vue";
import { ElMessage } from "element-plus";
import WangEditor from "wangEditor";
import { activityCreate, activityDetail } from "../api/index";
import { useRoute } from 'vue-router';
export default {
  name: "productAdd",
  setup() {
    const Route = useRoute();
    const rules = {
      title: [{ required: true, message: "请输入活动名称", trigger: "blur" }],
      address: [{ required: true, message: "请输入活动地址", trigger: "blur" }],
      beginDate: [{ required: true, message: "请输入开始时间", trigger: "blur" }],
      endDate: [{ required: true, message: "请输入结束时间", trigger: "blur" }],
    };
    const editor = ref(null);
    const formRef = ref(null);
    const addVaule = ref("");
    const addVisible = ref(false);
    const form = reactive({
      title: "",
      address: "",
      region: "",
      beginDate: "",
      endDate: "",
      amount: 0,
      describe: "",
      cover: "",
      link: [],
    });
    let instance;
    onMounted(() => {
      console.log("获取到的参数：", Route.query.activityId);
      
      instance = new WangEditor(editor.value);
      instance.config.zIndex = 1;
      instance.create();
      if (Route.query.activityId != undefined) {  //编辑
        activityDetail({
          id: Route.query.activityId
        }).then((resp) => {
          form.title = resp.data.title;
          form.address = resp.data.address;
          form.beginDate = resp.data.startTime + "";
          form.endDate = resp.data.endTime + "";
          form.amount = resp.data.amount / 100;
          form.cover = resp.data.cover;
          form.link = resp.data.link.split(",");
          instance.txt.html(resp.data.describe);
        })
      }

    });
    onBeforeUnmount(() => {
      instance.destroy();
      instance = null;
    });
    // 提交
    const onSubmit = () => {
      // 表单校验
      form.describe = instance.txt.html();
      formRef.value.validate((valid) => {
        if (valid) {
          activityCreate({
            title: form.title,
            address: form.address,
            startTime: form.beginDate,
            endTime: form.endDate,
            describe: form.describe,
            link: form.link,
            amount: form.amount,
            cover: form.cover,
          }).then((resp) => {
            console.log(resp)
          })
          ElMessage.success("提交成功！");
        } else {
          return false;
        }
      });
    };
    //新增活动环节
    const showAddLink = () => {
        addVisible.value = true
    }

    //确定活动环节新增
    const addLinkConfirm = () => {
        form.link.push(addVaule.value);
        addVaule.value = "";
        addVisible.value = false;
    }

    //删除活动环节
    const addLinkColse = (tag) => {
        form.link.splice(form.link.indexOf(tag), 1)
    }

    // 重置
    const onReset = () => {
      formRef.value.resetFields();
    };

    return {
      addVaule,
      addVisible,
      showAddLink,
      addLinkConfirm,
      addLinkColse,
      editor,
      rules,
      formRef,
      form,
      onSubmit,
      onReset,
    };
  },
};
</script>
<style scoped>
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>
