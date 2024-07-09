/**
 * Factory pattern
 *
 * Read more about this pattern at:
 * @link https://www.patterns.dev/vanilla/factory-pattern
 */
const createUser = ({ firstName, lastName, email, address }) => {
  return {
    firstName,
    lastName,
    email,
    address,
    getFullName() {
      return `${this.firstName} ${this.lastName}`
    },
  }
}

const user1 = createUser({
  firstName: 'John',
  lastName: 'Doe',
  email: 'John@gmail.com',
  address: '123 Street',
})

const user2 = createUser({
  firstName: 'Jane',
  lastName: 'Doe',
  address: '123 Street',
  email: 'Jane@gmail.com',
})

console.log(user1, user2)
console.log(user1.getFullName(), user2.getFullName())
