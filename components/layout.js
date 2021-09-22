import Head from "next/head";

export const siteTitle = "Dumb Scrumb";
export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/images/ace.jpg" />
        <meta name="description" content="Create your own scrum poker room" />
        <meta property="og:image" content={`/images/ace.jpg`} />
        <meta name="og:title" content={title} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Crimson+Pro" />

        <link rel="stylesheet" href="https://ssl-templates.services.gc.ca/app/cls/WET/gcweb/v4_0_30/css/theme.min.css" />
        <link rel="stylesheet" href="https://ssl-templates.services.gc.ca/app/cls/WET/gcweb/v4_0_30/css/messages.min.css" />

        <script src="https://www.canada.ca/etc/designs/canada/cdts/gcweb/v4_0_32/cdts/compiled/soyutils.js"></script>
        <script src="https://www.canada.ca/etc/designs/canada/cdts/gcweb/v4_0_32/cdts/compiled/wet-en.js"></script>



        <script type="text/javascript" dangerouslySetInnerHTML={{
          __html: `
            
              document.write(wet.builder.refTop({
                cdnEnv: 'prod',
                subTheme: 'gcweb',
                jqueryEnv: 'external',
                localPath: '',
                isApplication: true
              }))
            
          `}}
        />

        {/* <script type="text/javascript" dangerouslySetInnerHTML={{
          __html: `
            function exportResults(lang) {
              var source = window.document.getElementById(lang + "-content").innerHTML;

              var val = htmlToPdfmake(source);
              var dd = {content:val};
              console.log(dd);

              pdfMake.createPdf(dd).download("openfisca-scenarios-" + lang + ".pdf");
            }
          `}}
        /> */}



      </Head>

      <div id="def-top"></div>

      <div className="flex flex-col items-center min-h-screen py-2">

        <main d="wb-cont" role="main" property="mainContentOfPage" className="container-fluid" >
          <div>{children}</div>

          <div id="def-preFooter"></div>
        </main>

        <div id="def-footer"></div>

        {/* <footer className="flex items-center justify-center w-full h-24 border-t rounded-xl">
        DTS-STN
      </footer> */}

      </div>
    </>
  );
}
