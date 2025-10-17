import { Kumbh_Sans } from "next/font/google";
import localFont from 'next/font/local';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "slick-carousel/slick/slick.css";
import "./assets/main.css";
import './assets/responsive.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';  // theme
import 'primereact/resources/primereact.min.css';                  // core css
import 'primeicons/primeicons.css';                                // icons
import CalendlyBadge from "./Components/CalendlyBadge/CalendlyBadge";

const kumbh_sans = Kumbh_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--body-color-font',
});

const clashdisplay = localFont({
  src: './assets/fonts/ClashDisplay.ttf',
  variable: '--heading-font',
})

export const metadata = {
  title: {
    absolute: '',
    default: 'Shilpa Home ',
    template: '%s | Dexon - SEO & Digital Marketing Agency NextJS Template',
  },
  description: 'Dexon - SEO & Digital Marketing Agency NextJS Template',
  openGraph: {
    title: 'Dexon - SEO & Digital Marketing Agency NextJS Template',
    description: 'Dexon - SEO & Digital Marketing Agency NextJS Template',
    image: '/openGraphImage.jpg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Themeservices" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NMS2R6PR');
          `}
        </script>
           <script
          id="microsoft-clarity"
          strategy="afterInteractive" // load after page is interactive
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "tqepv622yu");`
          }}
        />
      </head>
      <body className={`${kumbh_sans.variable} ${clashdisplay.variable}`}>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NMS2R6PR"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>
        </noscript>
        {children}
        <CalendlyBadge />
      </body>
    </html>
  );
}
