import App from './App.jsx'

const routes = [
    {
      path: "/",
      element: <App/>,
      errorElement: <h1>Wrong page pal</h1>,
      children: [
        {
            path: "/",
            element: <h1>Here are all my DIYs...</h1>
        },
        {
            path: "/add-DIYs",
            element: <h1>Here's a form to add a new DIY...</h1>
        }
      ]
    },
    {
      path: "/anotherPath",
      element: <h1>Hello Goodbye</h1>
    }
]

export default routes;