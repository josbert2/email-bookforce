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
import Layout from "../layout-entrekids";
import * as React from "react";

const baseUrl = ""
export const StripeWelcomeEmail = () => (
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
        <Preview>Finalizacion de demo bookforce</Preview>
        <Body style={main}>
            <Layout>
                <Section style={{ marginBottom: '32px', paddingTop: '32px', padding: '20px 28px 0px 28px',  ...h1 }}>
                    <Text style={{ display: 'inline', ...h1 }}>
                        Hola <Text style={{ ...anchor, display: 'inline' , ...h1WithoutColor }}>Carolina</Text>, muchas gracias por utilizar Funpark!
                    </Text>
                </Section>


                <Section style={{ color: '#4b5563', lineHeight: '1.625', padding: '0 28px' }}>
              
                    
                    <Text style={paragraph}>
                        Recientemente fuiste a FUNPARK, La Experiencia Inflable Más Grande - Arauco Maipú y nos encantaría saber cuál fue tu experiencia en el lugar.
                    </Text>

                    <Text style={paragraph}>
                    Ingresa a tu panel de usuario para dejar una reseña, Tu comentario es de suma importancia ya que ayuda a padres a elegir las mejores actividades para sus hijos y a nosotros a mantener una buena base de proveedores dentro de la plataforma.
                    </Text>
                    
                    <Section style={{ textAlign: 'center', padding: '20px 0' }}>
                    <Button
                        href="#"
                        style={{
                        backgroundColor: '#00b8e4',
                        color: 'white',
                        padding: '12px 32px',
                        borderRadius: '9999px',
                        fontWeight: '500',
                        textDecoration: 'none',
                        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                        }}
                    >
                        Dejar mi reseña aquí
                    </Button>
                    </Section>
                    
                    <Text style={{ fontWeight: '300',  color: '#7e7e7e'}}>
                    Esperamos que sigas explorando nuevas actividades en Funpark junto a tu familia!
                    </Text>
                </Section>
                
               
                
           
            </Layout>
        </Body>
    </Html>
);

export default StripeWelcomeEmail;

const main = {
    backgroundColor: "#f6f9fc",
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
    backgroundColor: "#ffffff",
    margin: "0 auto",
    padding: "20px 0 48px",
    marginBottom: "64px",
};

const box = {
    padding: "0 48px",
};


const footerBorderTop = {
    borderTop: '1px solid rgb(238,238,238)',
    width: '100%',
  };


const anchor = {
    color: "#00b8e4",
};

const button = {
    backgroundColor: "#656ee8",
    borderRadius: "5px",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "block",
    width: "100%",
    padding: "10px",
};



const titleContent = {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#000000",
    textAlign: "center" as const,
    marginBottom: "20px",
};

const headingTable = {
    backgroundColor: "#1C2858",
    height: '50px',
    textAlign: "center" as const,
    fontWeight: "bold",
    borderRadius: "5px 5px 0 0",
    color: "#fff",

};

const cellTableColumn = {
    width: "50%",
    height: '50px',
    color: '#707070',
    padding: '0 10px',
    borderLeft: "1px solid #E2E4E9",
    borderBottom: "1px solid #E2E4E9",
};

const cellTableColumnBorderRight = {
    borderRight: "1px solid #E2E4E9",

};

const list = {
    color: "#707070",
    fontSize: "14px",
    textAlign: "left" as const,
    margin: "0",
    fontWeight: "100",
}

const headerBlue = {
  marginTop: '-1px',
};



const containerContact = {
  backgroundColor: '#f0fcff',
  width: '90%',
  borderRadius: '5px',
  overflow: 'hidden',
  paddingLeft: '20px',
};

const heading = {
  fontSize: '14px',
  lineHeight: '26px',
  fontWeight: '700',
  color: '#004dcf',
};

const paragraphContent = {
  padding: '0 40px',
};

const paragraphList = {
  paddingLeft: 40,
};

const paragraph = {
  fontSize: '14px',
  lineHeight: '25px',
  fontWeight: '300',
  color: '#7e7e7e',
};

const link = {
  ...paragraph,
  color: '#004dcf',
};

const hr = {
  borderColor: '#e8eaed',
  margin: '20px 0',
};

const footer = {
  maxWidth: '100%',
};


const h1 = {
  fontSize: '1.15rem',
  fontWeight: '500',
  textAlign: 'left' as const,
  color: '#3c4043',
  margin: '0',
};
const h1WithoutColor = {
    fontSize: '1.15rem',
    fontWeight: '500',
    margin: '0',
};