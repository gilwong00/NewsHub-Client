<template>
    <div class="form-container">
        <div class="form-group">
                <h1>{{title}}</h1>
                <h1>{{user.register_firstName}}</h1>
                <h1>{{user.register_lastName}}</h1>
                <h1>{{user.register_email}}</h1>
                <h1>{{user.register_password}}</h1>
                <h1>{{user.register_confirmedPassword}}</h1>
        </div>
    </div>
</template>

<style lang="css" scoped>
</style>

<script>
export default {
  name: "AppRegister",
  data() {
    return {
      title: "Register",
      user: {
        register_firstName: "fName",
        register_lastName: "lName",
        register_email: "userEmail",
        register_password: "userPassword",
        register_confirmedPassword: "userConfirmedPassword"
      }
    };
  }
};
</script>