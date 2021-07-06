const axios = require('axios')

async function getData(user_id) {
  const user = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${user_id}`
  )

  const post = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?userId=${user_id}`
  )

  const newUser = { ...user.data, posts: [...post.data] }

  console.log(newUser)
  return newUser
}

module.exports = getData
