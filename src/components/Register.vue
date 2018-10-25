<template>
    <div class="AppRegister">
        <div class="form-control">
            <div class="form-group">
            <h1>{{title}}</h1>
            <input>{{user.register_firstName}}</input>
            <input>{{user.register_lastName}}</input>
            <input>{{user.register_email}}</input>
            <input>{{user.register_password}}</input>
            <input>{{user.register_confirmedPassword}}</input>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>

<script>
export default {
  name: "AppRegister",
  data() {
    return {
      title: "Register",
      user: {
        register_firstName: "reigsterFirstName",
        register_lastName: "registerLastName",
        register_email: "registerEmail",
        register_password: "registerPassword",
        register_confirmedPassword: "registerConfirmedPassword"
      }
    };
  }
};
</script>