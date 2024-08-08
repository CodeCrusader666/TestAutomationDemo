export type User = {
  name: string
  lastName: string
  email: string
  gender: 'Male' | 'Female' | 'Other'
  dateOfBirth: string
  subjects: string
  hobbies: ('Sports' | 'Reading' | 'Music')[]
  picture: string
  currentAddress: string
  state: string
  city: string
}
