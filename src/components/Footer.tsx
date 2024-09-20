export default function Footer() {
    return (
        <div className="bg-slate-950 text-white">
            <hr></hr>
            <footer
                className="flex flex-col lg:flex-row flex-wrap items-center p-6 footer gap-7 grow justify-between lg:px-32  "
                style={{ borderTop: "1px solid #ffffff20" }}
            >
                <div className="footer-section1 flex flex-col gap-2 items-center w-full lg:w-auto">
                    <h3 className="text-3xl font-semibold ">Logo</h3>
                    <h3 className="text-xl font-semibold">Contact Us</h3>
                    <p>Email: sdnv@gmail.com</p>
                    <p>Phone: 94538857389</p>
                    <p>Address: Sringeri</p>
                </div>
                <div className="flex gap-6 justify-center w-full lg:w-auto">
                    <div className="footer-section2">
                        <ul className="flex flex-col gap-2 text-sm list-none items-center">
                            <p className="font-bold">EXPLORE</p>
                            <li>
                                <a
                                    href="docs/templates/startup-saas"
                                    className="opacity-75 hover:opacity-100"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="docs/components"
                                    className="opacity-75 hover:opacity-100"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="docs/layouts"
                                    className="opacity-75 hover:opacity-100"
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="docs/layouts"
                                    className="opacity-75 hover:opacity-100"
                                >
                                    Team
                                </a>
                            </li>
                            <li>
                                <a
                                    href="docs/layouts"
                                    className="opacity-75 hover:opacity-100"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
            <p className="text-center p-4">©2024 SriSadguruTech</p>
        </div>
    )
}
