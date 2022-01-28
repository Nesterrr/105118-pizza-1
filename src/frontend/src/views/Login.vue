<template>
  <AppModal>
    <div
      class="sign-form"
      @keydown.esc="onCloseDialog"
      tabindex="0"
      ref="signForm"
    >
      <router-link to="/" class="close close--white">
        <span class="visually-hidden">Закрыть форму авторизации</span>
      </router-link>
      <div class="sign-form__title">
        <h1 class="title title--small">Авторизуйтесь на сайте</h1>
      </div>
      <form @submit.prevent="onSubmit" action="test.html" method="post">
        <div class="sign-form__input">
          <label class="input">
            <span>E-mail</span>
            <input type="email" name="email" placeholder="example@mail.ru" />
          </label>
        </div>

        <div class="sign-form__input">
          <label class="input">
            <span>Пароль</span>
            <input type="password" name="pass" placeholder="***********" />
          </label>
        </div>
        <button type="submit" class="button">Авторизоваться</button>
      </form>
    </div>
  </AppModal>
</template>
<script>
export default {
  name: "Login",
  methods: {
    onCloseDialog() {
      this.$router.push("/");
    },
    onSubmit() {
      this.$emit("auth");
      this.$router.push("/");
    },
  },
  mounted() {
    this.$refs.signForm.focus();
  },
};
</script>
