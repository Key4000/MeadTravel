const handlers = require('../handlers')

test('home page renders', () => {
   const req = {}
   const res = {render : jest.fn()}
   handlers.home(req, res)
   expect(res.render.mock.calls[0][0]).toBe('home')
})

test('страница О нас отображается с предсказанием', () => {
    const req = {}
    const res = { render: jest.fn()}
    handlers.about(req, res)
  expect(res.render.mock.calls.length).toBe(1)  
  expect(res.render.mock.calls[0][0]).toBe('about')
  expect(res.render.mock.calls[0][1])    
     .toEqual(expect.objectContaining({        fortune: expect.stringMatching(/\W/),    
        }))
        
})

test('рендеринг обработчика ошибки 404', () => {  
        const req = {}  
        const res = { render: jest.fn() }  
        handlers.notFound(req, res)   expect(res.render.mock.calls.length).toBe(1)  
expect(res.render.mock.calls[0][0]).toBe('404')
})

test('рендеринг обработчика ошибки 500', () => {  
        const err = new Error('some error')
        const req = {}  
        const res = { render: jest.fn() }  
        const next = jest.fn() 
        
        handlers.serverError(err, req, res, next)   expect(res.render.mock.calls.length).toBe(1)  expect(res.render.mock.calls[0][0]).toBe('500') 
})
    