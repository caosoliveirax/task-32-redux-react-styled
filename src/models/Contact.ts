import type { Category } from '../utils/Contact'

class Contact {
  fullName: string
  category: Category
  email: string
  phoneNumber: string
  id: number

  constructor(
    fullName: string,
    category: Category,
    email: string,
    phoneNumber: string,
    id: number
  ) {
    this.fullName = fullName
    this.category = category
    this.email = email
    this.phoneNumber = phoneNumber
    this.id = id
  }
}

export default Contact
