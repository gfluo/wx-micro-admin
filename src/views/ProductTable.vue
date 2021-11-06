<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-cascades"></i> 用户列表
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <div class="handle-box">
        <!--el-select v-model="query.address" placeholder="地址" class="handle-select mr10">
          <el-option key="1" label="广东省" value="广东省"></el-option>
          <el-option key="2" label="湖南省" value="湖南省"></el-option>
        </el-select>
        <el-input
          v-model="query.openId"
          placeholder="openId"
          class="handle-input mr10"
        ></el-input-->
        <el-button type="primary" icon="el-icon-circle-plus-outline" @click="handleAdd"
          >新增活动</el-button
        >
      </div>
      <el-table
        :data="tableData"
        border
        class="table"
        ref="multipleTable"
        header-cell-class-name="table-header"
      >
        <el-table-column prop="id" label="活动id" align="center"></el-table-column>
        <el-table-column prop="title" label="活动标题"></el-table-column>
        <el-table-column prop="amount" label="活动金额"></el-table-column>
        <el-table-column
          show-overflow-tooltip
          prop="describe"
          label="活动描述"
        ></el-table-column>
        <el-table-column prop="link" label="活动环节"></el-table-column>
        <!--el-table-column label="账户余额">
          <template #default="scope">￥{{ scope.row.money }}</template>
        </el-table-column>
        <el-table-column label="头像(查看大图)" align="center">
          <template #default="scope">
            <el-image
              class="table-td-thumb"
              :src="scope.row.thumb"
              :preview-src-list="[scope.row.thumb]"
            >
            </el-image>
          </template>
        </el-table-column-->
        <el-table-column prop="address" label="地址"></el-table-column>
        <!--el-table-column label="状态" align="center">
          <template #default="scope">
            <el-tag
              :type="
                scope.row.state === '成功'
                  ? 'success'
                  : scope.row.state === '失败'
                  ? 'danger'
                  : ''
              "
              >{{ scope.row.state }}</el-tag
            >
          </template>
        </el-table-column-->
        <el-table-column prop="startTime" label="活动开始时间"></el-table-column>
        <el-table-column prop="endTime" label="活动结束时间"></el-table-column>
        <el-table-column label="操作" width="180" align="center">
          <template #default="scope">
            <el-button
              type="text"
              icon="el-icon-edit"
              @click="handleEdit(scope.$index, scope.row)"
              >编辑
            </el-button>
            <el-button
              type="text"
              icon="el-icon-edit"
              @click="handleCopy(scope.$index, scope.row)"
              >复制
            </el-button>
            <el-button
              type="text"
              icon="el-icon-link"
              @click="handleQrcode(scope.$index, scope.row)"
              >海报
            </el-button>
            <el-button
              type="text"
              icon="el-icon-delete"
              class="red"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          background
          layout="total, prev, pager, next"
          :current-page="query.pageIndex"
          :page-size="query.pageSize"
          :total="pageTotal"
          @current-change="handlePageChange"
        ></el-pagination>
      </div>
    </div>

    <!-- 编辑弹出框 -->
    <el-dialog title="编辑" v-model="editVisible" width="30%">
      <div v-show="!tipShow" id="poster" ref="poster" class="poster">
        <el-image :src="posterInfo.cover" crossOrigin="Anonymous"></el-image>
        <h2>{{ posterInfo.title }}</h2>
        <h3>活动地点：{{ posterInfo.address }}</h3>
        <h3>活动时间：{{ posterInfo.startTime }}</h3>
        <el-empty description="扫码体验小程序" :image="posterInfo.qrcode"></el-empty>
      </div>
      <el-empty v-show="tipShow" description="当前活动还未生成分享二维码"></el-empty>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="editVisible = false">取 消</el-button>
          <el-button type="primary" @click="generateQrcode">生成</el-button>
          <el-button type="primary" @click="posterDownload">下载</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { getActivities, activityDel, activityGenerateQrcode } from "../api/index";
import { useRouter } from "vue-router";
import html2canvas from "html2canvas";

