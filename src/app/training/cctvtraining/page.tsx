import Link from "next/link"
export default function CctvTraining() {
    return (
        <div className="container mx-auto text-center md:text-left px-2 md:ml-16 xl:ml-48">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold mt-4 text-red-500">COURSE TITLE</h1>
                <h2 className="text-2xl mt-4">Introduction to CCTV Installation</h2>
                <h1 className="text-2xl font-bold mt-4">COURSE CODE</h1>
                <h2 className="text-2xl mt-4">CCTV-101</h2>
                <h1 className="text-2xl font-bold mt-4">Course Modules:</h1>
                <h1 className="text-2xl font-bold mt-4">Introduction to CCTV Systems:</h1>
                <ul className="list-disc list-inside text-start xl:text-2xl py-2 ml-0 md:ml-0 xl:ml-0">
                    <li className="py-2">Overview of closed-circuit television (CCTV)</li>
                    <li className="py-2">Importance and benefits of CCTV systems</li>
                    <li className="py-2">Global trends and market analysis in surveillance technology</li>
                </ul>
                <h1 className="text-2xl font-bold mt-4">Fundamentals of Video Surveillance:</h1>
                <ul className="list-disc list-inside text-start xl:text-2xl py-2 ml-0 md:ml-0 xl:ml-0">
                    <li className="py-2">Basic principles of video surveillance</li>
                    <li className="py-2">Types of CCTV cameras and their characteristics</li>
                    <li className="py-2">Understanding CCTV resolutions and image quality</li>
                </ul>
                <h1 className="text-2xl font-bold mt-4">CCTV System Components</h1>
                <ul className="list-disc list-inside text-start xl:text-2xl py-2 ml-0 md:ml-0 xl:ml-0">
                    <li className="py-2">Types of CCTV cameras: Analog, IP, and hybrid</li>
                    <li className="py-2">CCTV lenses and field of view considerations</li>
                    <li className="py-2">DVR (Digital Video Recorder) and NVR (Network Video Recorder) functionalities</li>
                </ul>
                <h1 className="text-2xl font-bold mt-4">System Design and Planning</h1>
                <ul className="list-disc list-inside text-start xl:text-2xl py-2 ml-0 md:ml-0 xl:ml-0">
                    <li className="py-2">Site assessment and surveillance needs analysis</li>
                    <li className="py-2">Design considerations for different environments (indoor, outdoor, residential,commercial)</li>
                    <li className="py-2">Planning CCTV camera placement for optimal coverage</li>
                </ul>
                <h1 className="text-2xl font-bold mt-4">Installation Techniques</h1>
                <ul className="list-disc list-inside text-start xl:text-2xl py-2 ml-0 md:ml-0 xl:ml-0">
                    <li className="py-2">Mounting options for CCTV cameras: wall-mount, ceiling-mount, pole-mount</li>
                    <li className="py-2">Cable management and routing for CCTV systems</li>
                    <li className="py-2">Wiring and connection techniques for cameras, DVRs, and monitors</li>
                </ul>
                <h1 className="text-2xl font-bold mt-4">Network Setup and Configuration</h1>
                <ul className="list-disc list-inside text-start xl:text-2xl py-2 ml-0 md:ml-0 xl:ml-0">
                    <li className="py-2">Configuring IP cameras and network settings</li>
                    <li className="py-2">Setting up remote viewing and mobile access</li>
                    <li className="py-2">Network security measures for CCTV systems</li>
                </ul>
                <h1 className="text-2xl font-bold mt-4">Recording and Storage Management</h1>
                <ul className="list-disc list-inside text-start xl:text-2xl py-2 ml-0 md:ml-0 xl:ml-0">
                    <li className="py-2">Understanding video compression formats (H.264, H.265)</li>
                    <li className="py-2">Storage options: hard disk drives (HDD), solid-state drives (SSD), cloud storage</li>
                    <li className="py-2">Configuring recording schedules and storage allocation</li>
                </ul>
                <h1 className="text-2xl font-bold mt-4">Maintenance and Troubleshooting</h1>
                <ul className="list-disc list-inside text-start xl:text-2xl py-2 ml-0 md:ml-0 xl:ml-0">
                    <li className="py-2">Routine maintenance tasks for CCTV systems</li>
                    <li className="py-2">Troubleshooting common issues: camera malfunctions, recording failures</li>
                    <li className="py-2">Diagnosing network and connectivity problems</li>
                </ul>
                <h1 className="text-2xl font-bold mt-4">Legal and Ethical Considerations</h1>
                <ul className="list-disc list-inside text-start xl:text-2xl py-2 ml-0 md:ml-0 xl:ml-0">
                    <li className="py-2">Compliance with privacy laws and regulations</li>
                    <li className="py-2">Ethical use of CCTV surveillance</li>
                    <li className="py-2">Handling and storing video evidence</li>
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
