<template>
  <footer class="footer">
    <div class="footer-content">
      <p align="center">© 2025 校园羽球社区 &nbsp; All rights reserved.</p>
      <p class="copyright-font" align="center">所作页面没有任何目的，仅为作者本人学习使用</p>
      <p class="copyright-font" align="center">版权归作者所有，如果用于商业或个人目的，请联系作者。若涉及侵权违法等问题，及时联系作者修改</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .footer {
      position: relative;
      top: 0;
      width: 100%;
      height: 60px;
      background-color: #f5f5f5;
      border-top: 1px solid #eee;
    }

    .copyright-font {
      font-size: 12px;
      color: #776955;
    }
</style>