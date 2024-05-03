import React from 'react';

const TermsAndConditions = () => {
    return (
        <div className="w-full flex justify-center flex-col lg:p-[10rem] p-[3rem]">
            <h1 className="text-2xl font-bold mb-4">Terms and Conditions</h1>
            <p className="mb-4">
                By accessing this website, you agree to these terms and conditions. Do not continue to use this website if you do not agree with all of the terms and conditions stated on this page.
            </p>
            <h2 className="text-xl font-semibold mb-2">Intellectual Property Rights</h2>
            <p className="mb-4">
                Unless otherwise stated, we and/or our licensors own the intellectual property rights for all material on this website.
            </p>
            <h2 className="text-xl font-semibold mb-2">Restrictions</h2>
            <p className="mb-4">
                You are specifically restricted from all of the following:
                <ul className="list-disc pl-4">
                    <li>publishing any website material in any other media;</li>
                    <li>selling, sublicensing and/or otherwise commercializing any website material;</li>
                    <li>publicly performing and/or showing any website material;</li>
                    <li>using this website in any way that is or may be damaging to this website;</li>
                    <li>using this website in any way that impacts user access to this website;</li>
                    <li>using this website contrary to applicable laws and regulations, or in any way may cause harm to the website, or to any person or business entity;</li>
                    <li>engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this website;</li>
                    <li>using this website to engage in any advertising or marketing.</li>
                </ul>
            </p>
            <h2 className="text-xl font-semibold mb-2">Disclaimer</h2>
            <p className="mb-4">
                To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website.
            </p>
            <h2 className="text-xl font-semibold mb-2">Variation of Terms</h2>
            <p className="mb-4">
                We may revise these terms and conditions from time to time. Revised terms and conditions will apply to the use of this website from the date of publication of the revised terms and conditions on this website.
            </p>
            <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
            <p>
                If you have any questions about these terms and conditions, please contact us.
            </p>
        </div>
    );
}

export default TermsAndConditions;
