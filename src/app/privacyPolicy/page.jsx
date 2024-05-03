import React from 'react';

const PrivacyPolicy = ({ lastUpdated }) => {
    return (
        <div className="w-full flex justify-center flex-col lg:p-[10rem] p-[3rem]">
            <h1 className="lg:text-5xl text-xl font-bold mb-4 text-center">Privacy Policy</h1>
            <p className="mb-4">
                Your privacy is important to us. It is our policy to respect your privacy regarding any information we may collect from you across our website.
            </p>
            <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
            <p className="mb-4">
                We only collect information about you if we have a reason to do so – for example, to provide our services, to communicate with you, or to make our services better.
            </p>
            <h2 className="text-xl font-semibold mb-2">How We Use Information</h2>
            <p className="mb-4">
                We use the information we collect in various ways, including to:
                <ul className="list-disc pl-4">
                    <li>Provide, operate, and maintain our website</li>
                    <li>Improve, personalize, and expand our website</li>
                    <li>Understand and analyze how you use our website</li>
                    <li>Communicate with you, either directly or through one of our partners</li>
                    <li>Send you emails</li>
                    <li>Find and prevent fraud</li>
                </ul>
            </p>
            <h2 className="text-xl font-semibold mb-2">Third-Party Services</h2>
            <p className="mb-4">
                We may employ third-party companies and individuals on our website – for example, analytics providers and content partners. These third parties have access to your personal information only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>
            <h2 className="text-xl font-semibold mb-2">Changes to This Privacy Policy</h2>
            <p className="mb-4">
                We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>
            <p className="mb-4">
                This Privacy Policy was last updated on <strong>03-05-2024</strong>.
            </p>
            <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
            <p>
                If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.
            </p>
            <p className="mb-4">
                This Privacy Policy was last updated on <strong>{lastUpdated}</strong>.
            </p>
        </div>
    );
}


export default PrivacyPolicy;
