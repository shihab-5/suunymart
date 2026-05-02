import Nav from "@/component/nav";
import "@/app/globals.css";
import NotFound from "@/app/not-found";
import Footer from "@/component/footer";


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
    >
      <body>
        <Nav></Nav>
        {children}
        <Footer></Footer>
        </body>
    </html>
  );
}
