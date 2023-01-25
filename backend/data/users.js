import bcrypt from 'bcryptjs'

// normally we use bcrypt asynchronously but we have only three users and we are importing small data we can do it synchronously
// Parameters in brypt.hasSync('password',rounds)
const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'John Doe',
        email: 'john@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Jane Doe',
        email: 'jane@example.com',
        password: bcrypt.hashSync('123456', 10),
    }
]

export default users