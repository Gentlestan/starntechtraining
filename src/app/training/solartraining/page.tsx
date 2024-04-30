import Link from "next/link";

export default function SolarTraining() {
    return (
        <div className="container mx-auto text-center md:text-left px-2 md:ml-16 xl:ml-48">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold mt-4">COURSE TITLE</h1>
                <h2 className="text-2xl mt-4">Renewable Energy/Solar System Installation Training</h2>
                <h1 className="text-3xl font-bold mt-4">COURSE CODE</h1>
                <h2 className="text-2xl mt-4">RESI-101</h2>
                <h1 className="text-3xl font-bold mt-4">Course Modules:</h1>
                <h1 className="text-3xl font-bold mt-4">Introduction to Renewable Energy:</h1>
                <ul className="list-disc list-inside text-2xl text-start xl:text-2xl py-2 ml-0 md:ml-0 xl:ml-0">
                    <li className="py-2">Overview of renewable energy sources</li>
                    <li className="py-2">Importance and benefits of renewable energy</li>
                    <li className="py-2">Global trends and market analysis</li>
                </ul>
                <h1 className="text-3xl font-bold mt-4">Fundamentals of Solar Energy:</h1>
                <ul className="list-disc list-inside text-2xl text-start xl:text-2xl py-2 ml-0 md:ml-0 xl:ml-0">
                    <li className="py-2">Solar radiation and its measurement</li>
                    <li className="py-2">Photovoltaic (PV) technology basics</li>
                    <li className="py-2">Types of solar panels and their characteristics</li>
                </ul>
                <h1 className="text-3xl font-bold mt-4">Solar System Components:</h1>
                <ul className="list-disc list-inside text-2xl text-start xl:text-2xl py-2 ml-0 md:ml-0 xl:ml-0">
                    <li className="py-2">Solar panels: types, connections, efficiency, and selection criteria</li>
                    <li className="py-2">Charge controllers: functions and types</li>
                    <li className="py-2">Batteries: types, configurations, capacity calculation, and maintenance</li>
                </ul>
                <h1 className="text-3xl font-bold mt-4">System Design and Sizing:</h1>
                <ul className="list-disc list-inside text-2xl text-start xl:text-2xl py-2 ml-0 md:ml-0 xl:ml-0">
                    <li className="py-2">Load assessment and energy audit</li>
                    <li className="py-2">Sizing PV systems based on energy needs</li>
                    <li className="py-2">Design considerations for different applications (residential, commercial, off-grid, grid-tied)</li>
                </ul>
                <h1 className="text-3xl font-bold mt-4">Installation Procedures:</h1>
                <ul className="list-disc list-inside text-2xl text-start xl:text-2xl py-2 ml-0 md:ml-0 xl:ml-0">
                    <li className="py-2">Site assessment and feasibility analysis</li>
                    <li className="py-2">Mounting systems: roof-mount, ground-mount, pole-mount</li>
                    <li className="py-2">Wiring and connection techniques</li>
                </ul>
                <h1 className="text-3xl font-bold mt-4">Solar Business Essentials:</h1>
                <ul className="list-disc list-inside text-2xl text-start xl:text-2xl py-2 ml-0 md:ml-0 xl:ml-0">
                    <li className="py-2">Sourcing for solar installation jobs</li>
                    <li className="py-2">Sourcing for quality products and suppliers</li>
                    <li className="py-2">Marketing and promoting solar installation services</li>
                    <li className="py-2">Building client relationships and providing excellent customer service</li>
                </ul>
                <h1 className="text-3xl font-bold mt-4">COURSE DURATION:</h1>
                <ul className="list-disc list-inside text-2xl text-start xl:text-2xl py-2 ml-0 md:ml-0 xl:ml-0">
                    <li className="py-2">Total Hours: 27</li>
                    <li className="py-2">Sessions: 9 (Each session: 3 hours)</li>
                    <li className="py-2">
                            <Link href="/training" legacyBehavior>
                                <a className="text-red-500">back to all training</a>
                            </Link>
                        </li>
                </ul>
            </div>
        </div>
    )
}
