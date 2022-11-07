import '../styles/globals.css'
import { Navigation } from "./components/navigation"
import {font} from './font'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>My first app with Next 13</title>
      </head>
      <body className={font.className}>
        <Navigation />
        {children}
        </body>
    </html>
  )
}
