import {
    Html, Body, Head, Heading, Hr, Container, Preview, Section, Text,
} from "@react-email/components";
import * as React from "react";

interface EmailTemplateProps {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
}

export const EmailTemplate = ({ firstName, lastName, email, phone, message }: EmailTemplateProps) => (
    <Html>
        <Head />
        <Preview>New Cake Inquiry from {firstName}</Preview>
        <Body style={main}>
            <Container style={container}>
                <Section style={header}>
                    <Heading style={logoText}>🍰 ALI BAKES CAKES</Heading>
                </Section>
                <Section style={content}>
                    <Heading style={h1}>New Sweet Request!</Heading>
                    <Text style={text}>You've received a new inquiry from your website.</Text>
                    <Hr style={hr} />
                    
                    <Text style={label}>CUSTOMER</Text>
                    <Text style={value}>{firstName} {lastName}</Text>
                    
                    <Text style={label}>CONTACT INFO</Text>
                    <Text style={value}>{email} | {phone || 'No phone provided'}</Text>
                    
                    <Hr style={hr} />
                    
                    <Text style={label}>MESSAGE / ORDER DETAILS</Text>
                    <Section style={messageBox}>
                        <Text style={messageText}>{message}</Text>
                    </Section>
                    
                    <Text style={footer}>Sent via Ali Bakes Cakes Web Portal</Text>
                </Section>
            </Container>
        </Body>
    </Html>
);

// Styles
const main = { backgroundColor: "#f9f9f9", fontFamily: "sans-serif" };
const container = { margin: "40px auto", width: "560px", backgroundColor: "#fff", borderRadius: "10px", overflow: "hidden" };
const header = { backgroundColor: "#C45E5E", padding: "20px", textAlign: "center" as const };
const logoText = { color: "#fff", margin: "0", fontSize: "24px" };
const content = { padding: "40px" };
const h1 = { color: "#333", fontSize: "22px", fontWeight: "bold" };
const text = { color: "#555", fontSize: "16px" };
const label = { fontSize: "12px", color: "#C45E5E", fontWeight: "bold" as const, margin: "20px 0 5px 0" };
const value = { fontSize: "16px", color: "#333", margin: "0" };
const hr = { borderColor: "#eee", margin: "20px 0" };
const messageBox = { backgroundColor: "#f4f4f4", padding: "15px", borderRadius: "8px", marginTop: "10px" };
const messageText = { color: "#333", fontStyle: "italic" };
const footer = { fontSize: "12px", color: "#999", textAlign: "center" as const, marginTop: "40px" };

