import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './scss/custom.scss'

import ErrorPage from './components/error-page.js'
import Home from './components/home.tsx'
import MyNav from './components/my-navbar.tsx'
import Resume from './components/resume.tsx'
import About from './components/about.tsx'
import Contact from './components/contact.tsx'
import DataForm from './components/dataForm.tsx'
import PopUp from './components/popUp.tsx'
import FakeDocument from './components/fakeDocument.tsx'

import {fakeDataAction, fakeDataLoader, fakeDocumentLoader} from './component-actions/fakeData.js'
import { messageDataLoader, submitMessage } from './component-actions/messages.ts'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MyNav />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {index: true, element: <Home />},
          {
            path: "/resume",
            element: <Resume />,
            errorElement: <ErrorPage />,
          },
          {
            path: "/about-this-page",
            element: <About />,
            errorElement: <ErrorPage />,
            children: [
              {
                path: "data-form",
                action: fakeDataAction,
                loader: fakeDataLoader,
                element: <DataForm />,
                errorElement: <ErrorPage />,
                children: [
                  {
                    path: "pop-up",
                    loader: fakeDataLoader,
                    element: <PopUp />,
                    errorElement: <ErrorPage />,
                  },
                ]
              },
              {
                path: "fake-document",
                loader: fakeDocumentLoader,
                element: <FakeDocument />,
                errorElement: <ErrorPage />,
              }
            ]
          },
          {
            path: "/contact",
            action: submitMessage,
            element: <Contact />,
            errorElement: <ErrorPage />,
            children: [
              {
                path: "pop-up",
                loader: messageDataLoader,
                element: <PopUp />,
                errorElement: <ErrorPage />
              }
            ]
          }
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
