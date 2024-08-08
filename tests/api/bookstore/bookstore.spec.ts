import { test, expect } from '@playwright/test'

const BOOKS_ENDPOINT = '/BookStore/v1/Books'
const BOOK_ENDPOINT = '/BookStore/v1/Book'

test('GET all books', async ({ request }) => {
  const allBooksResponse = await request.get(BOOKS_ENDPOINT)
  expect(allBooksResponse.status()).toBe(200)
  // ToDo: verify response
})

test('GET book by ISBN', async ({ request }) => {
  const ISBN = '9781449331818'
  const bookResponse = await request.get(`${BOOK_ENDPOINT}/${ISBN}`)
  expect(bookResponse.status()).toBe(200)
  // ToDo: verify response
})

test('GET book using wrong ISBN', async ({ request }) => {
  const WRONG_ISBN = '9781442222222'
  const bookResponse = await request.get(`${BOOK_ENDPOINT}?ISBN=${WRONG_ISBN}`)
  expect(bookResponse.status()).toBe(400)
  // ToDo: verify response
})
