import {
    Body,
    Button,
    Container,
    Head,
    Row,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Column,
    Section,
    Text,
    Font
  } from "@react-email/components";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Html>
                <Head>
                <Font
                    fontFamily="Poppings"
                    fallbackFontFamily="Verdana"
                    webFont={{
                        url: "https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLGT9Z1xlFQ.woff2",
                        format: "woff2",
                    }}
                    fontWeight={400}
                    fontStyle="normal"
                    />
                </Head>
                <Preview>You're now ready to make live transactions with Stripe!</Preview>
                <Body style={main}>
                    <Container style={container}>
                        <Section style={sectionsBorders}>
                            <Row>
                                <Column style={sectionBorder} />
                                <Column style={sectionCenter} />
                                <Column style={sectionBorder} />
                            </Row>
                        </Section>
                        <Section  style={sectionsLogo}>
                            <Img
                                alt="Ode Grinder"
                                className="mx-auto object-cover"
                                style={imgResponsive}
                                height={50}
                                src="https://www.entrekids.cl/img/LogoMarket/EntreKids.png"
                            />
                        </Section>
                        <Section style={body}>
                            {children}
                        </Section>
                        <Section style={{ paddingTop: '32px', paddingBottom: '32px', textAlign: 'center', ...footerBorderTop }}>
                            <Text style={{ color: '#1f2937', margin: '0 0 4px 0' }}>Muchas gracias,</Text>
                            <Text style={{ color: '#00b8e4', fontWeight: '500', margin: 0 }}>Equipo Funpark</Text>
                        </Section>
                        <Section style={{ textAlign: 'center', width: '160px', paddingBottom: '32px' }}>
                            <Row >
                                <Column align="center">
                                    <Link style={{ ...facebook }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                                        </svg>
                                    </Link>
                                </Column>
                                <Column align="center">
                                    <Link style={{ ...instagram }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
                                    </Link>
                                </Column>
                                <Column align="center">
                                    <Link style={{ ...web }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                                    </Link>
                                </Column>
                            </Row>
                        </Section>
                    </Container>
                </Body>
            </Html>
        </>
    )
}


const main = {
    backgroundColor: "#f6f9fc",
    padding: "40px",
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
    backgroundColor: "#ffffff",
    margin: "0 auto",


    width: "600px",
};
const sectionsLogo = {
    width: '100%',
    padding: '35px 0px',
    borderBottom: '1px solid rgb(238,238,238)',

}
const imgResponsive = {
    width: "100px",
    height: "auto",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
}


const footerBorderTop = {
    borderTop: '1px solid rgb(238,238,238)',
    width: '100%',
  };
const sectionsBorders = {
    width: '100%',
  };
  
  const sectionBorder = {
    borderBottom: '1px solid rgb(238,238,238)',
    width: '249px',
  };
  
  const sectionCenter = {
    borderBottom: '4px solid #00B4F0',
    width: '100%',
  };

  const body ={padding: '0 0'};


  const facebook = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: '#3b5998',
    color: '#fff',
  }

  const instagram = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: '#e1306c',
    color: '#fff',
  }

  const web = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: '#00b8e4',
    color: '#fff',
  }