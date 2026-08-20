import { Layout } from "@/components/Layout";
import { SEO, breadcrumbSchema } from "@/components/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { company } from "@/data/site";

const Privacy = () => (
  <Layout>
    <SEO
      title="Privacy Policy | Foothills Radon Testing and Mitigation"
      description="Privacy policy for Foothills Radon Testing and Mitigation. Learn how we collect, use, and protect your personal information."
      path="/privacy"
      schema={breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Privacy Policy", path: "/privacy" },
      ])}
    />
    <div className="container-pro py-12">
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Privacy Policy", path: "/privacy" }]} />
      <h1 className="mt-4 font-heading text-3xl font-bold text-primary sm:text-4xl">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

      <div className="prose prose-slate mt-8 max-w-3xl space-y-6 text-muted-foreground">
        <section>
          <h2 className="font-heading text-xl font-bold text-primary">1. Introduction</h2>
          <p>{company.name} ("we," "us," or "our") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services. By using our website or services, you consent to the practices described in this policy.</p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-primary">2. Information We Collect</h2>
          <p className="mb-2 font-medium text-foreground">Information you provide:</p>
          <p>When you request a free estimate, contact us, or fill out a form, we may collect your name, phone number, email address, ZIP code, service needed, foundation type, and any notes you provide about your property or situation.</p>
          <p className="mb-2 font-medium text-foreground">Information collected automatically:</p>
          <p>When you visit our website, we may automatically collect certain technical information, including your IP address, browser type, device type, pages visited, and the date and time of your visit. This information is used to analyze website traffic and improve user experience.</p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-primary">3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="ml-6 list-disc space-y-1">
            <li>Respond to your inquiries and provide free estimates</li>
            <li>Schedule and perform radon testing, mitigation, and related services</li>
            <li>Communicate with you about appointments, service updates, and follow-ups</li>
            <li>Send service-related notifications and important updates</li>
            <li>Improve our website, services, and customer experience</li>
            <li>Comply with legal obligations and protect our rights</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-primary">4. Information Sharing</h2>
          <p>We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
          <ul className="ml-6 list-disc space-y-1">
            <li>With service providers who assist us in operating our business (e.g., scheduling, billing, or communication tools), under contractual obligations to protect your information</li>
            <li>With real estate professionals or transaction parties when you request services related to a real estate transaction</li>
            <li>When required by law, court order, or governmental authority</li>
            <li>In connection with a merger, acquisition, or sale of our business assets</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-primary">5. Data Security</h2>
          <p>We implement appropriate technical, administrative, and physical safeguards to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-primary">6. Cookies and Tracking Technologies</h2>
          <p>Our website may use cookies and similar tracking technologies to enhance your browsing experience, analyze traffic, and remember your preferences. You can configure your browser to refuse cookies or alert you when cookies are being sent. However, some parts of our website may not function properly without cookies.</p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-primary">7. Third-Party Links and Widgets</h2>
          <p>Our website may contain links to third-party websites and may include third-party widgets (such as chat or scheduling tools). We are not responsible for the privacy practices or content of these third parties. We encourage you to review the privacy policies of any third-party sites you visit.</p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-primary">8. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="ml-6 list-disc space-y-1">
            <li>Request access to the personal information we hold about you</li>
            <li>Request correction of inaccurate or incomplete information</li>
            <li>Request deletion of your personal information, subject to legal retention requirements</li>
            <li>Opt out of receiving marketing or promotional communications</li>
          </ul>
          <p>To exercise any of these rights, please contact us using the information provided below.</p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-primary">9. Children's Privacy</h2>
          <p>Our website and services are not directed to children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us so we can take appropriate action.</p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-primary">10. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will post the updated policy on this page and revise the "Last updated" date. We encourage you to review this page periodically.</p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-bold text-primary">11. Contact Information</h2>
          <p>If you have questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
          <p className="font-medium text-foreground">
            {company.name}<br />
            {company.baseAddress}<br />
            {company.phone}
          </p>
        </section>
      </div>
    </div>
  </Layout>
);

export default Privacy;
