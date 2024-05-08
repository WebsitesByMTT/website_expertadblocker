import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

export const metadata = {
  title: " Eula & Terms of Service - Expert adblocker",
  description: "Eula & Terms of Service - Expert Adblocker is the free Adblocker Chrome extension that not only blocks unwanted ads or pop-ups",
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: "Eula & Terms of Service",
    description: "Eula & Terms of Service - Expert adblocker is the free Adblocker Chrome extension that not only blocks unwanted ads or pop-ups",
    type: 'website',
    url: 'https://expertadblocker.com/terms',
    images: "https://experadblocker.com/favicon.png",
  }
};

const Terms = () => {
  const data = {
    navbar: {
      navLinks: [
        {
          title: "blogs",
          link: "/blogs"
        },
        {
          title: "about us",
          link: "/about-us"
        },
        {
          title: "contact us",
          link: "/contact-us"
        }
      ],
      logoColor: "black",
      textColor: "text-black",
      buttonColor: "bg-black",
      buttonTextColor: "text-white",
      borderColor: "border-black",
      MobileNavbgColor: 'bg-white',
      mobileNavTextColor: 'text-black',
      mobilebuttonBgColor: 'bg-black',
      mobilebuttonTextColor: 'text-white'
    },
    heading: "Terms of service",
    intro: 'These Terms of Service and End User License Agreement (collectively, the "Agreement") are an agreement between Total Security Limited (incorporated in England under number 10161957) conducting business (or trading) as an Expert adblocker("Total Security Group", "we" or "our") and you ("you," "yourself," "User" or "Customer"). This Agreement establishes the terms and conditions for your use of all our Security Group goods and services (collectively, the "Services"). Within the limits of such Services, this Agreement applies to both (i) your service plan and (ii) any extra services you acquire to supplement your service plan, as indicated on our Services and Prices page. <br/> <br/> By accessing, using, registering for, or receiving any of the Services, if you agree to the terms and conditions listed below and those included in our Privacy Policy, which will be integrated by reference into this Agreement. Additionally,  terms will be applied to specific Services that you purchase. In such instances, the supplementary terms will apply in addition to this Agreement. <br/> <br/> You are not permitted to access or use the Services if you disagree with these Terms and Conditions and our Privacy Policies. <br/> <br/> Our Security Group has the right to alter this Agreement from time to time to reflect changes in or requirements of relevant law, as well as revisions or updates to the Services. Our security group shall notify you if such a change materially impacts your rights under this Agreement. Changes will not apply retroactively, and unless the change is necessary to be effective instantly for regulatory or security purposes, notice of the amended terms will be provided at least a reasonable time before the changes take effect. If you disagree to be bound by this Agreement, our privacy policies, or any later changes, you must discontinue using the Services.',
    heading2: "Governing law and Litigation for consumers in the United States",
    text2: [
      "For users that stay in the United States, the laws of the State of California govern this Agreement, including any disputes arising out of, in connection with, or about your use of the Services. The United Nations Convention on Contracts for the International Sale of Goods and any other comparable law, rule, or statute in effect in any other jurisdiction shall not apply to this Agreement.",
      "All fees and taxes will be processed on our behalf by the Security LLC, a Delaware limited liability organization. This will not affect the pricing indicated in Our Services & pricing, and you will incur no additional fees.",
      'Suppose an issue arising from or related to this Agreement is brought to arbitration. In that case, it will be resolved by arbitration by a single arbitrator selected by our Security Group by the commercial arbitration rules of the American Arbitration Association ("AAA"), as modified by this Agreement, and will be administered by the AAA. The corporate arbitration rules of the Commercial Dispute Resolution Procedures and the Supplementary Procedures for Consumer Related Disputes (collectively, "AAA Rules") will apply. The arbitration process before the AAA will only be conducted individually; claims submitted in a supposedly representative role on behalf of any person(s) or the basis of a class action will not be eligible for arbitration. The arbitrator will decide all matters, including the extent of this arbitration clause, although he or she will be subject to the provisions of this Agreement. The AAA site in California that our Security Group selects will host the arbitration. Our Security Group will cover as much of your filing, administrative duties, and arbitrator fees associated with the arbitration as the arbitrator reasonably determines necessary to keep the arbitration from being cost-prohibitive, provided you can show that the costs of arbitration will be prohibitive when compared to the costs of Litigation. However, the AAA Rules will regulate the payment of any arbitration fees if the arbitrator determines that the remedy sought or the substance of your claim is unlawful or not warranted, as judged by the requirements outlined in the Federal Rule of Civil Procedure 11(b). In such a scenario, you consent to pay our Security Group back for any money it has already paid out that would otherwise be your responsibility to pay under the AAA Rules. Our Security Group will pay back your reasonable legal fees and other costs associated with the arbitration if the arbitrator grants you relief equal to or greater than the amount of your demand.'
    ],
    heading3: "Jurisdiction & Governing Law for Users Outside of the US",
    text3: [
      "This Agreement and any non-contractual obligations arising from or related to it for users outside of the United States shall be governed by and construed by the laws of England and Wales, except any mandatory provisions of consumer law in the country in which you reside. This Agreement will not be governed by the United Nations Convention on Contracts for the International Sale of Goods or any comparable legislation, rule, or statute in force in any other jurisdiction.",
      "By using the Services, you and our Security Group irrevocably agree that any dispute or claim arising out of or related to this Agreement (including your use of the Services), its subject matter, or formation may be resolved by the non-exclusive jurisdiction of the courts of the nation in which you reside.",
      "If you are located in the European Union and the United Kingdom is a member state during the dispute or are involved in any transitional arrangements or new trade deals, you may also take the matter up with an alternative dispute resolution body in your home jurisdiction. This can be done using the EU Commission's Online Dispute Resolution (ODR) Platform."
    ],
    footer: {
      heading: "Popular Searches",
      wrapperColor: "bg-black",
      headingColor: "text-black",
      bgColor: "bg-[#F74C04]",
      textColor: "text-black",
      textlinkColor: "text-black",
      webLinksBg: "bg-white",
      socialLinksBg: "#F1C02A",
      linksBg: "bg-[#F1C02A]",
      keywords: "Expert adblocker chrome extension, Hulu adblock, adblock chrome, adblock plus chrome, adblocker google chrome, advertisement blocker chrome, blocker chrome, abp plus chrome, ad blocker in chrome, adb plus chrome, adblock browser chrome, Spotify adblocker, twitch adblock extension, ad free hulu, ad blocker free",
      links: [
        {
          name: "About us",
          link: "/about-us"
        },
        {
          name: "Contact us",
          link: "/contact-us"
        },
        {
          name: "Eula",
          link: "/terms"
        },
        {
          name: "Terms of services",
          link: "/terms"
        },
        {
          name: "Privacy Policy",
          link: "/privacy-policy"
        },
      ]
    }
  }
  return (
    <div className="bg-black">
      <div className=' bg-white rounded-bl-[4rem] rounded-br-[4rem] lg:rounded-bl-[6.5rem] lg:rounded-br-[6.5rem]' style={{ backgroundImage: 'url(./bg.png)' }}>
        <Navbar data={data.navbar} />
        <h1 className="text-[4.5rem] text-center lg:text-left font-[800] px-10 lg:px-28 py-5 text-[#F74C04]">{data.heading}</h1>
      </div>
      <div className="w-[90%] md:w-[80%] lg:w-[60%] m-auto bg-white my-20 rounded-[4.5rem] p-10 text-black md:text-xl text-3xl font-[500]">
        <p className="md:text-lg text-2xl font-[400] leading-6" dangerouslySetInnerHTML={{ __html: `<span>${data.intro}</span>` }}></p>
        <p className="font-[600] mt-4">{data.heading2}</p>
        {data.text2.map((item, index) => (
          <ul className="md:text-lg text-2xl font-[400] leading-6 list-disc" key={index}>
            <li className="m-2">{item}</li>
          </ul>
        ))}
        <p className="font-[600] mt-4">{data.heading3}</p>
        {data.text3.map((item, index) => (
          <ul className="md:text-lg text-2xl font-[400] leading-6 list-disc" key={index}>
            <li className="m-2">{item}</li>
          </ul>
        ))}
      </div>
      <Footer data={data.footer} />
    </div>
  )
}

export default Terms