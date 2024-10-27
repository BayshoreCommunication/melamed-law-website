import React from "react";
import SectionLayout from "../shared/SectionLayout";
import Link from "next/link";

// const css = `
//   h2{
//     padding-top: 10px;
//     font-size: 25px;
//     padding-bottom: 10px;
//   }
//   h5{
//     padding-top: 15px;
//     font-size: 22px;
//     padding-bottom: 15px;
//     font-weight: bold;
//   }
//   p{
//     padding-top: 6px;
//     padding-bottom: 6px;
//   }
//   ul{
//     list-style-type: disc;
//     margin-left: 30px;

//   }
//   li{
//     margin-bottom: 5px;
//   }
//   br{
//     padding-top: 6px;
//     padding-bottom: 6px;
// }

// `;

const PrivacyPolicy = () => {
  return (
    <>
      {/* <style>{css}</style> */}
      <SectionLayout bg="mt-10 lg:mt-22">
        <div className="text-center md:text-left text-md md:text-xl">
          <div className="my-2">
            <h2
              className={`text-stone-950 !font-semibold text-3xl md:text-5xl mt-10 lg:mt-20 mb-10  text-center  uppercase`}
            >
              Privacy Policy
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-lg text-stone-950 text-center md:text-left">
              Your privacy is important to us. It is Carter Injury Law, PA's
              policy to respect your privacy and comply with any applicable law
              and regulation regarding any personal information we may collect
              about you, including across our website,{" "}
              <Link
                className="text-primary"
                href="https://www.carterinjurylaw.com"
              >
                https://www.carterinjurylaw.com
              </Link>{" "}
              , and other sites we own and operate. Personal information is any
              information about you which can be used to identify you. This
              includes information about you as a person (such as name, address,
              and date of birth), your devices, payment details, and even
              information about how you use a website or online service. In the
              event our site contains links to third-party sites and services,
              please be aware that those sites and services have their own
              privacy policies. After following a link to any third-party
              content, you should read their posted privacy policy information
              about how they collect and use personal information. This Privacy
              Policy does not apply to any of your activities after you leave
              our site. This policy is effective as of 22 June 2022.
            </p>
            <p className="text-lg text-stone-950 text-center md:text-left font-semibold">
              Last updated: 9 December 2022
            </p>
            <p className="text-lg text-stone-950 text-center md:text-left">
              Information We Collect: Information we collect falls into one of
              two categories: “voluntarily provided” information and
              “automatically collected” information. “Voluntarily provided”
              information refers to any information you knowingly and actively
              provide us when using or participating in any of our services and
              promotions. “Automatically collected” information refers to any
              information automatically sent by your devices in the course of
              accessing our products and services.
            </p>
            <p className="text-lg text-stone-950 text-center md:text-left font-semibold">
              Log Data
            </p>
            <p className="text-lg text-stone-950 text-center md:text-left">
              When you visit our website, our servers may automatically log the
              standard data provided by your web browser. It may include your
              device’s Internet Protocol (IP) address, your browser type and
              version, the pages you visit, the time and date of your visit, the
              time spent on each page, and other details about your visit.
            </p>
            <p className="text-lg text-stone-950 text-center md:text-left">
              Additionally, if you encounter certain errors while using the
              site, we may automatically collect data about the error and the
              circumstances surrounding its occurrence. This data may include
              technical details about your device, what you were trying to do
              when the error happened, and other technical information relating
              to the problem. You may or may not receive notice of such errors,
              even in the moment they occur, that they have occurred, or what
              the nature of the error is. Please be aware that while this
              information may not be personally identifying by itself, it may be
              possible to combine it with other data to personally identify
              individual persons.
            </p>
            <p className="text-lg text-stone-950 text-center md:text-left">
              Collection and Use of Information: We may collect personal
              information from you when you do any of the following on our
              website: Use a mobile device or web browser to access our content,
              Contact us via email, social media, or on any similar
              technologies, When you mention us on social media, We may combine
              voluntarily provided and automatically collected personal
              information with general information or research data we receive
              from other trusted sources. For example, our marketing and market
              research activities may uncover data and insights, which we may
              combine with information about how visitors use our site to
              improve our site and your experience on it.
            </p>
            <p className="text-lg text-stone-950 text-center md:text-left">
              Security of Your Personal Information: When we collect and process
              personal information, and while we retain this information, we
              will protect it within commercially acceptable means to prevent
              loss and theft, as well as unauthorized access, disclosure,
              copying, use, or modification. Although we will do our best to
              protect the personal information you provide to us, we advise that
              no method of electronic transmission or storage is 100% secure,
              and no one can guarantee absolute data security. You are
              responsible for selecting any password and its overall security
              strength, ensuring the security of your own information within the
              bounds of our services. For example, ensuring you do not make your
              personal information publicly available via our platform.
            </p>
            <p className="text-lg text-stone-950 text-center md:text-left">
              How Long We Keep Your Personal Information: We keep your personal
              information only for as long as we need to. This time period may
              depend on what we are using your information for, in accordance
              with this privacy policy. For example, if you have provided us
              with personal information such as an email address when contacting
              us about a specific enquiry, we may retain this information for
              the duration of your enquiry remaining open as well as for our own
              records so we may effectively address similar enquiries in future.
              If your personal information is no longer required for this
              purpose, we will delete it or make it anonymous by removing all
              details that identify you. However, if necessary, we may retain
              your personal information for our compliance with a legal,
              accounting, or reporting obligation or for archiving purposes in
              the public interest, scientific, or historical research purposes
              or statistical purposes.
            </p>
            <p className="text-lg text-stone-950 text-center md:text-left">
              Children’s Privacy: We do not aim any of our products or services
              directly at children under the age of 13, and we do not knowingly
              collect personal information about children under 13. Your Rights
              and Controlling Your Personal Information Your choice: By
              providing personal information to us, you understand we will
              collect, hold, use, and disclose your personal information in
              accordance with this privacy policy. You do not have to provide
              personal information to us, however, if you do not, it may affect
              your use of our website or the products and/or services offered on
              or through it. Information from third parties: If we receive
              personal information about you from a third party, we will protect
              it as set out in this privacy policy. If you are a third party
              providing personal information about somebody else, you represent
              and warrant that you have such person’s consent to provide the
              personal information to us. Marketing permission: If you have
              previously agreed to us using your personal information for direct
              marketing purposes, you may change your mind at any time by
              contacting us using the details below. Access: You may request
              details of the personal information that we hold about you.
              Correction: If you believe that any information we hold about you
              is inaccurate, out of date, incomplete, irrelevant, or misleading,
              please contact us using the details provided in this privacy
              policy. We will take reasonable steps to correct any information
              found to be inaccurate, incomplete, misleading, or out of date.
              Non-discrimination: We will not discriminate against you for
              exercising any of your rights over your personal information.
              Unless your personal information is required to provide you with a
              particular service or offer (for example providing user support),
              we will not deny you goods or services and/or charge you different
              prices or rates for goods or services, including through granting
              discounts or other benefits, or imposing penalties, or provide you
              with a different level or quality of goods or services.
              Notification of data breaches: We will comply with laws applicable
              to us in respect of any data breach. Complaints: If you believe
              that we have breached a relevant data protection law and wish to
              make a complaint, please contact us using the details below and
              provide us with full details of the alleged breach. We will
              promptly investigate your complaint and respond to you, in
              writing, setting out the outcome of our investigation and the
              steps we will take to deal with your complaint. You also have the
              right to contact a regulatory body or data protection authority in
              relation to your complaint. Unsubscribe: To unsubscribe from our
              email database or opt-out of communications (including marketing
              communications), please contact us using the details provided in
              this privacy policy, or opt-out using the opt-out facilities
              provided in the communication. We may need to request specific
              information from you to help us confirm your identity.
            </p>
            <p className="text-lg text-stone-950 text-center md:text-left">
              Use of Cookies: We use “cookies” to collect information about you
              and your activity across our site. A cookie is a small piece of
              data that our website stores on your computer, and accesses each
              time you visit, so we can understand how you use our site. This
              helps us serve you content based on preferences you have
              specified. Please refer to our Cookie Policy for more information.
            </p>
            <p className="text-lg text-stone-950 text-center md:text-left">
              Business Transfers: If we or our assets are acquired, or in the
              unlikely event that we go out of business or enter bankruptcy, we
              would include data, including your personal information, among the
              assets transferred to any parties who acquire us. You acknowledge
              that such transfers may occur, and that any parties who acquire us
              may, to the extent permitted by applicable law, continue to use
              your personal information according to this policy, which they
              will be required to assume as it is the basis for any ownership or
              use rights we have over such information.
            </p>
            <p className="text-lg text-stone-950 text-center md:text-left">
              Limits of Our Policy: Our website may link to external sites that
              are not operated by us. Please be aware that we have no control
              over the content and policies of those sites, and cannot accept
              responsibility or liability for their respective privacy
              practices.
            </p>
            <p className="text-lg text-stone-950 text-center md:text-left">
              Changes to This Policy: At our discretion, we may change our
              privacy policy to reflect updates to our business processes,
              current acceptable practices, or legislative or regulatory
              changes. If we decide to change this privacy policy, we will post
              the changes here at the same link by which you are accessing this
              privacy policy. If required by law, we will get your permission or
              give you the opportunity to opt in to or opt out of, as
              applicable, any new uses of your personal information.
            </p>
            <p className="text-lg text-stone-950 text-center md:text-left">
              Contact Us: For any questions or concerns regarding your privacy,
              you may contact us via the contact form on this website.
            </p>
          </div>
        </div>
      </SectionLayout>
    </>
  );
};

export default PrivacyPolicy;
