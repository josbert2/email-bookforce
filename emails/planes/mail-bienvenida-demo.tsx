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
            <Container style={container}>
                <Section style={box}>
                    <Text style={titleContent}>
                        ASUNTO: ¡Bienvenido a Bookforce! Tu demo de 14 días está lista para empezar 🚀
                    </Text>
                    <Text style={paragraph}>
                        ¡Hola [Nombre del Cliente]!
                    </Text>
                    <br />
                    <Text style={paragraph}>
                        Nos alegra darte la bienvenida a <text style={{ fontWeight: 'bold' }}>Bookforce.io.</text> Tu demo de 14 días ya está activa y lista para que explores todas las herramientas que hemos desarrollado para ti.
                    </Text>

                    <br />
                    <Text style={paragraph}>
                        En Bookforce.io, nos enfocamos en ofrecerte soluciones poderosas en cuatro grandes áreas para impulsar tu negocio:
                    </Text>
                    <br />
                    <Text style={paragraph}>
                        <text style={{fontWeight: 'bold'}}>
                            🌟 1. Ventas
                        </text>
                        <ul style={list}>
                            <li>Facturación electrónica</li>
                            <li>Multi Razón Social</li>
                            <li>Consulta de tickets</li>
                        </ul>
                    </Text>
                    <Text style={paragraph}>
                        <text style={{fontWeight: 'bold'}}>
                        🏦 2. Bancarias
                        </text>
                        <ul style={list}>
                            <li>Integración bancaria</li>
                            <li>Recaudación de terceros</li>
                        </ul>
                    </Text>
                    <Text style={paragraph}>
                        <text style={{fontWeight: 'bold'}}>
                            ⚙️ 3. Operacionales
                        </text>
                        <ul style={list}>
                            <li>Control de accesos</li>
                            <li>Locales</li>
                        </ul>
                    </Text>
                    <Text style={paragraph}>
                        <text style={{fontWeight: 'bold'}}>
                            📈 4. Marketing
                        </text>
                        <ul style={list}>
                            <li>Mail difusión</li>
                            <li>Cortesías</li>
                        </ul>
                    </Text>
                    <Text style={paragraph}>
                    Aprovecha al máximo tu demo explorando estas funcionalidades y descubre cómo Bookforce puede ayudar
                        a tu negocio a crecer. Si requieres ayuda o tienes alguna consulta, no dudes en contactarnos a
                        venta@bookforce.io. ¡Estamos aquí para ayudarte!
                    </Text>
                    <br/>
                </Section>
            </Container>
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

const hr = {
    borderColor: "#e6ebf1",
    margin: "20px 0",
};

const paragraph = {
    color: "#707070",
    fontSize: "14px",
    textAlign: "left" as const,
    margin: "0",
    fontWeight: "100",
};

const anchor = {
    color: "#556cd6",
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

const footer = {
    color: "#8898aa",
    fontSize: "12px",
    lineHeight: "16px",
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