export default {
  name: "userstable",
  setup() {
    const router = useRouter();
    const query = reactive({
      address: "",
      openId: "",
      pageIndex: 1,
      pageSize: 10,
    });
    const tableData = ref([]);
    const pageTotal = ref(0);

    const posterInfo = reactive({
      address: "",
      title: "",
      cover: "",
      startTime: "",
      qrcode: "",
    });

    const poster = ref("");
    const qrcode = ref("");
    const qrcodeShow = ref(false);
    const generateId = ref(0);
    const tipShow = ref(true);
    // 获取表格数据
    const getData = () => {
      getActivities({
        limit: query.pageSize,
        offset: query.pageSize * (query.pageIndex - 1),
      }).then((resp) => {
        tableData.value = resp.data.activityList;
        pageTotal.value = resp.data.total;
      });

      /*
            fetchData(query).then((res) => {
                tableData.value = res.list;
                pageTotal.value = res.pageTotal || 50;
            });
            */
    };
    getData();

    // 查询操作
    const handleAdd = () => {
      router.push("/productAdd");
    };
    // 分页导航
    const handlePageChange = (val) => {
      query.pageIndex = val;
      getData();
    };

    const generateQrcode = () => {
      console.log(generateId.value);
      activityGenerateQrcode({
        activityId: generateId.value,
      }).then((resp) => {
        if (resp.errno == 0) {
          qrcode.value = resp.data.qrcode;
          posterInfo.qrcode = resp.data.qrcode;
          ElMessage.success("生成成功");
          tipShow.value = false;
        }
      });
    };

    const dataURLToBlob = (dataurl) => {
      let arr = dataurl.split(",");
      let mime = arr[0].match(/:(.*?);/)[1];
      let bstr = atob(arr[1]);
      let n = bstr.length;
      let u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new Blob([u8arr], { type: mime });
    };

    const posterDownload = () => {
      let a = document.createElement("a");
      html2canvas(poster.value, {
        allowTaint: false,
        useCORS: true,
      }).then((canvas) => {
        let dom = document.body.appendChild(canvas);
        dom.style.display = "none";
        a.style.display = "none";
        document.body.removeChild(dom);
        let blob = dataURLToBlob(dom.toDataURL("image/png"));
        a.setAttribute("href", URL.createObjectURL(blob));
        //这块是保存图片操作  可以设置保存的图片的信息
        a.setAttribute("download", "poster.png");
        document.body.appendChild(a);
        a.click();
        URL.revokeObjectURL(blob);
        document.body.removeChild(a);
      });
    };

    const downloadQrcode = () => {
      window.location.href = `${qrcode.value}`;
    };

    // 删除操作
    const handleDelete = (index, row) => {
      // 二次确认删除
      ElMessageBox.confirm("确定要删除吗？", "提示", {
        type: "warning",
      })
        .then(() => {
          activityDel({
            activityId: row.id,
          }).then((resp) => {
            if (resp.errno == 0) {
              ElMessage.success("删除成功");
              tableData.value.splice(index, 1);
            } else {
              ElMessage.success("删除失败");
            }
          });
        })
        .catch(() => {});
    };

    const handleQrcode = (index, row) => {
      generateId.value = row.id;
      editVisible.value = true;
      posterInfo.cover = row.cover;
      posterInfo.title = row.title;
      posterInfo.address = row.address;
      posterInfo.startTime = row.startTime;
      if (row.qrcode) {
        qrcode.value = row.qrcode;
        posterInfo.qrcode = row.qrcode;
        qrcodeShow.value = true;
        tipShow.value = false;
      } else {
        qrcodeShow.value = false;
        tipShow.value = true;
      }
    };

    // 表格编辑时弹窗和保存
    const editVisible = ref(false);
    let form = reactive({
      name: "",
      address: "",
    });
    let idx = -1;

    const handleEdit = (index, row) => {
      router.push({
        path: "/productAdd",
        query: {
          activityId: row.id,
        },
      });
      /*
      idx = index;
      Object.keys(form).forEach((item) => {
        form[item] = row[item];
      });
      editVisible.value = true;
      */
    };
    const saveEdit = () => {
      editVisible.value = false;
      ElMessage.success(`修改第 ${idx + 1} 行成功`);
      Object.keys(form).forEach((item) => {
        tableData.value[idx][item] = form[item];
      });
    };

    return {
      query,
      tableData,
      pageTotal,
      editVisible,
      qrcodeShow,
      form,
      qrcode,
      poster,
      tipShow,
      generateId,
      posterInfo,
      generateQrcode,
      downloadQrcode,
      posterDownload,
      handleAdd,
      handlePageChange,
      handleDelete,
      handleEdit,
      handleQrcode,
      saveEdit,
    };
  },
};
</script>

<style scoped>
.poster h2 {
  text-align: center;
}
.poster h3 {
  text-align: center;
}

.poster el-iamge {
  text-align: center;
}

.handle-box {
  margin-bottom: 20px;
}

.handle-select {
  width: 120px;
}

.handle-input {
  width: 300px;
  display: inline-block;
}
.table {
  width: 100%;
  font-size: 14px;
}
.red {
  color: #ff0000;
}
.mr10 {
  margin-right: 10px;
}
.table-td-thumb {
  display: block;
  margin: auto;
  width: 40px;
  height: 40px;
}
</style>
