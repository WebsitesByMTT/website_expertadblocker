import Navbar from "../components/Navbar"

const AboutUs = () => {
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
            textColor: "black",
            buttonText: "white"
        },
        Heading: "About Us"
    }
    return (
        <div className="bg-[#F1F1F1]">
            <Navbar data={data.navbar} />
        </div>
    )
}

export default AboutUs