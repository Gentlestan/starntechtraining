import Link from "next/link";

export default function FireAlarmTraining() {
    return (
        <div className="container mx-auto text-center md:text-left px-2 md:ml-16 xl:ml-48">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold mt-4 text-red-500">COURSE TITLE</h1>
                <h2 className="text-2xl mt-4">Conventional Fire Alarm Installation Training</h2>
                <h1 className="text-2xl font-bold mt-4">COURSE CODE</h1>
                <h2 className="text-2xl mt-4">CFAT-101</h2>
                <h1 className="text-2xl font-bold mt-4">Course Modules:</h1>
                <h1 className="text-2xl font-bold mt-4">Introduction to Fire Alarm Systems</h1>
                <ul className="list-disc list-inside  text-start xl:text-2xl py-2 ml-0 md:ml-0 xl:ml-0">
                    <li className="py-2">Overview of fire alarm systems</li>
                    <li className="py-2">mportance and benefits of fire alarm systems</li>
                    <li className="py-2">Global trends and market analysis in fire alarm technology</li>
                </ul>
                <h1 className="text-2xl font-bold mt-4">Fundamentals of Fire Detection</h1>
                <ul className="list-disc list-inside text-start xl:text-2xl py-2 ml-0 md:ml-0 xl:ml-0">
                    <li className="py-2">Basic principles of fire detection</li>
                    <li className="py-2">Types of fire alarm sensors: smoke detectors, heat detectors, flame detectors</li>
                    <li className="py-2">Understanding fire alarm zones and circuitry</li>
                </ul>
                <h1 className="text-2xl font-bold mt-4">Fire Alarm System Components</h1>
                <ul className="list-disc list-inside text-start xl:text-2xl py-2 ml-0 md:ml-0 xl:ml-0">
                    <li className="py-2">Control panels: functions and types</li>
                    <li className="py-2">Notification devices: horns, strobes, bells</li>
                    <li className="py-2">Initiating devices: manual pull stations, detectors</li>
                </ul>
                <h1 className="text-2xl font-bold mt-4">System Design and Planning</h1>
                <ul className="list-disc list-inside text-start xl:text-2xl py-2 ml-0 md:ml-0 xl:ml-0">
                    <li className="py-2">Site assessment and fire safety needs analysis</li>
                    <li className="py-2">Design considerations for different environments (residential, commercial, industrial)</li>
                    <li className="py-2">Planning fire alarm device placement for optimal coverage</li>
                </ul>
                <h1 className="text-2xl font-bold mt-4">Installation Techniques</h1>
                <ul className="list-disc list-inside text-start xl:text-2xl py-2 ml-0 md:ml-0 xl:ml-0">
                    <li className="py-2">Mounting options for fire alarm devices</li>
                    <li className="py-2">Wiring and connection techniques for control panels, notification devices, and initiating devices</li>
                    <li className="py-2">Testing and commissioning procedures</li>
                </ul>
                <h1 className="text-2xl font-bold mt-4">Programming and Configuration</h1>
                <ul className="list-disc list-inside text-start xl:text-2xl py-2 ml-0 md:ml-0 xl:ml-0">
                    <li className="py-2">Programming control panels for specific site requirements</li>
                    <li className="py-2">Configuring alarm notification sequences</li>
                    <li className="py-2">Setting up zone configurations and alarm thresholds</li>
                </ul>
                <h1 className="text-2xl font-bold mt-4">Maintenance and Testing</h1>
                <ul className="list-disc list-inside text-start xl:text-2xl py-2 ml-0 md:ml-0 xl:ml-0">
                    <li className="py-2">Routine maintenance tasks for fire alarm systems</li>
                    <li className="py-2">Conducting functional tests and inspections</li>
                    <li className="py-2">Troubleshooting common issues and faults</li>
                </ul>
                <h1 className="text-2xl font-bold mt-4">Legal and Regulatory Compliance</h1>
                <ul className="list-disc list-inside text-start xl:text-2xl py-2 ml-0 md:ml-0 xl:ml-0">
                    <li className="py-2">Compliance with fire safety codes and regulations</li>
                    <li className="py-2">Understanding NFPA (National Fire Protection Association) standards</li>
                    <li className="py-2">Documentation and reporting requirements</li>
                </ul>
                <h1 className="text-2xl font-bold mt-4">COURSE DURATION:</h1>
                <ul className="list-disc list-inside text-start xl:text-2xl py-2 ml-0 md:ml-0 xl:ml-0">
                    <li className="py-2">Total Hours: 21</li>
                    <li className="py-2">Sessions: 7 (Each session: 3 hours)</li>
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
