const express = require('express')
const path = require('path')
const UserService = require('../service/userService')

const userRouter = express.Router()
const jsonBodyParser = express.json()

userRouter
  .post('/api/users', jsonBodyParser, (req, res, next) => {
    const { user_pass, user_name } = req.body

    for (const field of ['user_name', 'user_pass'])
      if (!req.body[field])
        return res.status(400).json({
          error: `Missing '${field}' in request body`
        })

    const passwordError = UserService.validatePassword(user_pass)

    if (passwordError)
      return res.status(400).json({ error: passwordError })

    UserService.hasUserWithUserName(
      req.app.get('db'),
      user_name
    )
      .then(hasUserWithUserName => {
        if (hasUserWithUserName)
          return res.status(400).json({ error: `Username already taken` })

        return UserService.hashPassword(user_pass)
          .then(hashedPassword => {
            const newUser = {
              user_name,
              user_pass: hashedPassword,
            }

            return UserService.insertUser(
              req.app.get('db'),
              newUser
            )
              .then(user => {
                res
                  .status(201)
                  .location(path.posix.join(req.originalUrl, `/${user.id}`))
                  .json(UserService.serializeUser(user))
              })
          })
      })
      .catch(next)
  })

module.exports = userRouter