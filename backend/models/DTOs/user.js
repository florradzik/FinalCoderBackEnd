function validateUserAdmin(req, res, next) {
  const validate = req.user.role == "ADMIN" ? True : False
}
