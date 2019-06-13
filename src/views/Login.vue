<template>
  <div class="login">
    <h2 id="animate" class="lightSpeedIn animated">Animate.css</h2>
    <div class="form-container">
      <div class="form">
        <div class="owl-login" ref="owlLogin">
          <div class="hand hand-left"></div>
          <div class="hand hand-right"></div>
          <div class="arms">
            <div class="arm arm-left"></div>
            <div class="arm arm-right"></div>
          </div>
        </div>
        <h3 class="login-title">登录</h3>
        <div style="padding-right:50px">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="loginForm"
            label-width="100px"
            class="demo-ruleForm"
            size="small"
          >
            <el-form-item label="账号" prop="username">
              <el-input v-model="ruleForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input
                v-model="ruleForm.password"
                @focus="onFocusPwd"
                @blur="onBlurPwd"
                type="password"
              ></el-input>
            </el-form-item>
          </el-form>
        </div>

        <div class="submit" ref="subbtn">
          <el-button
            type="primary"
            size="small"
            class="submit-btn"
            @click="onSubmit($event)"
            :loading="isLoading"
          >登录</el-button>
          <span ref="ripple" class="ripple"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "../axios";
export default {
  data() {
    return {
      isLoading: false,
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入账号", trigger: "change" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "change" }]
      }
    };
  },
  methods: {
    onSubmit(e) {
      this.addRippleEffect(e);
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          // 提交通过
          this.isLoading = true;
          const params = {
            username: this.ruleForm.username,
            password: this.ruleForm.password
          };
          Axios.post("/login", params)
            .then(res => {
              this.$store.dispatch("updateUserInfo", res.data);
              // res.data
              // this.$store.dispatch("updateMenus", {
              //   menus: res.data,
              //   type: "head"
              // });
              // this.$router.push("/");
            })
            .catch(err => {
              this.$message.error("登陆失败，请检查账号密码");
            })
            .finally(() => {
              this.isLoading = false;
            });
        }
      });
    },
    checkForm() {
      this.$router.push("/");
    },
    addRippleEffect(e) {
      const btnWrap = this.$refs.subbtn;
      const offset = { left: e.offsetX, top: e.offsetY };
      const sideLength =
        btnWrap.offsetWidth > btnWrap.offsetHeight
          ? btnWrap.offsetWidth
          : btnWrap.offsetHeight;
      this.$refs.ripple.style.left = offset.left - sideLength / 2 + "px";
      this.$refs.ripple.style.top = offset.top - sideLength / 2 + "px";
      this.$refs.ripple.style.width = sideLength + "px";
      this.$refs.ripple.style.height = sideLength + "px";
      if (this.$refs.ripple.classList.contains("show")) {
        this.$refs.ripple.classList.remove("show");
      }
      setTimeout(() => {
        this.$refs.ripple ? this.$refs.ripple.classList.add("show") : "";
      }, 100);
    },
    onFocusPwd() {
      this.$refs.owlLogin.classList.add("password");
    },
    onBlurPwd() {
      this.$refs.owlLogin.classList.remove("password");
    }
  }
};
</script>

<style scoped>
.login {
  position: relative;
  height: 100%;
}
.login-title {
  margin-bottom: 40px;
}
.form {
  width: 400px;
  /* padding: 40px 80px; */
  /* border: 1px solid; */
  border-radius: 4px;
  text-align: center;
  background: #f0f8ff;
  position: relative;
}
.owl-login {
  position: absolute;
  width: 210px;
  height: 108px;
  background: url("../assets/images/owl-login.png");
  top: -100px;
  left: 50%;
  margin-left: -105px;
}
.password .hand-left {
  transform: translateX(42px) translateY(-15px) scale(0.7);
}
.password .hand-right {
  transform: translateX(-42px) translateY(-15px) scale(0.7);
}
.hand {
  width: 34px;
  height: 34px;
  -webkit-border-radius: 40px;
  border-radius: 40px;
  background-color: #472d20;
  -webkit-transform: scaleY(0.6);
  -moz-transform: scaleY(0.6);
  -o-transform: scaleY(0.6);
  -ms-transform: scaleY(0.6);
  transform: scaleY(0.6);
  -webkit-transition: 0.3s ease-out;
  -moz-transition: 0.3s ease-out;
  -o-transition: 0.3s ease-out;
  -ms-transition: 0.3s ease-out;
  transition: 0.3s ease-out;
  position: absolute;
  bottom: -8px;
}
.arms {
  top: 58px;
  position: absolute;
  width: 100%;
  height: 41px;
  overflow: hidden;
}
.arm {
  width: 40px;
  height: 65px;
  position: absolute;
  top: 40px;
  background-image: url("../assets/images/owl-login-arm.png");
  transition: 0.3s ease-out;
}
.password .arm-left {
  transform: translateY(-40px) translateX(40px);
}
.password .arm-right {
  transform: translateY(-40px) translateX(-40px) scaleX(-1);
}
.arm-left {
  left: 20px;
  transform: rotate(-20deg);
}
.arm-right {
  left: 158px;
  transform: rotate(20deg);
}
.hand-left {
  left: 14px;
}
.hand-right {
  left: 170px;
}
.form-container {
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
}
.form /deep/ .ivu-form .ivu-form-item-label {
  padding: 2px 0 0 0;
}
.submit {
  position: relative;
  overflow: hidden;
  margin-top: 40px;
}
.submit-btn {
  position: relative;
}
.submit-btn.ivu-btn:hover {
  background-color: #2d8cf0;
  border-color: #2d8cf0;
}
.ripple {
  position: absolute;
  z-index: 1;
  background: rgba(0, 0, 0, 0.15);
  border-radius: 100%;
  transform: scale(0);
  pointer-events: none;
}
.ripple.show {
  animation: ripple 0.75s ease-out;
}
@keyframes ripple {
  50% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
}
#animate {
  text-align: left;
  padding-left: 20px;
}
.animated.infinite {
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}
.lightSpeedIn {
  -webkit-animation-name: lightSpeedIn;
  animation-name: lightSpeedIn;
  -webkit-animation-timing-function: ease-out;
  animation-timing-function: ease-out;
}
.animated {
  -webkit-animation-duration: 1.5s;
  animation-duration: 1.5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
@keyframes lightSpeedIn {
  0% {
    -webkit-transform: translateX(100%) skewX(-30deg);
    -ms-transform: translateX(100%) skewX(-30deg);
    transform: translateX(100%) skewX(-30deg);
    opacity: 0;
  }
  60% {
    -webkit-transform: translateX(-10%) skewX(30deg);
    -ms-transform: translateX(-10%) skewX(30deg);
    transform: translateX(-1 0%) skewX(30deg);
    opacity: 1;
  }
  80% {
    -webkit-transform: translateX(0%) skewX(-15deg);
    -ms-transform: translateX(0%) skewX(-15deg);
    transform: translateX(0%) skewX(-15deg);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateX(0%) skewX(0deg);
    -ms-transform: translateX(0%) skewX(0deg);
    transform: translateX(0%) skewX(0deg);
    opacity: 1;
  }
}
.submit /deep/ .el-button {
  width: 100%;
}
</style>